import CoverClient from "./CoverClient.js";
import CoverService from "@/app/api/services/CoverService";

const Cover = async () => {
  let initialData = [];
  try {
    const response = await CoverService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <CoverClient initialData={initialData} />
    </div>
  );
};

export default Cover;
