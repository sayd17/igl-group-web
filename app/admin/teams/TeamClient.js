"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import TeamService from "@/app/api/services/TeamService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import { fixedSizeString } from "@/helpers/helpers";
import DeleteAlert from "../components/SweetAlert2";

export default function team({ initialData }) {
  const [data, setData] = useState(initialData);
  const modalRef = useRef(null);
  const modalEditRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null);

  const [team, setTeam] = useState({
    name: "",
    message: "",
  });

  const handleShow = () => {
    setTeam(null);
    setShowModal(true);
  };
  const handleEditShow = (team) => {
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

  const handleInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const handleEditInputChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const handleDelete = (id) => {
    TeamService.remove(id)
      .then(({ res }) => {
        fetchData();
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
                        maxLength={40}
                        id="name"
                        name="name"
                        value={team?.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        maxLength={100}
                        name="message"
                        value={team?.message}
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
            <div className="modal-dialog" role="document" ref={modalEditRef}>
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
                        maxLength={40}
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
                      <textarea
                        className="form-control"
                        maxLength={100}
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

      <div className="container table-rounded">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage teams</h1>
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
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((team, index) => (
              <tr
                key={team.id}
                className={index % 2 === 0 ? "table-primary" : "table-success"}
              >
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{fixedSizeString(team.message, 25)}</td>
                <td>
                  <button
                    onClick={() => handleEditShow(team)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <PencilIcon width="15px" height="15px" />
                  </button>
                  <DeleteAlert onDelete={handleDelete} id={team?.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
