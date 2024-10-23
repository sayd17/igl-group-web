"use client";
import { useEffect, useState } from "react";
import GalleryService from "../api/services/GalleryService";
import { useRouter } from "next/navigation";
import { useGalleryContext } from "../context/galleryContext";
import Cookies from "js-cookie";
import AlbumService from "../api/services/AlbumService";

export default function GalleryClient() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [items, setItems] = useState([]);
  const { setCurrentAlbum, currentAlbum } = useGalleryContext();
  const router = useRouter();

  const toggleAlbum = (albumName) => {
    if (selectedAlbum === albumName) {
      setSelectedAlbum(null);
    } else {
      setSelectedAlbum(albumName);
    }
  };

  const handle = (album) => {
    // e.preventDefault();
    const serializedArray = JSON.stringify(album);
    // setCurrentAlbum(items);
    // let item = items;
    console.log(serializedArray);
    Cookies.set("album", serializedArray);
    router.push("/gallery-image");
  };

  useEffect(() => {
    const fetchData = () => {
      AlbumService.getAll()
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
      {/* {selectedAlbum && (
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
      )} */}
      <div className="row justify-content-center">
        {items.map((album, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{album.name}</h5>
                <img
                  src={album.image}
                  alt={album.name}
                  className="card-img-top"
                  height="150px"
                />
                <button
                  onClick={() => handle(album)}
                  className={`btn btn-primary mt-1`}
                >
                  View Images
                </button>
                {/* <button
                  className="btn btn-secondary"
                  onClick={() => toggleAlbum(album.program)}
                >
                  {selectedAlbum === album.program
                    ? "Hide Images"
                    : "View Images"}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
