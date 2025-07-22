"use client"
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router";
import Swipe from "src/components/Swipe/Swipe";
import { getCars } from "src/helpers/functions";

const CarDetail = () => {
  const { carId } = useParams();
  const location = useLocation();
  const carData = location.state?.carData;
  console.log(carData);
  console.log(carId);

  const {
    data: carDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-detail", carId],
    queryFn: () => getCars(carId),
    staleTime: 10 * 60 * 1000,
    //cacheTime: 30 * 60 * 1000,
    enabled: !!carId, 
    initialData: carData,
  });

  const displayData = carDetail || carData;

  if (isLoading && !carData) {
    return <div>Loading...</div>;
  }

  if (error && !carData) {
    return <div>Error loading car details</div>;
  }

  if (!displayData) {
    return <div>No car data available</div>;
  }

  return (
    <section className="flex flex-col justify-center gap-2 p-3">
      <img
        src={carData?.image[0]}
        alt="car image"
        className="rounded-2xl mx-auto"
        width={650}
      />
      <Swipe source={carData.image} autoPlayInterval={5000} />
      <div>
        <h3>Features</h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border border-gray-500 p-2 rounded-xl">
          <dt className="font-medium text-gray-600">Make</dt>
          <dd className="text-black text-end">{carData?.brandName}</dd>
          <dt className="font-medium text-gray-600">Sale Status</dt>
          <dd className="text-black text-end">{carData?.available ? "On Sale" : "Sold"}</dd>
          <dt className="font-medium text-gray-600">Model</dt>
          <dd className="text-black text-end">{carData?.model}</dd>
          <dt></dt>
          <dd className="text-black text-end"></dd>
          <dt className="font-medium text-gray-600">Fuel Type</dt>
          <dd className="text-black text-end">{carData?.fuelType?.toUpperCase()}</dd>

          <dt className="font-medium text-gray-600">Transmission</dt>
          <dd className="text-black text-end">{carData?.transmission || "N/A"}</dd>
          <dt>Type</dt>
          <dd className="text-end">{carData?.typeOfCar}</dd>

          <dt> Year</dt>
          <dd className="text-end">{carData?.year}</dd>

          <dt className="font-medium text-gray-600">Mile Age</dt>
          <dd className="text-black text-end">{carData?.mileAge} km</dd>
        </dl>


      </div>
      
    </section>
  );
};

export default CarDetail;
