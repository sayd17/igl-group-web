"use client";
import React from "react";
import CoverService from "@/app/api/services/CoverService";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import Select from "react-select";
import axiosApi from "@/app/api/axios-common";
import DeleteAlert from "../components/SweetAlert2";
import { capitalizeWords } from "@/helpers/helpers";

export default function CoverClient({ initialData }) {
  const [data, setData] = useState(initialData);
  const modalRef = useRef(null);
  const modalEditRef = useRef(null);
  const [options, setOptions] = useState([
    {
      value: "about_us",
      label: "About Us",
    },
    {
      value: "sisters_concern",
      label: "Sisters Concern",
    },
    {
      value: "team",
      label: "Team",
    },
    {
      value: "gallery",
      label: "Gallery",
    },
    {
      value: "contact_us",
      label: "Contact Us",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    page_name: "",
  });

  const handleShow = () => {
    setUser(null);
    setError(null);
    setShowModal(true);
  };

  const handleEditShow = (user) => {
    setUser(user);
    setError(null);
    setFile(null);
    const filteredArray = options.filter(
      (option) => option.label == user?.page_name
    );
    if (filteredArray) setSelectedOption(filteredArray[0]);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) return;

    if (!file) {
      AlertService.error("Please select a file first!");
      return;
    }

    const formData = new FormData();

    if (selectedOption) formData.append("page_name", selectedOption.label);

    if (file) formData.append("image", file);
    if (selectedOption) formData.append("page_name", selectedOption.label);

    let flag = 0;

    CoverService.post("/cover-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        fetchData();
        AlertService.success(`Image has been added!`);

        console.log("add Image successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          flag = 1;
          AlertService.error(response.data.message);
          console.log(response.data.message);
          setError(response.data.message);
        }
      });

    if (flag) {
      return;
    }
    setError(null);
    setShowModal(false);

    router.push("/admin/cover-image");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (selectedOption) formData.append("page_name", selectedOption.label);
    if (user) formData.append("id", user.id);

    file
      ? formData.append("image", file)
      : formData.append("image", user["image"]);

    axiosApi
      .post("cover-image/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log(data);
        fetchData();
        setFile(null);
        setUser(null);
        AlertService.success(`cover-image ${user.name} has been updated!`);

        console.log("cover-image updated successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowEditModal(false);

    router.push("/admin/cover-image");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle input changes
  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDelete = (id) => {
    CoverService.remove(id)
      .then(({ res }) => {
        fetchData();
        console.log("removed Image successful");
        router.push("/admin/cover-image");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    CoverService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("cover-image api error", err);
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
                  <h5 className="modal-title">Add New Image</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="red">{error}</div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Page Name
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control "
                        id="image"
                        name="image"
                        // value={user.image}
                        onChange={(event) => setFile(event.target.files[0])}
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
            <div className="modal-dialog" role="document" ref={modalEditRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit image data</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleEditClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="red">{error}</div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Page Name
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control "
                        id="image"
                        name="image"
                        // value={user.image}
                        onChange={(event) => setFile(event.target.files[0])}
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
            <h1 className="mb-4">Manage Cover Image</h1>
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
              <th>Page Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr
                key={user.year}
                className={index % 2 === 0 ? "table-primary" : "table-success"}
              >
                <td>{user.id}</td>
                <td>{capitalizeWords(user.page_name)}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.page_name}
                    width={100}
                    style={{ borderRadius: "10%" }}
                    height={100}
                  />
                </td>
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
