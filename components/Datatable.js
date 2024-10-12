import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables styling

const DataTable = ({ data, handleDelete, handleEditShow }) => {
  const fixedSizeString = (str, length) => {
    let fixedString =
      str.length > length ? str.substring(0, length) + "..." : str;
    return fixedString;
  };

  useEffect(() => {
    $(document).ready(function () {
      $("#myTable").DataTable();
    });
  }, []);

  return (
    <div>
      <table id="myTable" className="table table-bordered table-striped">
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
              <td>{fixedSizeString(user.name, 10)}</td>
              <td>{fixedSizeString(user.logo, 10)}</td>
              <td className="w-2">
                {fixedSizeString(user.short_description, 10)}
              </td>
              <td>{fixedSizeString(user.long_description, 10)}</td>
              <td>{fixedSizeString(user.web_url, 15)}</td>
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
      </table>
    </div>
  );
};

export default DataTable;
