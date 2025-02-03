"use client";
import React, { useState } from "react";

function PrimeAndArmstrong() {
  const [firstValue, setFirstValue] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    const num = Number(firstValue);
  
    if (num < 2) {
      setResult(`${num} is Not a Prime Number`);
      return;
    }
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        setResult(`${num} is Not a Prime Number`);
        return; 
      }
    }
  
    setResult(`${num} is a Prime Number`);
  };

  const checkArmstrong = () => {
    const num = Number(firstValue);
    if (isNaN(num)) {
      setResult("Please enter a valid number.");
      return;
    }
    const digits = firstValue.split("");
    const power = digits.length;
    let sum = 0;
    for (let digit of digits) {
      sum += Number(digit) ** power;
    }
    setResult(sum === num ? `${firstValue} is an Armstrong Number` : `${firstValue} is not an Armstrong Number`);
  };

  return (
    <div>
      <div className="card m-5 p-5" style={{ width: "25%" }}>
        <div className="form-group mb-2">
          <label className="mt-2">Input Value</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a number"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        </div>
        <div className="d-flex gap-3 mb-2">
          <button className="btn btn-outline-primary" onClick={checkPrime}>Check Prime</button>
          <button className="btn btn-outline-primary" onClick={checkArmstrong}>Check Armstrong</button>
        </div>
        <div className="form-group mt-2">
          <label className="mt-2">Result</label>
          <input
            type="text"
            className="form-control"
            placeholder="Result"
            value={result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default PrimeAndArmstrong;
