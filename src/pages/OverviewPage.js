import React from "react";
import Banner from "../layout/Banner.jsx";
import Calendar from "../features/Calendar.jsx";
import ServiceRequestWidget from "../features/ServiceRequestWidget.jsx";
import MessagesWidget from "../features/MessagesWidget.jsx";
import ExpensesWidget from "../features/ExpensesWidget.jsx";
import VendorsWidget from "../features/VendorsWidget.jsx";
import PaymentsWidget from "../features/PaymentsWidget.jsx";
import useWindowSize from "../hooks/useWindowSize.js";
import PerformanceHistoryWidget from "../features/PerformanceHistoryWidget.jsx";
import UrgencyWidget from "../features/UrgencyWidget.jsx";

const OverviewPage = () => {
  const pageTitle = "Account Dashboard";
  const pageSubtitle = "Your account overview";
  const cardsData = [
    { title: "Account Balance", text: "$15,948" },
    { title: "Expected Rent", text: "$10,850" },
    { title: "Ledger Total", text: "-$3,494" },
    { title: "Unit Total", text: "9" },
  ];

  const { height } = useWindowSize();
  const containerHeight = height * 0.225;

  return (
    <>
      <Banner
        profilePicture="/path/to/profile.jpg"
        pageTitle={pageTitle}
        subtitle={pageSubtitle}
        cards={cardsData}
      />
      <div className="container-fluid">
        {/* Rest of the page content */}
        <div className="flex-grow-1 d-flex py-4">
          {/* Left Section */}
          <div className="col-md-4 d-flex flex-column gap-3">
            <Calendar />
            <ServiceRequestWidget />
            <MessagesWidget />
          </div>
          {/* Right Section */}
          <div className="col-md-8 d-flex flex-column ps-md-3">
            {/* Upper Section */}
            <div className="d-flex flex-nowrap mb-3 gap-3" style={{height: height * 0.376}}>
              <ExpensesWidget />
              <PerformanceHistoryWidget />
              <UrgencyWidget />
            </div>
            {/* Lower Section */}
            <div className="d-flex flex-wrap gap-3">
              <VendorsWidget />
              <PaymentsWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
