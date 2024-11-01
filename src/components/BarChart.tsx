// components/BarChart.tsx
'use client'; // Ensures the component is client-side rendered

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyBarChart = () => {
  const [data, setData] = useState<{
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string[] }[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Generate random data for the chart
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const salesData = labels.map(() => Math.floor(Math.random() * 5000) + 1000);
    const backgroundColors = labels.map(() => 'rgb(23,23,23)');

    setData({
      labels,
      datasets: [
        {
          label: 'Sales',
          data: salesData,
          backgroundColor: backgroundColors,
        },
      ],
    });
  }, []); // Empty dependency array means this runs once after the initial render

  if (data.labels.length === 0) return null; // Prevent rendering while loading data

  return (
    <div style={{ width: '100%', height: '350px' }}>
      <Bar data={data} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Sales Data',
          },
        },
      }} />
    </div>
  );
};

export default MyBarChart;
