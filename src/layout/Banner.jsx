import React from "react";

const Banner = ({ profilePic, pageTitle, subtitle, cards }) => {
  const defaultProfilePic = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
      />
    </svg>
  );

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between">
        {/* Left Section: Profile and Titles */}
        <div className="d-flex align-items-center flex-shrink-0">
          {profilePic ? (
            <img
              src={profilePic}
              alt="User Profile"
              className="rounded-circle me-3"
              style={{ width: "100px", height: "100px" }}
            />
          ) : (
            <div className="rounded-circle me-3">{defaultProfilePic}</div>
          )}
          <div>
            <h1 className="mb-0">{pageTitle}</h1>
            <p className="text-muted m-0">{subtitle}</p>
          </div>
        </div>

        {/* Right Section: Cards */}
        <div
          className="d-flex flex-grow-1 align-items-center justify-content-between"
          style={{ maxWidth: "800px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="card text-start border-0 shadow metrics"
              style={{ width: "24%" }}
            >
              <div className="card-body pt-2 pb-2">
                <p className="card-text mb-0">{card.title}</p>
                <h5 className="card-title my-1">{card.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
