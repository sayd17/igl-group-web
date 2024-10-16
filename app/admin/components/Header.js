"use client";
import React from "react";
import Link from "next/link";
import UserActivity from "./UserActivity";

function Header() {
  return (
    <div>
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
                  <UserActivity />
                  {/* <Link href="/profile" className="nav-link">
                    <span className="m-3">{user?.name}</span>
                    Profile
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
