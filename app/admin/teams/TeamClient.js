"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables styling
import TeamService from "@/app/api/services/TeamService";

export default function team({ initialData }) {
  const [data, setData] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store team details
  const [team, setTeam] = useState({
    name: "",
    message: "",
  });

  const handleShow = () => setShowModal(true);
  const handleEditShow = (team) => {
    console.log(team);
    setTeam(team);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(team);

    TeamService.create(team)
      .then(({ data }) => {
        console.log(data);
        AlertService.success("team created successfully");
        fetchData();

        console.log("add team successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowModal(false);

    router.push("/admin/teams");
  };

  const handleEditSubmit = () => {
    TeamService.update(team["id"], team)
      .then(({ data }) => {
        console.log(data);
        AlertService.success(`team ${team.name} has been updated!`);
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

    router.push("/admin/teams");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  // Handle input changes
  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const handleDelete = (id) => {
    TeamService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success("team Deleted successfully");
        console.log("removed sister successful");
        router.push("/admin/teams");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    TeamService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("team api error", err);
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
                <div> {error} </div>
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
                        value={team.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <input
                        className="form-control"
                        id="message"
                        name="message"
                        value={team.message}
                        onChange={handleInputChange}
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
                        value={team.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <input
                        className="form-control"
                        id="message"
                        name="message"
                        value={team.message}
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
            <h1 className="mb-4">Manage teams</h1>
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
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((team) => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{team.message}</td>
                <td>
                  <button
                    onClick={() => handleEditShow(team)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(team.id)}
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
