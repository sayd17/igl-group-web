"use client";
import "animate.css";
import { useStateContext } from "../../context/contextProvider";
import styles from "./sisters-concern.module.css";
import allStyles from "../../all.module.css";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import SistersConcernService from "@/app/api/services/SistersConcernService";

export default function SistersConcernClient({ slug }) {
  const { currentSister } = useStateContext();
  const [items, setItems] = useState(null);

  useEffect(() => {
    SistersConcernService.getAll()
      .then((res) => {
        const data = res?.data?.data;
        const array = Object.values(data);
        // console.log(typeof array);
        const filteredArray = array.filter((item) => item.id == slug);
        if (filteredArray) setItems(filteredArray[0]);
      })
      .catch((err) => {
        console.log("team error", err);
      });
  }, []);

  return (
    <>
      <div className={`content-wrapper ${allStyles.imageContainer}`}>
        <img
          src="/assets/img/sisters_concern.jpg"
          alt="background image"
          width="1280"
          height="400"
        />
      </div>
      <div className="mt-5">
        <div className="row text-center mb-5">
          <div className="col">
            <div className="row mb-4 text-center">
              <div className="col">
                <h1 className="display-4 animate__animated animate__fadeInDown">
                  {items?.name}
                </h1>
                <p className="lead animate__animated animate__fadeInUp">
                  {items?.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {items && (
        <div className={`container fixHeight  content-wrapper`}>
          <div className={`m-5 animate__animated `}>
            <img
              src={items.logo}
              alt={items?.name}
              width={300}
              style={{
                float: "left",
                marginRight: "15px",
                marginBottom: "15px",
              }}
              className="img-fluid animate__animated animate__zoomIn"
            />

            <span>
              <h3 className="mt-3 animate__animated animate__fadeInDown">
                {items?.name}
              </h3>
            </span>

            <span
              className="animate__animated animate__fadeInUp word-wrap"
              style={{ textAlign: "justify" }}
            >
              {items?.long_description}
            </span>
            <div>
              <a
                // href="#"
                href={items?.web_url}
                // target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary animate__animated animate__fadeInUp"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
