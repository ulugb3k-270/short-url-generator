// HOOKS
import { useState } from "react";

// STYLES
import "./App.css";

// COMPONENTS
import BackgroundAnimate from "./Componets/BackgroundAnimate";
import Footer from "./Componets/Footer";
import InputShortener from "./Componets/InputShortener";
import LinkResult from "./Componets/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");


  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
      <Footer />
    </div>
  );
}

export default App;
