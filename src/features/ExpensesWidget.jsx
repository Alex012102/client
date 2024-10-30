import React, { useEffect, useState } from "react";
import CustomPieChart from "../components/charts/CustomPieChart.jsx";
import sampleReceipts from "../data/samples/sampleReceipts";
import aggregateByCategory from "../utils/aggregateByCategory.js";
import Card from "../components/Card.jsx";
import useWindowSize from "../hooks/useWindowSize.js";

const ExpensesWidget = () => {
  const [expenses, setExpenses] = useState([]);
  const { height } = useWindowSize();

  useEffect(() => {
    // Simulate fetching the calendar data
    setExpenses(sampleReceipts);
  }, []);

  const expenseTotals = aggregateByCategory(expenses);

  const chartHeight = height * 0.28; // Adjust the multiplier as needed

  return (
    <Card title={"Expenses"} id="expensesWidget">
      <div style={{ height: chartHeight }}>
        <CustomPieChart width={"40%"} data={expenseTotals} />
      </div>
    </Card>
  );
};

export default ExpensesWidget;
