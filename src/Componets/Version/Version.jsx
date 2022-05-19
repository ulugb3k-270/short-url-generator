// STYLES
import "./Version.css";

// Hooks
import { useState } from "react";

// MUI
import { Close } from "@material-ui/icons";

// JSON DATABASE
import Updates from "./Updates.json";

const Version = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="version">
      <p onClick={() => setPopUp(!popUp)}>{Updates[0].version}</p>

      {popUp && (
        <div className="version__popup">
          <Close onClick={() => setPopUp(false)} />
          {Updates.reverse().map((update, i) => (
            <ul key={i} className="version__list">
              <li className="version__item">
                <div className="version__item-header">
                  <h2>{update.version}</h2>
                  <h3>{update.date}</h3>
                </div>
                <div
                  style={{ marginTop: "-20px" }}
                  className="version__item-main"
                >
                  <p>New Features: </p>
                  {update.features.map((_, i) => (
                    <p key={i} style={{ marginTop: "-10px" }}>{update.features[i]}</p>
                  ))}
                  <p>Bug Fixes: </p>
                  {update.bugs.map((_, i) => (
                    <p key={i} style={{ marginTop: "-10px" }}>{update.bugs[i]}</p>
                  ))}
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Version;
