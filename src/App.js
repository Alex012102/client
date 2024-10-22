import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

// styles
import "./assets/css/custom-bootstrap.min.css";
// import "./assets/css/index.css";
import "./assets/css/scrollbar.css";
import "./assets/css/Navlinks.css";
import "./assets/css/LandingPage.css";
import "./assets/css/features.css";
import "./assets/css/index.css";

import DashboardHeader from "./layout/DashboardHeader.jsx";

// page routes
import LandingPage from "./pages/landing-page/LandingPage.js";
import OverviewPage from "./pages/OverviewPage.js";
import BankingPage from "./pages/BankingPage.js";
import PropertiesPage from "./pages/PropertiesPage.js";
import MaintenancePage from "./pages/MaintenancePage.js";
import ReceiptsPage from "./pages/ReceiptsPage.js";

const App = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    if (location.pathname !== "/") {
      document.body.classList.add("dashboard-background");
    } else {
      document.body.classList.remove("dashboard-background");
    }

    // Cleanup function to remove the class when unmounting
    return () => {
      document.body.classList.remove("dashboard-background");
    };
  }, [location.pathname]);

  return (
    <div>
      {/* Page Content */}
      {location.pathname !== "/" && ( // Check if the current path is not the landing page
        <div className="container-fluid" id="dashboard">
          <DashboardHeader />
          <Routes>
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/banking" element={<BankingPage />} />
            <Route path="/receipts" element={<ReceiptsPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
          </Routes>
        </div>
      )}
      {/* Always render the LandingPage */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
