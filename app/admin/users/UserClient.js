"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserService from "@/app/api/services/UserService";
import AlertService from "@/app/api/services/AlertService";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables styling

export default function UserClient({ initialData }) {
  const [data, setData] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    is_active: "",
  });

  const handleShow = () => setShowModal(true);
  const handleEditShow = (user) => {
    console.log(user);
    setUser(user);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    UserService.create(user)
      .then(({ data }) => {
        console.log(data);
        AlertService.success("User created successfully");
        fetchData();

        console.log("add user successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowModal(false);

    router.push("/admin/users");
  };

  const handleEditSubmit = () => {
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
        }
      });

    setShowEditModal(false);

    router.push("/admin/users");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle input changes
  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = () => {
    const payload = {
      email: email,
      password: password,
    };
    UserService.post("/login", payload)
      .then(({ data }) => {
        router.push("/admin");
        console.log("login successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const handleDelete = (id) => {
    UserService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success("User Deleted successfully");
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

  useEffect(() => {
    fetchData();
    $(document).ready(function () {
      $("#myTable").DataTable();
    });
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
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Sister</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor=" " className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="is_active"
                        className="form-control"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="is_active" className="form-label">
                        IsActive
                      </label>
                      <input
                        type="is_active"
                        className="form-control"
                        id="is_active"
                        name="is_active"
                        value={user.is_active}
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
                    onClick={handleSubmit}
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
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Sister</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleEditClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
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
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleEditInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor=" " className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="is_active"
                        className="form-control"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="is_active" className="form-label">
                        IsActive
                      </label>
                      <input
                        type="is_active"
                        className="form-control"
                        id="is_active"
                        name="is_active"
                        value={user.is_active}
                        onChange={handleEditInputChange}
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

      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage Users</h1>
          </div>
          <div className="col-6 pt-4 text-end">
            <button onClick={handleShow} className="btn-secondary">
              Add New
            </button>
          </div>
        </div>
        <table id="myTable" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>IsActive</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td></td>
                <td>{user.is_active}</td>

                <td>
                  <button
                    onClick={() => handleEditShow(user)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
