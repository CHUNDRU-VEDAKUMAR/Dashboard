import React from "react";
import { Chart } from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>Polar Area Chart</h3>
      <PolarArea data={data} />
    </div>
  );
};

export default PolarAreaChart;
