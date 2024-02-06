import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(
    "/assets/MainPageLoading.png"
  );
  const [showRegisterBox, setShowRegisterBox] = useState(false);

  useEffect(() => {
    const firstImageUrl = "/assets/MainPageLoading.png";
    const secondImageUrl = "/assets/MainPageBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${firstImageUrl})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${secondImageUrl})`;
      setImageUrl(secondImageUrl);

      // Set showRegisternBox to true after the image transition
      setShowRegisterBox(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className="Register">
      <div className={`register-box ${showRegisterBox ? "visible" : ""}`}>
        <h2>Register an account</h2>
        <div className="input-container">
          <label htmlFor="name">Parent's Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <p className="login-link">
          Already have an account? <Link to="/">Login here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
