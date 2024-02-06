import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentChangePassword.css";

const ParentChangePassword: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const parentPasswordPageLoading = "/assets/ParentPageLoading.png";
    const parentPasswordBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentPasswordPageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentPasswordBG})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`parent-change-password-page`}>
      <div className="parent-change-password-top-text-container">
        <p className="parent-change-password-top-text">Change Password</p>
      </div>
      <Link to="/parent-home/profile">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="parent-change-password-back-icon"
        />
      </Link>
      <div className="parent-change-password-section-bg">
        <img src="/assets/ParentChanePasswordSection.png" />
        <div className="password-input-container">
          <img
            src="/assets/ChangeDetailsInput.png"
            className="change-password-input-box-bg"
          />
          <input
            type="password"
            id="password"
            placeholder="Enter New Password"
            className="change-password-input-box"
          />
        </div>
        <div className="password-confirm-input-container">
          <img
            src="/assets/ChangeDetailsInput.png"
            className="confirm-password-input-box-bg"
          />
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            className="confirm-password-input-box"
          />
        </div>
        <img
          src="/assets/ParentConfirmButton.png"
          className="change-password-confirm-button"
        />
        <Link to="/parent-home/profile">
          <img
            src="/assets/ParentCancelButton.png"
            className="change-password-cancel-button"
          />
        </Link>
      </div>
    </div>
  );
};

export default ParentChangePassword;
