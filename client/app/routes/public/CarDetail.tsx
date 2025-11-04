"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router";
import Swipe from "src/components/Swipe/Swipe";
import { getCars } from "src/helpers/functions";

const CarDetail = () => {
  const { carId } = useParams();
  const location = useLocation();
  const carData = location.state?.carData;

  const {
    data: carDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-detail", carId],
    queryFn: () => getCars(carId),
    staleTime: 10 * 60 * 1000,
    enabled: !!carId,
    initialData: carData,
  });

  const displayData = carDetail || carData;

  if (isLoading && !carData) return <div className="text-center py-10">Loading...</div>;
  if (error && !carData) return <div className="text-red-500 text-center py-10">Error loading car details</div>;
  if (!displayData) return <div className="text-gray-500 text-center py-10">No car data available</div>;

  return (
    <section className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={displayData?.image[0]}
          alt="car"
          className="w-full h-[300px] md:h-[450px] object-cover"
        />
      </div>

      {/* Swipe gallery */}
      <Swipe source={displayData.image} autoPlayInterval={5000} />

      {/* Car Info */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Car Features</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Make</dt>
            <dd className="text-gray-900">{displayData?.brandName}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Sale Status</dt>
            <dd className="text-gray-900">{displayData?.available ? "On Sale" : "Sold"}</dd>
          </div>

          { displayData?.available &&
              <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Price</dt>
            <dd className="text-gray-900">{displayData?.requiredPrice}</dd>
          </div>
          }

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Model</dt>
            <dd className="text-gray-900">{displayData?.model}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Fuel Type</dt>
            <dd className="text-gray-900">{displayData?.fuelType?.toUpperCase()}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Transmission</dt>
            <dd className="text-gray-900">{displayData?.transmission || "N/A"}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Type</dt>
            <dd className="text-gray-900">{displayData?.typeOfCar}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Year</dt>
            <dd className="text-gray-900">{displayData?.year}</dd>
          </div>

          <div className="flex justify-between border-b pb-1">
            <dt className="font-medium text-gray-600">Mileage</dt>
            <dd className="text-gray-900">{displayData?.mileAge} km</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default CarDetail;
