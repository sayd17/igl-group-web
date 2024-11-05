import Image from "next/image";
import styles from "./about.module.css"; // Import custom CSS
import aboutImage from "@/public/assets/img/blog-post-img-4.jpg";
import teamImage from "@/public/assets/img/about-img-2.jpg";
import Link from "next/link";
import Header from "@/components/header/Header";
import { ContextProvider } from "../context/contextProvider";
import Footer from "@/components/footer/Footer";
import allStyles from "../all.module.css";
import AlbumService from "../api/services/AlbumService";

export const metadata = {
  title: {
    absolute: "About",
  },
  description: "know IGL Group",
};

export default function About() {
  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>

      <div className="content-wrapper pb-5">
        <div className={`row ${allStyles.imageContainer}`}>
          <img
            src="/assets/img/about-us.jpg"
            alt="background image"
            width="1280"
            height="400"
          />
        </div>
        {/* <div>
          <div className="row text-center mb-5">
            <div className="col">
              <h1 className={`display-4 ${styles.fadeIn}`}>About Us</h1>
              <p className={`lead ${styles.fadeIn}`}>
                Learn more about our company, values, and the team behind our
                success.
              </p>
            </div>
          </div>
        </div> */}

        <div className="row d-flex mt-5 justify-content-center">
          {/* About Section */}
          <div className="col-md-5">
            <h2 className={styles.fadeIn}>Our Mission</h2>
            <p className={styles.fadeIn}>
              At our company, we aim to provide the best products and services
              to our customers, ensuring quality, reliability, and innovation in
              every project we undertake.
            </p>
          </div>
          <div className={`col-md-5 ${styles.zoomIn}`}>
            <img
              src="/assets/img/blog-post-img-4.jpg"
              alt="About Us"
              className="img-fluid rounded"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-5">
            <h2 className={styles.fadeIn}>Meet the Team</h2>
            <p className={styles.fadeIn}>
              Our dedicated team of professionals is committed to delivering
              outstanding results.
            </p>
          </div>
          <div className={`col-md-5 ${styles.zoomIn}`}>
            <img
              src="assets/img/about-img-2.jpg"
              alt="Our Team"
              className="img-fluid rounded"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className={`col ${styles.fadeIn}`}>
            <h3 className="my-4">Want to Know More?</h3>
            <a href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
