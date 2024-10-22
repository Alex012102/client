import React from "react";
import * as Icons from "react-bootstrap-icons";
import toPascalCase from "../../utils/toPascalCase";
import { useLocation } from "react-router-dom";

const NavItem = ({ className, route, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === route;
  const IconComponent = Icons[toPascalCase(icon)];

  return (
    <li className={`nav ${className}`}>
      <a
        href={route}
        className={`nav-link ${
          isActive ? "active" : ""
        }`} /* Add active class if on current page */
      >
        {icon && (
          <IconComponent
            className={`me-2 ${
              isActive ? "active" : ""
            }`} /* Make the icon follow active/hover state */
          />
        )}
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavItem;
