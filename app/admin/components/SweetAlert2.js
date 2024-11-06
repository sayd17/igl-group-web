import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DeleteAlert = ({ onDelete, id }) => {
  const handleDeleteClick = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        MySwal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  return (
    <button onClick={handleDeleteClick} className="btn btn-sm btn-danger">
      <TrashIcon width="15px" height="15px" />
    </button>
  );
};

export default DeleteAlert;
