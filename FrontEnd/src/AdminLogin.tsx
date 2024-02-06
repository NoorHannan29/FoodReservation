import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(
    "/assets/AdminPageLoading.png"
  );
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const firstImageUrl = "/assets/AdminLoading.png";
    const secondImageUrl = "/assets/AdminBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url('${firstImageUrl}')`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url('${secondImageUrl}')`;
      setImageUrl(secondImageUrl);

      // Set showLoginBox to true after the image transition
      setShowLoginBox(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      window.location.href = "/admin";
    }
  };

  return (
    <div className="AdminLogin">
      <div className={`admin-login-box ${showLoginBox ? "visible" : ""}`}>
        <h2>Admin login</h2>
        <div className="admin-input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="ID"
            value = {ID}
            placeholder="Enter your name"
            onChange={(e) => setID(e.target.value)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="admin-input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;