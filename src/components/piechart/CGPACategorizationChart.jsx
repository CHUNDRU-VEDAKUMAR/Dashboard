import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 


ChartJS.register(ArcElement, Tooltip, Legend);

const CGPACategorizationChart = () => {

  const data = {
    labels: ['Excellent (3.5-4.0)', 'Good (3.0-3.49)', 'Average (2.5-2.99)', 'Below Average (2.0-2.49)', 'Poor (<2.0)'], 
    datasets: [
      {
        data: [150, 200, 300, 100, 50],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF9F40'],
        hoverBackgroundColor: ['#4A90E2', '#FF4B72', '#FFB200', '#35D4B3', '#FF7C36'], 
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CGPA Categorization', 
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} students`; 
          },
        },
      },
      legend: {
        position: 'right', 
        labels: {
          boxWidth: 20, 
          padding: 15, 
        },
      },
    },
    maintainAspectRatio: false, 
  };

  return (
    <div className='px-4 py-6' style={{ width: '100%', height: '400px' }}> 
      <Doughnut data={data} options={options} /> 
    </div>
  );
};

export default CGPACategorizationChart;
