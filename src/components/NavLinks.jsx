// NavLinks.js
import React from "react";
import NavItem from "./ui/NavItem";

const NavLinks = ({ className, navLinks }) => {
  return (
    <ul className={`navbar-nav ${className}`}>
      {navLinks.map((navLink, index) => (
        <NavItem
          key={index}
          className={navLink.className}
          route={navLink.route}
          label={navLink.label}
          icon={navLink.icon}
        />
      ))}
    </ul>
  );
};

export default NavLinks;
