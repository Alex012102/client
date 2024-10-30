import React, { useState, useEffect } from "react";
import Banner from "../layout/Banner.jsx";
import sampleWorkOrders from "../data/samples/sampleWorkOrders.json";
import DropdownCard from "../components/DropdownCard.jsx";

const MaintenancePage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a data fetch delay if needed
    setTimeout(() => {
      if (Array.isArray(sampleWorkOrders)) {
        setRequests(sampleWorkOrders);
      } else {
        console.error("sampleWorkOrders is not an array:", sampleWorkOrders);
      }
      setLoading(false); // Set loading to false when data is ready
    }, 500); // You can remove this timeout in actual code if the delay is not intentional
  }, []);

  const priorityCounts = {
    Low: 0,
    Medium: 0,
    High: 0,
    Total: 0,
  };

  requests.forEach((request) => {
    const urgency = request.urgency;

    if (urgency && urgency in priorityCounts) {
      priorityCounts[urgency]++;
      priorityCounts.Total++;
    }
  });

  const priorityTypes = [
    { label: "Low", value: priorityCounts.Low },
    { label: "Medium", value: priorityCounts.Medium },
    { label: "High", value: priorityCounts.High },
    { label: "Total", value: priorityCounts.Total },
  ];

  const pageTitle = "Maintenance";
  const pageSubtitle = "Your service requests.";
  const cardsData = [
    { title: "Total Work Orders", text: priorityCounts.Total },
    { title: "Low Priority", text: priorityCounts.Low },
    { title: "Medium Priority", text: priorityCounts.Medium },
    { title: "High Priority", text: priorityCounts.High },
  ];

  const statusStyles = {
    New: "bg-primary text-white rounded px-3",
    Pending: "bg-warning text-dark rounded px-3",
    Waiting: "bg-info text-white rounded px-3",
    Completed: "bg-success text-white rounded px-3",
    "In Progress": "bg-secondary text-white rounded px-3",
  };

  console.log("sampleWorkOrders before return render:", sampleWorkOrders);
  console.log("requests before return render:", requests);

  return (
    <>
      <Banner
        profilePicture="/path/to/profile.jpg"
        pageTitle={pageTitle}
        subtitle={pageSubtitle}
        cards={cardsData}
      />
      <div className="container-fluid flex-grow-1 py-4" id="receiptsPage">
        <div className="row row-cols-1 row-cols-md-3 mt-3">
          {/* Display a loading indicator or message while data is being loaded */}
          {loading ? (
            <p>Loading work orders...</p>
          ) : (
            <>
              <div className="col">
                <h4>Low Priority</h4>
                <div>
                  {requests.length > 0 ? (
                    requests
                      .filter(
                        (workOrder) =>
                          workOrder?.urgency?.toLowerCase() === "low"
                      )
                      .filter(
                        (workOrder) =>
                          workOrder?.status?.toLowerCase() !== "completed"
                      )
                      .map((workOrder, index) => (
                        <DropdownCard
                          key={index}
                          title={workOrder.title}
                          text={workOrder.description}
                          footer={
                            <div
                              className={`status-badge ${
                                statusStyles[workOrder.status] ||
                                "bg-light text-dark rounded-pill px-3"
                              }`}
                            >
                              {workOrder.status}
                            </div>
                          }
                          small={workOrder.address}
                        />
                      ))
                  ) : (
                    <p>No low priority work orders found.</p>
                  )}
                </div>
              </div>

              <div className="col">
                <h4>Medium Priority</h4>
                <div>
                  {requests.length > 0 ? (
                    requests
                      .filter(
                        (workOrder) =>
                          workOrder?.urgency?.toLowerCase() === "medium"
                      )
                      .filter(
                        (workOrder) =>
                          workOrder?.status?.toLowerCase() !== "completed"
                      )
                      .map((workOrder, index) => (
                        <DropdownCard
                          key={index}
                          title={workOrder.title}
                          text={workOrder.description}
                          footer={
                            <div
                              className={`status-badge ${
                                statusStyles[workOrder.status] ||
                                "bg-light text-dark rounded-pill px-3"
                              }`}
                            >
                              {workOrder.status}
                            </div>
                          }
                          small={workOrder.address}
                        />
                      ))
                  ) : (
                    <p>No medium priority work orders found.</p>
                  )}
                </div>
              </div>
              <div className="col">
                <h4>High Priority</h4>
                <div>
                  {requests.length > 0 ? (
                    requests
                      .filter(
                        (workOrder) =>
                          workOrder?.urgency?.toLowerCase() === "high"
                      )
                      .filter(
                        (workOrder) =>
                          workOrder?.status?.toLowerCase() !== "completed"
                      )
                      .map((workOrder, index) => (
                        <DropdownCard
                          key={index}
                          title={workOrder.title}
                          text={workOrder.description}
                          footer={
                            <div
                              className={`status-badge ${
                                statusStyles[workOrder.status] ||
                                "bg-light text-dark rounded-pill px-3"
                              }`}
                            >
                              {workOrder.status}
                            </div>
                          }
                          small={workOrder.address}
                        />
                      ))
                  ) : (
                    <p>No high priority work orders found.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
