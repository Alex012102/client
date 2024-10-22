import React from "react";
import Banner from "../layout/Banner.jsx";

const PropertiesPage = () => {
  const pageTitle = "Account Dashboard";
  const pageSubtitle = "Your account overview";
  const cardsData = [
    { title: "Metric Title", text: "X,XXX" },
    { title: "Metric Title", text: "X,XXX" },
    { title: "Metric Title", text: "X,XXX" },
    { title: "Metric Title", text: "X,XXX" },
  ];

  return (
    <>
      <Banner
        profilePicture="/path/to/profile.jpg"
        pageTitle={pageTitle}
        subtitle={pageSubtitle}
        cards={cardsData}
      />
      {/* Rest of the page content */}
    </>
  );
};

export default PropertiesPage;