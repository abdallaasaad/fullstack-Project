// components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>CampusRent</div>
      <div className="nav-links">
        <button className="btn contact" onClick={() => navigate("/contact")}>Contact</button>
        <button className="btn login" onClick={() => navigate("/login")}>Login</button>
        <button className="btn signup" onClick={() => navigate("/signup")}>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;