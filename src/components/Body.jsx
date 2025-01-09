import React from "react";
import TopCard from "./topcard/TopCard";
import content from "./topcard/content";
import departmentData from './piechart/Content';
import PieChart from "./piechart/PieChart";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import CGPACategorizationChart from './piechart/CGPACategorizationChart';

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Body = () => {
  const data = {
    labels: ['CSE', 'MECH', 'ECE', 'IT', 'EEE'], // Department names on the x-axis
    datasets: [
      {
        label: 'Number of Students',
        data: [500, 350, 400, 450, 300], // Number of students in each department
        fill: false, // Don't fill the area under the line
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0.4, // Smoothness of the line
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Strength of Students in Different Departments', // Title of the chart
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

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
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
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
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="shadow-lg p-6 rounded-lg bg-white">
          {/* <h3 className="text-xl font-semibold mb-4">Student Strength Line Chart</h3> */}
          <div className="w-full max-w-4xl mx-auto flex items-center flex-col">
            <Line data={data} options={options} className="mt-16"/>
          </div>
        </section>

        <section className="shadow-lg p-6 rounded-lg bg-white">
          {/* <h3 className="text-xl font-semibold mb-4">CGPA Categorization</h3> */}
          <div className="w-full max-w-4xl mx-auto">
            <CGPACategorizationChart />
          </div>
        </section>
      </section>

      {/* Section 3: Department Pie Charts */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div className="max-w-full max-h-[350px] mx-auto">
            <PieChart data={departmentData.secondYear} heading={"II Year Pass Percentage"}/>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="max-w-full max-h-[350px] mx-auto">
            <PieChart data={departmentData.thirdYear} heading={"III Year Pass Percentage"} />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="max-w-full max-h-[350px] mx-auto">
            <PieChart data={departmentData.fourthYear} heading={"IV Year Pass Percentage"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
