"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import BootstrapCarousel from "../components/carousels/Bootstrap";
// import styles from "./page.module.css";
// import LogoSlider from "@/components/carousels/LogoSlider";
// import SistersConcern from "@/components/SistersConcern";
// import { ContextProvider } from "@/app/context/contextProvider";
import { useStateContext } from "@/app/context/contextProvider";
import SistersConcernService from "@/app/api/services/SistersConcernService";

export default function Home() {
  const router = useRouter();
  const [items, setItems] = useState(null);
  const { currentSister, setCurrentSister } = useStateContext();

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
      {/* <ContextProvider> */}
      <header>
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
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        {items?.map((item, index) => (
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/sisters-concern"
                              onClick={(e) => {
                                // e.preventDefault(); // prevent default link behavior
                                setCurrentSister(item); // set the current sister
                                router.push("/sisters-concern");
                              }}
                            >
                              {item.name}
                            </Link>
                            {/* <Link
                              className="dropdown-item"
                              href="/sisters-concern"
                              onClick={() => setCurrentSister(item)}
                            >
                              {item.name}
                            </Link> */}
                          </li>
                        ))}
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
                          <a class="dropdown-item" href="/team">
                            BOARD OF DIRECTORS
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/team">
                            BOARD OF OFFICER/STAFF
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    Photo Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* </ContextProvider> */}
    </>
  );
}
