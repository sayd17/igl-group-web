"use client";
import Image from "next/image";
import "animate.css";
import { useStateContext, ContextProvider } from "../context/contextProvider";
import Footer from "@/components/footer/Footer";
import TeamMember from "./TeamMember";
import styles from "./team.module.css";

export default function TeamClient() {
  const { currentTeam } = useStateContext();

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      description: "John is the visionary behind our company.",
      image: "/assets/img/team-member-img-1.jpg",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      description: "Jane leads the tech innovations.",
      image: "/assets/img/team-member-img-2.jpg",
    },
    {
      name: "Mark Taylor",
      position: "Lead Developer",
      description: "Mark is responsible for developing cutting-edge solutions.",
      image: "/assets/img/team-member-img-3.jpg",
    },
    {
      name: "Mark Taylor",
      position: "Lead Developer",
      description: "Mark is responsible for developing cutting-edge solutions.",
      image: "/assets/img/team-member-img-3.jpg",
    },
  ];

  return (
    <>
      <div>
        {currentTeam && (
          <div className={`container fixHeight ${styles.backImage} py-5`}>
            <div className="row text-center mb-5">
              <div className="col">
                <h1 className="display-4 animate__animated animate__fadeInDown">
                  {currentTeam?.name}
                </h1>
                <p className="lead animate__animated animate__fadeInUp">
                  {currentTeam?.message}
                </p>
              </div>
            </div>

            <TeamMember />

            {/* <div className="row">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-md-3 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card shadow-sm h-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="card-img-top img-fluid"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <p className="text-muted">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
