import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  let [inputVal, setInputVal] = useState("");
  let [qrCodeVal, setQrCodeVal] = useState("");

  const generateQR = () => {
    setQrCodeVal(inputVal);
  };

  return (
    <div className="qrCodeGenerator">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="textBox">
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") generateQR();
            }}
            type="text"
            placeholder="Enter your text here"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button onClick={generateQR}>Generate</button>
        </div>
        <div className="qrcode">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "20em" }}
            value={qrCodeVal}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
