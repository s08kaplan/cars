import { useQuery } from "@tanstack/react-query";
import React, { useState, type ReactEventHandler } from "react";
import AreaChart from "src/components/Charts/AreaChart";
import BarChart from "src/components/Charts/BarChart";
import LineChart from "src/components/Charts/LineChart";
import PieChart from "src/components/Charts/PieChart";
import { getBudgetData } from "src/helpers/functions";

const Budget = () => {
  const {
    data: budget,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["budget"],
    queryFn: () => getBudgetData(),
    staleTime: 10 * 60 * 1000,
    //cacheTime: 30 * 60 * 1000,
  });
  const [selectChart, setSelectChart] = useState({
    barChart: false,
    areaChart: false,
    lineChart: false,
    pieChart: false,
  });

  const handleChart = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
    const value = e.currentTarget.textContent;
    if (value.includes("Bar")) {
      setSelectChart({
        ...selectChart,
        barChart: true,
        areaChart: false,
        lineChart: false,
        pieChart: false,
      });
    } else if (value.includes("Area")) {
      setSelectChart({
        ...selectChart,
        areaChart: true,
        barChart: false,
        lineChart: false,
        pieChart: false,
      });
    } else if (value.includes("Line")) {
      setSelectChart({
        ...selectChart,
        lineChart: true,
        areaChart: false,
        barChart: false,
        pieChart: false,
      });
    } else if (value.includes("Pie")) {
      setSelectChart({
        ...selectChart,
        pieChart: true,
        areaChart: false,
        lineChart: false,
        barChart: false,
      });
    }
  };
  console.log("budget data: ", budget?.data);
  return (
    <section className="flex flex-col justify-between items-center gap-3">
      <button onClick={handleChart} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"><span className="absolute h-56 w-32 rounded-full transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
        <span className="relative">Show on Bar Chart</span>
      </button>
        {selectChart.barChart && <BarChart budget={budget.data} />}
      <button onClick={handleChart} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"><span className="absolute h-56 w-32 rounded-full transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
        <span className="relative">Show on Area Chart</span>
      </button>
        {selectChart.areaChart && <AreaChart budget={budget.data} />}
      <button onClick={handleChart} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"><span className="absolute h-56 w-32 rounded-full transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
        <span className="relative">Show on Line Chart</span>
      </button>
        {selectChart.lineChart && <LineChart budget={budget.data} />}
      <button onClick={handleChart} className=" h-12 overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
        <span>Show on Pie Chart</span>
      </button>
        {selectChart.pieChart && <PieChart budget={budget.data} />}
    </section>
  );
};

export default Budget;
