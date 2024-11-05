import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="d-sm-flex ms-5 row justify-content-center justify-content-sm-between py-2">
          <span className="text-muted col text-center text-sm-left d-block d-sm-inline-block">
            Copyright ©{" "}
            <a
              href="https://www.iglweb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iglweb.com
            </a>
            2024
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
