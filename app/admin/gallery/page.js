import GalleryClient from "./GalleryClient";
import GalleryService from "@/app/api/services/GalleryService";

const Gallery = async () => {
  let initialData = [];
  try {
    const response = await GalleryService.getAll();
    initialData = response.data.data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <GalleryClient initialData={initialData} />
    </div>
  );
};

export default Gallery;
