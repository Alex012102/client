import React from "react";

const DateRangeFilter = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <div className="d-flex gap-2 align-items-center">
    <input
      type="date"
      value={startDate}
      onChange={(e) => onStartDateChange(e.target.value)}
      className="form-control form-control-sm"
    />
    <span className="text-muted">to</span>
    <input
      type="date"
      value={endDate}
      onChange={(e) => onEndDateChange(e.target.value)}
      className="form-control form-control-sm"
    />
  </div>
);

export default DateRangeFilter;
