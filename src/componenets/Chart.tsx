import React from "react";
import { useQuery } from "react-query";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// API endpoint for historical data
const historicalDataURL =
  "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const ChartPage: React.FC = () => {
  const { data: historicalData } = useQuery("historicalData", async () => {
    const response = await fetch(historicalDataURL);
    return response.json();
  });
  console.log(historicalData, "data");
  // Process historical data and create chart data
  const chartData = {
    labels: Object.keys(historicalData?.cases ?? {}),
    datasets: [
      {
        label: "Cases",
        data: Object.values(historicalData?.cases ?? {}),
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };
  // console.log(Object.values(historicalData?.cases ?? []));

  return (
    <div className=" sm:h-full">
      <h2 className=" text-white font-bold mb-4">
        <button className="rounded-full shadow shadow-slate-700 bg-blue-600 p-3 text-sm">
          Corona Cases Line Graph
        </button>
      </h2>
      <div className="border-2 border-teal-600 w-11/12  m-auto 10 auto 10">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-green-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default ChartPage;
