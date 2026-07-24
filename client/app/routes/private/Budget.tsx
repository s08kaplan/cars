import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AddNew from "src/components/Budget/AddNew";
import AreaChart from "src/components/Charts/AreaChart";
import BarChart from "src/components/Charts/BarChart";
import LineChart from "src/components/Charts/LineChart";
import MainChart from "src/components/Charts/MainChart";
import PieChart from "src/components/Charts/PieChart";
import { getBudgetData } from "src/helpers/functions";
import { BarChart3, AreaChart as AreaIcon, LineChart as LineIcon, PieChart as PieIcon, Plus, LayoutGrid, X } from "lucide-react";

type ChartType = "main" | "bar" | "area" | "line" | "pie";

const Budget = () => {
  const {
    data: budget,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["budget"],
    queryFn: () => getBudgetData(),
    staleTime: 10 * 60 * 1000,
  });

  const [activeChart, setActiveChart] = useState<ChartType>("main");
  const [showAddNew, setShowAddNew] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-cyan-400 font-semibold animate-pulse">
        Loading budget analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-400 font-semibold">
        Error loading budget data
      </div>
    );
  }

  const chartTabs = [
    { id: "main", label: "Overview", icon: LayoutGrid },
    { id: "bar", label: "Bar Chart", icon: BarChart3 },
    { id: "area", label: "Area Chart", icon: AreaIcon },
    { id: "line", label: "Line Chart", icon: LineIcon },
    { id: "pie", label: "Pie Chart", icon: PieIcon },
  ] as const;

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Budget Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Visual representations of income, expenditures, and financial data.
          </p>
        </div>

        {/* Add New Data Action Button */}
        <button
          onClick={() => setShowAddNew((prev) => !prev)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer self-start sm:self-auto"
        >
          {showAddNew ? (
            <>
              <X className="w-4 h-4" /> Close Form
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Add New Data
            </>
          )}
        </button>
      </div>

      {/* Add New Data Form Section (Collapsible) */}
      {showAddNew && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <AddNew />
        </div>
      )}

      {/* Navigation Tab Controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/60">
        {chartTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeChart === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveChart(tab.id as ChartType)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner"
                  : "bg-slate-900/40 border border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Display Box for Active Chart */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl min-h-100 flex items-center justify-center">
        {activeChart === "main" && <MainChart budget={budget?.data} />}
        {activeChart === "bar" && <BarChart budget={budget?.data} />}
        {activeChart === "area" && <AreaChart budget={budget?.data} />}
        {activeChart === "line" && <LineChart budget={budget?.data} />}
        {activeChart === "pie" && <PieChart budget={budget?.data} />}
      </div>

    </section>
  );
};

export default Budget;