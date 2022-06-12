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
import Version from "./Componets/Version";

// react-router-dom
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Componets/Header/Header";
import QRGenerator from "./pages/qr-generator/QRGenerator";

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
                <Header shortLink="active" />
                <InputShortener setInputValue={setInputValue} />
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
                <Version />
                <Footer />
              </>
            }
          />
          <Route
            path="/img-to-url"
            element={
              <>
                <Header imgToLink="active" />
                <UploadPhotos />
                <BackgroundAnimate />
                <Version />
              </>
            }
          />

          <Route
            path="/qr-generator"
            element={
              <>
                <Header qrGenerator="active" />
                <QRGenerator />
                <BackgroundAnimate />
                <Version />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
