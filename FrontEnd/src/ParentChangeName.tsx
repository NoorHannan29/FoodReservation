import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentChangeName.css";

const ParentChangeName: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const parentNamePageLoading = "/assets/ParentPageLoading.png";
    const parentNameBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentNamePageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentNameBG})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`parent-change-name-page`}>
      <div className="parent-change-name-top-text-container">
        <p className="parent-change-name-top-text">Change Account Name</p>
      </div>
      <Link to="/parent-home/profile">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="parent-change-name-back-icon"
        />
      </Link>
      <div className="parent-change-name-section-bg">
        <img src="/assets/ParentChangeNameSection.png" />
        <div className="username-input-container">
          <img
            src="/assets/ChangeDetailsInput.png"
            className="change-name-input-box-bg"
          />
          <input
            type="text"
            id="username"
            placeholder="Enter New Username"
            className="change-name-input-box"
          />
        </div>
        <img
          src="/assets/ParentConfirmButton.png"
          className="change-name-confirm-button"
        />
        <Link to="/parent-home/profile">
          <img
            src="/assets/ParentCancelButton.png"
            className="change-name-cancel-button"
          />
        </Link>
      </div>
    </div>
  );
};

export default ParentChangeName;
