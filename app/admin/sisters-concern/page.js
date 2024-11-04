import SistersConcernService from "@/app/api/services/SistersConcernService";
import SistersConcernClient from "./SistersConcernClient";
// import { useEffect, useState } from "react";

const page = async () => {
  // const [initialData, setInitialData] = useState([]);

  let initialData = [];
  try {
    const response = await SistersConcernService.getAll();
    console.log(response);
    initialData = response.data.data; // Adjust according to your API response structure
    console.log("initialData", initialData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <SistersConcernClient initialData={initialData} />
    </div>
  );
};

export default page;
