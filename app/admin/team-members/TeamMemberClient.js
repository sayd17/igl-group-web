"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import TeamMemberService from "@/app/api/services/TeamMemberService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";

export default function TeamMemberClient({ initialData }) {
  const [data, setData] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store teamMember details
  const [teamMember, setTeamMember] = useState({
    team_id: 1,
    name: "",
    position: "",
    description: "",
  });

  const handleShow = () => setShowModal(true);
  const handleEditShow = (teamMember) => {
    setTeamMember(teamMember);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    TeamMemberService.create(teamMember)
      .then(({ data }) => {
        console.log(data);
        AlertService.success("teamMember created successfully");
        fetchData();

        console.log("add teamMember successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });

    setShowModal(false);

    router.push("/admin/team-members");
  };

  const handleEditSubmit = () => {
    TeamMemberService.update(teamMember["id"], teamMember)
      .then(({ data }) => {
        console.log(data);
        AlertService.success(`teamMember ${teamMember.name} has been updated!`);
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

    router.push("/admin/team-members");
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeamMember({ ...teamMember, [name]: value });
  };

  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeamMember({ ...teamMember, [name]: value });
  };

  const handleDelete = (id) => {
    TeamMemberService.remove(id)
      .then(({ res }) => {
        fetchData();
        AlertService.success("teamMember Deleted successfully");
        console.log("removed sister successful");
        router.push("/admin/team-members");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  const fetchData = () => {
    TeamMemberService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("teamMember api error", err);
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
                      <label htmlFor="team_id" className="form-label">
                        Team Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="team_id"
                        name="team_id"
                        value={teamMember.team_id}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={teamMember.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <input
                        className="form-control"
                        id="position"
                        name="position"
                        value={teamMember.position}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        className="form-control"
                        id="description"
                        name="description"
                        value={teamMember.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </form>
                  {/* <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={teamMember.name}
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
                        value={teamMember.message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </form> */}
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
                      <label htmlFor="team_id" className="form-label">
                        Team Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="team_id"
                        name="team_id"
                        value={teamMember.team_id}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={teamMember.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <input
                        className="form-control"
                        id="position"
                        name="position"
                        value={teamMember.position}
                        onChange={handleEditInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        className="form-control"
                        id="description"
                        name="description"
                        value={teamMember.description}
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
            <h1 className="mb-4">Manage team-members</h1>
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
              <th>Team Id</th>
              <th>Name</th>
              <th>Position</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((teamMember, index) => (
              <tr
                key={teamMember.id}
                className={index % 2 === 0 ? "table-primary" : "table-success"}
              >
                <td>{teamMember.id}</td>
                <td>{teamMember.team_id}</td>
                <td>{teamMember.name}</td>
                <td>{teamMember.position}</td>
                <td>{teamMember.description}</td>
                <td>
                  <button
                    onClick={() => handleEditShow(teamMember)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <PencilIcon width="15px" height="15px" />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(teamMember.id)}
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
