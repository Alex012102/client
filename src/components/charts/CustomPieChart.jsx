import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import formatAmount from '../../utils/formatAmount'; // Import the formatAmount utility

// Dynamic and reusable PieChart component with hover effect and tooltip
const CustomPieChart = ({
  data = [],
  colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
  width = '100%',
  height = "100%",
  outerRadius = 80,
  dataKey = 'value',
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Function to handle mouse hover
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={width} height={height}>
        <Tooltip
          formatter={(value, name, props) => [
            <strong>{formatAmount(value)}</strong>, // Bold and format as currency
            `${props.payload.label}`,
          ]}
        />
        <Pie
          data={data}
          cy="50%"
          cx="50%"
          labelLine={false}  // Remove the white labels on the chart
          outerRadius={outerRadius}
          fill="#8884d8"
          dataKey={dataKey}
          activeIndex={activeIndex}  // Apply the active index
          activeShape={{
            outerRadius: outerRadius + 10,  // Increase outer radius on hover
          }}
          onMouseEnter={onPieEnter}        // Trigger hover effect
          onMouseLeave={onPieLeave}        // Reset on hover out
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              style={{
                cursor: 'pointer',  // Add pointer cursor on hover
                transition: 'all 0.3s ease',  // Smooth transition
              }}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
