// Material-UI core
import { Button } from "@material-ui/core";

// React Hooks
import { useState, useEffect } from "react";

// Styles
import "./Footer.css";

const Footer = () => {
  const [isCookies, setIsCookies] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsCookies(true);
    }, 1000);
  }, []);

  return (
    <footer className={`footer ${isCookies ? "" : "hidden"} `}>
      <p>
        By continuing to use our site, you agree to our Terms of Service and
        Privacy Policy. You can learn more about how we use cookies by reviewing
        our Privacy Policy. <br />  Creator:{" "}
        <a
          href="https://ulugbekasadov.uz"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsCookies(false)}
        >
          ulugbekasadov.uz
        </a>
      </p>
      <Button
        variant="outlined"
        className="button"
        onClick={() => setIsCookies(false)}
      >
        Close
      </Button>
    </footer>
  );
};

export default Footer;
