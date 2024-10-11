import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are a leading company in providing innovative solutions to
              everyday challenges. We strive for excellence and customer
              satisfaction.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-light"
                >
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-light"
                >
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-light"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row">
          <div className="col text-center pt-3">
            <p>&copy; 2024 IGL Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
