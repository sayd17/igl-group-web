"use client";
import "animate.css";
import { useStateContext } from "../context/contextProvider";
import styles from "./sisters-concern.module.css";

import Footer from "@/components/footer/Footer";

export default function SistersConcernClient() {
  const { currentSister } = useStateContext();

  return (
    <>
      {currentSister && (
        <div
          className={`container py-5 fixHeight ${styles.backImage} content-wrapper`}
        >
          {/* Page Header */}
          <div className="row mb-4 text-center">
            <div className="col">
              <h1 className="display-4 animate__animated animate__fadeInDown">
                Sisters Concern
              </h1>
              <p className="lead animate__animated animate__fadeInUp">
                {currentSister.short_description}
              </p>
            </div>
          </div>

          <div className={`m-5 animate__animated `}>
            <img
              src={currentSister.logo}
              alt={currentSister?.name}
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
                {currentSister?.name}
              </h3>
            </span>

            <span
              className="animate__animated animate__fadeInUp word-wrap"
              style={{ "text-align": "justify" }}
            >
              {currentSister?.long_description}
            </span>
            <div>
              <a
                // href="#"
                href={currentSister?.web_url}
                // target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary animate__animated animate__fadeInUp"
              >
                Visit Website
              </a>
            </div>
            {/* </span> */}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
