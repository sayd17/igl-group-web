"use client";
import React, { useState } from "react";
import { useStateContext } from "@/app/context/contextProvider";
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

  const onLogout = () => {
    setToken();
  };

  return (
    <div className="sidebar col-3 mt-5 pt-5">
      <ul className="nav flex-column">
        <li className="nav-item row">
          <div className="">
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
          </div>
          <div className="">
            {/* <MenuIcon
              className="float-end text-light mb-1"
              // style={{
              //   position: "fixed",
              //   top: "20px",
              //   right: "20px",
              //   zIndex: 100000,
              // }}
              width={30}
              height={30}
            /> */}
          </div>
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
          <a href="/admin/teams" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-microsoft-teams"
              viewBox="0 0 16 16"
            >
              <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z" />
              <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z" />
            </svg>
            <span className="link-text">Team</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/team-members" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <span className="link-text">Team Member</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/album" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-journal-album"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
            <span className="link-text">Album</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/gallery" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-images"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
            </svg>
            <span className="link-text">Gallery</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={onLogout} className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              />
              <path
                fillRule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
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
