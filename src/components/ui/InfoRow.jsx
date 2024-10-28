import React from "react";

const InfoRow = ({ label, value }) => {
  return (
    <div className="d-flex w-100 align-items-center justify-content-between mb-1">
      <span className="text-secondary">{label}</span>
      {value}
    </div>
  );
};

export default InfoRow;
