"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AlertService from "@/app/api/services/AlertService";
import DataTable from "@/components/Datatable";
import axiosApi from "@/app/api/axios-common";

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

  const handleShow = () => setShowModal(true);
  const handleEditShow = (user) => {
    setUser(user);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      AlertService.error("Please select a file first!");
      return;
    }
    const formData = new FormData();

    console.log(file);

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
                      <label htmlFor="logo" className="form-label">
                        Logo
                      </label>
                      <input
                        type="file"
                        className="form-control "
                        id="logo"
                        name="logo"
                        // value={user.logo}
                        onChange={(event) => setFile(event.target.files[0])}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="short_description" className="form-label">
                        Short Description
                      </label>
                      <textarea
                        type="short_description"
                        className="form-control"
                        id="short_description"
                        name="short_description"
                        value={user.short_description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="long_description" className="form-label">
                        Long Description
                      </label>
                      <textarea
                        type="long_description"
                        className="form-control"
                        id="long_description"
                        name="long_description"
                        value={user.long_description}
                        onChange={handleInputChange}
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

      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage Sisters Concerns</h1>
          </div>
          <div className="col-6 pt-4 text-end">
            <button onClick={handleShow} className="btn-secondary">
              Add New
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
