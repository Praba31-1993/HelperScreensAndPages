import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    address: "",
  });

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
    <div className="container mt-5">
      <h2>Form → Generate QR → Scan</h2>

      <div className="row">
        {/* First Name */}
        <div className="col-6 mb-3">
          <p>First Name</p>
          <input
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="col-6 mb-3">
          <p>Last Name</p>
          <input
            name="lastname"
            placeholder="Enter your Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="col-6 mb-3">
          <p>Email</p>
          <input
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Mobile */}
        <div className="col-6 mb-3">
          <p>Mobile Number</p>
          <input
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="col-6 mb-3">
          <p>Address</p>
          <input
            name="address"
            placeholder="Enter your Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="col-2">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      {qrData && (
        <div className="mt-4">
          <h3>Your QR Code:</h3>
          <QRCode value={qrData} size={200} />
        </div>
      )}

      <br />

      <h3>Scan QR Code</h3>

      {/* QR Scanner (commented by you) */}

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
