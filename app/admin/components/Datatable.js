import { fixedSizeString } from "@/helpers/helpers";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import DeleteAlert from "./SweetAlert2";

const DataTable = ({ data, handleDelete, handleEditShow }) => {
  return (
    <div className="col-lg-12 grid-margin stretch-card table-responsive">
      <table
        id="myTable"
        className="table-bordered table table-hover "
        style={{ borderRadius: "5px" }}
      >
        <thead>
          <tr className="table-info">
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
          {data?.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "table-primary" : "table-success"}
            >
              <td>{user.id}</td>
              <td>{fixedSizeString(user.name, 10)}</td>
              <td>
                <img
                  src={user.logo}
                  alt={user.name}
                  width={100}
                  style={{ borderRadius: "10%" }}
                  height={100}
                />
              </td>
              <td className="w-2">
                {user.short_description !== null
                  ? fixedSizeString(user.short_description, 10)
                  : ""}
              </td>
              <td>
                {user.long_description !== null
                  ? fixedSizeString(user.long_description, 10)
                  : ""}
              </td>
              <td>
                {user.web_url !== null ? fixedSizeString(user.web_url, 15) : ""}
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
  );
};

export default DataTable;
