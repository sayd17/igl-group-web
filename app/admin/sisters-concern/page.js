"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AlertService from "@/app/api/services/AlertService";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables styling
import DataTable from "@/components/Datatable";

export default function SistersConcern() {
  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store user details
  const [user, setUser] = useState({
    name: "",
    logo: "",
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

    SistersConcernService.post("/sisters-concern", user)
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

  const handleEditSubmit = () => {
    SistersConcernService.update(user["id"], user)
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

  const postData = () => {
    const payload = {
      email: email,
      password: password,
    };
    SistersConcernService.post("/login", payload)
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
                        type="logo"
                        className="form-control"
                        id="logo"
                        name="logo"
                        value={user.logo}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="web_url" className="form-label">
                        Web Url
                      </label>
                      <input
                        type="web_url"
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
                        type="logo"
                        className="form-control"
                        id="logo"
                        name="logo"
                        value={user.logo}
                        onChange={handleEditInputChange}
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
                        type="web_url"
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
        {/* <table id="myTable" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Short Description</th>
              <th>Long Description</th>
              <th>URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.logo}</td>
                <td className="w-2">{user.short_description}</td>
                <td>{user.long_description}</td>
                <td>{user.web_url}</td>
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
        </table> */}
      </div>
    </div>
  );
}
