"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AlertService from "@/app/api/services/AlertService";
import {
  UserAddIcon,
  PencilIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import DataTable from "@/app/admin/components/Datatable";
import { useForm } from "react-hook-form";
import styles from "./sister.module.css";

export default function SistersConcern({ initialData }) {
  const [data, setData] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    name: "",
    short_description: "",
    long_description: "",
    web_url: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShow = () => setShowModal(true);
  const handleEditShow = (user) => {
    setUser(user);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const submitData = () => {
    // e.preventDefault();

    if (!file) {
      AlertService.error("Please select a file first!");
      return;
    }
    const formData = new FormData();

    Object.keys(user).map((key) => {
      formData.append(key, user[key]);
    });

    if (file) formData.append("logo", file);

    SistersConcernService.post("/sisters-concern", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        console.log(data);
        fetchData();
        AlertService.success(`Sister ${user.name} has been added!`);

        console.log("add sister successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowModal(false);

    router.push("/admin/sisters-concern");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(user).map((key) => {
      formData.append(key, user[key]);
    });

    if (file) formData.append("logo", file);

    SistersConcernService.update(user["id"], formData)
      .then(({ data }) => {
        console.log(data);
        fetchData();
        AlertService.success(`Sister ${user.name} has been updated!`);

        console.log("sister updated successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowEditModal(false);

    router.push("/admin/sisters-concern");
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

  const handleDelete = (id) => {
    SistersConcernService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success(`Sister has been removed!`);
        console.log("removed sister successful");
        router.push("/admin/sisters-concern");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    SistersConcernService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("sisters-concern api error", err);
      });
  };

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
                  <form onSubmit={handleSubmit(submitData)}>
                    <div className="mb-3">
                      {/* <label htmlFor="logo" className="form-label">
                        Logo
                      </label> */}

                      {file ? (
                        <div className="position-relative d-inline-block">
                          <button
                            onClick={() => setFile(null)}
                            className="opacity-1 position-absolute end-0.75 rounded bg-gray-100 border-0 w-8 h-8 col-2"
                          >
                            <XCircleIcon
                              className="text-red-600 cursor-pointer"
                              aria-hidden="true"
                            />
                          </button>

                          <img
                            className="img-responsive img-thumbnail object-fit h-48 bg-white border border-gray-200 rounded-lg shadow-md"
                            style={{ width: 300, height: 200 }}
                            src={(() => {
                              return file?.name && URL.createObjectURL(file);
                            })()}
                            alt={file?.name}
                          />
                        </div>
                      ) : (
                        <div className="input position-relative d-flex align-items-center justify-content-center">
                          <div className="position-absolute">
                            <div className="d-flex flex-column align-items-center">
                              <PlusCircleIcon
                                className="text-primary"
                                style={{
                                  height: "50px",
                                  width: "50px",
                                  color: "#007bff",
                                }}
                              />
                              <span className="d-block font-weight-normal text-secondary">
                                <big>+</big> Add Your Logo
                              </span>
                              <span className="d-block font-weight-normal text-secondary">
                                Max File size: 1MB
                              </span>
                              {/* <span className="d-block font-weight-normal text-secondary">
                                Allowed File: .jpeg, jpg, .png
                              </span> */}
                            </div>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            {...register("logo", {
                              required: "Please upload an image",
                              validate: {
                                // Checks file size limit (e.g., 1MB)
                                lessThan1MB: (files) =>
                                  files[0]?.size < 1048576 ||
                                  "Image size should be less than 1MB",
                                // Checks file type (e.g., JPEG or PNG only)
                                acceptedFormats: (files) =>
                                  [
                                    "image/jpeg",
                                    "image/jpg",
                                    "image/png",
                                  ].includes(files[0]?.type) ||
                                  "Only JPEG or PNG or JPG files are allowed",
                              },
                            })}
                            onChange={(event) => setFile(event.target.files[0])}
                            className="w-100 h-100 opacity-0 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.name && (
                        <span className={`${styles.errorMessage}`}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="logo" className="form-label">
                        Logo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        {...register("logo", {
                          required: "Please upload an image",
                          validate: {
                            // Checks file size limit (e.g., 1MB)
                            lessThan1MB: (files) =>
                              files[0]?.size < 1048576 ||
                              "Image size should be less than 1MB",
                            // Checks file type (e.g., JPEG or PNG only)
                            acceptedFormats: (files) =>
                              ["image/jpeg", "image/png"].includes(
                                files[0]?.type
                              ) || "Only JPEG or PNG files are allowed",
                          },
                        })}
                        className="form-control "
                        id="logo"
                        name="logo"
                        // value={user.logo}
                        onChange={(event) => setFile(event.target.files[0])}
                      />
                      </div> */}
                    {errors.logo && (
                      <span className={`${styles.errorMessage}`}>
                        {errors.logo.message}
                      </span>
                    )}

                    <div className="mb-3">
                      <label htmlFor="short_description" className="form-label">
                        Short Description
                      </label>
                      <textarea
                        type="short_description"
                        {...register("short_description", {
                          required: {
                            value: true,
                            message: "Please enter your description",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        className="form-control"
                        id="short_description"
                        name="short_description"
                        value={user.short_description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.short_description && (
                      <span className={`${styles.errorMessage}`}>
                        {errors.short_description.message}
                      </span>
                    )}

                    <div className="mb-3">
                      <label htmlFor="long_description" className="form-label">
                        Long Description
                      </label>
                      <textarea
                        type="long_description"
                        className="form-control"
                        {...register("long_description", {
                          required: {
                            value: true,
                            message: "Please enter your description",
                          },
                          maxLength: {
                            value: 32535,
                            message: "Please use 32535 characters or less",
                          },
                        })}
                        id="long_description"
                        name="long_description"
                        value={user.long_description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.long_description && (
                      <span className={`${styles.errorMessage}`}>
                        {errors.long_description.message}
                      </span>
                    )}

                    <div className="mb-3">
                      <label htmlFor="web_url" className="form-label">
                        Web Url
                      </label>
                      <input
                        type="url"
                        {...register("web_url", {
                          required: {
                            value: true,
                            message: "Please enter a URL",
                          },
                          pattern: {
                            value:
                              /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?$/,
                            message: "Please enter a valid URL",
                          },
                        })}
                        className="form-control"
                        id="web_url"
                        name="web_url"
                        value={user.web_url}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors.web_url && (
                      <span className={`${styles.errorMessage}`}>
                        {errors.web_url.message}
                      </span>
                    )}
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
                    onClick={handleSubmit(submitData)}
                    type="submit"
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
                  <form onSubmit={submitData}>
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
                      <label htmlFor="logo" className="form-label">
                        Logo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="logo"
                        name="logo"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="short_description" className="form-label">
                        Short Description
                      </label>
                      <input
                        type="short_description"
                        className="form-control"
                        id="short_description"
                        name="short_description"
                        value={user.short_description}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="long_description" className="form-label">
                        Long Description
                      </label>
                      <input
                        type="long_description"
                        className="form-control"
                        id="long_description"
                        name="long_description"
                        value={user.long_description}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="web_url" className="form-label">
                        Web Url
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="web_url"
                        name="web_url"
                        value={user.web_url}
                        onChange={handleEditInputChange}
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
            <h1 className="mb-4">Manage Sisters Concerns</h1>
          </div>
          <div className="col-6 pt-2 text-end">
            <button onClick={handleShow} className="btn btn-secondary">
              <UserAddIcon width="30px" height="30px" />
            </button>
          </div>
        </div>
        <DataTable
          data={data}
          handleDelete={handleDelete}
          handleEditShow={handleEditShow}
        />
      </div>
    </div>
  );
}
