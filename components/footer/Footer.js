"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { abouIgl, products, services, sisters, socialMedia } from "@/constants";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  const [showSocialNav, setShowSocialNav] = useState(false);

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        setShowSocialNav(true);
      } else {
        setShowSocialNav(false);
      }
    });
  });
  return (
    <>
      <footer
        style={{ backgroundColor: "#03141b" }}
        className={`text-light pt-5`}
      >
        <div className="content-wrapper">
          <div className="row d-flex flex-row justify-content-between">
            <div className="col-md-2 mb-0">
              <h5>About IGL Group</h5>
              <ul className="list-unstyled">
                {abouIgl.map((title, index) => (
                  <li key={index}>
                    <a
                      href={title.link}
                      target="_blank"
                      className={`${styles.footer}`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-2 mb-0">
              <h5>Our Sisters Concern</h5>
              <ul className="list-unstyled">
                {sisters.map((title, index) => (
                  <li key={index}>
                    <a
                      href={title.link}
                      target="_blank"
                      className={`${styles.footer} `}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`col-md-3 mb-0`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1888135355393!2d90.3784708!3d23.740645400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b5c1cbd409%3A0x33ef8cc2e2b3fc6e!2z4KaG4KaH4Kac4Ka_4KaP4KayIOCml-CnjeCmsOCngeCmqg!5e0!3m2!1sbn!2sbd!4v1730521802847!5m2!1sbn!2sbd"
                width="300"
                height="200"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-2 mb-0">
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                {services.map((title, index) => (
                  <li key={index}>
                    <a
                      href={title.link}
                      target="_blank"
                      className={`${styles.footer}`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-2 mb-0">
              <h5>Our Products</h5>
              <ul className="list-unstyled">
                {products.map((title, index) => (
                  <li key={index}>
                    <a
                      href={title.link}
                      target="_blank"
                      className={`${styles.footer}`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="col-md-2 mb-0">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Product Cataloge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Google Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Facebook Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Twitter Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  News Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Popular Directory List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Free Online Storage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.footer}text-light text-decoration-none`}
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
      </footer>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            {socialMedia.map((media, index) => (
              <MDBBtn
                key={index}
                outline
                color={media.color}
                floating
                className={`m-1 ${styles.fixedWidthHeight}`}
                href={media.link}
                role="button"
              >
                <MDBIcon icon={media.icon} />
              </MDBBtn>
            ))}
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a
            className="text-white"
            style={{ textDecoration: "none" }}
            href="https://iglgroup.org/"
          >
            IGL Group. All Rights Reserved.
          </a>
          <Link href="/admin">Admin</Link>
        </div>
      </MDBFooter>
      <div
        className={`${styles.socialNav} ${!showSocialNav ? "hide" : ""}`}
        // style={{ display: "none" }}
      >
        <ul className={`social-links-fix ${styles.list}`}>
          {socialMedia.map((media, index) => (
            <li key={index} className={`buble-facebook`}>
              <MDBBtn
                key={index}
                outline
                color={media.color}
                floating
                className={`${styles.fixedWidthHeight} btn-floating ${styles.list}`}
                href={media.link}
                role="button"
              >
                <MDBIcon icon={media.icon} />
              </MDBBtn>
            </li>
          ))}
        </ul>
      </div>
      {/* <div
        className={`${styles.scrollToTop} ${
          !showSocialNav ? "hide" : ""
        } `}
        // style={{ display: "none" }}
      >
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </a>
      </div> */}
    </>
  );
};

export default Footer;
