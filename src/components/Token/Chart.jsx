import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = () => {
  const data = {
    labels: ["Marketing", "Revenue Share", "Team", "Development", "Treasury"],
    datasets: [
      {
        label: "Revenue Allocation",
        data: [30, 20, 20, 15, 15],
        backgroundColor: [
          "rgba(248, 113, 113, 0.5)",
          "rgba(52, 211, 153, 0.5)",
          "rgba(96, 165, 250, 0.5)",
          "rgba(34, 211, 238, 0.5)",
          "rgba(251, 191, 36, 0.5)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.2,  // Square-shaped chart
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="xl:w-5/12 lg:w-7/12 w-full flex justify-center items-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
