"use client";
import AlbumService from "@/app/api/services/AlbumService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";

export default function AlbumClient({ initialData }) {
  const [data, setData] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store album details
  const [album, setAlbum] = useState({
    name: "",
    year: "",
  });

  const handleShow = () => setShowModal(true);
  const handleEditShow = (album) => {
    setAlbum(album);
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

    Object.keys(album).map((key) => {
      formData.append(key, album[key]);
    });

    console.log(formData);

    if (file) formData.append("image", file);
    console.log(formData);

    AlbumService.post("/album", formData, {
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

    router.push("/admin/album");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(album).map((key) => {
      formData.append(key, album[key]);
    });

    if (file) formData.append("image", file);

    AlbumService.update(album["id"], formData)
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

    router.push("/admin/album");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlbum({ ...album, [name]: value });
  };

  // Handle input changes
  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setAlbum({ ...album, [name]: value });
  };

  const handleDelete = (id) => {
    AlbumService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success(`Image has been removed!`);
        console.log("removed Image successful");
        router.push("/admin/album");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    AlbumService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("album api error", err);
      });
  };

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
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={album.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        name="year"
                        value={album.year}
                        onChange={handleInputChange}
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
                        // value={album.image}
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
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={album.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="year"
                        name="year"
                        value={album.year}
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
                        // value={album.image}
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
            <h1 className="mb-4">Manage Album</h1>
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
              <th>Year</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((album, index) => (
              <tr
                key={album.year}
                className={index % 2 === 0 ? "table-primary" : "table-success"}
              >
                <td>{album.id}</td>
                <td>{album.name}</td>
                <td>{album.year}</td>
                <td>
                  <img
                    src={album.image}
                    alt={album.caption}
                    width={100}
                    style={{ borderRadius: "10%" }}
                    height={100}
                  />
                </td>

                <td>
                  <button
                    onClick={() => handleEditShow(album)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <PencilIcon width="15px" height="15px" />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(album.id)}
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
