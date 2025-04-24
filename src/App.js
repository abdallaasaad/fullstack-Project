// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApartmentList from "./components/ApartmentList";
// import Login from "./components/Login";
// import RegisterPage from "./components/RegisterPage";
import SignupForm from "./components/SignupForm";
import "./styles/App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



function App() {
  return (
    <Router>
      <div className="app gradient-bg">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="hero enhanced-hero">
                  <h1>Find Your Perfect Apartment Near Campus</h1>
                  <p>Explore the newest listings around your university</p>
                </header>
                <ApartmentList />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <div className="form-page">
                <div className="form-wrapper glass-box">
                  <h2 className="form-title">Welcome Back</h2>
                  <form className="form-grid">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required />

                    <button type="submit" className="btn gradient-btn">Login</button>
                  </form>
                </div>
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="form-page">
                <div className="form-wrapper glass-box">
                  <h2 className="form-title">Create Your Account</h2>
                  <SignupForm />
                </div>
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
