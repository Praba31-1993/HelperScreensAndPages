"use client";
import React, { useRef, useState } from "react";
import applicationLogo from "@/public/applicatonformlogo.png";
import Image from "next/image";

function JobApplicationForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{background:'ghostwhite'}}></div>
      <div className="col-md-6" style={{background:'linen'}}>
        <div className="p-4">
          <div className="d-flex w-100 justify-content-between align-items-center mb-5">
            <p>New Job Application Form</p>
            <Image src={applicationLogo} alt="logo" width={150} height={150} />
          </div>
          <hr className="mb-4" />

          <div className="row">
            <div className="col-12">
              <p>Full Name</p>
            </div>
            <div className="col-6 mb-5">
              <input
                type="text"
                className="form-control  mb-2"
                placeholder="Enter First Name"
              />
              <label className="text-muted">First Name</label>
            </div>

            <div className="col-6 mb-5">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Last Name"
              />
              <label className="text-muted">Last Name</label>
            </div>

            <div className="col-6 mb-5">
              <label className="text-muted mb-2">Email</label>

              <input
                type="text"
                className="form-control  mb-2"
                placeholder="Enter Email"
              />
            </div>

            <div className="col-6 mb-5">
              <label className="text-muted mb-2">Phone Number</label>

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="col-6 mb-5">
              <label className="text-muted mb-2">
                What Position are you applying for?
              </label>
              <select className="form-control form-control-lg">
                <option>Developer</option>
                <option>Manager</option>
                <option>Tester</option>
              </select>
            </div>

            <div className="col-6 mb-5">
              <label className="text-muted mb-2">Available Start Date</label>

              <input
                type="date"
                className="form-control mb-2"
                placeholder="Enter Phone Number"
                style={{ height: "48px" }}
              />
            </div>

            <div className="col-12 mb-5">
              <label className="text-muted mb-2">
                what is your current application status
              </label>
              <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">Employed</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">UnEmployed</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label
                    className="form-check-label"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Self Employed
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">Student</label>
                </div>
              </div>
            </div>

            <div className="col-12 mb-5">
              <label className="text-muted mb-2">
                what is your current application status
              </label>
              <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">Upload Resume</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label">Provide URL</label>
                </div>
              </div>
            </div>

            <div className="col-12 mb-5">
              <label
                htmlFor="file"
                className="d-flex flex-column align-items-center justify-content-center border border-success rounded"
                style={{
                  cursor: "pointer",
                  color: "green",
                  height: "200px",
                  width: "100%",
                  backgroundColor: "#f8f9fa", // light gray background
                  fontSize: "1.25rem", // larger font
                  textAlign: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="green"
                  className="bi bi-cloud-arrow-up mb-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a5.53 5.53 0 0 1 4.473 2.326A4.5 4.5 0 1 1 13.5 11H6.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L6.707 10H13.5a3.5 3.5 0 1 0-2.622-5.915.5.5 0 0 1-.748-.044A4.53 4.53 0 0 0 8 1a4.5 4.5 0 0 0-4.473 3.765.5.5 0 0 1-.66.386A3.5 3.5 0 0 0 3.5 11h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L7.293 12H3.5A4.5 4.5 0 0 1 4.586 3.58 5.53 5.53 0 0 1 8 0Z"
                  />
                </svg>
                <div>
                  <strong>Click to upload your resume</strong>
                </div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  or drag and drop file here
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </label>

              {selectedFile && (
                <p className="mt-2 text-success">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
