import React from "react";

const TabCard = ({ tabs, id, activeTab, onTabChange, children }) => {
  return (
    <div className="card text-center shadow border-0" id={id}>
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => onTabChange(tab.id)}
                href="#"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default TabCard;
