import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NasiBriyani from "./NasiBriyani";
import "./App.css";
import SteakAndFries from "./SteakAndFries";
import Doughnut from "./Doughnut";
import NasiLemak from "./NasiLemak";
import WantanMee from "./WantanMee";
import Apple from "./Apple";
import Cart from "./Cart";
import ParentSettings from "./ParentSettings";
import ParentOrders from "./ParentOrders";
import ParentManageProfile from "./ParentManageProfile";
import ParentChangeName from "./ParentChangeName";
import ParentChangePassword from "./ParentChangePassword";
import AdminViewOrders from "./AdminViewOrders";
import AdminViewTransactions from "./AdminViewTransactions";
import AdminViewFunds from "./AdminViewFunds";
import WorkerViewOrders from "./WorkerViewOrders";

// Lazy-loaded components
const LazyApp = React.lazy(() => import("./App"));
const LazyRegister = React.lazy(() => import("./Register"));
const LazyParentHome = React.lazy(() => import("./ParentHome"));
const LazyAdminLogin = React.lazy(() => import("./AdminLogin"));
const LazyAdminHome = React.lazy(() => import("./AdminHome"));
const LazyWorkerLogin = React.lazy(() => import("./WorkerLogin"));
const LazyWorkerHome = React.lazy(() => import("./WorkerHome"));

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(
    "/assets/MainPageLoading.png"
  );
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const firstImageUrl = "/assets/MainPageLoading.png";
    const secondImageUrl = "/assets/MainPageBackground.png";

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
      window.location.href = "/parent-home";
    }
  };

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div className={`login-box ${showLoginBox ? "visible" : ""}`}>
                  <h2>Log into your account</h2>
                  <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) => setID(e.target.value)}
                      onKeyDown={handleEnterPress}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={handleEnterPress}
                    />
                  </div>
                  <p className="register-link">
                    No account? <Link to="/register">Register here!</Link>
                  </p>
                </div>
              }
            />
            {/* Pre-loading the pages */}
            <Route path="/register" element={<LazyRegister />} />
            <Route path="/parent-home" element={<LazyParentHome />} />
            <Route path="/parent-home/NasiBriyani" element={<NasiBriyani />} />
            <Route
              path="/parent-home/SteakAndFries"
              element={<SteakAndFries />}
            />
            <Route path="/parent-home/Doughnut" element={<Doughnut />} />
            <Route path="/parent-home/NasiLemak" element={<NasiLemak />} />
            <Route path="/parent-home/WantanMee" element={<WantanMee />} />
            <Route path="/parent-home/Apple" element={<Apple />} />
            <Route path="/parent-home/Cart" element={<Cart />} />
            <Route path="/parent-home/settings" element={<ParentSettings />} />
            <Route path="/parent-home/orders" element={<ParentOrders />} />
            <Route
              path="/parent-home/profile"
              element={<ParentManageProfile />}
            />
            <Route
              path="/parent-home/profile/change-name"
              element={<ParentChangeName />}
            />
            <Route
              path="/parent-home/profile/change-password"
              element={<ParentChangePassword />}
            />
            <Route path="/adminlogin" element={<LazyAdminLogin />} />
            <Route path="/admin" element={<LazyAdminHome />} />
            <Route path="/admin/view-orders" element={<AdminViewOrders />} />
            <Route
              path="/admin/view-transactions"
              element={<AdminViewTransactions />}
            />
            <Route path="/admin/view-funds" element={<AdminViewFunds />} />
            <Route path="/workerlogin" element={<LazyWorkerLogin />} />
            <Route path="/worker" element={<LazyWorkerHome />} />
            <Route path="/worker/view-orders" element={<WorkerViewOrders />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;