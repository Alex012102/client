import React from "react";
import PriceCard from "./components/PriceCard";
import { Check } from "react-bootstrap-icons";

const PricingLandingPage = () => {
  return (
    <div className="container py-5 mt-2" id="pricing">
      <h2 className="pb-2 border-bottom">Pricing</h2>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <PriceCard
          label="Free"
          price="0"
          features={["5 Properties", "Eamil Support", "Help Center Access"]}
          button="Sign Up For Free"
          border="border-primary"
          cardHeader="bg-primary text-white"
        />
        <PriceCard
          label="Entrepreneur"
          price="15"
          features={[
            "15 Properties",
            "Priority Email Support",
            "Help Center Access",
          ]}
          button="Get Started"
        />
        <PriceCard
          label="Capitalist"
          price="30"
          features={[
            "15+ Properties",
            "Priority Email Support",
            "Help Center Access",
          ]}
          button="Get Started"
        />
      </div>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td></td>
              <td>
                <Check />
              </td>
              <td>
                <Check />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td></td>
              <td></td>
              <td>
                <Check />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingLandingPage;
