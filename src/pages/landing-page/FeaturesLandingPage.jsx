import React from "react";
import Featurette from "./components/Featurette";

import keyFeatures from "../../data/features";

const FeaturesLandingPage = () => {
  return (
    <div className="container py-5 mt-2" id="features">
      <h2 className="pb-2 border-bottom">Features</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {keyFeatures.map((feature, index) => (
          <Featurette
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesLandingPage;
