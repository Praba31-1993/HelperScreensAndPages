import React from "react";
import { salesTDMReport } from "../practice/jsondatas";
import CardScreen from "./screen/cards";

function CardAnimation() {
  return (
    <div>
      <div className="row p-5 mx-3">
        {salesTDMReport?.map((sales: any, index: number) => (
          <div className="col-xxl-3 col-md-6 col-12 mb-0">
            <CardScreen key={index} salesList={sales} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardAnimation;
