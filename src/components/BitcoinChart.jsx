import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
function BitcoinChart() {
useEffect(() => {
  const fetchChart = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
        {
          params: {
            vs_currency: "usd",
            days: 7,
          },
        }
      );

      const prices = response.data.prices;

      setChartData({
        labels: prices.map((item) =>
          new Date(item[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: "Bitcoin Price",
            data: prices.map((item) => item[1]),
            borderColor: "#f7931a",
            backgroundColor: "rgba(247,147,26,0.2)",
            tension: 0.4,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  fetchChart();
}, []);
const [chartData, setChartData] = useState(null);

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

 return (
 <div className="bitcoin-chart">
  <h2>Bitcoin Market Trend </h2>
  <p className="chart-subtitle">
    Live Bitcoin price movement over the last 7 days.
  </p>

  <div className="chart-card">
    {chartData ? (
      <Line 
      data={chartData} 
      options={options}
    />
    ) : (
      <p>Loading chart...</p>
    )}
  </div>
</div>
 )
}

export default BitcoinChart;