import React, { useState, useEffect } from "react";
import Banner from "../layout/Banner.jsx";
import PropertyModal from "../components/modals/PropertyModal.jsx";

// services / hooks
import useFetchPropertiesWithUnits from "../services/useFetchPropertiesWithUnits.js";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { data, fetchError } = useFetchPropertiesWithUnits();

  // Fetch data
  useEffect(() => {
    if (data) {
      setProperties(data);
    }
  }, [data]);

  // Error handling
  if (fetchError) {
    return <p>{fetchError}</p>;
  }

  const pageTitle = "Properties";
  const pageSubtitle = "Your portfolio of properties.";
  const cardsData = [
    { title: "Net Operating Income", text: "$3,647" },
    { title: "Return on Investment", text: "21.63%" },
    { title: "Capitalization Rate", text: "2.13%" },
    { title: "Gross Rent", text: "15,948" },
  ];

  // Function to handle property click
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  return (
    <>
      <Banner
        profilePicture="/path/to/profile.jpg"
        pageTitle={pageTitle}
        subtitle={pageSubtitle}
        cards={cardsData}
      />
      {/* Rest of the page content */}
      <div className="container-fluid flex-grow-1 py-4" id="properties">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {properties.map((property, index) => (
            <div className="col" key={property.id || index}>
              <div
                className="card card-hover p-0 shadow border-0"
                onClick={() => handlePropertyClick(property)}
              >
                <img
                  src={property.photo}
                  className="card-img-top"
                  alt={property.street_address}
                />
                <div className="card-body">
                  <h5 className="card-title m-0">{property.street_address}</h5>
                  <p className="text-secondary m-0">
                    {property.city}, {property.state} {property.zip_code}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {property.beds} <span className="text-secondary">bds</span>{" "}
                    | {property.baths}
                    <span className="text-secondary"> ba</span> |{" "}
                    {property.sqft}
                    <span className="text-secondary"> sqft</span>
                  </li>
                  <li className="list-group-item">
                    ${property.rent}{" "}
                    <span className="text-secondary">/month</span>
                  </li>
                  <li
                    className={`list-group-item fw-semibold ${
                      property.occupied ? "text-success" : "text-danger"
                    }`}
                  >
                    {property.occupied ? "Occupied" : "Vacant"}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the modal if a property is selected */}
      {showModal && selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default PropertiesPage;
