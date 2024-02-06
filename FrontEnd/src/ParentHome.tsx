import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ParentHome.css";

const ParentHome: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const parentPageLoading = "/assets/ParentPageLoading.png";
    const parentHomeBackground = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${parentPageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${parentHomeBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`parent-home-page ${showContent ? "visible" : ""}`}>
      <Link to="/parent-home/settings">
        <img
          src="/assets/SettingsIcon.png"
          alt="Settings"
          className="settings-icon"
        />
      </Link>
      <div className="welcome-text-container">
        <div className="welcome-text">
          <p>Hello, what are you ordering today?</p>
        </div>
      </div>
      <Link to="/parent-home/cart">
        <img src="/assets/CartIcon.png" alt="Cart" className="cart-icon" />
      </Link>
      <Link to="/parent-home/NasiBriyani">
        <img
          src="/assets/NasiBriyaniButton.png"
          alt="Nasi Briyani"
          className="nasi-briyani"
        />
      </Link>
      <Link to="/parent-home/SteakAndFries">
        <img
          src="/assets/SteakAndFriesButton.png"
          alt="Steak and Fries"
          className="steak-and-fries"
        />
      </Link>
      <Link to="/parent-home/Doughnut">
        <img
          src="/assets/DoughnutButton.png"
          alt="Doughnut"
          className="doughnut"
        />
      </Link>
      <Link to="/parent-home/NasiLemak">
        <img
          src="/assets/NasiLemakButton.png"
          alt="Nasi Lemak"
          className="nasi-lemak"
        />
      </Link>
      <Link to="/parent-home/WantanMee">
        <img
          src="/assets/WantanMeeButton.png"
          alt="Wantan Mee"
          className="wantan-mee"
        />
      </Link>
      <Link to="/parent-home/Apple">
        <img src="/assets/AppleButton.png" alt="Apple" className="apple" />
      </Link>
    </div>
  );
};

export default ParentHome;
