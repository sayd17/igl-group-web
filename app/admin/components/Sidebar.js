"use client";
import React from "react";
import { useStateContext } from "@/app/context/contextProvider";

function Sidebar() {
  const { token, setToken } = useStateContext();

  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      {/* <div className="sidebar-heading m-3 bg-blue">Admin Panel</div> */}
      <div className="list-group list-group-flush">
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
        <a
          href="/admin/teams"
          className="list-group-item list-group-item-action bg-light"
        >
          Teams
        </a>
        <a
          href="/admin/team-members"
          className="list-group-item list-group-item-action bg-light"
        >
          Team Members
        </a>
        <button className="btn btn-secondary" onClick={() => setToken()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
