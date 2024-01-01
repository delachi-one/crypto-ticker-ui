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
import { Line } from "react-chartjs-2";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

const OPTIONS = {
   responsive: true,
   plugins: {
      legend: {
         display: false,
      },
   },
   maintainAspectRatio: false,
   scales: {
      y: {
         ticks: {
            color: "rgb(255,255,255)",
            font: {
               size: 14,
            },
            display: false,
         },
         grid: {
            display: false,
         },
      },
      x: {
         ticks: {
            color: "rgb(255,255,255)",
            font: {
               size: 10,
            },
         },
         grid: {
            display: false,
         },
      },
   },
};

export function CurrencyCardChart(props) {
   const { data, labels, name } = props;
   const chartData = {
      labels: labels,
      datasets: [
         {
            label: name,
            data: data,
            borderColor: "rgb(255,255,255)",
            borderWidth: 1,
         },
      ],
   };
   return (
      <>
         <Line options={OPTIONS} data={chartData} />
      </>
   );
}
