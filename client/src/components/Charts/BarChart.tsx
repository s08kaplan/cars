import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MONTHS } from './Chart-Constants';
import type { IBudget } from '../../../types/budget';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Chart.js Bar Chart',
    },
  },
};



const BarChart = ({budget}:{budget:IBudget[]}) => {
  const expense = budget.filter(b => b.type === "expense")
  const income = budget.filter(b => b.type === "income")
  console.log("expense data in bar chart: ", expense)
  const data = {
  labels: MONTHS,
  datasets: [
    {
      label: 'EXPENSE',
      data: expense.map(() => expense.amount),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'INCOME',
      data: income.map(() => income.amount),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return  <Bar options={options} data={data} />;
}

export default BarChart