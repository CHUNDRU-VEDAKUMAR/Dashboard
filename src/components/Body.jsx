import React from "react";
import TopCard from "./topcard/TopCard";
import content from "./topcard/content";
import departmentData from './piechart/Content';
import PieChart from "./piechart/PieChart";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import CGPACategorizationChart from './piechart/CGPACategorizationChart';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Body = () => {
  const data = {
    labels: ['CSE', 'MECH', 'ECE', 'IT', 'EEE'], 
    datasets: [
      {
        label: 'Number of Students',
        data: [500, 350, 400, 450, 300], 
        fill: false, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        tension: 0.4, 
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Strength of Students in Different Departments', 
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
    
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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

      
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="shadow-lg p-6 rounded-lg bg-white">
          
          <div className="w-full max-w-4xl mx-auto flex items-center flex-col">
            <Line data={data} options={options} className="mt-16"/>
          </div>
        </section>

        <section className="shadow-lg p-6 rounded-lg bg-white">
         
          <div className="w-full max-w-4xl mx-auto">
            <CGPACategorizationChart />
          </div>
        </section>
      </section>

   
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
