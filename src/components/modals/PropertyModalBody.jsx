import React from "react";
import Carousel from "../ui/Carousel";
import { PencilSquare } from "react-bootstrap-icons";
import InfoRow from "../ui/InfoRow";

const PropertyModalBody = ({ property }) => {
  const availability = property.occupied ? "Leased" : "Vacant";

  return (
    <div className="d-flex flex-column">
      <Carousel photos={property.photos} />
      <div className="d-flex w-100 align-items-start justify-content-between mt-3">
        <div>
          <h5 className="card-title m-0">{property.street_address}</h5>
          <p className="text-secondary m-0">
            {property.city}, {property.state} {property.zip_code}
          </p>
        </div>
        <div>
          <PencilSquare />
        </div>
      </div>
      <p className="fs-7 border-top mt-3">{property.description}</p>
      <div className="d-flex flex-column w-100 align-items-center justify-content-between mt-3">
        <strong className="border-bottom w-100 mb-2">Property Details</strong>
        <InfoRow label={"Bedrooms:"} value={property.beds} />
        <InfoRow label={"Bathrooms:"} value={property.baths} />
        <InfoRow label={"Square Feet:"} value={property.sqft} />
        <InfoRow label={"Availability:"} value={availability} />
      </div>
    </div>
  );
};

export default PropertyModalBody;
