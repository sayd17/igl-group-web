import React from "react";
import HeaderClient from "./HeaderClient";
import SistersConcernService from "@/app/api/services/SistersConcernService";
import TeamService from "@/app/api/services/TeamService";

const Header = async () => {
  let teams = [];
  let items = [];

  try {
    const response = await TeamService.getAll();
    const response2 = await SistersConcernService.getAll();
    teams = response.data.data;
    items = response2.data.data;
    console.log(teams);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // await TeamService.getAll()
  //   .then((res) => {
  //     const customArray = Object.keys(data?.data).map(
  //       (key) => data.data[key]
  //     );
  //     teams = customArray;
  //   })
  //   .catch((err) => {
  //     console.log("team error", err);
  //   });

  // await SistersConcernService.getAll()
  //   .then((res) => {
  //     const customArray = Object.keys(data?.data).map(
  //       (key) => data.data[key]
  //     );
  //     items = customArray;
  //   })
  //   .catch((err) => {
  //     console.log("team error", err);
  //   });

  return (
    <div>
      <HeaderClient items={items} teams={teams} />
    </div>
  );
};

export default Header;
