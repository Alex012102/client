import React from "react";
import ButtonGroup from "../../components/ui/ButtonGroup";

const HeroLandingPage = () => {
  return (
    <div id="hero" className="text-center border-bottom my-5 px-4">
      <h1 className="display-5 fw-bold text-body-emphasis mt-5">
        Invesment Management Made Simple.
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mt-4 p-3">
          Making managing you investments simple, and with ease. Control all
          parts of your business in one place, while keeping you important
          numbers visible.
        </p>
        <ButtonGroup
          className={"justify-content-center my-4"}
          buttons={[
            {
              style: "primary",
              label: "Get Started",
              className: "rounded-pill btn-lg text-white",
            },
            {
              style: "outline-primary",
              label: "Start Free Trial",
              className: "rounded-pill btn-lg ms-3",
            },
          ]}
        />
      </div>
      {/* HERO IMAGE */}
      <div className="overflow-hidden pt-5" style={{ maxHeight: "80vh" }}>
        <div className="container px-5">
          <img
            src={`${process.env.PUBLIC_URL}/assets/snapshot-ownerPortal.svg`}
            className="img-fluid border-0 rounded-4 shadow-lg mb-4"
            alt="Example image"
            width="900"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLandingPage;
