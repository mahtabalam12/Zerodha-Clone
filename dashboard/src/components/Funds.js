import React from "react";
import { funds } from "../data/data";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn btn-green">Add funds</button>
        <button className="btn btn-blue">Withdraw</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            {funds.equity.map((item, index) => (
              <div className="data" key={index}>
                <p>{item.label}</p>
                <p className={`imp${item.variant === "colored" ? " colored" : ""}`}>
                  {item.value}
                </p>
              </div>
            ))}
            <hr />
            {funds.collateral.map((item, index) => (
              <div className="data" key={`collateral-${index}`}>
                <p>{item.label}</p>
                <p className="imp">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <button className="btn btn-blue">Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
