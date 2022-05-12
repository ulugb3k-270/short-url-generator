// HOOKS
import { useState } from "react";

// STYLES
import "./App.css";

// COMPONENTS
import BackgroundAnimate from "./Componets/BackgroundAnimate";
import Footer from "./Componets/Footer";
import InputShortener from "./Componets/InputShortener";
import LinkResult from "./Componets/LinkResult";
import UploadPhotos from "./Componets/UploadPhotos";

// react-router-dom
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(
    "created by " + "%cUlugbek Asadov",
    `color: green; font-size: 40px;`
  );
  console.log(
    " %cPORTFOLIO",
    `color: red; font-size: 20px;`,
    ">>> https://ulugbekasadov.uz"
  );
  console.log(
    " %cLINKEDIN",
    `color: #0a66c2; font-size: 20px;`,
    ">>> https://www.linkedin.com/in/ulugbek-asadov-607970231/"
  );
  console.log(
    " %cGITHUB",
    `color: Yellow; font-size: 20px;`,
    ">>> https://github.com/ulugb3k-270"
  );

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputShortener setInputValue={setInputValue} />
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
                <Footer />
              </>
            }
          />
          <Route
            path="/img-conventer"
            element={
              <>
                <UploadPhotos />
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
