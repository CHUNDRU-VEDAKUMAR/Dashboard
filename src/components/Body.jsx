import React from "react";
import TopCard from "./topcard/TopCard";
import content from "./topcard/content";
import LineChart from './reports/LineChart';
import PolarAreaChart from "./analytics/PolarAreaChart";
import polarAreaData from "./analytics/Content";
import departmentData from './piechart/Content';
import { chartTitle, chartLabels, chartDatasets } from "./reports/Content";
import PieChart from "./piechart/PieChart";

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Section 1: Top Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // auto-fit with a minimum size of 200px
          gap: "20px",
        }}
      >
        {content.map((item, index) => (
          <TopCard
            key={index}
            icon={item.icon}
            count={item.count}
            label={item.label}
            color={item.color}
          />
        ))}
      </section>

      {/* Section 2: Charts */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // auto-fit with a minimum size of 300px
          gap: "20px",
          alignItems: "center",
        }}
      >
        {/* LineChart component */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>Line Chart</h3>
          <LineChart title={chartTitle} labels={chartLabels} datasets={chartDatasets} />
        </div>

        {/* Polar Area Chart */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>Polar Area Chart</h3>
          <PolarAreaChart data={polarAreaData} />
        </div>
      </section>

      {/* Section 3: Department Pie Charts */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // auto-fit with a minimum size of 280px
          gap: "20px",
        }}
      >
        {/* Pie Charts for different departments */}
        <div style={{ textAlign: "center" }}>
          <h3>2nd Year Department</h3>
          <PieChart data={departmentData.secondYear} />
        </div>

        <div style={{ textAlign: "center" }}>
          <h3>3rd Year Department</h3>
          <PieChart data={departmentData.thirdYear} />
        </div>

        <div style={{ textAlign: "center" }}>
          <h3>4th Year Department</h3>
          <PieChart data={departmentData.fourthYear} />
        </div>
      </section>
    </div>
  );
};

export default Body;
