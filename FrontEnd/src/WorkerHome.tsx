import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./WorkerHome.css";

const WorkerHome: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const workerHomeLoading = "/assets/WorkerPageLoading.png";
    const workerHomeBackground = "/assets/WorkerBackground.png";

    // Set the initial background image
    document.body.style.backgroundImage = `url(${workerHomeLoading})`;

    // After 1 second, transition to the second image
    const transitionTimeout = setTimeout(() => {
      document.body.style.backgroundImage = `url(${workerHomeBackground})`;

      // Set showContent to true after the image transition
      setShowContent(true);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(transitionTimeout);
  }, []);

  return (
    <div className={`worker-home-page ${showContent ? "visible" : ""}`}>
      <div className="worker-home-page-selection-bg">
        <img src="/assets/WorkerHomeSectionBG.png" />
        <div className="worker-view-orders-button">
          <Link to="/worker/view-orders">
            <img src="/assets/WorkerOrdersButton.png" />
          </Link>
        </div>
        <div className="worker-logout-button">
          <Link to="/">
            <img src="/assets/WorkerLogoutButton.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
