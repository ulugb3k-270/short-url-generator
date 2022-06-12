// STYLES
import "./QRGenerator.css";

// HOOK
import { useState } from "react";

//Libs
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [qrLinkInput, setQrLinkInput] = useState("");

  const generateQR = (e) => {
    e.preventDefault();
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
      </form>

      {qrLinkInput && (
        <div>
          <div className="qr__image-box">
              <QRCode download={true} value={qrLinkInput} className="qr__image" />
           
          </div>
          <button className="qr__form-button">DOWNLOAD</button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
