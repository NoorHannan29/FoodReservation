import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentManageProfile.css";

const ParentManageProfile: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const parentProfilePageLoading = "/assets/ParentPageLoading.png";
    const parentProfileBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentProfilePageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentProfileBG})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`parent-profile-page ${showContent ? "visible" : ""}`}>
      <div className="parent-profile-top-text-container">
        <p className="parent-profile-top-text">Manage Profile</p>
      </div>
      <Link to="/parent-home/settings">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="parent-profile-back-icon"
        />
      </Link>
      <div className="parent-profile-section-bg">
        <img src="/assets/ParentProfileSection.png" />
      </div>
      <Link to="/parent-home/profile/change-name">
        <img
          src="/assets/ParentChangeNameButton.png"
          alt="Change Account Name"
          className="parent-profile-change-name"
        />
      </Link>
      <Link to="/parent-home/profile/change-password">
        <img
          src="/assets/ParentChangePasswordButton.png"
          alt="Change Password"
          className="parent-profile-change-password"
        />
      </Link>
      {/*yeah good luck doing this idk connect to database lol*/}
      <img
        src="/assets/ParentDeleteAccount.png"
        alt="Delete Account"
        className="parent-profile-delete"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ParentManageProfile;
