"use client";
import { useEffect, useState } from "react";
import GalleryService from "../api/services/GalleryService";

export default function GalleryClient() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [items, setItems] = useState([]);

  const toggleAlbum = (albumName) => {
    console.log(albumName);
    if (selectedAlbum === albumName) {
      setSelectedAlbum(null);
    } else {
      setSelectedAlbum(albumName);
    }
  };

  console.log(items);

  const uniqueArray = items.filter(
    (value, index, self) =>
      index === self.findIndex((obj) => obj.program === value.program)
  );

  useEffect(() => {
    const fetchData = () => {
      GalleryService.getAll()
        .then(({ data }) => {
          let obj = data.data;
          const customArray = Object.keys(obj).map((key) => obj[key]);
          setItems(customArray);
        })
        .catch((err) => {
          console.log("sisters-concern api error", err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5 fixedHeight">
      <h1 className="text-center mb-4">Photo Gallery</h1>
      {/* Show images when album is selected */}
      {selectedAlbum && (
        <div className="row justify-content-center mt-4 px-4">
          {items.map(
            (image, imgIndex) =>
              image.program == selectedAlbum && (
                <div className="col-md-4 mb-4" key={imgIndex}>
                  <h4>{image?.program}</h4>
                  <div className="card shadow-sm">
                    <img
                      src={image?.image}
                      alt={`${image.program} image ${imgIndex + 1}`}
                      className="card-img-top"
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      )}
      <div className="row justify-content-center">
        {uniqueArray.map((album, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{album.program}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => toggleAlbum(album.program)}
                >
                  {selectedAlbum === album.program
                    ? "Hide Images"
                    : "View Images"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
