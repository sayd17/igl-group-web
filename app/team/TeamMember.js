"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/contextProvider";
import "animate.css";
import TeamMemberService from "../api/services/TeamMemberService";

function TeamMember() {
  const { currentTeam } = useStateContext();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          id: currentTeam["id"],
        };
        const { data } = await TeamMemberService.getTeamMembersByTeamId(
          payload
        );

        const customArray = Object.keys(data).map((key) => data[key]);
        setMembers(customArray);
      } catch (err) {
        console.log("team member service error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {members.map((member, index) => (
          <div
            key={index}
            className="col-md-4 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card shadow-sm h-100">
              {/* <Image
                src={member.image}
                alt={member.name}
                className="card-img-top img-fluid"
                width={300}
                height={300}
                objectFit="cover"
              /> */}
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.position}</p>
                <p className="text-muted">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
