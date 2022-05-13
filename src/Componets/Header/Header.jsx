// STYLES
import "./Header.css";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

const Header = ({ shortLink, imgToLink }) => {
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
      </ul>
    </header>
  );
};

export default Header;
