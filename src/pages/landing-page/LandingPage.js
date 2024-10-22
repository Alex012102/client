import React from "react";
import LandingPageHeader from "../../layout/LandingPageHeader.jsx";
import HeroLandingPage from "./HeroLandingPage.jsx";
import FeaturesLandingPage from "./FeaturesLandingPage.jsx";
import PricingLandingPage from "./PricingLandingPage.jsx";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <HeroLandingPage />
      <FeaturesLandingPage />
      <PricingLandingPage />
    </div>
  );
};

export default LandingPage;
