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
        <div className={`container py-5 fixHeight ${styles.backImage}`}>
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

          <div
            className={`row d-flex my-3 justify-content-center animate__animated `}
          >
            <div className="col-md-3 text-center">
              {/* Animated Logo */}
              <img
                src={currentSister.logo}
                alt={currentSister?.name}
                width={300}
                className="img-fluid animate__animated animate__zoomIn"
              />
            </div>
            <div className="col-md-3">
              {/* Animated Texts */}
              <h3 className="mt-3 animate__animated animate__fadeInDown">
                {currentSister?.name}
              </h3>
              <p className="font-weight-bold animate__animated animate__fadeInUp">
                {currentSister?.short_description}
              </p>
              <p className="animate__animated animate__fadeInUp">
                {currentSister?.long_description}
              </p>
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
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
