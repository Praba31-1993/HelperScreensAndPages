"use client";
import React, { useState } from "react";

function AdditionSubtraction() {
  const [firstValue, setFirstValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [secondValue, setSecondValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [result, setResult] = useState<String>("");

  const Addition = () => {
    let res = Number(firstValue) + Number(secondValue);
    setResult(res.toString());
  };

  const Subtraction = () => {
    let res = Number(firstValue) - Number(secondValue);
    setResult(res.toString());
  };

  const MUltiply = () => {
    let res = Number(firstValue) * Number(secondValue);
    setResult(res.toString());
  };

  const Division = () => {
    let res = Number(firstValue) / Number(secondValue);
    setResult(res.toString());
  };

  return (
    <div>
      <h3>Welcome to Calculation</h3>
      <hr />
      <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
        <div className="card-body">
          <div className="form-group">
            <label>First Value</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="First Value"
              value={firstValue}
              onChange={(e) => setFirstValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Second Value</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Second Value"
              value={secondValue}
              onChange={(e) => setSecondValue(e.target.value)}
            />
          </div>

          <div className="d-flex gap-3 mt-3 flex-wrap">
            <button className="btn btn-outline-primary" onClick={Addition}>
              Add
            </button>
            <button className="btn btn-primary" onClick={Subtraction}>
              Subtraction
            </button>

            <button className="btn btn-outline-primary" onClick={MUltiply}>
              Multiply
            </button>
            <button className="btn btn-primary" onClick={Division}>
              Division
            </button>
          </div>
          <p>Result = {result.replace("-", "")}</p>
        </div>
      </div>
    </div>
  );
}

export default AdditionSubtraction;
