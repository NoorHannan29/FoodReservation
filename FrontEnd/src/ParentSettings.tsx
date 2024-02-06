import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentSettings.css";

const ParentSettings: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const funnyVouchersClick = () => {
    alert("This is still being developed, please try again later");
  };

  useEffect(() => {
    const parentSettingsPageLoading = "/assets/ParentPageLoading.png";
    const parentSettingsBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentSettingsPageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentSettingsBG})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={`settings-page ${showContent ? "visible" : ""}`}>
      <div className="settings-top-text-container">
        <p className="settings-top-text">Settings</p>
      </div>
      <img
        src="/assets/ParentSettingsSection.png"
        className="settings-section"
      />
      <div className="parent-wallet">
        <img className="parent-wallet-bg" src="/assets/ParentWallet.png" />
        <div className="parent-name-container">
          <div className="parent-name">Insert Name Here</div>
        </div>
        <div className="parent-uuid-container">
          <div className="parent-uuid">UUID: #insertuuid</div>
        </div>
        <div className="parent-money-container">
          <div className="parent-money">RM 69420.00</div>
        </div>
        <Link to="https://toyyibpay.com/main/">
          <div className="parent-top-up-container">
            <p className="parent-top-up">Top Up E-Wallet Balance</p>
          </div>
        </Link>
      </div>
      <Link to="/parent-home">
        <img
          src="/assets/BackIcon.png"
          alt="Back"
          className="settings-back-icon"
        />
      </Link>
      <Link to="/parent-home/orders">
        <img
          src="/assets/ParentOrders.png"
          alt="View and Manage Orders"
          className="parent-manage-orders"
        />
      </Link>
      <Link to="/parent-home/profile">
        <img
          src="/assets/ParentProfile.png"
          alt="Manage Profile"
          className="parent-manage-profile"
        />
      </Link>
      <Link to="https://toyyibpay.com/main/">
        <img
          src="/assets/ParentPayment.png"
          alt="Payment Methods"
          className="parent-payment-methods"
        />
      </Link>
      <div>
        <img
          src="/assets/ParentVouchers.png"
          alt="Vouchers and Coupons"
          className="parent-vouchers"
          onClick={funnyVouchersClick}
        />
      </div>
      <Link to="/">
        <img
          src="/assets/ParentLogout.png"
          alt="Log Out"
          className="parent-logout"
        />
      </Link>
    </div>
  );
};

export default ParentSettings;
