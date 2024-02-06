import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./WorkerViewOrders.css";

const WorkerViewOrders: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const workerOrdersLoading = "/assets/WorkerPageLoading.png";
    const workerOrdersBackground = "/assets/WorkerBackground2.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${workerOrdersLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${workerOrdersBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`worker-orders-page ${showContent ? "visible" : ""}`}>
      <Link to="/worker">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="worker-orders-back-icon"
        />
      </Link>
      <div className="worker-orders-top-text-container">
        <p className="worker-orders-top-text">Worker View Orders</p>
      </div>
      <div className="worker-orders-page-order-search">
        <img src="/assets/WorkerOrderHeader.png" />
        <div className="worker-orders-page-order-search-bar">
          <input
            type="text"
            id="username"
            placeholder="Search Order ID"
            className="orders-search-input-box"
          />
        </div>
      </div>
      <div className="worker-orders-list-section">
        <div className="orders-list">
          <img
            src="/assets/WorkerOrdersList.png"
            className="worker-orders-list-bg"
          />
          <div className="worker-orders-list-text-container">
            <p className="worker-orders-list-text">lol gl with this as well</p>
          </div>
          <div className="worker-orders-scan-qr">
            <Link to="{/*add ur qr code page link here*/}">
              <img src="/assets/WorkerScanQRButton.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerViewOrders;
