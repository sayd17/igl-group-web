"use client";
import React from "react";
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
  return (
    <>
      <footer
        style={{ backgroundColor: "#03141b" }}
        className={`text-light pt-5`}
      >
        <div className="content-wrapper">
          <div className="row d-flex flex-row justify-content-between">
            <div className="col-md-3 mb-0">
              <h5>About IGL Group</h5>
              <ul className="list-unstyled">
                {abouIgl.map((title, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${styles.footer} text-light text-decoration-none`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 mb-0">
              <h5>Our Sisters Concern</h5>
              <ul className="list-unstyled">
                {sisters.map((title, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${styles.footer} text-light text-decoration-none`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 mb-0">
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                {services.map((title, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${styles.footer} text-light text-decoration-none`}
                    >
                      <ChevronDoubleRightIcon height={15} width={15} />
                      {title.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-3 mb-0">
              <h5>Our Products</h5>
              <ul className="list-unstyled">
                {products.map((title, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${styles.footer} text-light text-decoration-none`}
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
                outline
                color="light"
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
    </>
  );
};

export default Footer;
