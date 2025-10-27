"use client";
import React, { useState, type ReactEventHandler } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarStatus } from "src/helpers/functions";
import MyTable from "src/components/Table/MyTable";
import MyError from "src/components/Error/MyError";

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
    return <div>Loading...</div>;
  }

  if (error && !carDetail) {
    /* return <div>Error loading car details</div>; */
    return <MyError />;
  }

  if (!carDetail) {
    return <div>No car data available</div>;
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUrl(e.target.value);
  };
  return (
    <div>
      <h3>CarStatistics</h3>
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div>
        <h2
          className={
            url === "true"
              ? "text-center text-orange-700"
              : "text-center text-green-500"
          }
        >
          {url === "true" ? "CARS Waiting to be Sold" : "SOLD Cars Info"}
        </h2>
        <MyTable title={TABLE_HEADERS} data={carDetail?.data} />
      </div>
    </div>
  );
};

export default CarStatistics;
