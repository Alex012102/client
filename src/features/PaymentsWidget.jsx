import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import sampleTenantData from "../data/samples/sampleTenantData.json";
import ListGroup from "../components/ListGroup";
import parseDate from "../utils/parseDate";
import formatAmount from "../utils/formatAmount";

const PaymentsWidget = () => {
  const [payments, setPayments] = useState(0);

  useEffect(() => {
    // Simulate fetching the calendar data
    setPayments(sampleTenantData);
  }, []);

  return (
    <Card title={"Payments"}>
      {payments.length > 0 ? (
        <ListGroup mHeight={"29vh"}>
          {payments.map((tenant, index) => {
            const backgroundColor = tenant.amount > 0 ? "#ff0000" : "#67b800";

            const leaseStart = parseDate(tenant.leaseTerm.start);
            const leaseEnd = parseDate(tenant.leaseTerm.end);

            const paymentValue = formatAmount(tenant.tenantBalance);

            return (
              <div
                className="list-group-item list-group-item-action d-flex flex-row lh-sm"
                key={index}
                aria-current="true"
              >
                <div
                  className="d-flex flex-column w-100 align-items-start justify-content-between"
                  // style={ minWidth: '150px'}
                >
                  <strong className="mb-1">{tenant.tenantName}</strong>
                  <small className="text-body-secondary">
                    {tenant.tenantAddress
                      .split(",")
                      .slice(0, -1)
                      .join(",")
                      .trim()}
                  </small>
                </div>
                <div
                  className="mx-3"
                  style={{ width: "20px", backgroundColor }}
                ></div>
                <div className="d-flex flex-column w-100 align-items-start justify-content-between">
                  <span className="mb-1">{paymentValue}</span>
                  <small className="text-nowrap text-body-secondary">
                    {`${leaseStart.monthAbb} ${leaseStart.day}, ${leaseStart.year}`}{" "}
                    - {`${leaseEnd.monthAbb} ${leaseEnd.day}, ${leaseEnd.year}`}
                  </small>
                </div>
              </div>
            );
          })}
        </ListGroup>
      ) : (
        <p>No payments found.</p>
      )}
    </Card>
  );
};

export default PaymentsWidget;
