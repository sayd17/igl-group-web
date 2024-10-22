"use client";
import React, { useState } from "react";
import { useStateContext } from "@/app/context/contextProvider";
import Link from "next/link";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";
import { MenuIcon } from "@heroicons/react/solid";

const menu = [
  {
    route: "/admin/users",
    name: "Users",
  },
  {
    route: "/admin/sisters-concern",
    name: "Sisters concern",
  },
  {
    route: "/admin/teams",
    name: "Teams",
  },
  {
    route: "/admin/team-members",
    name: "Team Members",
  },
  {
    route: "/admin/gallery",
    name: "Gallery",
  },
];

function Sidebar() {
  const { token, setToken } = useStateContext();

  return (
    <div className="sidebar col-3 mt-5 pt-5">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="icon bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8 .5l-6 6V15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5l-6-6zm5 6V15H3V6.5L8 1.5l5 5z" />
            </svg>
            <span className="link-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/users" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="icon bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 14s1-1.5 6-1.5S14 14 14 14H2zm6-4.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
            </svg>
            <span className="link-text">Users</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/sisters-concern" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="icon bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              <path
                fillRule="evenodd"
                d="M5.91 1.272a.5.5 0 0 1 .634-.316l1.522.516a.5.5 0 0 1 .255.704 3.18 3.18 0 0 1-.45.762l.761.762a3.18 3.18 0 0 1 .762-.45.5.5 0 0 1 .704.255l.516 1.522a.5.5 0 0 1-.316.634 4.02 4.02 0 0 0-.738.338l.005 1.495a4.02 4.02 0 0 0-.005.738.5.5 0 0 1-.634.316l-1.522-.516a.5.5 0 0 1-.255-.704 3.18 3.18 0 0 1 .45-.762l-.761-.762a3.18 3.18 0 0 1-.762.45.5.5 0 0 1-.704-.255L5.91 1.272zM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
            <span className="link-text">Sisters Concern</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="icon bi bi-file-earmark-bar-graph"
              viewBox="0 0 16 16"
            >
              <path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7.5L14 4.5zm-3.5-.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5H7v3.5a.5.5 0 0 0 .5.5h3zM6 12V9H5v3h1zm2-4V5H7v3h1zm2 2v-2h-1v2h1z" />
            </svg>
            <span className="link-text">Reports</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="icon bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.146 11.354a.5.5 0 0 1-.708 0L4.793 8.707a.5.5 0 1 1 .708-.708L7.5 9.793V3.5a.5.5 0 0 1 1 0v6.293l2-2a.5.5 0 1 1 .708.708l-2.646 2.647z"
              />
              <path
                fillRule="evenodd"
                d="M13.5 14a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1.5 14V2A1.5 1.5 0 0 1 3 0.5h9A1.5 1.5 0 0 1 13.5 2v12zM12 2v12H3V2h9z"
              />
            </svg>
            <span className="link-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
// <div style={{ width: "300px" }}>
//   <div
//     className="offcanvas offcanvas-start"
//     style={{ width: "200px" }}
//     data-bs-scroll="true"
//     // tabindex="-1"
//     id="offcanvasWithBothOptions"
//     aria-labelledby="offcanvasWithBothOptionsLabel"
//   >
//     <div className="offcanvas-header">
//       <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
//         Dashboard
//       </h5>
//       <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//       ></button>
//     </div>
//     <div className="offcanvas-body ">
//       {menu.map((item, index) => (
//         <div className="nav offcanvas-body">
//           <li className="nav-item">
//             <Link href={item.route} className="nav-link ">
//               {/* <i className="mdi mdi-home menu-icon"></i> */}
//               <span className="menu-title">
//                 <Trans>{item.name}</Trans>
//               </span>
//             </Link>
//           </li>
//         </div>
//       ))}
//     </div>
//     <button className="btn btn-secondary" onClick={() => setToken()}>
//       Logout
//     </button>
//   </div>
// </div>

// {/* <nav className="sidebar col-2 align-items" id="sidebar">
//   <ul className="nav">
//     <li className={`nav-item active`}>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title">Dashboard</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title">Users</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title"> Sisters Concern</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title">Teams</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title">Team Members</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//       <Link className="nav-link" href="/admin">
//         <span className="menu-title"> Image Gallery</span>
//         <i className="mdi mdi-home menu-icon"></i>
//       </Link>
//     </li>
//   </ul>
// </nav> */}

// <div className="bg-light border-right" id="sidebar-wrapper">
// {
//   /* <div className="sidebar-heading m-3 bg-blue">Admin Panel</div> */
// }

// {
//   /* </div> */
// }

export default Sidebar;
