"use client";
import React from "react";
import GalleryService from "@/app/api/services/GalleryService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import AlbumService from "@/app/api/services/AlbumService";
import Select from "react-select";

export default function Gallery({ initialData }) {
  const [data, setData] = useState(initialData);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    year: "",
    caption: "",
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

    Object.keys(user).map((key) => {
      formData.append(key, user[key]);
    });

    if (file) formData.append("image", file);
    if (selectedOption) formData.append("album", selectedOption.label);
    console.log(formData);

    GalleryService.post("/gallery", formData, {
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
          setError(response.data.message);
        }
      });

    setShowModal(false);

    router.push("/admin/gallery");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(user).map((key) => {
      formData.append(key, user[key]);
    });

    if (file) formData.append("image", file);

    GalleryService.update(user["id"], formData)
      .then(({ data }) => {
        console.log(data);
        fetchData();
        AlertService.success(`Image has been updated!`);

        console.log("Image updated successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowEditModal(false);

    router.push("/admin/gallery");
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
    GalleryService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success(`Image has been removed!`);
        console.log("removed Image successful");
        router.push("/admin/gallery");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    GalleryService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("gallery api error", err);
      });
  };

  useEffect(() => {
    AlbumService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        let array = [];
        customArray.map((album) => {
          let newOption = {
            value: album.name,
            label: album.name,
          };
          array.push(newOption);
        });
        // console.log("custom array", array);

        setOptions(array);
      })
      .catch((err) => {
        console.log("gallery api error", err);
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
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Caption
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="caption"
                        name="caption"
                        value={user.caption}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Album
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                      {/* <label htmlFor="album" className="form-label">
                        Album
                      </label>
                      <input
                        className="form-control"
                        id="album"
                        name="album"
                        value={user.album}
                        onChange={handleInputChange}
                        required
                      /> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        image
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
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Image</h5>
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
                      <label htmlFor="year" className="form-label">
                        Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        name="year"
                        value={user.year}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="program" className="form-label">
                        Program
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="program"
                        name="program"
                        value={user.program}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        image
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

                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Caption
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="caption"
                        name="caption"
                        value={user.caption}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <input
                        className="form-control"
                        id="status"
                        name="status"
                        value={user.status}
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

      <div className="container table-rounded">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage Gallery</h1>
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
              <th>Caption</th>
              <th>Album</th>
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
                <td>{user.caption}</td>
                <td>{user.album}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.caption}
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
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    <TrashIcon width="15px" height="15px" />
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
