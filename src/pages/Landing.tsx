import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <p className="center">Parakeet</p>
      <div className="bouton"><Link to="/">Sold Out</Link></div>
      <div className="bouton"><Link to="/dashboard">Dashboard</Link></div>
    </>
  );
}
