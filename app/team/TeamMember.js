"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/contextProvider";
import "animate.css";
import TeamMemberService from "../api/services/TeamMemberService";
import Cookies from "js-cookie";

function TeamMember() {
  // const { currentTeam } = useStateContext();
  const [members, setMembers] = useState([]);
  let currentTeam = Cookies.get("currentTeam");
  currentTeam = JSON.parse(currentTeam);
  console.log(currentTeam);

  useEffect(() => {
    const fetchData = () => {
      const formData = new FormData();
      formData.append("team", currentTeam?.name);
      TeamMemberService.getTeamWiseData("get-team-wise-data", formData)
        .then(({ data }) => {
          let obj = data.data;
          const customArray = Object.keys(obj).map((key) => obj[key]);
          setMembers(customArray);
        })
        .catch((err) => {
          console.log("sisters-concern api error", err);
        });
    };
    if (currentTeam) fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {members.map((member, index) => (
          <div
            key={index}
            className="col-md-4 p-2 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top img-fluid"
                width={300}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.designation}</p>
                {/* <p className="text-muted">{member.department}</p> */}
                {/* <p className="text-muted">{member.image}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
