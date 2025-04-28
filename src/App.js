import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import the components for each day
import Maanantai from "./sivut/Maanantai";
import Tiistai from "./sivut/Tiistai";
import Keskiviikko from "./sivut/Keskiviikko";
import Torstai from "./sivut/Torstai";
import Perjantai from "./sivut/Perjantai";
import Header from "./sivut/Header";

function App() {
  return (
    <Router>
      <div>
        {/* Header containing the links */}
        <Header />
        
        {/* Routes */}
        <Routes>
          <Route path="/maanantai" element={<Maanantai />} />
          <Route path="/tiistai" element={<Tiistai />} />
          <Route path="/keskiviikko" element={<Keskiviikko />} />
          <Route path="/torstai" element={<Torstai />} />
          <Route path="/perjantai" element={<Perjantai />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
