"use client";

import Link from "next/link";
import axiosApi from "./api/axios-common";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BootstrapCarousel from "../components/carousels/Bootstrap";
import styles from "./page.module.css";
import LogoSlider from "@/components/carousels/LogoSlider";
import SistersConcern from "@/components/SistersConcern";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Brand/Logo */}
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

            {/* Toggle button for mobile view */}
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

            {/* Navbar links */}
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
      </header>

      <BootstrapCarousel />

      <div className={styles.sistersConcern}>Our Sisters Concern</div>

      <SistersConcern />

      <LogoSlider />
    </>
  );
}
