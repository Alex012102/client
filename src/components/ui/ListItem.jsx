import React from "react";

const ListItem = ({
  route,
  title,
  text,
  small,
  additionalContent,
  className,
}) => {
  return (
    <a
      href={route}
      className={`list-group-item list-group-item-action ${className}`}
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        {/* Conditionally render additional content like an image or div on the left */}
        {additionalContent && <div className="me-3">{additionalContent}</div>}
        <div className="d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-end flex-grow-1">
            <h5 className="m-0 fs-6 fw-semibold">{title}</h5>
            {small && <small className="text-muted">{small}</small>}
          </div>
          <p className="m-0 fs-7">{text}</p>
        </div>
      </div>
    </a>
  );
};

export default ListItem;
