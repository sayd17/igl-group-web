"use client";
import React, { useEffect, useState } from "react";
// import { useGalleryContext } from "../context/galleryContext";
import Cookies from "js-cookie";
import { XCircleIcon } from "@heroicons/react/solid";
import styles from "./image.module.css";
import allStyles from "../all.module.css";
import { useStateContext } from "../context/contextProvider";
import GalleryService from "../api/services/GalleryService";

function GalleryImageClient() {
  // const { currentAlbum } = useGalleryContext();
  const [items, setItems] = useState([]);
  const [coverImgUrl, setCoverImgUrl] = useState("");
  const { coverImage } = useStateContext();

  const [image, setImage] = useState(null);
  const album = Cookies.get("album");
  const gallery = album ? JSON.parse(album) : [];

  useEffect(() => {
    const imageIrl = Object.values(coverImage).map((image) => {
      console.log(image?.image);
      if (image["page_name"] == "gallery") setCoverImgUrl(image?.image);
    });
  }, [coverImage]);

  useEffect(() => {
    const fetchData = () => {
      const formData = new FormData();
      formData.append("album", gallery.name);
      GalleryService.getAlbumWiseData("get-album-wise-data", formData)
        .then(({ data }) => {
          let obj = data.data;
          console.log(obj);
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
    <div className={`${allStyles.backImage}`}>
      <div className={`content-wrapper ${allStyles.imageContainer}`}>
        <img
          src={coverImgUrl}
          alt="background image"
          width="1280"
          height="400"
        />
      </div>
      <div className={`content-wrapper mt-5`}>
        <div className="row text-center">
          <div className="col">
            <h1 className="display-4 animate__animated animate__fadeInDown">
              {gallery?.name}
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              {gallery?.year}
            </p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="true"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className="modal-header">Album: {image.album}</div> */}
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1
                  className="image-title fs-5 text-center"
                  id="staticBackdropLabel"
                >
                  {image?.caption}
                </h1>
                <button
                  type="button"
                  className="border-0 mr-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <XCircleIcon width={30} height={30} />
                </button>
              </div>

              <img
                src={image?.image}
                alt={`${image?.program} image`}
                className={`card-img-top ${styles.responsiveImage}`}
                width={300}
                height={300}
                onClick={() => {}}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`row container justify-content-center  pt-5 content-wrapper`}
        style={{ minHeight: "400px" }}
      >
        {items?.map((image, imgIndex) => (
          <div className="col-md-3 mb-4" key={imgIndex}>
            <div className="card shadow-sm">
              {/* <h4 className="image-title text-center">{image?.album}</h4> */}

              <img
                src={image?.image}
                alt={`${image.program} image ${imgIndex + 1}`}
                className="card-img-top cursor"
                width={300}
                onClick={() => setImage(image)}
                height={200}
                layout="responsive"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
              <h4 className="image-title text-center">{image?.caption}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryImageClient;
