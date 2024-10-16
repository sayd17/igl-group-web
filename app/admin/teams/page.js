import TeamClient from "./TeamClient";
import TeamService from "@/app/api/services/TeamService";

const Team = async () => {
  let initialData = [];
  try {
    const response = await TeamService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <TeamClient initialData={initialData} />
    </div>
  );
};

export default Team;
