"use client";
import "animate.css";
import { useStateContext, ContextProvider } from "../context/contextProvider";
import Footer from "@/components/footer/Footer";
import TeamMember from "./TeamMember";
import styles from "./team.module.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TeamClient() {
  // const { currentTeam } = useStateContext();

  const [currentTeam, setCurrentTeam] = useState(null);
  const { coverImage } = useStateContext();
  const [coverImgUrl, setCoverImgUrl] = useState("");

  // if (!currentTeam) return null;

  useEffect(() => {
    const imageIrl = Object.values(coverImage).map((image) => {
      console.log(image?.image);
      if (image["page_name"] == "team") setCoverImgUrl(image?.image);
    });
  }, [coverImage]);

  useEffect(() => {
    const teamCookie = Cookies.get("currentTeam");
    setCurrentTeam(teamCookie ? JSON.parse(teamCookie) : "");
  }, []);

  // let currentTeam = Cookies.get("currentTeam");
  // currentTeam = currentTeam ? JSON.parse(currentTeam) : "";

  return (
    <>
      <div className={`content-wrapper ${styles.imageContainer}`}>
        <img
          src={coverImgUrl}
          alt="background image"
          width="1280"
          height="400"
        />
      </div>
      <div className={`content-wrapper `}>
        <div className="row text-center mt-5">
          <div className="col">
            <h1 className="display-4 animate__animated animate__fadeInDown">
              {currentTeam?.name}
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              {currentTeam?.message}
            </p>
          </div>
        </div>
      </div>
      <div>
        {currentTeam && (
          <div className={`container fixHeight ${styles.backImage} py-4`}>
            {/* <div className="row text-center mb-5">
              <div className="col">
                <h1 className="display-4 animate__animated animate__fadeInDown">
                  {currentTeam?.name}
                </h1>
                <p className="lead animate__animated animate__fadeInUp">
                  {currentTeam?.message}
                </p>
              </div>
            </div> */}

            <TeamMember />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
