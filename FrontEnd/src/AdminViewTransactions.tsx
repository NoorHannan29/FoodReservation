import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminViewTransactions.css";

const AdminViewTransactions: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const adminTransactionsLoading = "/assets/AdminLoading.png";
    const adminTransactionsBackground = "/assets/AdminBackground2.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${adminTransactionsLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${adminTransactionsBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`admin-transactions-page ${showContent ? "visible" : ""}`}>
      <Link to="/admin">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="admin-transactions-back-icon"
        />
      </Link>
      <div className="admin-transactions-top-text-container">
        <p className="admin-transactions-top-text">Admin View Transactions</p>
      </div>
      <div className="admin-transactions-page-order-search">
        <img src="/assets/AdminTransactionsHeader.png" />
        <div className="admin-transactions-page-order-search-bar">
          <input
            type="text"
            id="username"
            placeholder="Search Order ID"
            className="transactions-search-input-box"
          />
        </div>
      </div>
      <div className="transactions-list-section">
        <div className="transactions-list">
          <img
            src="/assets/AdminTransactionsListBG.png"
            className="transactions-list-bg"
          />
          <div className="transactions-list-text-container">
            <p className="transactions-list-text">lol gl with this as well</p>
          </div>
          <div className="transactions-status-bg">
            <img src="/assets/TransactionsStatusBG.png" />
            <div className="transactions-status-text-container">
              <p className="transactions-status-text">
                On Hold / + RM 11.00 / RM + whatever
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewTransactions;
