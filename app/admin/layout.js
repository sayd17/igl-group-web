"use client";
import Link from "next/link";
import axiosApi from "../api/axios-common";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "../context/contextProvider";
import { useState } from "react";
import UserService from "../api/services/UserService";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const { token } = useStateContext();

  if (!token) {
    router.push("/login");
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosApi.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    UserService.getAll().then(({ data }) => {
      setUser(data.data[0]);
    });
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Brand/Logo */}
            <Link href="/" className="navbar-brand">
              <img
                src="/assets/img/logo.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              IGL Group
            </Link>

            <span>Admin Panel</span>

            {/* Toggle button for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/profile" className="nav-link">
                    <span className="m-3">{user?.name}</span>
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="d-flex mt-3" id="wrapper">
        {/* Sidebar */}
        <div className="bg-light border-right" id="sidebar-wrapper">
          {/* <div className="sidebar-heading m-3 bg-blue">Admin Panel</div> */}
          <div className="list-group list-group-flush">
            <a
              href="/admin/dashboard"
              className="list-group-item list-group-item-action bg-light"
            >
              Dashboard
            </a>
            <a
              href="/admin/users"
              className="list-group-item list-group-item-action bg-light"
            >
              Users
            </a>
            <a
              href="/admin/sisters-concern"
              className="list-group-item list-group-item-action bg-light"
            >
              Sisters Concern
            </a>
          </div>
        </div>

        {/* Page Content */}
        <div id="page-content-wrapper" className="p-4">
          {children} {/* This is where each nested page will be rendered */}
        </div>

        <style jsx>{`
          #wrapper {
            display: flex;
          }
          #sidebar-wrapper {
            width: 250px;
          }
          #page-content-wrapper {
            width: 100%;
          }
        `}</style>
      </div>
    </>
  );
}
