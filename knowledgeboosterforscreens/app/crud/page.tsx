"use client";
import React, { useState } from "react";

function Crud() {
  const [firstname, setFirstName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleCreate = () => {};
  return (
    <div>
      <div className="px-5">
        <div className="form-group mb-3">
          <label>First Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>
        <div className="form-group mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Crud;
