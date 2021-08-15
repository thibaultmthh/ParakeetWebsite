/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

export default function Login() {
  return (
    <>
      <p className="center" style={{ marginBottom: "100px" }}>Parakeet</p>
      <div className="info flex" style={{ marginTop: "0px" }}>
        <div className="InfoCheckout" style={{ marginBottom: "10px" }}>
          <div className="center-item Yearly" style={{ marginBottom: "10px" }}>
            Login
          </div>
          <div className="center-item">
            <p />
            By clicking on &quot;Login with discord&quot; you agree with our
          </div>
          <div className="center-item">
            <a href="google.com" className="Term"> Terms and conditions</a>
          </div>
        </div>
        <div className="btn checkout flex" onClick={() => { window.location.href = "https://us-central1-parakeet-twitter.cloudfunctions.net/api/login"; }}>Login with discord</div>
      </div>
    </>
  );
}
