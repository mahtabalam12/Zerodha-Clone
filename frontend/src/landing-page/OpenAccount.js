/*
import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
*/

import React from "react";

function OpenAccount() {
  return (
    <div className="container-fluid py-5 mb-5">
      <div className="row justify-content-center text-center">

        <div className="col-lg-8 col-md-10 col-12">

          <h1 className="fw-bold display-5 mt-3 mb-4">
            Open a Zerodha account
          </h1>

          <p className="lead mb-4">
            Modern platforms and apps, ₹0 investments,
            and flat ₹20 intraday and F&O trades.
          </p>

          <button
            className="btn btn-primary btn-lg px-5 py-2"
            style={{ borderRadius: "10px" }}
          >
            Sign up Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default OpenAccount;