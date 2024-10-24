import React from "react";
import Banner from "../layout/Banner.jsx";
import samplePropertyInfo from "../data/samples/samplePropertyInfo.json";

const PropertiesPage = () => {
  const pageTitle = "Properties";
  const pageSubtitle = "Your portfolio of properties.";
  const cardsData = [
    { title: "Net Operating Income", text: "$3,647" },
    { title: "Return on Investment", text: "21.63%" },
    { title: "Capitalization Rate", text: "2.13%" },
    { title: "Gross Rent", text: "15,948" },
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
      <div className="container-fluid flex-grow-1 py-4" id="properties">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {samplePropertyInfo.map((property, index) => (
            <div className="col">
              <div className="card card-hover p-0 shadow border-0">
                <img
                  src={property.photo}
                  className="card-img-top"
                  alt={property.streetAddress}
                />
                <div className="card-body">
                  <h5 className="card-title m-0">{property.streetAddress}</h5>
                  <p className="text-secondary m-0">
                    {property.city}, {property.state} {property.zipCode}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {property.bedrooms}{" "}
                    <span className="text-secondary">bds</span> |{" "}
                    {property.bathrooms}
                    <span className="text-secondary"> ba</span> |{" "}
                    {property.sqft}
                    <span className="text-secondary"> sqft</span>
                  </li>
                  <li className="list-group-item">
                    ${property.rentValue}{" "}
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
    </>
  );
};

export default PropertiesPage;
