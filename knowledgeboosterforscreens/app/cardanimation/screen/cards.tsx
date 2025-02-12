import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
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
              <FontAwesomeIcon
                icon={faChartSimple}
                style={{ cursor: "pointer", height: "19px" }}
              />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title" title="EmployeeName">{salesList?.conName}</h5>
            <p className="card-text">Dealer : {salesList?.dealCloser}</p>
          </div>
        </div>

        {/* Back Side (Status) */}
        <div className="card-back">
          {salesList?.status === "Closed" ? (
            <FontAwesomeIcon
              icon={faTrash}
              style={{ cursor: "pointer", height: "100px" }}
              title="Closed"
            />
          ) : (
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ cursor: "pointer", height: "100px" }}
              title="Inprogress"

            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardScreen;
