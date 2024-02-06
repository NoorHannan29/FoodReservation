import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminViewOrders.css";

const AdminViewOrders: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const adminOrdersLoading = "/assets/AdminLoading.png";
    const adminOrdersBackground = "/assets/AdminBackground2.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${adminOrdersLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${adminOrdersBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`admin-orders-page ${showContent ? "visible" : ""}`}>
      <Link to="/admin">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="admin-orders-back-icon"
        />
      </Link>
      <div className="admin-orders-top-text-container">
        <p className="admin-orders-top-text">Admin View Orders</p>
      </div>
      <div className="admin-orders-page-order-search">
        <img src="/assets/AdminOrderHeader.png" />
        <div className="admin-orders-page-order-search-bar">
          <input
            type="text"
            id="username"
            placeholder="Search Order ID"
            className="orders-search-input-box"
          />
        </div>
      </div>
      <div className="orders-list-section">
        <div className="orders-list">
          <img src="/assets/AdminOrderListBG.png" className="orders-list-bg" />
          <div className="orders-list-text-container">
            <p className="orders-list-text">lol gl with this as well</p>
          </div>
          <div className="orders-status-bg">
            <img src="/assets/OrderStatusBG.png" />
            <div className="orders-status-text-container">
              <p className="orders-status-text">
                Completed/On Hold/Cancelled/idk lol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewOrders;
