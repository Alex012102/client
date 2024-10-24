import React from "react";

const DropdownCard = ({ dropdownList = [], title, text, small, footer }) => {
  const truncateText = (str = "", num) => {
    if (!str || str.length <= num) return str;
    return str.slice(0, num) + "...";
  };
  return (
    <div className="card card-hover shadow border-0 mb-3">
      <div className="position-absolute top-0 end-0 mt-2 me-2">
        <div className="dropdown">
          <button
            className="btn btn-link text-dark p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex flex-column gap-1">
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
            </div>
          </button>
          <ul className="dropdown-menu">
            {dropdownList.length > 0 ? (
              dropdownList.map((item, index) => (
                <li key={index}>
                  <button className="dropdown-item">{item.label}</button>
                </li>
              ))
            ) : (
              <li>
                <span className="dropdown-item text-muted">
                  No options available
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncateText(text, 100)}</p>
        <p className="card-text text-end text-secondary">{small}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between align-items-center">
          {footer}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCard;
