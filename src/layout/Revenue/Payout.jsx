import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyRevenuePayouts = () => {

  // Data for the chart
  const chartData = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [4, 3, 5, 2, 6, 7, 3, 4, 6, 5, 8, 7],
        borderColor: "#997404",
        backgroundColor: "#ffc107",
        borderRadius: 100,
        borderSkipped: false,
        fill: true,
        tension: 0.3,
        pointRadius: 3, // Round points on the line
        pointHoverRadius: 6,
        titleRadius: 100,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#ddd",
      },
      title: {
        borderRadius: 100,
        pointRadius: 10,
      }
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <div className="bg-[#16161c] lg:py-12 py-6 px-4 border-t border-gray-800">
      <section
        id="payouts"
        className="my-6 lg:my-12 lg:mx-auto"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h3 className="text-3xl lg:text-4xl text-gradient font-bold leading-tight mb-6 text-left sm:text-center font-nav-veil">
            Monthly Revenue & Payouts
          </h3>
          <p className="text-nav_hover text-left sm:text-center font-home_header">
            Overview for the past 12 Months
          </p>
        </div>

        {/* Chart and Table */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5 items-center">
          {/* Chart Section */}
          <div className="lg:w-7/12 w-full rounded-lg p-4">
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Table Section */}
          <div className="lg:w-1/3 w-full">
            <table className="w-full table-auto border border-white rounded-lg overflow-hidden font-home_header">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-right">Payout</th>
                </tr>
              </thead>
              <tbody className="bg-[#202029] text-gray-300">
                <tr className="hover:bg-gray-800 cursor-pointer">
                  <td className="py-3 px-4">29/03/2024</td>
                  <td className="py-3 px-4 text-right flex justify-end items-center">
                    <p className="mb-0">4.20 ETH</p>
                    <span className="text-gray-500 ml-2">$16.2K</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800 cursor-pointer">
                  <td className="py-3 px-4">08/04/2024</td>
                  <td className="py-3 px-4 text-right flex justify-end items-center">
                    <p className="mb-0">1.60 ETH</p>
                    <span className="text-gray-500 ml-2">$6.2K</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800 cursor-pointer">
                  <td className="py-3 px-4">26/04/2024</td>
                  <td className="py-3 px-4 text-right flex justify-end items-center">
                    <p className="mb-0">2.00 ETH</p>
                    <span className="text-gray-500 ml-2">$7.7K</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800 cursor-pointer">
                  <td className="py-3 px-4">10/06/2024</td>
                  <td className="py-3 px-4 text-right flex justify-end items-center">
                    <p className="mb-0">1.90 ETH</p>
                    <span className="text-gray-500 ml-2">$7.3K</span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
              >
                Prev
              </button>
              <span className="mx-4 text-gray-300">
                Page <span className="font-bold">8</span> of{" "}
                <span className="font-bold">8</span>
              </span>
              <button
                type="button"
                className="px-4 py-2 bg-gray-700 text-white rounded-md cursor-not-allowed"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyRevenuePayouts;
