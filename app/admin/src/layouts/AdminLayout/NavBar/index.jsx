"use client";
import React, { useContext, useState } from "react";
import { Link } from "next/navigation";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

import { ConfigContext } from "../../../contexts/ConfigContext";
import * as actionType from "../../../store/actions";

function NavBar() {
  const [moreToggle, setMoreToggle] = useState(false);
  const configContext = useContext(ConfigContext);
  const { collapseMenu, headerFixedLayout, layout } = configContext;
  const { dispatch } = configContext;

  let headerClass = ["navbar", "pcoded-header", "navbar-expand-lg"];
  if (headerFixedLayout && layout === "vertical") {
    headerClass = [...headerClass, "headerpos-fixed"];
  }

  let toggleClass = ["mobile-menu"];
  if (collapseMenu) {
    toggleClass = [...toggleClass, "on"];
  }

  const navToggleHandler = () => {
    dispatch({ type: actionType.COLLAPSE_MENU });
  };

  let moreClass = ["mob-toggler"];

  let collapseClass = ["collapse navbar-collapse"];
  if (moreToggle) {
    moreClass = [...moreClass, "on"];
    collapseClass = [...collapseClass, "show"];
  }

  return (
    <React.Fragment>
      <header className={headerClass.join(" ")}>
        <div>
          <div className="m-header">
            <Link
              href="#"
              className={toggleClass.join(" ")}
              id="mobile-collapse"
              onClick={navToggleHandler}
            >
              <span />
            </Link>
            {/* <Link href="#" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Datta Able</span>
            </Link> */}
            {/* <Link
              href="#"
              className={moreClass.join(" ")}
              onClick={() => setMoreToggle(!moreToggle)}
            >
              <i className="feather icon-more-vertical" />
            </Link> */}
          </div>
          {/* <div
        style={{ justifyContent: "space-between" }}
        className={collapseClass.join(" ")}
      >
        <NavLeft />
        <NavRight />
      </div> */}
        </div>
      </header>
    </React.Fragment>
  );
}

export default NavBar;
