import AlbumClient from "./AlbumClient";
import AlbumService from "@/app/api/services/AlbumService";

const Album = async () => {
  let initialData = [];
  try {
    const response = await AlbumService.getAll();
    initialData = response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <AlbumClient initialData={initialData} />
    </div>
  );
};

export default Album;
