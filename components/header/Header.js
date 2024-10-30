"use client";
import React, { useEffect, useState } from "react";
import HeaderClient from "./HeaderClient";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import TeamService from "@/app/api/services/TeamService";
import team from "@/app/admin/teams/TeamClient";

const Header = () => {
  const [teams, setTeams] = useState([]);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   try {
  //     const response = TeamService.getAll();
  //     const response2 = SistersConcernService.getAll();
  //     console.log(response.data);
  //     const customArray = Object.keys(response?.data).map(
  //       (key) => response.data[key]
  //     );
  //     const customArray2 = Object.keys(response2?.data).map(
  //       (key) => response2.data[key]
  //     );
  //     console.log(customArray);
  //     console.log(customArray2);
  //     setItems(customArray2);
  //     setTeams(customArray);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }, []);
  useEffect(() => {
    TeamService.getAll()
      .then((res) => {
        const data = res?.data;
        const customArray = Object.keys(data).map((key) => data[key]);
        setTeams(customArray[0]);
      })
      .catch((err) => {
        console.log("team error", err);
      });

    SistersConcernService.getAll()
      .then((res) => {
        const data = res?.data;
        const customArray = Object.keys(data).map((key) => data[key]);
        setItems(customArray[0]);
      })
      .catch((err) => {
        console.log("team error", err);
      });
  }, []);

  return (
    <div>
      <HeaderClient items={items} teams={teams} />
    </div>
  );
};

export default Header;
