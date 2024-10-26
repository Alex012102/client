import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

class CustomStackedBarChart extends PureComponent {
  render() {
    const {
      data,
      barDataKeys,
      colors,
      width = "100%",
      height = "100%",
    } = this.props;

    return (
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          {/* <Legend /> */}
          {barDataKeys.map((key, index) => (
            <Bar key={key} dataKey={key} stackId="a" fill={colors[index]}></Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default CustomStackedBarChart;
