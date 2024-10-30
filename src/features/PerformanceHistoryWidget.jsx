import React, { useEffect, useState } from "react";
import TabCard from "../components/TabCard";
import generatePaymentsChartData from "./performance-history/generatePaymentsChartData";
import samplePaymentsData from "../data/samples/samplePaymentsData.json";
import samplePropertyInfo from "../data/samples/samplePropertyInfo.json";
import CustomLineChart from "../components/charts/CustomLineChart";

const PerformanceHistoryWidget = () => {
  const [chartData, setChartData] = useState([]);
  const [activeTab, setActiveTab] = useState("incomeChart"); // Initialize active tab

  const colorPalette = ["#39a9db", "#F9DC5C", "#73A942", "#ff7433"]; // Define the color palette

  useEffect(() => {
    // Simulate fetching the payment data
    const data = generatePaymentsChartData(
      samplePaymentsData,
      samplePropertyInfo
    );
    setChartData(data);
  }, []);

  const lines = samplePropertyInfo.map((property, index) => ({
    dataKey: property.streetAddress,
    stroke: colorPalette[index % colorPalette.length], // Rotate through colors
  }));

  const tabs = [
    { id: "incomeChart", label: "Income" },
    { id: "maintenance", label: "Maintenance" },
    { id: "occupancy", label: "Occupancy" },
  ];

  // Function to render content based on active tab
  const renderTabContent = (activeTab) => {
    switch (activeTab) {
      case "incomeChart":
        return (
          <div style={{ width: "100%", height: "100%" }}>
            {chartData.length > 0 ? (
              <CustomLineChart data={chartData} lines={lines} />
            ) : (
              <p>No data available for the chart.</p>
            )}
          </div>
        );
      case "maintenance":
        return (
          <div>
            {/* Render Maintenance Chart or Content */}Maintenance Content
          </div>
        );
      case "occupancy":
        return (
          <div>{/* Render Occupancy Chart or Content */}Occupancy Content</div>
        );
      default:
        return null;
    }
  };

  return (
    <TabCard
      style={{ width: "100%" }}
      tabs={tabs}
      activeTab={activeTab} // Pass the active tab
      onTabChange={setActiveTab} // Pass the function to change the active tab
    >
      {renderTabContent(activeTab)} {/* Use the active tab to render content */}
    </TabCard>
  );
};

export default PerformanceHistoryWidget;
