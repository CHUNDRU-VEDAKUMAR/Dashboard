import React from 'react';
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary Chart.js components

// Registering required components for Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const CGPACategorizationChart = () => {
  // Sample data: Number of students in different CGPA ranges
  const data = {
    labels: ['Excellent (3.5-4.0)', 'Good (3.0-3.49)', 'Average (2.5-2.99)', 'Below Average (2.0-2.49)', 'Poor (<2.0)'], // Categories
    datasets: [
      {
        data: [150, 200, 300, 100, 50], // Number of students in each category
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF9F40'], // Colors for each category
        hoverBackgroundColor: ['#4A90E2', '#FF4B72', '#FFB200', '#35D4B3', '#FF7C36'], // Hover colors
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CGPA Categorization', // Title of the chart
      },
      tooltip: {
        callbacks: {
          // Custom tooltip text format
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} students`; // Format the label to show the number of students
          },
        },
      },
      legend: {
        position: 'right', // Position the legend to the right of the chart
        labels: {
          boxWidth: 20, // Set the width of the legend box
          padding: 15, // Add padding between the legend items
        },
      },
    },
    maintainAspectRatio: false, // Allow chart to adjust its size
  };

  return (
    <div className='px-4 py-6' style={{ width: '100%', height: '400px' }}> {/* Adjust the height and width */}
      <Doughnut data={data} options={options} /> {/* Render the Doughnut chart */}
    </div>
  );
};

export default CGPACategorizationChart;
