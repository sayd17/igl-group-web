import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables styling

const DataTable = ({ data, handleDelete, handleEditShow }) => {
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
      </table>

      {/* <table id="myTable" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default DataTable;
