import React from "react";
import Button from "./Button.jsx";

const ButtonGroup = ({ buttons, className }) => {
  return (
    <div className={`d-flex ${className}`}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          style={button.style}
          children={button.label}
          className={button.className}
          route={button.route}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
