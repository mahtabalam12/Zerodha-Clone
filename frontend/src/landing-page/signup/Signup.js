/*
import React from "react";

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <p>Sign up for an account.</p>
    </div>
  );
}

export default Signup;
*/
import React, { useEffect } from "react";

function Signup() {

  useEffect(() => {
    window.location.href = "https://zerodha-clone-1-dashboards.onrender.com";
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

export default Signup;