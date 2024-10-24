import React from "react";
import Banner from "../layout/Banner.jsx";
import ReceiptTable from "../components/table/ReceiptTable.jsx";

const ReceiptsPage = () => {
  const pageTitle = "Receipts";
  const pageSubtitle = "Your filed expenses.";
  const cardsData = [
    { title: "Frequent Vendor", text: "Lowes" },
    { title: "2024 Expenses", text: "$14,892" },
    { title: "2023 Expenses", text: "$17,394" },
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
      <div className="container-fluid flex-grow-1 py-4" id="receipts">
        <ReceiptTable />
      </div>
    </>
  );
};

export default ReceiptsPage;
