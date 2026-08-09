import { useEffect, useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import './BitcoinChart.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

function BitcoinChart() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: { vs_currency: 'usd', days: 7 },
        })
        const prices = res.data.prices
        setChartData({
          labels: prices.map((p) => new Date(p[0]).toLocaleDateString()),
          datasets: [{
            label: 'Bitcoin Price',
            data: prices.map((p) => p[1]),
            borderColor: '#f4b04d',
            backgroundColor: (ctx) => {
              const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300)
              gradient.addColorStop(0, 'rgba(244, 176, 77, 0.12)')
              gradient.addColorStop(1, 'rgba(244, 176, 77, 0)')
              return gradient
            },
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#f4b04d',
            fill: true,
          }],
        })
      } catch (e) {
        // silent fail
      }
    }

    fetchChart()
  }, [])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(8, 8, 12, 0.95)',
        titleColor: '#f4b04d',
        bodyColor: '#f5f6f8',
        borderColor: 'rgba(244, 176, 77, 0.15)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 10,
        displayColors: false,
        callbacks: {
          label: (ctx) => `$${ctx.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.03)' },
        ticks: { color: '#565d6e', font: { size: 10 } },
        border: { display: false },
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.03)' },
        ticks: {
          color: '#565d6e',
          font: { size: 10 },
          callback: (v) => `$${v.toLocaleString()}`,
        },
        border: { display: false },
      },
    },
  }

  return (
    <section className="sv-section sv-chart-section">
      <span className="sv-eyebrow">Price Trend</span>
      <h2 className="sv-heading">7-Day Bitcoin Market Trend</h2>
      <p className="sv-description">
        Live Bitcoin price movement over the last 7 days.
      </p>

      <div className="sv-chart-container">
        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <div className="sv-chart-loading">
            <div className="sv-chart-spinner" />
            <span>Loading chart data...</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default BitcoinChart
