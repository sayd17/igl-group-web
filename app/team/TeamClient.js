"use client";
import "animate.css";
import { useStateContext, ContextProvider } from "../context/contextProvider";
import Footer from "@/components/footer/Footer";
import TeamMember from "./TeamMember";
import styles from "./team.module.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function TeamClient() {
  // const { currentTeam } = useStateContext();

  const [currentTeam, setCurrentTeam] = useState(null);

  useEffect(() => {
    const teamCookie = Cookies.get("currentTeam");
    setCurrentTeam(teamCookie ? JSON.parse(teamCookie) : "");
  }, []);

  if (!currentTeam) return null;
  // let currentTeam = Cookies.get("currentTeam");
  // currentTeam = currentTeam ? JSON.parse(currentTeam) : "";

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
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
