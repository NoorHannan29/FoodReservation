import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminHome.css";

const AdminHome: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const adminHomeLoading = "/assets/AdminLoading.png";
    const adminHomeBackground = "/assets/AdminBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${adminHomeLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${adminHomeBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`admin-home-page ${showContent ? "visible" : ""}`}>
      <div className="admin-home-page-selection-bg">
        <img src="/assets/AdminHomeSelection.png" />
        <div className="admin-view-orders-button">
          <Link to="/admin/view-orders">
            <img src="/assets/AdminViewOrdersButton.png" />
          </Link>
        </div>
        <div className="admin-view-transactions-button">
          <Link to="/admin/view-transactions">
            <img src="/assets/AdminViewTransactionsButton.png" />
          </Link>
        </div>
        <div className="admin-view-funds-button">
          <Link to="/admin/view-funds">
            <img src="/assets/AdminViewFunds.png" />
          </Link>
        </div>
        <div className="admin-logout-button">
          <Link to="/">
            <img src="/assets/AdminLogoutButton.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
