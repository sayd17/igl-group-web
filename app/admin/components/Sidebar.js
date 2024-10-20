"use client";
import React from "react";
import { useStateContext } from "@/app/context/contextProvider";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { Collapse } from 'react-bootstrap';
// import { Trans } from 'react-i18next';

function Sidebar() {
  const { token, setToken } = useStateContext();

  return (
    <>
      <nav className="sidebar col-2 align-items" id="sidebar">
        <ul className="nav">
          <li className={`nav-item active`}>
            <Link className="nav-link" href="/admin">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
            <Link className="nav-link" href="/admin">
              <span className="menu-title">Users</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
            <Link className="nav-link" href="/admin">
              <span className="menu-title"> Sisters Concern</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
            <Link className="nav-link" href="/admin">
              <span className="menu-title">Teams</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
            <Link className="nav-link" href="/admin">
              <span className="menu-title">Team Members</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
            <Link className="nav-link" href="/admin">
              <span className="menu-title"> Image Gallery</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
// <div className="bg-light border-right" id="sidebar-wrapper">
// {
//   /* <div className="sidebar-heading m-3 bg-blue">Admin Panel</div> */
// }
// {
//   /* <div className="list-group list-group-flush">
//     <a
//       href="/admin/users"
//       className="list-group-item list-group-item-action bg-light"
//     >
//       Users
//     </a>
//     <a
//       href="/admin/sisters-concern"
//       className="list-group-item list-group-item-action bg-light"
//     >
//       Sisters Concern
//     </a>
//     <a
//       href="/admin/teams"
//       className="list-group-item list-group-item-action bg-light"
//     >
//       Teams
//     </a>
//     <a
//       href="/admin/team-members"
//       className="list-group-item list-group-item-action bg-light"
//     >
//       Team Members
//     </a>
//     <a
//       href="/admin/gallery"
//       className="list-group-item list-group-item-action bg-light"
//     >
//       Image Gallery
//     </a>
//     <button className="btn btn-secondary" onClick={() => setToken()}>
//       Logout
//     </button>
//   </div> */
// }
// {
//   /* </div> */
// }

export default Sidebar;
