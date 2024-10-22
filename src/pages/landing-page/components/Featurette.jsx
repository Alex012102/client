import React from "react";
import * as Icons from "react-bootstrap-icons";
import toPascalCase from "../../../utils/toPascalCase";

const Featurette = ({ icon, title, text }) => {
  const IconComponent = Icons[toPascalCase(icon)];

  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        {/* Replace the SVG placeholder with the actual icon path */}
        <IconComponent className="text-info" />
      </div>
      <div>
        <h3 className="fs-3 text-body-emphasis">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Featurette;
