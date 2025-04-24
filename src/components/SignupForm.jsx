import React, { useState } from "react";
import "../styles/Form.css";

function SignupForm() {
  const [userType, setUserType] = useState("student");

  return (
    <form className="form-grid">
      <label>ID Number</label>
      <input type="text" placeholder="Enter your ID" required />

      <label>Username</label>
      <input type="text" placeholder="Choose a username" required />

      <label>Email</label>
      <input type="email" placeholder="Enter your email" required />

      <label>Password</label>
      <input type="password" placeholder="Create a password" required />

      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm your password" required />

      <label>Phone</label>
      <input type="text" placeholder="Enter your phone number" required />

      <label>City</label>
      <input type="text" placeholder="Your city" required />

      <label>University</label>
      <input type="text" placeholder="University name" required />

      <label>Degree (optional)</label>
      <input type="text" placeholder="Degree program" />

      <label>Academic Year</label>
      <select>
        <option>Choose</option>
        <option>1st Year</option>
        <option>2nd Year</option>
        <option>3rd Year</option>
        <option>4th Year+</option>
      </select>

      <label>User Type</label>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="student">Student</option>
        <option value="owner">Apartment Owner</option>
      </select>

      {userType === "student" && (
        <>
          <label>Upload Resume</label>
          <input type="file" />
        </>
      )}

      {userType === "owner" && (
        <>
          <label>Ownership Document</label>
          <input type="file" />
        </>
      )}

      <button type="submit" className="btn gradient-btn">Register</button>
    </form>
  );
}

export default SignupForm;
