/*
import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
*/
import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        <div className="col-lg-6 col-md-12">

          <h1 className="fw-bold display-6 mb-5 text-center text-lg-start">
            Trust with confidence
          </h1>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">
              Customer-first always
            </h2>

            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha
              with ₹3.5+ lakh crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">
              No spam or gimmicks
            </h2>

            <p className="text-muted">
              No gimmicks, spam, gamification, or annoying push
              notifications. High quality apps that you use at
              your pace.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">
              The Zerodha universe
            </h2>

            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our
              investments in 30+ fintech startups offer tailored
              services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">
              Do better with money
            </h2>

            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we
              actively help you do better with your money.
            </p>
          </div>

        </div>

        <div className="col-lg-6 col-md-12 text-center">

          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "500px", width: "100%" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">

            <a
              href="/"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              Explore our products{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

            <a
              href="/"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              Try Kite demo{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;