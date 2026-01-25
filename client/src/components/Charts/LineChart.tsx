import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { MONTHS } from './Chart-Constants';
import type { IBudget } from 'types/budget';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

/* const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const fakeData = (Math.random() * 100)
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => fakeData),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => fakeData),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
 */
const LineChart = ({ budget }:{ budget: IBudget[]}) => {
  const expense = budget.filter((b) => b.type === "expense");
  const income = budget.filter((b) => b.type === "income");
  console.log("expense data in bar chart: ", expense);

  const groupByMonth = (items:any) => {
    const monthData = Array(12).fill(0);
    items.forEach((item:any) => {
      const month = new Date(item.createdAt).getMonth();
      monthData[month] += item.amount;
    });
    return monthData;
  };

  const data = {
    labels: MONTHS,
    datasets: [
      {
        label: "EXPENSE",
        data: groupByMonth(expense),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "INCOME",
        data: groupByMonth(income),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default LineChart