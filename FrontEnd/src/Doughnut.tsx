import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Doughnut.css";

const Doughnut: React.FC = () => {
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
    <div className={`dn-food-page ${showContent ? "visible" : ""}`}>
      <div className="dn-top-text-container">
        <p className="dn-top-text">Doughnut</p>
      </div>

      <div className="dn-description-container">
        <p className="dn-description-text">
          Chocolate glazed doughnut with sprinkles as toppings.
        </p>
      </div>

      <div className="dn-add-ons-box-container">
        <img src="/assets/AddOnsBox.png" className="dn-add-ons-box" />
      </div>
      <div className="dn-add-ons-text">
        <img src="/assets/AddOnsText4.png" className="dn-add-ons-text" />
      </div>

      <div className="dn-add-on-selection">
        <p className="dn-checkbox-1">
          <input
            type="checkbox"
            id="checkbox1"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="dn-checkbox-2">
          <input
            type="checkbox"
            id="checkbox2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="dn-checkbox-3">
          <input
            type="checkbox"
            id="checkbox3"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
      </div>

      <div className="dn-food-image">
        <img src="/assets/DoughnutImage.png" className="dn-food-image" />
      </div>

      <div className="dn-remarks-box">
        <div className="dn-text-box-container">
          <input
            type="text"
            id="textBox"
            placeholder="No onions, less ice, etc..."
            style={{ width: "20vw", height: "4vw" }}
          />
        </div>
      </div>

      <div className="dn-quantity-box">
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
          className="dn-add-to-cart"
        />
      </Link>

      <Link to="/parent-home">
        <img src="/assets/BackIcon.png" alt="Back" className="dn-back-icon" />
      </Link>
      <Link to="/cart">
        <img src="/assets/CartIcon.png" alt="Cart" className="dn-cart-icon" />
      </Link>
    </div>
  );
};

export default Doughnut;
