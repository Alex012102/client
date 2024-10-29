import React, { useContext } from "react";
import { PageContext } from "../../context/PageContext.js";
import PropertiesForm from "./PropertiesForm.jsx";

const ModalForms = ({ isOpen, onClose }) => {
  const { formType } = useContext(PageContext);

  if (!isOpen) return null;

  const renderForm = () => {
    switch (formType) {
      case "properties":
        return <PropertiesForm />;
      default:
        return null;
    }
  };

  const modalTitle = formType.charAt(0).toUpperCase() + formType.slice(1)

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken background
      }}
      tabIndex="-1"
      role="dialog"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing modal
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add {modalTitle}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{renderForm()}</div>
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

export default ModalForms;
