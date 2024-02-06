import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Cart.css";

const Cart: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const cartPageLoading = "/assets/ParentPageLoading.png";
    const cartBG = "/assets/ParentBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${cartPageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${cartBG})`;

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
    <div className={`cart-page ${showContent ? "visible" : ""}`}>
      <div className="cart-top-text-container">
        <p className="cart-top-text">Cart</p>
      </div>
      <img src="/assets/CartSection.png" className="cart-section" />
      <img src="/assets/CartSection.png" className="cart-calendar-bg" />
      <div className="cart-order-text-container">
        <p className="cart-order-text">lol gl with this</p>
      </div>
      <div className="cart-calendar-text-container">
        <p className="cart-calendar-text">Select a reservation date:</p>
      </div>
      {/* Date Picker */}
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date (yyyy-mm-dd)"
        className="cart-calendar"
      />
      <Link to="/parent-home">
        <img src="/assets/BackIcon.png" alt="Back" className="cart-back-icon" />
      </Link>
      <Link to="/parent-home">
        <img
          src="/assets/PayOrderButton.png"
          alt="Pay Order"
          className="cart-pay-order"
        />
      </Link>
    </div>
  );
};

export default Cart;
