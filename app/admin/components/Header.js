"use client";
import React, { Component } from "react";
import Link from "next/link";

const Header = ({ toggleContent }) => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg custom-navbar fixed-top"
          // style={{ backgroundolor: "#fffff" }}
        >
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img
                src="/assets/img/logo.png"
                alt="Logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </a>
            <Link href="/" className="ms-3 navbar-brand">
              IGL Group
            </Link>
            <span className="ms-3">Admin Panel</span>
            {/* Offcanvas trigger button for sidebar */}
            <button
              onClick={toggleContent}
              className="btn btn-secondary ms-3"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0-5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0-5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11z"
                />
              </svg>
            </button>
            {/* Navbar toggler for mobile view */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Right side of navbar */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
// <nav className="main-header navbar navbar-expand ">
//   <ul className="navbar-nav">
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         data-widget="pushmenu"
//         href="#"
//         role="button"
//       >
//         <i className="fa fa-bars" />
//       </a>
//     </li>
//     <li className="nav-item d-none d-sm-inline-block">
//       <a href="index3.html" className="nav-link">
//         Home
//       </a>
//     </li>
//     <li className="nav-item d-none d-sm-inline-block">
//       <a href="#" className="nav-link">
//         Contact
//       </a>
//     </li>
//   </ul>
//   <ul className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         data-widget="navbar-search"
//         href="#"
//         role="button"
//       >
//         <i className="fa fa-search" />
//       </a>
//       <div className="navbar-search-block">
//         <form className="form-inline">
//           <div className="input-group input-group-sm">
//             <input
//               className="form-control form-control-navbar"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <div className="input-group-append">
//               <button className="btn btn-navbar" type="submit">
//                 <i className="fa fa-search" />
//               </button>
//               <button
//                 className="btn btn-navbar"
//                 type="button"
//                 data-widget="navbar-search"
//               >
//                 <i className="fa fa-times" />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </li>
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//         <i className="fa fa-comments" />
//         <span className="badge badge-danger navbar-badge">3</span>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <a href="#" className="dropdown-item">
//           <div className="media">
//             <img
//               src="dist/img/user1-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 mr-3 img-circle"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 Brad Diesel
//                 <span className="float-right text-sm text-danger">
//                   <i className="fa fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">Call me whenever you can...</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <div className="media">
//             <img
//               src="dist/img/user8-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 img-circle mr-3"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 John Pierce
//                 <span className="float-right text-sm text-muted">
//                   <i className="fas fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">I got your message bro</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <div className="media">
//             <img
//               src="dist/img/user3-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 img-circle mr-3"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 Nora Silvester
//                 <span className="float-right text-sm text-warning">
//                   <i className="fas fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">The subject goes here</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item dropdown-footer">
//           See All Messages
//         </a>
//       </div>
//     </li>
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//         <i className="fa fa-bell" />
//         <span className="badge badge-warning navbar-badge">15</span>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <span className="dropdown-item dropdown-header">
//           15 Notifications
//         </span>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-envelope mr-2" /> 4 new messages
//           <span className="float-right text-muted text-sm">3 mins</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-users mr-2" /> 8 friend requests
//           <span className="float-right text-muted text-sm">12 hours</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-file mr-2" /> 3 new reports
//           <span className="float-right text-muted text-sm">2 days</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item dropdown-footer">
//           See All Notifications
//         </a>
//       </div>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         data-widget="fullscreen"
//         href="#"
//         role="button"
//       >
//         <i className="fa fa-expand-arrows-alt" />
//       </a>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         data-widget="control-sidebar"
//         data-controlsidebar-slide="true"
//         href="#"
//         role="button"
//       >
//         <i className="fa fa-th-large" />
//       </a>
//     </li>
//   </ul>
// </nav>
// <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//   {/* Left navbar links */}
//   <ul className="navbar-nav">
//     <li className="nav-item">
//       <a className="nav-link" data-widget="pushmenu" href="#">
//         <i className="fas fa-bars" />
//       </a>
//     </li>
//     <li className="nav-item d-none d-sm-inline-block">
//       <a href="index3.html" className="nav-link">
//         Home
//       </a>
//     </li>
//     <li className="nav-item d-none d-sm-inline-block">
//       <a href="#" className="nav-link">
//         Contact
//       </a>
//     </li>
//   </ul>
//   {/* SEARCH FORM */}
//   <form className="form-inline ml-3">
//     <div className="input-group input-group-sm">
//       <input
//         className="form-control form-control-navbar"
//         type="search"
//         placeholder="Search"
//         aria-label="Search"
//       />
//       <div className="input-group-append">
//         <button className="btn btn-navbar" type="submit">
//           <i className="fas fa-search" />
//         </button>
//       </div>
//     </div>
//   </form>
//   {/* Right navbar links */}
//   <ul className="navbar-nav ml-auto">
//     {/* Messages Dropdown Menu */}
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//         <i className="fa fa-comments" />
//         <span className="badge badge-danger navbar-badge">3</span>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <a href="#" className="dropdown-item">
//           {/* Message Start */}
//           <div className="media">
//             <img
//               src="dist/img/user1-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 mr-3 img-circle"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 Brad Diesel
//                 <span className="float-right text-sm text-danger">
//                   <i className="fas fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">Call me whenever you can...</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//           {/* Message End */}
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           {/* Message Start */}
//           <div className="media">
//             <img
//               src="dist/img/user8-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 img-circle mr-3"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 John Pierce
//                 <span className="float-right text-sm text-muted">
//                   <i className="fas fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">I got your message bro</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//           {/* Message End */}
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           {/* Message Start */}
//           <div className="media">
//             <img
//               src="dist/img/user3-128x128.jpg"
//               alt="User Avatar"
//               className="img-size-50 img-circle mr-3"
//             />
//             <div className="media-body">
//               <h3 className="dropdown-item-title">
//                 Nora Silvester
//                 <span className="float-right text-sm text-warning">
//                   <i className="fas fa-star" />
//                 </span>
//               </h3>
//               <p className="text-sm">The subject goes here</p>
//               <p className="text-sm text-muted">
//                 <i className="fa fa-clock mr-1" /> 4 Hours Ago
//               </p>
//             </div>
//           </div>
//           {/* Message End */}
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item dropdown-footer">
//           See All Messages
//         </a>
//       </div>
//     </li>
//     {/* Notifications Dropdown Menu */}
//     <li className="nav-item dropdown">
//       <a className="nav-link" data-toggle="dropdown" href="#">
//         <i className="fa fa-bell" />
//         <span className="badge badge-warning navbar-badge">15</span>
//       </a>
//       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//         <span className="dropdown-item dropdown-header">
//           15 Notifications
//         </span>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-envelope mr-2" /> 4 new messages
//           <span className="float-right text-muted text-sm">3 mins</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-users mr-2" /> 8 friend requests
//           <span className="float-right text-muted text-sm">12 hours</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item">
//           <i className="fas fa-file mr-2" /> 3 new reports
//           <span className="float-right text-muted text-sm">2 days</span>
//         </a>
//         <div className="dropdown-divider" />
//         <a href="#" className="dropdown-item dropdown-footer">
//           See All Notifications
//         </a>
//       </div>
//     </li>
//     <li className="nav-item">
//       <a
//         className="nav-link"
//         data-widget="control-sidebar"
//         data-slide="true"
//         href="#"
//       >
//         <i className="fas fa-th-large" />
//       </a>
//     </li>
//   </ul>
// </nav>