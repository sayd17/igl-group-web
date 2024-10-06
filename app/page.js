"use client";

import Link from "next/link";
import axiosApi from "./api/axiox-common";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BootstrapCarousel from "../components/carousels/Bootstrap";
import styles from "./page.module.css";
import Cart from "@/components/Cart";

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

      <Cart />

      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/assets/img/blog-post-img-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/img/blog-post-img-2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/img/blog-post-img-3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      {/* <div className="loader">
        <div className="spinner-grow" role="status"></div>
      </div>
      <div id="myNav" class="overlay-custom">
        <div class="overlay-menu-main">
          <div class="container">
            <a href="javascript:void(0)" class="close-btn" onclick="closeNav()">
              <svg
                class="close"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4397 0.268761L0.265382 14.4431C-0.0904485 14.7989 -0.0904488 15.3759 0.265382 15.7317C0.621213 16.0875 1.19813 16.0875 1.55396 15.7317L15.7283 1.55734C16.0841 1.20151 16.0841 0.624592 15.7283 0.268761C15.3725 -0.0870698 14.7956 -0.087069 14.4397 0.268761Z"
                  fill="#666666"
                />
                <path
                  d="M0.268276 1.55099L14.4426 15.7253C14.7985 16.0812 15.3754 16.0812 15.7312 15.7253C16.087 15.3695 16.087 14.7926 15.7312 14.4368L1.55685 0.262412C1.20102 -0.0934184 0.624107 -0.093419 0.268276 0.262412C-0.0875543 0.618243 -0.0875535 1.19516 0.268276 1.55099Z"
                  fill="#666666"
                />
              </svg>
            </a>
            <div class="overlay-content">
              <div class="row row-custom-1">
                <div class="col-lg-6 col-md-6 col-menu">
                  <div class="col-menu-inr">
                    <ul class="mobile-menu-ul">
                      <li class="mobile-menu-li">
                        <button
                          class="mobile-menu-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample1"
                          aria-expanded="false"
                          aria-controls="collapseExample1"
                        >
                          <span class="mobile-menu-text">Home</span>
                          <i class="fa fa-plus plus-icon"></i>
                        </button>
                        <div
                          class="collapse collaps-custom"
                          id="collapseExample1"
                        >
                          <div class="link-main-overlay-otr">
                            <div class="link-main-overlay">
                              <a href="index.html" class="mobile-menu-link">
                                Home v1
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a href="home-v2.html" class="mobile-menu-link">
                                Home v2
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a href="home-v3.html" class="mobile-menu-link">
                                Home v3
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="mobile-menu-li">
                        <a href="pages/about.html" class="mobile-menu-button">
                          <p class="mobile-menu-text">About</p>
                        </a>
                      </li>
                      <li class="mobile-menu-li">
                        <a
                          href="pages/services.html"
                          class="mobile-menu-button"
                        >
                          <p class="mobile-menu-text">Services</p>
                        </a>
                      </li>
                      <li class="mobile-menu-li">
                        <button
                          class="mobile-menu-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample3"
                          aria-expanded="false"
                          aria-controls="collapseExample3"
                        >
                          <span class="mobile-menu-text">Pages</span>
                          <i class="fa fa-plus plus-icon"></i>
                        </button>
                        <div
                          class="collapse collaps-custom"
                          id="collapseExample3"
                        >
                          <div class="link-main-overlay-otr">
                            <div class="link-main-overlay">
                              <a
                                href="pages/pricing.html"
                                class="mobile-menu-link"
                              >
                                Pricing
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/testimonials.html"
                                class="mobile-menu-link"
                              >
                                Testimonials
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/team.html"
                                class="mobile-menu-link"
                              >
                                Team
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/coming-soon.html"
                                class="mobile-menu-link"
                              >
                                Coming Soon
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a href="pages/404.html" class="mobile-menu-link">
                                404
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a href="pages/faq.html" class="mobile-menu-link">
                                Faqs
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="mobile-menu-li">
                        <button
                          class="mobile-menu-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample4"
                          aria-expanded="false"
                          aria-controls="collapseExample4"
                        >
                          <span class="mobile-menu-text">Blog</span>
                          <i class="fa fa-plus plus-icon"></i>
                        </button>
                        <div
                          class="collapse collaps-custom"
                          id="collapseExample4"
                        >
                          <div class="link-main-overlay-otr">
                            <div class="link-main-overlay">
                              <a
                                href="pages/blog.html"
                                class="mobile-menu-link"
                              >
                                Blog
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/blog-with-sidebar.html"
                                class="mobile-menu-link"
                              >
                                Blog • Sidebar
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/post-details.html"
                                class="mobile-menu-link"
                              >
                                Post Details
                              </a>
                            </div>
                            <div class="link-main-overlay">
                              <a
                                href="pages/post-details-with-sidebar.html"
                                class="mobile-menu-link"
                              >
                                Post Details • Sidebar
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="mobile-menu-li">
                        <a href="pages/contact.html" class="mobile-menu-button">
                          <p class="mobile-menu-text">Contact</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-we-agency">
                  <div class="col-we-agency-inr">
                    <div class="main-logo">
                      <a href="index.html" class="logo-otr">
                        <img
                          class="logo"
                          src="assets/img/brand-logo-white.svg"
                          alt="brand-logo"
                        />
                      </a>
                      <p class="desc-logo">
                        Pinnace holystone mizzenmast quarter crow's nest
                        nipperkin.
                      </p>
                    </div>
                    <div class="contact-details">
                      <div class="contact">
                        <h3 class="contact-head">Address</h3>
                        <p class="contact-desc">
                          2322 Gore Street • Houston • United States
                        </p>
                      </div>
                      <div class="contact">
                        <h3 class="contact-head">Email</h3>
                        <p class="contact-desc">
                          <a
                            href="https://vistothemes.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="44272b2a30252730040a2b30213c6a272b29"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div class="contact">
                        <h3 class="contact-head">Phone</h3>
                        <p class="contact-desc">+1 713-550-4354</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-custom-2">
                <div class="col-lg-6 col-icons">
                  <div class="col-icons-inr">
                    <div class="icons">
                      <a href="#" class="icons-a">
                        <i class="fab fa-facebook-f facebook social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fab fa-twitter twitter social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fab fa-instagram instagram social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fab fa-behance behance social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fa fa-basketball-ball basketball social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fab fa-linkedin-in linkedin social-icon"></i>
                      </a>
                      <a href="#" class="icons-a">
                        <i class="fab fa-pinterest-p pinterest social-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-terms">
                  <div class="col-terms-inr">
                    <a
                      href="pages/terms%26condition.html"
                      class="terms-links top"
                    >
                      Terms & Conditions
                    </a>
                    <span class="dot">•</span>
                    <a href="pages/privacy-policy.html" class="terms-links">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-section-cooporate">
        <div class="overlay">
          <div class="container">
            <div class="hero-wrapper">
              <div class="nav-custom">
                <div class="nav-custom-inner">
                  <a class="logo-otr" href="index.html" title="brand-logo">
                    <img
                      class="logo-inr"
                      src="assets/img/brand-logo-white.svg"
                      alt="./"
                    />
                  </a>
                  <ul class="navigation">
                    <li class="navigation-inr">
                      <a class="nav-links">Home</a>
                      <div class="dropdown-custom-otr">
                        <ul class="dropdown-custom-inr">
                          <li class="drop-list">
                            <a class="drop-link" href="index.html">
                              Home v1
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="home-v2.html">
                              Home v2
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="home-v3.html">
                              Home v3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="navigation-inr">
                      <a class="nav-links" href="pages/about.html">
                        About
                      </a>
                    </li>
                    <li class="navigation-inr">
                      <a class="nav-links" href="pages/services.html">
                        Services
                      </a>
                    </li>
                    <li class="navigation-inr">
                      <a class="nav-links">Pages</a>
                      <div class="dropdown-custom-otr">
                        <ul class="dropdown-custom-inr">
                          <li class="drop-list">
                            <a class="drop-link" href="pages/pricing.html">
                              Pricing
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/testimonials.html">
                              Testimonials
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/team.html">
                              Team
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/coming-soon.html">
                              Coming Soon
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/404.html">
                              404
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/faq.html">
                              FAQs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="navigation-inr">
                      <a class="nav-links">Blog</a>
                      <div class="dropdown-custom-otr">
                        <ul class="dropdown-custom-inr">
                          <li class="drop-list">
                            <a class="drop-link" href="pages/blog.html">
                              Blog
                            </a>
                          </li>
                          <li class="drop-list">
                            <a
                              class="drop-link"
                              href="pages/blog-with-sidebar.html"
                            >
                              Blog • Sidebar
                            </a>
                          </li>
                          <li class="drop-list">
                            <a class="drop-link" href="pages/post-details.html">
                              Post Details
                            </a>
                          </li>
                          <li class="drop-list">
                            <a
                              class="drop-link"
                              href="pages/post-details-with-sidebar.html"
                            >
                              Post Details • Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="navigation-inr">
                      <a class="nav-links" href="pages/contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <a class="action-toggle" onclick="openNav()">
                    <div class="toggle-inner">
                      <span class="toggle-line first"></span>
                      <span class="toggle-line second"></span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="hero-slider">
                <div class="hero-slider-inner">
                  <div class="row row-custom">
                    <div class="col-lg-7 col-content">
                      <div
                        class="col-content-inr"
                        data-sal="slide-up"
                        data-sal-duration="1200"
                        data-sal-delay="400"
                        data-sal-easing="easeIn-Out-Cubic"
                      >
                        <div class="slider-context">
                          <h1 class="heading-inr">
                            Don’t worry about
                            <br />
                            your business. Leave
                            <br />
                            that to Notex.
                          </h1>
                          <p class="slider-desc">
                            Lorem Ipsum is simply dummy text of the printing
                            <br />
                            and typesetting industry.
                          </p>
                        </div>
                        <div class="slider-action">
                          <a class="get-started-btn" href="#">
                            Get Started for Free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-5 col-img"
                      data-sal="slide-up"
                      data-sal-duration="1200"
                      data-sal-delay="800"
                      data-sal-easing="easeIn-Out-Cubic"
                    >
                      <div class="col-img-inr">
                        <a
                          class="play-btn-otr"
                          href="https://www.youtube.com/watch?v=AT6oSIDbGkw"
                        >
                          <img
                            class="play-btn"
                            src="assets/img/play-btn.svg"
                            alt="play-btn"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="shape-1"
              src="assets/img/bg-shape-1.png"
              alt="bg-shape"
            />
            <img
              class="shape-2"
              src="assets/img/bg-shape-2.png"
              alt="bg-shape"
            />
            <img
              class="shape-3"
              src="assets/img/bg-shape-3.png"
              alt="bg-shape"
            />
          </div>
        </div>
      </div>
      <div class="features">
        <div class="container">
          <div class="wrapper">
            <div class="main-heading-otr">
              <p class="tag-section">Features</p>
              <h2 class="heading-otr">Why Choose Notex</h2>
              <p class="desc-otr">
                It has survived not only five centuries, but also the leap
              </p>
            </div>
          </div>
          <div class="inr-wrapper">
            <div class="row row-custom">
              <div
                class="col-lg-4 col-md-6 col-feature"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="250"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-features-inr box1">
                  <div class="icon-main">
                    <div class="icon-otr">
                      <img
                        class="icon-origenal"
                        src="assets/img/feature-icon-1.svg"
                        alt="feature-icon"
                      />
                      <img
                        class="icon-hover"
                        src="assets/img/feature-icon-1.svg"
                        alt="feature-icon"
                      />
                    </div>
                    <div class="num-otr">
                      <h1 class="num">01</h1>
                    </div>
                  </div>
                  <div class="feature-content">
                    <h3 class="feature-head">Focusing on the Outcomes</h3>
                    <p class="feature-desc">
                      Placerat accumsan porttitor lobortis luctus vitae.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-feature"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="500"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-features-inr box2">
                  <div class="icon-main">
                    <div class="icon-otr">
                      <img
                        class="icon-origenal"
                        src="assets/img/feature-icon-2.svg"
                        alt="feature-icon"
                      />
                      <img
                        class="icon-hover"
                        src="assets/img/feature-icon-2.svg"
                        alt="feature-icon"
                      />
                    </div>
                    <div class="num-otr">
                      <h1 class="num">02</h1>
                    </div>
                  </div>
                  <div class="feature-content">
                    <h3 class="feature-head">Providing Instant Results</h3>
                    <p class="feature-desc">
                      Viverra id pellentesque ipsum ullamcorper cursus diam.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-feature"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="750"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-features-inr box3">
                  <div class="icon-main">
                    <div class="icon-otr">
                      <img
                        class="icon-origenal"
                        src="assets/img/feature-icon-3.svg"
                        alt="feature-icon"
                      />
                      <img
                        class="icon-hover"
                        src="assets/img/feature-icon-3.svg"
                        alt="feature-icon"
                      />
                    </div>
                    <div class="num-otr">
                      <h1 class="num">03</h1>
                    </div>
                  </div>
                  <div class="feature-content">
                    <h3 class="feature-head">Giving Turnaround Support</h3>
                    <p class="feature-desc">
                      Sed tempor bibendum commodo massa quisque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="shape-4" src="assets/img/bg-shape-1.png" alt="bg-shape" />
          <img class="shape-2" src="assets/img/bg-shape-2.png" alt="bg-shape" />
        </div>
      </div>
      <div class="learn-1 home-corporate-learn-1">
        <div class="container">
          <div class="row row-custom">
            <div class="col-lg-6 col-content">
              <div class="col-content-inr">
                <div class="main-heading-otr">
                  <p class="tag-section">Learn More</p>
                  <h2 class="heading-otr">
                    Ideas That Will Surely Bring Great Results
                  </h2>
                  <p class="desc-otr">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="action">
                  <a class="learn-btn" href="#">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-img">
              <div class="col-img-inr">
                <img
                  class="learn-img img-fluid"
                  src="assets/img/learn-more-illustration-1.gif"
                  alt="learn-more"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="learn-2 home-corporate-learn-2">
        <div class="container">
          <div class="row row-custom">
            <div class="col-lg-6 col-img">
              <div class="col-img-inr">
                <img
                  class="learn-img img-fluid"
                  src="assets/img/learn-more-illustration-2.gif"
                  alt="learn-more"
                />
              </div>
            </div>
            <div class="col-lg-6 col-content">
              <div class="col-content-inr">
                <div class="main-heading-otr">
                  <p class="tag-section">Learn More</p>
                  <h2 class="heading-otr">
                    We Take Your Brand to The Next Level
                  </h2>
                  <p class="desc-otr">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div class="action">
                  <a class="learn-btn" href="#">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="container">
          <div class="wrapper">
            <div class="main-heading-otr">
              <p class="tag-section">Services</p>
              <h2 class="heading-otr">Awesome Services for You</h2>
              <p class="desc-otr">
                When an unknown printer took a galley of type and scrambled
              </p>
            </div>
            <div class="inner-wrapper">
              <div class="row row-custom">
                <div
                  class="col-lg-4 col-md-6 cl-outer box1"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="100"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <img
                        class="original-icon"
                        src="assets/img/services-icon-1.svg"
                        alt="computer"
                      />
                      <img
                        class="hover-icon"
                        src="assets/img/services-icon-1.svg"
                        alt="computer"
                      />
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">Web Designing</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 cl-outer box2"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="300"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <div class="img-outer">
                        <img
                          class="original-icon"
                          src="assets/img/services-icon-2.svg"
                          alt="computer"
                        />
                        <img
                          class="hover-icon"
                          src="assets/img/services-icon-2.svg"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">Content Writing</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 cl-outer box3"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="500"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <div class="img-outer">
                        <img
                          class="original-icon"
                          src="assets/img/services-icon-3.svg"
                          alt="computer"
                        />
                        <img
                          class="hover-icon"
                          src="assets/img/services-icon-3.svg"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">App Marketing</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 cl-outer box4"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="600"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <div class="img-outer">
                        <img
                          class="original-icon"
                          src="assets/img/services-icon-4.svg"
                          alt="computer"
                        />
                        <img
                          class="hover-icon"
                          src="assets/img/services-icon-4.svg"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">Data Management</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 cl-outer box5"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="800"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <div class="img-outer">
                        <img
                          class="original-icon"
                          src="assets/img/services-icon-5.svg"
                          alt="computer"
                        />
                        <img
                          class="hover-icon"
                          src="assets/img/services-icon-5.svg"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">Business Strategy</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 cl-outer box6"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  data-sal-delay="1000"
                  data-sal-easing="easeIn-Out-Cubic"
                >
                  <div class="col-inner cur-hover">
                    <div class="img-outer">
                      <img
                        class="original-icon"
                        src="assets/img/services-icon-6.svg"
                        alt="computer"
                      />
                      <img
                        class="hover-icon"
                        src="assets/img/services-icon-6.svg"
                        alt="computer"
                      />
                    </div>
                    <div class="text">
                      <h3 class="sm-heading">Copywriting</h3>
                      <p class="sm-desc">
                        Lorem Ipsum is simply dummy text of the printing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-service-otr">
                <p class="custom-service-inr">
                  Couldn’t found what you’re looking for?
                  <a class="request-btn" href="pages/services.html">
                    Request a Custom Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img class="tours" src="assets/img/torus.png" alt="tours" />
      </div>
      <div class="pricing-corporate">
        <div class="container">
          <div class="wrapper">
            <div class="main-heading-otr">
              <p class="tag-section">Pricings</p>
              <h2 class="heading-otr">Check Nice Pricing Plans</h2>
              <p class="desc-otr">
                Trysail Sail ho Corsair red ensign hulk smartly boom
              </p>
            </div>
            <div class="row row-custom">
              <div class="col-lg-4 col-md-6 col-sm-8 col-otr">
                <div class="col-inr box1">
                  <div class="overlay-hover"></div>
                  <div class="price-content">
                    <h3 class="plan-name">Basic Plan</h3>
                    <p class="plan-desc">
                      For those who are just starting out their business
                    </p>
                    <div class="price-main">
                      <h1 class="price">$79</h1>
                      <span class="slash">/</span>
                      <p class="per-month">per month</p>
                    </div>
                    <div class="plan-list-otr">
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Web Designing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip1">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Content Writing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip2">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">App Marketing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip3">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Data Management</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip4">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Copywriting</p>
                      </div>
                    </div>
                    <div class="action">
                      <a href="#" class="choose-btn">
                        Choose This Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-8 col-otr">
                <div class="col-primary box2">
                  <div class="recommended-otr">
                    <a class="recommended">Recommended</a>
                  </div>
                  <h3 class="plan-name plan-name-white">Standard Plan</h3>
                  <p class="plan-desc plan-desc-white">
                    For those who are just starting out their business
                  </p>
                  <div class="price-main price-main-white">
                    <h1 class="price price-white">$129</h1>
                    <span class="slash slash-white">/</span>
                    <p class="per-month per-month-white">per month</p>
                  </div>
                  <div class="plan-list-otr plan-list-otr-white">
                    <div class="plan-list-inr plan-list-inr-white">
                      <span class="check-circle check-circle-white">
                        <svg
                          class="check-icon check-icon-white"
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                              fill="white"
                            />
                            <path
                              d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip5">
                              <rect width="12" height="8.10826" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="plan-list plan-list-white">Web Designing</p>
                    </div>
                    <div class="plan-list-inr plan-list-inr-white">
                      <span class="check-circle check-circle-white">
                        <svg
                          class="check-icon check-icon-white"
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                              fill="white"
                            />
                            <path
                              d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip6">
                              <rect width="12" height="8.10826" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="plan-list plan-list-white">Content Writing</p>
                    </div>
                    <div class="plan-list-inr plan-list-inr-white">
                      <span class="check-circle check-circle-white">
                        <svg
                          class="check-icon check-icon-white"
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                              fill="white"
                            />
                            <path
                              d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip7">
                              <rect width="12" height="8.10826" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="plan-list plan-list-white">App Marketing</p>
                    </div>
                    <div class="plan-list-inr plan-list-inr-white">
                      <span class="check-circle check-circle-white">
                        <svg
                          class="check-icon check-icon-white"
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                              fill="white"
                            />
                            <path
                              d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip8">
                              <rect width="12" height="8.10826" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="plan-list plan-list-white">Data Management</p>
                    </div>
                    <div class="plan-list-inr plan-list-inr-white">
                      <span class="check-circle check-circle-white">
                        <svg
                          class="check-icon check-icon-white"
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                              fill="white"
                            />
                            <path
                              d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip9">
                              <rect width="12" height="8.10826" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="plan-list plan-list-white">Copywriting</p>
                    </div>
                  </div>
                  <div class="action action-white">
                    <a href="#" class="choose-btn choose-btn-white">
                      Choose This Plan
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-8 col-otr">
                <div class="col-inr box3">
                  <div class="overlay-hover"></div>
                  <div class="price-content">
                    <h3 class="plan-name">Advance Plan</h3>
                    <p class="plan-desc">
                      For those who are just starting out their business
                    </p>
                    <div class="price-main">
                      <h1 class="price">$167</h1>
                      <span class="slash">/</span>
                      <p class="per-month">per month</p>
                    </div>
                    <div class="plan-list-otr">
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip10">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Web Designing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip11">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Content Writing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip12">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">App Marketing</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip13">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Data Management</p>
                      </div>
                      <div class="plan-list-inr">
                        <span class="check-circle">
                          <svg
                            class="check-icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M11.0556 0.1595L4.04939 7.1657C3.83442 7.38067 3.83442 7.7292 4.04939 7.94416C4.26436 8.15913 4.61289 8.15913 4.82785 7.94416L11.834 0.937966C12.049 0.722999 12.049 0.374467 11.8341 0.1595C11.6191 -0.0554678 11.2706 -0.0554672 11.0556 0.1595Z"
                                fill="white"
                              />
                              <path
                                d="M4.83723 7.16926L0.944897 3.27693C0.72993 3.06196 0.381399 3.06196 0.166431 3.27693C-0.0485365 3.4919 -0.0485365 3.84043 0.166431 4.0554L4.05876 7.94773C4.27373 8.1627 4.62226 8.1627 4.83723 7.94773C5.05219 7.73276 5.0522 7.38423 4.83723 7.16926Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip14">
                                <rect
                                  width="12"
                                  height="8.10826"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p class="plan-list">Copywriting</p>
                      </div>
                    </div>
                    <div class="action">
                      <a href="#" class="choose-btn">
                        Choose This Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="custom-price-otr">
              <p class="custom-price-inr">
                Need a custom plan?
                <a class="request-btn" href="#">
                  Request a Custom Plan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cooprate-clients">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-4 img-otr">
              <img
                class="img-inr"
                src="assets/img/client-logo-1.png"
                alt="client"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 img-otr center">
              <img
                class="img-inr"
                src="assets/img/client-logo-2.png"
                alt="client"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 img-otr desktop-center last">
              <img
                class="img-inr"
                src="assets/img/client-logo-4.png"
                alt="client"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 bottom img-otr desktop-last">
              <img
                class="img-inr"
                src="assets/img/client-logo-3.png"
                alt="client"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 bottom img-otr center desktop-last">
              <img
                class="img-inr"
                src="assets/img/client-logo-5.png"
                alt="client"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 bottom img-otr lastotr last">
              <img
                class="img-inr"
                src="assets/img/client-logo-6.png"
                alt="client"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <div class="container">
          <div class="wrapper">
            <div class="row row-custom">
              <div class="col-lg-6 cl-text">
                <div class="cl-text-inner">
                  <div class="main-heading-otr">
                    <p class="tag-section">Testimonials</p>
                    <h2 class="heading-otr">What Others Are Saying About Us</h2>
                    <p class="desc-otr">
                      It was popularised in the 1960s with the release of
                      Letraset heets containing.
                    </p>
                  </div>
                  <div
                    class="owl-carousel slide-outer"
                    id="carousel-home-creative"
                  >
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-1.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              Bobby Evans<span class="dot">•</span>
                              <span>Marketing Manager</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-2.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              Dennis Velez<span class="dot">•</span>
                              <span>Administrator</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-3.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              Martin OC<span class="dot">•</span>
                              <span>Businuss Manager</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-4.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              Danial Robyn<span class="dot">•</span>
                              <span>UI/UX Manager</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-5.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              Ricky Emrge<span class="dot">•</span>
                              <span>Sales Manager</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                    <div class="slide">
                      <div class="profile">
                        <div class="img-outer">
                          <img
                            class="review img-fluid"
                            src="assets/img/review-img-1.png"
                            alt="review-img-1"
                          />
                        </div>
                        <div class="profile-details">
                          <div class="name">
                            <p class="name-person">
                              German Velez<span class="dot">•</span>
                              <span>Creative Manager</span>
                            </p>
                            <div class="stars">
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star blue-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                              <svg
                                class="star gray-star"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.9742 6.93492C17.9121 6.74398 17.7472 6.60484 17.5485 6.57601L11.9684 5.76513L9.47288 0.708735C9.38408 0.528736 9.20074 0.414795 9.00003 0.414795C8.79929 0.414795 8.61598 0.528736 8.52715 0.708735L6.03148 5.76513L0.451505 6.57601C0.252908 6.60484 0.0878505 6.74398 0.0258351 6.93488C-0.0362154 7.12582 0.0155344 7.33538 0.159288 7.47548L4.1969 11.4113L3.24389 16.9689C3.20992 17.1668 3.29128 17.3667 3.45366 17.4847C3.54552 17.5514 3.65433 17.5854 3.76367 17.5854C3.84762 17.5854 3.93185 17.5654 4.00899 17.5248L9 14.9008L13.9908 17.5248C14.1685 17.6182 14.3838 17.6027 14.5462 17.4847C14.7085 17.3667 14.7899 17.1667 14.756 16.9689L13.8027 11.4113L17.8407 7.47544C17.9845 7.33538 18.0362 7.12581 17.9742 6.93492Z"
                                  fill="#6951E9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="desc">
                        <p class="desc-inner">
                          "Perspiciatis unde omnis iste natus error sit
                          voluptatem acc usantium doloremque laudantium...."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 cl-img">
                <div class="img-outer">
                  <img
                    class="img img-fluid cur-hover"
                    src="assets/img/testimonials-images.png"
                    alt="testimonials-images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cta home-cooprate-cta">
        <div class="overlay">
          <div class="container">
            <div class="content1-otr">
              <div class="content">
                <h2 class="heading">Let’s Start Working Together</h2>
                <p class="desc">
                  Long established fact that a reader will be distracted by the
                  readable content
                </p>
              </div>
              <div class="action">
                <a class="get-started-btn" href="#">
                  Get Started for Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog">
        <div class="container">
          <div class="wrapper">
            <div class="main-heading-otr">
              <p class="tag-section">Blog</p>
              <h2 class="heading-otr">Our Latest Blog Posts</h2>
              <p class="desc-otr">
                Salmagundi jack Chain Shot run a rig trysail hulk
              </p>
            </div>
            <div class="row row-custom">
              <div
                class="col-lg-4 col-md-6 col-sm-8 col-otr"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="100"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-inr box1">
                  <div class="img-otr">
                    <img
                      class="img-inr img-fluid"
                      src="assets/img/blog-post-img-1.jpg"
                      alt="blog"
                    />
                  </div>
                  <div class="content-otr">
                    <p class="cata">Startup Tips</p>
                    <div class="blog-head-main">
                      <h3 class="blog-head-otrr">
                        <a href="pages/post-details.html" class="blog-head">
                          Best Business Tips for Digital Businessmen
                        </a>
                      </h3>
                    </div>
                    <a href="pages/post-details.html" class="admin-profile">
                      <div class="admin-img">
                        <img
                          class="admin-img-inr"
                          src="assets/img/author-img-1.png"
                          alt="author"
                        />
                      </div>
                      <div class="admin-name">
                        <p class="admin-link">Admin</p>
                        <p class="dot">•</p>
                        <p class="date">Feb 20, 2021</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-sm-8 col-otr"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="300"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-inr box2">
                  <div class="img-otr">
                    <img
                      class="img-inr img-fluid"
                      src="assets/img/blog-post-img-2.jpg"
                      alt="blog"
                    />
                  </div>
                  <div class="content-otr">
                    <p class="cata">Marketing</p>
                    <div class="blog-head-main">
                      <h3 class="blog-head-otrr">
                        <a href="pages/post-details.html" class="blog-head">
                          Latest Ideas of Ranking Website on Google
                        </a>
                      </h3>
                    </div>
                    <a href="pages/post-details.html" class="admin-profile">
                      <div class="admin-img">
                        <img
                          class="admin-img-inr"
                          src="assets/img/author-img-2.png"
                          alt="author"
                        />
                      </div>
                      <div class="admin-name">
                        <p class="admin-link">Admin</p>
                        <p class="dot">•</p>
                        <p class="date">Feb 20, 2021</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-sm-8 col-otr"
                data-sal="slide-up"
                data-sal-duration="1200"
                data-sal-delay="500"
                data-sal-easing="easeIn-Out-Cubic"
              >
                <div class="col-inr box3">
                  <div class="img-otr">
                    <img
                      class="img-inr img-fluid"
                      src="assets/img/blog-post-img-3.jpg"
                      alt="blog"
                    />
                  </div>
                  <div class="content-otr">
                    <p class="cata">Web Design</p>
                    <div class="blog-head-main">
                      <h3 class="blog-head-otrr">
                        <a href="pages/post-details.html" class="blog-head">
                          Now You Can Grow Your Website Easily
                        </a>
                      </h3>
                    </div>
                    <a href="pages/post-details.html" class="admin-profile">
                      <div class="admin-img">
                        <img
                          class="admin-img-inr"
                          src="assets/img/author-img-3.png"
                          alt="author"
                        />
                      </div>
                      <div class="admin-name">
                        <p class="admin-link">Admin</p>
                        <p class="dot">•</p>
                        <p class="date">Feb 20, 2021</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="shape-4"
              src="assets/img/bg-shape-1.png"
              alt="bg-shape"
            />
            <img
              class="shape-2"
              src="assets/img/bg-shape-2.png"
              alt="bg-shape"
            />
          </div>
        </div>
      </div>
      <div class="footer-main">
        <div class="subscribed">
          <div class="container">
            <div class="row row-custom">
              <div class="col-lg-6 col-content">
                <div class="content-inr">
                  <h3 class="subscribe-heading">
                    Subscribe to Get Latest Updates
                  </h3>
                </div>
              </div>
              <div class="col-lg-6 col-action-otr">
                <div class="col-action-inr">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter Your Email Address"
                  />
                  <div class="action">
                    <a class="subscribe-btn" href="#">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="container">
            <div class="row row-custom">
              <div class="col-lg-4 col-md-12 col-sm-12 box1 col-we-agency">
                <div class="we-agency-inr">
                  <a class="logo-otr" href="index.html">
                    <img
                      class="logo-inr"
                      src="assets/img/brand-logo-white.svg"
                      alt="logo"
                    />
                  </a>
                  <p class="agency-desc">
                    Various versions have evolved over the years sometimes.
                  </p>
                  <div class="icons-outer">
                    <a
                      href="https://www.facebook.com/Visto-Themes-107919454310261"
                      class="facebook-outer"
                    >
                      <i class="fab fa-facebook-f social facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/vistothemes"
                      class="twitter-outer"
                    >
                      <i class="fab fa-twitter social twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/vistothemes/"
                      class="instagram-outer"
                    >
                      <i class="fab fa-instagram social instagram"></i>
                    </a>
                    <a
                      href="https://www.behance.net/vistothemes"
                      class="behance-outer"
                    >
                      <i class="fab fa-behance social behance"></i>
                    </a>
                    <a
                      href="https://dribbble.com/vistothemes/about"
                      class="basketball-outer"
                    >
                      <i class="fas fa-basketball-ball social basketball"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/visto-themes-8966381b1/"
                      class="bottom linkedin-outer"
                    >
                      <i class="fab fa-linkedin-in social linkedin"></i>
                    </a>
                    <a
                      href="https://www.pinterest.com/vistothemes/_saved/"
                      class="bottom1 pinterest-outer"
                    >
                      <i class="fab fa-pinterest-p social pinterest"></i>
                    </a>
                  </div>
                  <div class="icons-outer1">
                    <a
                      href="https://dribbble.com/vistothemes/about"
                      class="basketball-outer1"
                    >
                      <i class="fas fa-basketball-ball social1 basketball1"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/visto-themes-8966381b1/"
                      class="bottom linkedin-outer1"
                    >
                      <i class="fab fa-linkedin-in social1 linkedin1"></i>
                    </a>
                    <a
                      href="https://www.pinterest.com/vistothemes/_saved/"
                      class="bottom1 pinterest-outer1"
                    >
                      <i class="fab fa-pinterest-p social1 pinterest1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-3 box2 navigation">
                <div class="navigation-inr">
                  <h3 class="navi-heading">Navigation</h3>
                  <ul class="navi-list">
                    <li class="navi-list-inr">
                      <a class="navi-link" href="index.html">
                        home
                      </a>
                    </li>
                    <li class="navi-list-inr">
                      <a class="navi-link" href="pages/about.html">
                        About
                      </a>
                    </li>
                    <li class="navi-list-inr">
                      <a class="navi-link" href="pages/services.html">
                        Services
                      </a>
                    </li>
                    <li class="navi-list-inr">
                      <a class="navi-link" href="#">
                        Pages
                      </a>
                    </li>
                    <li class="navi-list-inr">
                      <a class="navi-link" href="pages/blog.html">
                        Blog
                      </a>
                    </li>
                    <li class="navi-list-inr">
                      <a class="navi-link" href="pages/contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 box3 pages">
                <div class="pages-inr">
                  <h3 class="pages-heading">Pages</h3>
                  <ul class="pages-list">
                    <li class="pages-list-inr">
                      <a class="pages-link" href="pages/pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li class="pages-list-inr">
                      <a class="pages-link" href="pages/testimonials.html">
                        Testimonials
                      </a>
                    </li>
                    <li class="pages-list-inr">
                      <a class="pages-link" href="pages/team.html">
                        Team
                      </a>
                    </li>
                    <li class="pages-list-inr">
                      <a class="pages-link" href="#">
                        Other Pages
                      </a>
                    </li>
                    <li class="pages-list-inr">
                      <a class="pages-link" href="pages/faq.html">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-5 box4 cl-address">
                <div class="cl-address-inner">
                  <div class="address">
                    <h3 class="address-heading">Address</h3>
                    <p class="address-desc">
                      2322 Gore Street • Houston • United States
                    </p>
                  </div>
                  <div class="email">
                    <h3 class="email-heading">Email</h3>
                    <p class="email-desc">
                      <a
                        href="https://vistothemes.com/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="9af9f5f4eefbf9eedad4f5eeffe2b4f9f5f7"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div class="phone">
                    <h3 class="phone-heading">Phone</h3>
                    <p class="phone-desc">+1 713-550-4354</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-main">
          <div class="container">
            <div class="row row-custom">
              <div class="copyright col-lg-4">
                <p class="copy">
                  Copyright © 2021
                  <a href="#" class="flexo-link f-link">
                    Visto Themes.
                    <br />
                  </a>
                </p>
              </div>
              <div class="all col-lg-3 padding">
                <p class="all-rights">All Rights Reserved.</p>
              </div>
              <div class="terms col-lg-5">
                <a href="pages/terms%26condition.html" class="link f-link">
                  Terms & Conditions
                </a>
                <span class="dot">•</span>
                <a href="pages/privacy-policy.html" class="link f-link">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-top">
        <a href="#top" id="myBtn" class="top-btn">
          <svg
            class="arrow"
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34396 0.951208L6.34396 17.1028C6.34396 17.5983 6.7457 18.0001 7.24127 18.0001C7.73684 18.0001 8.13858 17.5983 8.13858 17.1028L8.13858 0.951208C8.13858 0.455639 7.73684 0.0538998 7.24127 0.0538998C6.7457 0.0538998 6.34396 0.455639 6.34396 0.951208Z"
              fill="#666666"
            />
            <path
              d="M6.61321 0.256911L0.268282 6.60184C-0.082139 6.95226 -0.082139 7.5204 0.268282 7.87082C0.618702 8.22124 1.18685 8.22124 1.53727 7.87082L7.88219 1.5259C8.23261 1.17547 8.23261 0.607331 7.88219 0.25691C7.53177 -0.0935102 6.96363 -0.0935104 6.61321 0.256911Z"
              fill="#666666"
            />
            <path
              d="M6.60911 1.52613L12.954 7.87106C13.3045 8.22148 13.8726 8.22148 14.223 7.87106C14.5734 7.52064 14.5734 6.9525 14.223 6.60208L7.8781 0.257149C7.52768 -0.0932723 6.95953 -0.093272 6.60911 0.257149C6.25869 0.607569 6.25869 1.17571 6.60911 1.52613Z"
              fill="#666666"
            />
          </svg>
        </a>
      </div> */}
    </>
  );
}
