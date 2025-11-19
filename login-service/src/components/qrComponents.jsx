import React, { useState } from "react";
    import QRCode from 'react-qr-code';

const QrComponents = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [qrData, setQrData] = useState("");
  const [scanResult, setScanResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataString = JSON.stringify(formData);
    setQrData(dataString);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form → Generate QR → Scan</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Generate QR Code</button>
      </form>

      <br /><br />

      {qrData && (
        <div>
          <h3>Your QR Code:</h3>
          <QRCode value={qrData} size={200} />
        </div>
      )}

      <br /><br />

      <h3>Scan QR Code</h3>
      {/* <QRCode
        delay={300}
        onError={(err) => console.log(err)}
        onScan={(data) => {
          if (data) {
            setScanResult(data);
          }
        }}
        style={{ width: "300px" }}
      /> */}

      {scanResult && (
        <div>
          <h3>Scanned Details:</h3>
          <pre>{JSON.stringify(JSON.parse(scanResult), null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QrComponents;
