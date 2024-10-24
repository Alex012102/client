import React, { useEffect, useState } from "react";
import CustomPieChart from "../components/charts/CustomPieChart.jsx";
import sampleReceipts from "../data/samples/sampleReceipts";
import aggregateByCategory from "../utils/aggregateByCategory.js";
import Card from "../components/Card.jsx";

const ExpensesWidget = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Simulate fetching the calendar data
    setExpenses(sampleReceipts);
  }, []);

  const expenseTotals = aggregateByCategory(expenses);

  return (
    <Card title={"Expenses"} id="expensesWidget">
      <div style={{ width: "100%", height: 200 }}>
        <CustomPieChart data={expenseTotals} />
      </div>
    </Card>
  );
};

export default ExpensesWidget;
