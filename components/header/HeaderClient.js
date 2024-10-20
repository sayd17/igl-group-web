"use client";

import Link from "next/link";
import { useStateContext } from "@/app/context/contextProvider";

export default function HeaderClient({ items, teams }) {
  const { setCurrentSister, currentTeam, setCurrentTeam } = useStateContext();
  return (
    <>
      {/* <ContextProvider> */}
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          // style={{ backgroundColor: "#03141b" }}
        >
          <div className="container-fluid content-wrapper">
            <img
              src="/assets/img/logo.png"
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
            <Link href="/" className="ms-3 navbar-brand">
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
                          <li key={index}>
                            <Link
                              className="dropdown-item"
                              href="/sisters-concern"
                              onClick={(e) => {
                                setCurrentSister(item);
                              }}
                            >
                              {item?.name}
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
                        {teams?.map((team, index) => (
                          <li key={index}>
                            <Link
                              className="dropdown-item"
                              href="/team"
                              onClick={(e) => {
                                setCurrentTeam(team);
                              }}
                            >
                              {team?.name}
                            </Link>
                          </li>
                        ))}
                        {/* <li>
                          <a className="dropdown-item" href="/team">
                            BOARD OF DIRECTORS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/team">
                            BOARD OF OFFICER/STAFF
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link href="/gallery" className="nav-link">
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
