import React from "react";

const PriceCard = ({ label, price, features, button, border, cardHeader }) => {
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${border}`}>
        <div className={`card-header py-3 ${cardHeader}`}>
          <h4 className="my-0 fw-normal">{label}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${price}
            <small claclassNamess="text-body-secondary fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4 py-3">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-primary"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
