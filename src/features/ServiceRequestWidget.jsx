import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import sampleWorkOrders from "../data/samples/sampleWorkOrders.json";

const TotalContainer = ({ value, label }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="fs-5 fw-bold text-info m-0">{value}</div>
      <p className="fs-7 fw-medium m-0">{label}</p>
    </div>
  );
};

const ServiceRequestWidget = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching the calendar data
    setRequests(sampleWorkOrders);
  }, []);

  const statusCounts = {
    New: 0,
    Waiting: 0,
    InProgress: 0,
    Pending: 0,
  };

  requests.forEach((request) => {
    if (request.status in statusCounts) {
      statusCounts[request.status]++;
    }
  });

  const statusTypes = [
    { label: "New", value: statusCounts.New },
    { label: "Waiting", value: statusCounts.Waiting },
    { label: "In Progress", value: statusCounts.InProgress },
    { label: "Pending", value: statusCounts.Pending },
  ];

  return (
    <Card title={"Service Requests"} id={"serviceRequestWidget"}>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        id="serviceRequestWidget"
      >
        {statusTypes.map((status, index) => (
          <TotalContainer
            key={index}
            value={status.value}
            label={status.label}
          />
        ))}
      </div>
    </Card>
  );
};

export default ServiceRequestWidget;
