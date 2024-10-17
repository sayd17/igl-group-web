import SistersConcernService from "@/app/api/services/SistersConcernService";
import LoginClient from "./LoginClient";

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
      <LoginClient initialData={initialData} />
    </div>
  );
};

export default SistersConcern;
