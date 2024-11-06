"use client";
import React from "react";
import GalleryService from "@/app/api/services/GalleryService";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import AlbumService from "@/app/api/services/AlbumService";
import Select from "react-select";
import axiosApi from "@/app/api/axios-common";
import DeleteAlert from "../components/SweetAlert2";

export default function Gallery({ initialData }) {
  const [data, setData] = useState(initialData);
  const modalRef = useRef(null);
  const modalEditRef = useRef(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    album: "",
    caption: "",
  });

  const handleShow = () => {
    setUser(null);
    setShowModal(true);
  };

  const handleEditShow = (user) => {
    setUser(user);
    setFile(null);
    console.log(user);
    const filteredArray = options.filter(
      (option) => option.label == user?.album
    );
    console.log(options);
    console.log(filteredArray);
    if (filteredArray) setSelectedOption(filteredArray[0]);
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
      if (key !== "image" && key != "album") formData.append(key, user[key]);
    });

    if (selectedOption) formData.append("album", selectedOption.label);

    file
      ? formData.append("image", file)
      : formData.append("image", user["image"]);

    axiosApi
      .post("gallery/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log(data);
        fetchData();
        setFile(null);
        setUser(null);
        AlertService.success(`gallery ${user.name} has been updated!`);

        console.log("gallery updated successful");
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
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Caption
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="caption"
                        name="caption"
                        value={user?.caption}
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
                    <div className="mb-3">
                      <label htmlFor="album" className="form-label">
                        Album
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="caption" className="form-label">
                        Caption
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="caption"
                        name="caption"
                        value={user?.caption}
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
