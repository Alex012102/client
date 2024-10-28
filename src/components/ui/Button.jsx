import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ style, children, className, route, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route); // Navigate to the provided route
    }
    if (onClick) {
      onClick(); // Call the parent component's onClick function
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
