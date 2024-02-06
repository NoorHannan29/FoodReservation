import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./NasiBriyani.css";

const NasiBriyani: React.FC = () => {
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
    <div className={`nb-food-page ${showContent ? "visible" : ""}`}>
      <div className="nb-top-text-container">
        <p className="nb-top-text">Nasi Briyani</p>
      </div>

      <div className="nb-description-container">
        <p className="nb-description-text">
          Made with rice, some chicken and spices.
        </p>
      </div>

      <div className="nb-add-ons-box-container">
        <img src="/assets/AddOnsBox.png" className="nb-add-ons-box" />
      </div>
      <div className="nb-add-ons-text">
        <img src="/assets/AddOnsText1.png" className="nb-add-ons-text" />
      </div>

      <div className="nb-add-on-selection">
        <p className="nb-checkbox-1">
          <input
            type="checkbox"
            id="checkbox1"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="nb-checkbox-2">
          <input
            type="checkbox"
            id="checkbox2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
        <p className="nb-checkbox-3">
          <input
            type="checkbox"
            id="checkbox3"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
        </p>
      </div>

      <div className="nb-food-image">
        <img src="/assets/NasiBriyaniImage.png" className="nb-food-image" />
      </div>

      <div className="nb-remarks-box">
        <div className="text-box-container">
          <input
            type="text"
            id="textBox"
            placeholder="No onions, less ice, etc..."
            style={{ width: "20vw", height: "4vw" }}
          />
        </div>
      </div>

      <div className="nb-quantity-box">
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
          className="nb-add-to-cart"
        />
      </Link>

      <Link to="/parent-home">
        <img src="/assets/BackIcon.png" alt="Back" className="nb-back-icon" />
      </Link>
      <Link to="/cart">
        <img src="/assets/CartIcon.png" alt="Cart" className="nb-cart-icon" />
      </Link>
    </div>
  );
};

export default NasiBriyani;
