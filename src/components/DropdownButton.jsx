import React from "react";

const DropdownButton = ({
  className = "",
  btnStyle = "secondary",
  children = "DropdownButton",
  dropdownList = [],
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <button
        className={`btn btn-${btnStyle} dropdown-toggle`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </button>
      <ul className="dropdown-menu">
        {dropdownList.length > 0 ? (
          dropdownList.map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href={item.href}>
                {item.label}
              </a>
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
  );
};

export default DropdownButton;
