"use client";
import Image from "next/image";
import "animate.css";
import { useState, useEffect } from "react";
import { ContextProvider, useStateContext } from "../context/contextProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SistersConcernService from "../api/services/SistersConcernService";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function SistersConcern() {
  const { currentSister, setCurrentSister } = useStateContext();
  const [items, setItems] = useState(null);
  const router = useRouter();

  useEffect(() => {
    SistersConcernService.getAll()
      .then(({ data }) => {
        let obj = data.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setItems(customArray);
      })
      .catch((err) => {
        console.log("sisters-concern api error", err);
      });
  }, []);

  return (
    <>
      {/* <ContextProvider>
        <Header />
      </ContextProvider> */}
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
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sisters Concern
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        {items?.map((item, index) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/sisters-concern"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentSister(item);
                                router.push("/sisters-concern");
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Our Team
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/team">
                            BOARD OF DIRECTORS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/team">
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
      <Header />
      {currentSister && (
        <div className="container py-5">
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
