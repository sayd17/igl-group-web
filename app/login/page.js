import SistersConcernService from "@/app/api/services/SistersConcernService";
import LoginClient from "./LoginClient";

const SistersConcern = async () => {
  let initialData = [];
  try {
    const response = await SistersConcernService.getAll();
    initialData = response.data.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }

  return (
    <div>
      <LoginClient initialData={initialData} />
    </div>
  );
};

export default SistersConcern;
