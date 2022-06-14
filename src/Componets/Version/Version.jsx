// STYLES
import "./Version.css";

// Hooks
import { useEffect, useState } from "react";

// MUI
import { Close } from "@material-ui/icons";

// JSON DATABASE
// import Updates from "./Updates.json";

const Version = () => {
  const [popUp, setPopUp] = useState(false);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch("./Updates.json")
      .then((res) => res.json())
      .then((data) => setUpdates(data));
  }, []);

  return (
    <div className="version">
      {updates.length && (
        <p onClick={() => setPopUp(!popUp)}>{updates[0].version}</p>
      )}

      {popUp && (
        <div className="version__popup">
          <Close onClick={() => setPopUp(false)} />
          {updates.map((update, i) => (
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
                    <p key={i} style={{ marginTop: "-10px" }}>
                      {update.features[i]}
                    </p>
                  ))}
                  <p>Bug Fixes: </p>
                  {update.bugs.map((_, i) => (
                    <p key={i} style={{ marginTop: "-10px" }}>
                      {update.bugs[i]}
                    </p>
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
