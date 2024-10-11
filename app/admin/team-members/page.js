import TeamMemberService from "@/app/api/services/TeamMemberService";
import TeamMemberClient from "./TeamMemberClient";

const TeamMember = async () => {
  let initialData = [];
  try {
    const response = await TeamMemberService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  console.log(initialData);

  return (
    <div>
      <TeamMemberClient initialData={initialData} />
    </div>
  );
};

export default TeamMember;
