"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCarStatus } from "src/helpers/functions";

const options = [
  { value: "", label: "Select Car Info" },
  { value: "false", label: "SOLD" },
  { value: "true", label: "AVAILABLE" },
  /* { value: "moderator", label: "Moderator" } */
];
const CarStatistics = () => {
  const [url, setUrl] = useState("true");
  const {
    data: carDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carStatus",url],
    queryFn: () => getCarStatus(url),
    staleTime: 10 * 60 * 1000,
    //cacheTime: 30 * 60 * 1000,
  });

 
  if (isLoading && !carDetail) {
    return <div>Loading...</div>;
  }

  if (error && !carDetail) {
    return <div>Error loading car details</div>;
  }

  if (!carDetail) {
    return <div>No car data available</div>;
  }

  return (
    <div>
      <h3>CarStatistics</h3>
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
        onChange={(e) => setUrl(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        {
          carDetail?.data.map(carInfo => (
            <div key={carInfo._id} className="text-red-500 flex gap-5 border border-gray-300 my-2 justify-center">
            <p>{carInfo.brandName}</p>
            <p>{carInfo.color}</p>
            <p>{carInfo.fuelType}</p>
            <p>{carInfo.price}</p>
            <p>{carInfo.typeOfCar}</p>
            
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CarStatistics;
