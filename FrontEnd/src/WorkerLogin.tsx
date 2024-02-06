import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./WorkerLogin.css";

const WorkerLogin: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(
    "/assets/WorkerPageLoading.png"
  );
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const firstImageUrl = "/assets/WorkerPageLoading.png";
    const secondImageUrl = "/assets/WorkerBackground.png";

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
      window.location.href = "/worker";
    }
  };

  return (
    <div className="WorkerLogin">
      <div className={`worker-login-box ${showLoginBox ? "visible" : ""}`}>
        <h2>Worker login</h2>
        <div className="worker-input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="worker-input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerLogin;
