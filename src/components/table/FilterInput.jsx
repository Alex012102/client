import React from "react";
import { Search } from "lucide-react";

const FilterInput = ({ placeholder, value, onChange }) => (
  <div className="position-relative">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-control form-control-sm"
    />
    <Search
      className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
      size={14}
    />
  </div>
);

export default FilterInput;
