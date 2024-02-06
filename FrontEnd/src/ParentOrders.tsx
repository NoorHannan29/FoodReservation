import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentOrders.css";

const ParentOrders: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const parentOrdersPageLoading = "/assets/ParentPageLoading.png";
    const parentOrdersBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentOrdersPageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentOrdersBG})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`parent-order-page ${showContent ? "visible" : ""}`}>
      <div className="parent-order-top-text-container">
        <p className="parent-order-top-text">View and Manage Orders</p>
      </div>
      <Link to="/parent-home/settings">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="parent-order-back-icon"
        />
      </Link>
      <img
        className="parent-order-header"
        alt="Orders"
        src="/assets/ParentOrdersHeader.png"
      />

      {/* change this accordingly with each added order lol gl with this*/}
      <div className="parent-order-section">
        <img
          className="parent-order-section-bg"
          src="/assets/ParentOrdersSection.png"
          style={{ top: "16vw", left: "1vw" }}
        />
        <div
          className="parent-order-section-text-container"
          style={{ top: "17vw", left: "3vw" }}
        >
          <div className="parent-order-section-text">insert order here</div>
        </div>
        {/*generate and each orders own qr code page, change and do whatever with the link*/}
        <Link to="/parent-home/orders/QR">
          <img
            src="/assets/GetQRCodeButton.png"
            alt="Get QR Code"
            className="parent-order-qr-button"
            style={{ top: "19vw", left: "45vw" }}
          />
        </Link>
        <div className="parent-order-section-cancel-order">
          <img
            src="/assets/CancelOrderButton.png"
            alt="Cancel Order"
            className="parent-order-cancel-button"
            style={{ top: "19vw", left: "70vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ParentOrders;
