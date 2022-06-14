// STYLES
import "./Header.css";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

const Header = ({ shortLink, imgToLink, qrGenerator }) => {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/" className={`header__link ${shortLink || ""}`}>
            URL Shortener
          </Link>
        </li>
        <li className="header__item">
          <Link to="/img-to-url" className={`header__link ${imgToLink || ""}`}>
            IMG to URL
          </Link>
        </li>
        <li className="header__item">
          <Link
            to="/qr-generator"
            className={`header__link ${qrGenerator || ""}`}
          >
            QR code generator (TEST)
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
