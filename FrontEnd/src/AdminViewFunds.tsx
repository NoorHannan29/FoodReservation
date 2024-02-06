import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminViewFunds.css";

const AdminViewFunds: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const adminFundsLoading = "/assets/AdminLoading.png";
    const adminFundsBackground = "/assets/AdminBackground2.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${adminFundsLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${adminFundsBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`admin-funds-page ${showContent ? "visible" : ""}`}>
      <Link to="/admin">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="admin-funds-back-icon"
        />
      </Link>
      <div className="admin-funds-top-text-container">
        <p className="admin-funds-top-text">Admin View Funds</p>
      </div>
      <div className="admin-funds-page-order-search">
        <img src="/assets/AdminFundsHeader.png" />
      </div>
      <div className="funds-list-section">
        <div className="funds-list">
          <img src="/assets/AdminFundsListBG.png" className="funds-list-bg" />
          <div className="funds-list-text-container">
            <p className="funds-list-text">RM idk we poor or rich u choose</p>
          </div>
          <div className="funds-transfer">
            <Link to="https://toyyibpay.com/main/">
              <img src="/assets/AdminTransferToBankButton.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewFunds;
