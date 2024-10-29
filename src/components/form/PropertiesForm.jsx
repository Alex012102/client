import React, { useState, useEffect } from "react";
import States from "../../data/stateOptions.json";

// MAKE MORE MODULIZED.

const UnitForm = ({ index, unitData, onUnitChange, onPhotoUpload }) => {
  return (
    <div key={index} className="unit-box mb-3">
      <h5 className="fw-bold">Unit {index + 1}</h5>
      <div className="input-group mb-3">
        <label
          htmlFor={`unitNumber-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Unit Number:
        </label>
        <input
          type="text"
          className="form-control"
          id={`unitNumber-${index}`}
          value={unitData.unitNumber || ""}
          onChange={(e) => onUnitChange(index, "unitNumber", e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <label
          htmlFor={`unitBedrooms-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Bedrooms:
        </label>
        <input
          type="text"
          className="form-control"
          id={`unitBedrooms-${index}`}
        />
      </div>
      <div className="input-group mb-3">
        <label
          htmlFor={`unitBathrooms-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Bathrooms:
        </label>
        <input
          type="text"
          className="form-control"
          id={`unitBathrooms-${index}`}
        />
      </div>
      <div className="input-group mb-3">
        <label
          htmlFor={`unitSquareFeet-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Square Feet:
        </label>
        <input
          type="text"
          className="form-control"
          id={`unitSquareFeet-${index}`}
        />
      </div>
      <div className="input-group mb-3">
        <label
          htmlFor={`unitRent-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Rent:
        </label>
        <input type="text" className="form-control" id={`unitRent-${index}`} />
      </div>
      <div className="d-flex align-items-center mb-3">
        <input
          className="form-check-input border-2 mt-0"
          type="checkbox"
          value=""
          id={`unitOccupancy-${index}`}
          aria-label="Checkbox for following text input"
        />
        <label
          htmlFor={`unitOccupancy-${index}`}
          className="form-label m-0 ms-2"
        >
          Leased
        </label>
      </div>

      {/* Photo Upload */}
      <div className="input-group mb-3">
        <label
          htmlFor={`unitPhoto-${index}`}
          className="input-group-text justify-content-start"
          style={{ width: "30%" }}
        >
          Upload Photo:
        </label>
        <input
          type="file"
          className="form-control"
          id={`unitPhoto-${index}`}
          accept="image/*"
          onChange={(e) => onPhotoUpload(index, e.target.files[0])}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`unitDetails-${index}`} className="form-label">
          Unit Details
        </label>
        <textarea
          className="form-control"
          id={`unitDetails-${index}`}
          value={unitData.unitDetails || ""}
          onChange={(e) => onUnitChange(index, "unitDetails", e.target.value)}
        />
      </div>
    </div>
  );
};

const PropertiesForm = () => {
  const [unitCountValue, setUnitCountValue] = useState(1);
  const [unitData, setUnitData] = useState([
    { unitNumber: "", unitDetails: "", photo: null },
  ]);

  useEffect(() => {
    setUnitData((prevUnitData) =>
      Array.from(
        { length: unitCountValue },
        (_, i) =>
          prevUnitData[i] || { unitNumber: "", unitDetails: "", photo: null }
      )
    );
  }, [unitCountValue]);

  const handleUnitChange = (index, field, value) => {
    setUnitData((prevUnitData) =>
      prevUnitData.map((unit, i) =>
        i === index ? { ...unit, [field]: value } : unit
      )
    );
  };

  const handlePhotoUpload = (index, file) => {
    setUnitData((prevUnitData) =>
      prevUnitData.map((unit, i) =>
        i === index ? { ...unit, photo: file } : unit
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Unit Data with Photos:", unitData);
    // Implement the upload logic here (e.g., send to backend server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="streetAddress" className="form-label">
          Street Address
        </label>
        <input
          type="text"
          className="form-control"
          id="streetAddress"
          aria-describedby="addressHelp"
        />
        <div id="addressHelp" className="form-text">
          ex. "123 Main Street"
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="mb-3" style={{ maxWidth: "37%" }}>
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="stateSelection">
            State
          </label>
          <select className="form-select" id="stateSelection">
            <option value="">Choose...</option>
            {States.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3" style={{ maxWidth: "20%" }}>
          <label htmlFor="zip-code" className="form-label">
            Zip Code
          </label>
          <input type="text" className="form-control" id="zip-code" />
        </div>
      </div>

      {/* Units Dropdown */}
      <div className="input-group pb-3 mb-3 border-bottom border-3">
        <label className="input-group-text" htmlFor="unitCount">
          Units:
        </label>
        <select
          className="form-select"
          id="unitCount"
          value={unitCountValue}
          onChange={(e) => setUnitCountValue(Number(e.target.value))}
        >
          <option value="" disabled>
            Choose...
          </option>
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Unit Details */}
      <div className="unit-container">
        {unitData.map((unit, index) => (
          <UnitForm
            key={index}
            index={index}
            unitData={unit}
            onUnitChange={handleUnitChange}
            onPhotoUpload={handlePhotoUpload} // pass handlePhotoUpload as prop
          />
        ))}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PropertiesForm;
