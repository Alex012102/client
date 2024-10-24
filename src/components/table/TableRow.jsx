import React from "react";

const TableRow = ({ receipt, onCheckboxChange, isSelected }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <tr className={`${isSelected ? "table-active" : ""}`}>
      <td className="align-middle">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onCheckboxChange(receipt.id)}
          className="form-check-input"
        />
      </td>
      <td className="align-middle">{receipt.property}</td>
      <td className="align-middle">{formatDate(receipt.postedDate)}</td>
      <td className="align-middle">{receipt.merchant}</td>
      <td className="align-middle">{receipt.description}</td>
      <td className="align-middle text-end">{formatAmount(receipt.amount)}</td>
    </tr>
  );
};

export default TableRow;
