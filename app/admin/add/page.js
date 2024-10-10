"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../layout";
import Link from "next/link";

export default function AddUser() {
  const router = useRouter();

  // State to store user details
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "User",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or API call here to save the new user
    alert(`User ${user.name} has been added!`);

    // Redirect to users list after adding the user
    router.push("/admin/users");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <AdminLayout>
      <div className="container">
        <h1>Add New User</h1>

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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              required
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Editor">Editor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add User
          </button>
          <Link href="/admin/users" className="btn btn-secondary ms-2">
            Cancel
          </Link>
        </form>
      </div>
    </AdminLayout>
  );
}
