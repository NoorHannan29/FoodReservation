import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./NasiLemak.css";

const NasiLemak: React.FC = () => {
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
    <div className={`nl-food-page ${showContent ? "visible" : ""}`}>
      <div className="nl-top-text-container">
        <p className="nl-top-text">Nasi Lemak</p>
      </div>

      <div className="nl-description-container">
        <p className="nl-description-text">
          Rice with fried egg, peanuts, anchovies, and chicken drumstick.
        </p>
      </div>

      <div className="nl-add-ons-box-container">
        <img src="/assets/AddOnsBox.png" className="nl-add-ons-box" />
      </div>
      <div className="nl-add-ons-text">
        <img src="/assets/AddOnsText1.png" className="nl-add-ons-text" />
      </div>

      <div className="nl-add-on-selection">
        <p className="nl-checkbox-1">
          <input
            type="checkbox"
            id="checkbox1"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="nl-checkbox-2">
          <input
            type="checkbox"
            id="checkbox2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="nl-checkbox-3">
          <input
            type="checkbox"
            id="checkbox3"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
      </div>

      <div className="nl-food-image">
        <img src="/assets/NasiLemakImage.png" className="nl-food-image" />
      </div>

      <div className="nl-remarks-box">
        <div className="nl-text-box-container">
          <input
            type="text"
            id="textBox"
            placeholder="No onions, less ice, etc..."
            style={{ width: "20vw", height: "4vw" }}
          />
        </div>
      </div>

      <div className="nl-quantity-box">
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
          className="nl-add-to-cart"
        />
      </Link>

      <Link to="/parent-home">
        <img src="/assets/BackIcon.png" alt="Back" className="nl-back-icon" />
      </Link>
      <Link to="/cart">
        <img src="/assets/CartIcon.png" alt="Cart" className="nl-cart-icon" />
      </Link>
    </div>
  );
};

export default NasiLemak;
