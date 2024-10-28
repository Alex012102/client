import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// styles
import "./assets/css/custom-bootstrap.min.css";
import "./assets/css/scrollbar.css";
import "./assets/css/Navlinks.css";
import "./assets/css/LandingPage.css";
import "./assets/css/features.css";
import "./assets/css/index.css";

// components
import { PageProvider, PageContext } from "./context/PageContext.js";
import DashboardHeader from "./layout/DashboardHeader.jsx";

// page routes
import LandingPage from "./pages/landing-page/LandingPage.js";
import OverviewPage from "./pages/OverviewPage.js";
import BankingPage from "./pages/BankingPage.js";
import PropertiesPage from "./pages/PropertiesPage.js";
import MaintenancePage from "./pages/MaintenancePage.js";
import ReceiptsPage from "./pages/ReceiptsPage.js";

const App = () => {
  const location = useLocation();
  const { setCurrentPage } = useContext(PageContext);

  useEffect(() => {
    const pageMap = {
      "/overview": "overview",
      "/banking": "banking",
      "/receipts": "receipts",
      "/properties": "properties",
      "/maintenance": "maintenance",
    };

    const page = pageMap[location.pathname] || "Landing";
    console.log("Setting current page to:", page);

    try {
      setCurrentPage(page);
    } catch (error) {
      console.error("Error setting current page:", error);
    }
  }, [location.pathname, setCurrentPage]);

  useEffect(() => {
    if (location.pathname !== "/") {
      document.body.classList.add("dashboard-background");
    } else {
      document.body.classList.remove("dashboard-background");
    }
    return () => document.body.classList.remove("dashboard-background");
  }, [location.pathname]);

  return (
    <div>
      {location.pathname === "/" ? (
        <LandingPage />
      ) : (
        <div
          className="container-fluid"
          id="dashboard"
          style={{ display: "flex", flexDirection: "column" }}
        >
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
    </div>
  );
};

const Root = () => (
  <PageProvider>
    <Router>
      <App />
    </Router>
  </PageProvider>
);

export default Root;
