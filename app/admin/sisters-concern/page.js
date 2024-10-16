import SistersConcernService from "@/app/api/services/SistersConcernService";
import SistersConcernClient from "./SistersConcernClient";

const SistersConcern = async () => {
  let initialData = [];
  try {
    const response = await SistersConcernService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <SistersConcernClient initialData={initialData} />
    </div>
  );
};

export default SistersConcern;
