"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserService from "@/app/api/services/UserService";
import AlertService from "@/app/api/services/AlertService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import userSchema from "@/validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import DeleteAlert from "../components/SweetAlert2";
import { fixedSizeString } from "@/helpers/helpers";

export default function UserClient({ initialData }) {
  const [data, setData] = useState(initialData);
  const [selectedOption, setSelectedOption] = useState(null);
  const modalRef = useRef(null);
  const modalEditRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  const options = [
    { value: 1, label: "Active" },
    { value: 0, label: "Passive" },
  ];

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    is_active: selectedOption?.value,
  });

  const _form = useForm({
    resolver: yupResolver(userSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = _form;

  const handleShow = () => {
    setUser(null);
    reset();
    setSelectedOption(null);
    setError(null);
    setShowModal(true);
  };
  const handleEditShow = (user) => {
    setUser(user);
    const filteredArray = options.filter(
      (option) => option.value == user?.is_active
    );
    if (filteredArray) setSelectedOption(filteredArray[0]);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const onSubmit = () => {
    const formData = new FormData();

    Object.keys(user).map((key) => {
      if (key !== "is_active") formData.append(key, user[key]);
    });

    formData.append("is_active", selectedOption?.value);

    UserService.create(formData)
      .then(({ data }) => {
        AlertService.success("User created successfully");
        fetchData();
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowModal(false);
    setUser(null);

    router.push("/admin/users");
  };

  const handleEditSubmit = () => {
    if (selectedOption) user["is_active"] = selectedOption.value;

    UserService.update(user["id"], user)
      .then(({ data }) => {
        console.log(data);
        AlertService.success(`User ${user.name} has been updated!`);
        fetchData();
        console.log("sister updated successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
          return;
        }
      });

    setShowEditModal(false);
    setUser(null);

    router.push("/admin/users");
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDelete = (id) => {
    UserService.remove(id)
      .then(({ res }) => {
        fetchData();
        console.log("removed sister successful");
        router.push("/admin/users");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    UserService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("user api error", err);
      });
  };

  // Close modal if clicked outside of the modal content
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    } else if (
      modalEditRef.current &&
      !modalEditRef.current.contains(event.target)
    ) {
      setShowEditModal(false);
    }
  };

  useEffect(() => {
    if (showModal || setShowEditModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, showEditModal]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Add New Modal */}
      {showModal && (
        <div className="container mt-5">
          <div
            className="modal fade show d-block"
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New User</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div>{error}</div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        maxLength={40}
                        name="name"
                        value={user?.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={user?.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors?.phone && (
                      <div className="text-danger">{errors.phone.message} </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor=" " className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="form-control"
                        id="email"
                        name="email"
                        value={user?.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors?.email && (
                      <div className="text-danger">{errors.email.message} </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor="is_active" className="form-label">
                        Status
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={user?.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="container mt-5">
          <div
            className="modal fade show d-block"
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document" ref={modalEditRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit New User</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleEditClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        maxLength={50}
                        name="name"
                        value={user.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        className="form-control"
                        {...register("phone")}
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleEditInputChange}
                      />
                      {errors?.phone && (
                        <div className="text-danger">
                          {errors.phone.message}{" "}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor=" " className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleEditInputChange}
                        required
                      />
                      {errors?.email && (
                        <div className="text-danger">
                          {errors.email.message}{" "}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="is_active" className="form-label">
                        Status
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleEditClose}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    type="button"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container table-rounded">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage Users</h1>
          </div>
          <div className="col-6 pt-4 text-end">
            <button onClick={handleShow} className="btn btn-secondary">
              <UserAddIcon width="30px" height="30px" />
            </button>
          </div>
        </div>
        <table id="myTable" className="table-bordered table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "table-primary" : "table-success"}
              >
                <td>{user.id}</td>
                <td>{fixedSizeString(user.name, 15)}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.is_active ? "Active" : "InActive"}</td>

                <td>
                  <button
                    onClick={() => handleEditShow(user)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <PencilIcon width="15px" height="15px" />
                  </button>
                  <DeleteAlert onDelete={handleDelete} id={user?.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
