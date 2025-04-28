import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h2>Viikon Ruokalista ༼ つ ◕_◕ ༽つ</h2>
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
