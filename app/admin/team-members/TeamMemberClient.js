"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AlertService from "@/app/api/services/AlertService";
import TeamMemberService from "@/app/api/services/TeamMemberService";
import { TrashIcon, PencilIcon, UserAddIcon } from "@heroicons/react/solid";
import TeamService from "@/app/api/services/TeamService";
import Select from "react-select";
import DeleteAlert from "../components/SweetAlert2";
import axiosApi from "@/app/api/axios-common";

export default function TeamMemberClient({ initialData }) {
  const [data, setData] = useState(initialData);
  const modalRef = useRef(null);
  const modalEditRef = useRef(null);
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const router = useRouter();
  const [error, setError] = useState(null);

  // State to store teamMember details
  const [teamMember, setTeamMember] = useState({
    team: selectedOption?.label,
    name: "",
    image: "",
    designation: "",
  });

  const handleShow = () => {
    setTeamMember(null);
    setShowModal(true);
  };
  const handleEditShow = (teamMember) => {
    setFile(null);
    setTeamMember(teamMember);
    const filteredArray = options.filter(
      (option) => option.label == teamMember?.team
    );
    if (filteredArray) setSelectedOption(filteredArray[0]);
    setShowEditModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleEditClose = () => setShowEditModal(false);

  // add team member
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(teamMember).map((key) => {
      formData.append(key, teamMember[key]);
    });

    if (file) formData.append("image", file);

    formData.append("team", selectedOption?.label);

    TeamMemberService.create(formData)
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
    const formData = new FormData();

    Object.keys(teamMember).map((key) => {
      if (key !== "image" && key != "team")
        formData.append(key, teamMember[key]);
    });

    if (selectedOption) formData.append("team", selectedOption.label);

    file
      ? formData.append("image", file)
      : formData.append("image", teamMember["image"]);

    axiosApi
      .post("team-member/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log(data);
        fetchData();
        setFile(null);
        setTeamMember(null);
        AlertService.success(`teamMember ${teamMember.name} has been updated!`);

        console.log("teamMember updated successful");
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
    TeamService.getAll()
      .then(({ data }) => {
        let obj = data?.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        let array = [];
        customArray.map((team) => {
          let newOption = {
            value: team.name,
            label: team.name,
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
                  <h5 className="modal-title">Add New Member</h5>
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
                        value={teamMember?.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="team" className="form-label">
                        Team
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                      {/* <input
                        type="text"
                        className="form-control"
                        id="team"
                        name="team"
                        value={teamMember.team}
                        onChange={handleInputChange}
                        required
                      /> */}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <input
                        className="form-control"
                        id="designation"
                        name="designation"
                        value={teamMember?.designation}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image"
                        name="image"
                        // value={teamMember?.image}
                        onChange={(event) => setFile(event.target.files[0])}
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
            <div className="modal-dialog" role="document" ref={modalEditRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Member</h5>
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
                        value={teamMember?.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="team" className="form-label">
                        Team
                      </label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                      {/* <input
                        type="text"
                        className="form-control"
                        id="team"
                        name="team"
                        value={teamMember.team}
                        onChange={handleInputChange}
                        required
                      /> */}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <input
                        className="form-control"
                        id="designation"
                        name="designation"
                        value={teamMember?.designation}
                        onChange={handleEditInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image"
                        name="image"
                        // value={teamMember?.image}
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
              <th>Name</th>
              <th>Designation</th>
              <th>Team </th>
              <th>Image</th>
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
                <td>{teamMember.name}</td>
                <td>{teamMember.designation}</td>
                <td>{teamMember.team}</td>
                <td>
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={100}
                    style={{ borderRadius: "10%" }}
                    height={100}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleEditShow(teamMember)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <PencilIcon width="15px" height="15px" />
                  </button>
                  <DeleteAlert onDelete={handleDelete} id={teamMember?.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
