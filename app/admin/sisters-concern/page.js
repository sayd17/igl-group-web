"use client";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import { useEffect, useState } from "react";

export default function SistersConcern() {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

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

  useEffect(() => {
    SistersConcernService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setData(customArray);
      })
      .catch((err) => {
        console.log("sisters-concern api error", err);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-6">
            <h1 className="mb-4">Manage Sisters Concerns</h1>
          </div>
          <div className="col-6 pt-3 text-end">
            <button className="btn-secondary">Add New</button>
          </div>
        </div>
        <table className="table table-bordered table-striped">
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
                <td>{user.url}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">
                    {" "}
                    <a href="/admin/users/add">Edit</a>
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
    </div>
  );
}
