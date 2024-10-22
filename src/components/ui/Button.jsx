import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ style, children, className, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route); // Navigate to the provided route
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-${style} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
