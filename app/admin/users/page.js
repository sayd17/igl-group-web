import UserClient from "./UserClient";
import UserService from "@/app/api/services/UserService";

const User = async () => {
  let initialData = [];
  try {
    const response = await UserService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <UserClient initialData={initialData} />
    </div>
  );
};

export default User;
