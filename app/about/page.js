import Image from "next/image";
import styles from "./about.module.css"; // Import custom CSS
import aboutImage from "@/public/assets/img/blog-post-img-4.jpg";
import teamImage from "@/public/assets/img/about-img-2.jpg";
import Link from "next/link";
import Header from "@/components/header/Header";
import { ContextProvider } from "../context/contextProvider";

export default function About() {
  return (
    <>
      <ContextProvider>
        <Header />
      </ContextProvider>
      {/* <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="/assets/img/logo.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              IGL Group
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    About Us
                  </Link>
                </li>

                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sisters Concern
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            IGL WEB
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Our Team
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            BOARD OF DIRECTORS
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            BOARD OF OFFICER/STAFF
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link href="/services" className="nav-link">
                    Photo Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}

      <div className="container py-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className={`display-4 ${styles.fadeIn}`}>About Us</h1>
            <p className={`lead ${styles.fadeIn}`}>
              Learn more about our company, values, and the team behind our
              success.
            </p>
          </div>
        </div>

        <div className="row">
          {/* About Section */}
          <div className="col-md-6">
            <h2 className={styles.fadeIn}>Our Mission</h2>
            <p className={styles.fadeIn}>
              At our company, we aim to provide the best products and services
              to our customers, ensuring quality, reliability, and innovation in
              every project we undertake.
            </p>
          </div>
          <div className={`col-md-6 ${styles.zoomIn}`}>
            <Image
              src={aboutImage}
              alt="About Us"
              className="img-fluid rounded"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className={styles.fadeIn}>Meet the Team</h2>
            <p className={styles.fadeIn}>
              Our dedicated team of professionals is committed to delivering
              outstanding results.
            </p>
          </div>
          <div className={`col-md-6 ${styles.zoomIn}`}>
            <Image
              src={teamImage}
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
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
