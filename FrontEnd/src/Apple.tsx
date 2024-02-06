import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Apple.css";

const Apple: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setQuantity(inputQuantity);
    }
  };

  useEffect(() => {
    const pageLoading = "/assets/ParentPageLoading.png";
    const foodBackground = "/assets/FoodPageBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${pageLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${foodBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`ap-food-page ${showContent ? "visible" : ""}`}>
      <div className="ap-top-text-container">
        <p className="ap-top-text">Apple</p>
      </div>

      <div className="ap-description-container">
        <p className="ap-description-text">Fresh apple.</p>
      </div>

      <div className="ap-add-ons-box-container">
        <img src="/assets/AddOnsBox.png" className="ap-add-ons-box" />
      </div>
      <div className="ap-add-ons-text">
        <img src="/assets/AddOnsText3.png" className="ap-add-ons-text" />
      </div>

      <div className="ap-add-on-selection">
        <p className="ap-checkbox-1">
          <input
            type="checkbox"
            id="checkbox1"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="ap-checkbox-2">
          <input
            type="checkbox"
            id="checkbox2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="ap-checkbox-3">
          <input
            type="checkbox"
            id="checkbox3"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
      </div>

      <div className="ap-food-image">
        <img src="/assets/AppleImage.png" className="ap-food-image" />
      </div>

      <div className="ap-remarks-box">
        <div className="ap-text-box-container">
          <input
            type="text"
            id="textBox"
            placeholder="No onions, less ice, etc..."
            style={{ width: "20vw", height: "4vw" }}
          />
        </div>
      </div>

      <div className="ap-quantity-box">
        <button
          style={{ width: "2vw", height: "2vw" }}
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          style={{ width: "5vw", height: "2vw", textAlign: "center" }}
          onChange={handleInputChange}
        />
        <button
          style={{ width: "2vw", height: "2vw" }}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <Link to="/parent-home">
        <img
          src="/assets/AddToCartButton.png"
          alt="Add to Cart"
          className="ap-add-to-cart"
        />
      </Link>

      <Link to="/parent-home">
        <img src="/assets/BackIcon.png" alt="Back" className="ap-back-icon" />
      </Link>
      <Link to="/cart">
        <img src="/assets/CartIcon.png" alt="Cart" className="ap-cart-icon" />
      </Link>
    </div>
  );
};

export default Apple;
