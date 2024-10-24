import React from "react";

const ListGroup = ({ children, mHeight }) => {
  return (
    <div
      className="list-group list-group-flush border-top overflow-y-scroll"
      style={{ maxHeight: mHeight, overflowY: "auto" }}
    >
      {children}
    </div>
  );
};

export default ListGroup;
