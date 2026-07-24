"use client";
import React, { useState, type ReactEventHandler } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarStatus } from "src/helpers/functions";
import MyTable from "src/components/Table/MyTable";
import MyError from "src/components/Error/MyError";
import CarStatisticLoader from "src/components/Spinners/CarStatisticLoader";

const options = [
  { value: "", label: "Select Car Info" },
  { value: "false", label: "SOLD" },
  { value: "true", label: "AVAILABLE" },
  /* { value: "moderator", label: "Moderator" } */
];

const TABLE_HEADERS = [
  "MAKE",
  "COLOR",
  "MODEL",
  "TYPE",
  "FUEL",
  "MILE",
  "BOUGHT",
  "SOLD",
  "REQUIRED",
  "PROFIT",
];

const CarStatistics = () => {
  const [url, setUrl] = useState("true");
  const {
    data: carDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carStatus", url],
    queryFn: () => getCarStatus(url),
    staleTime: 10 * 60 * 1000,
    //cacheTime: 30 * 60 * 1000,
  });

  if (isLoading && !carDetail) {
    return (
     <CarStatisticLoader/>
    );
  }

  if (error && !carDetail) {
    /* return <div>Error loading car details</div>; */
    return <MyError />;
  }

  if (!carDetail) {
    return (
      <div className="flex items-center justify-center p-8 text-slate-400 font-medium">
        No car data available
      </div>
    );
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUrl(e.target.value);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 bg-slate-950 text-slate-100 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Car Statistics
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Filter and view detailed inventory & sales performance.
          </p>
        </div>

        {/* Dropdown Selector */}
        <div className="w-full sm:w-64">
          <select
            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 cursor-pointer"
            onChange={handleChange}
            value={url}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-slate-900 text-slate-100"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
        <h2
          className={`text-center font-bold text-lg tracking-wide uppercase ${
            url === "true" ? "text-amber-400" : "text-emerald-400"
          }`}
        >
          {url === "true" ? "CARS Waiting to be Sold" : "SOLD Cars Info"}
        </h2>

        <div className="overflow-x-auto">
          <MyTable title={TABLE_HEADERS} data={carDetail?.data} />
        </div>
      </div>
    </div>
  );
};

export default CarStatistics;