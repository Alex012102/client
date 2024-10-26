import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CustomStackedBarChart from "../components/charts/CustomStackedBarChart";
import sampleWorkOrders from "../data/samples/sampleWorkOrders.json";

const UrgencyWidget = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate fetching the calendar data
    const fetchWorkOrders = () => {
      setChartData(createChartDataFromRequests(sampleWorkOrders));
    };

    fetchWorkOrders();
  }, []);

  const createChartDataFromRequests = (requests) => {
    // Filter requests where status is not "Completed"
    const filteredRequests = requests.filter(
      (request) => request.status !== "Completed"
    );
  
    // Initialize counts for each urgency level
    const urgencyCounts = {
      High: 0,
      Medium: 0,
      Low: 0,
    };
  
    // Sum the counts based on urgency
    filteredRequests.forEach((request) => {
      if (urgencyCounts[request.urgency] !== undefined) {
        urgencyCounts[request.urgency]++;
      }
    });
  
    // Calculate the total count of filtered requests
    const totalRequests = filteredRequests.length;
  
    // Create chart data structure
    return [
      {
        name: "Urgency",
        uv: totalRequests, // Total count of requests
        low: urgencyCounts.Low, // Count for Low urgency
        medium: urgencyCounts.Medium, // Count for Medium urgency
        high: urgencyCounts.High, // Count for High urgency
      },
    ];
  };
  
  

  return (
    <Card>
      <div style={{ width: "5rem", height: "100%" }}>
      <CustomStackedBarChart
          data={chartData}
          barDataKeys={["low", "medium", "high"]}
          colors={["#73A942", "#F9DC5C", "#ff7433"]}
        />
      </div>
    </Card>
  );
};

export default UrgencyWidget;
