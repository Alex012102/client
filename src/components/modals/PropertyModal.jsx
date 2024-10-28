import React from "react";
import PropertyModalBody from "./PropertyModalBody.jsx"

const PropertyModal = ({ property, onClose }) => {
  return (
    <div
      className={`modal fade ${property ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{
        display: property ? "block" : "none", // Show modal when property is selected
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken background
      }}
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing modal
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{property.street_address}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"><PropertyModalBody property={property} /></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
