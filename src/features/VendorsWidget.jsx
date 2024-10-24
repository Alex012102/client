import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ListGroup from "../components/ListGroup";
import sampleVendorsList from "../data/samples/sampleVendorList.json";
import ListItem from "../components/ui/ListItem";

const VendorsWidget = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // Simulate fetching the calendar data
    setVendors(sampleVendorsList);
  }, []);

  return (
    <Card title={"Vendors"}>
      <ListGroup mHeight={"29vh"}>
        {vendors.length > 0 ? (
          vendors.map((vendor, index) => (
            <ListItem
              key={index}
              className={"vendor-list-item"}
              title={vendor.name}
              text={vendor.phone}
              small={vendor.invoicePayable ? "Payable" : ""}
            />
          ))
        ) : (
          <p>No Vendors found.</p>
        )}
      </ListGroup>
    </Card>
  );
};
export default VendorsWidget;
