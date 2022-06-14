// STYLES
import "./QRGenerator.css";

// HOOK
import { useState } from "react";

// COMPONENTS
import Loader from "../../Componets/Loader";

// LIBS
import { saveAs } from "file-saver";

const QRGenerator = () => {
  const [qrLinkInput, setQrLinkInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loader, setLoader] = useState(false);

  const generateQR = async (e) => {
    e.preventDefault();
    setLoader(true);
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=${256}x${256}&data=${qrLinkInput}`
    );
    setLoader(false);
  };

  return (
    <div className="qr">
      <h2 className="qr__title">
        {" "}
        <span>QR</span> GENERATOR
      </h2>

      <form className="qr__form" onSubmit={generateQR}>
        <input
          className="qr__form-input"
          type="text"
          value={qrLinkInput}
          onChange={(e) => setQrLinkInput(e.target.value)}
          placeholder="Paste a link to generate QR"
        />
        <button type="submit" className="qr__form-button">
          Generate
        </button>
      </form>

      {qrCode && (
        <div>
          <div className="qr__image-box">
            {loader ? <Loader /> : <img src={qrCode} alt="qrCode" />}
          </div>
          <button
            className="qr__form-button full"
            onClick={() => saveAs(qrCode, "image.png")}
          >
            DOWNLOAD
          </button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
