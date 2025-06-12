import React from "react";

import "../cardanimation.css";

function CardScreen({ salesList }: any) {
  return (
    <div className="card-container">
      <div className="card text-dark bg-light mb-3 cardanime">
        {/* Front Side */}
        <div className="card-front">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Sales Report</p>
            
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title" title="EmployeeName">{salesList?.conName}</h5>
            <p className="card-text">Dealer : {salesList?.dealCloser}</p>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default CardScreen;
