import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Viikon Ruokalista</h1>
      <nav>
        <Link to="/maanantai">Maanantai</Link> |{" "}
        <Link to="/tiistai">Tiistai</Link> |{" "}
        <Link to="/keskiviikko">Keskiviikko</Link> |{" "}
        <Link to="/torstai">Torstai</Link> |{" "}
        <Link to="/perjantai">Perjantai</Link>
      </nav>
    </div>
  );
}

export default Header;
