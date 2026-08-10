"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router";
import Swipe from "src/components/Swipe/Swipe";
import { getCars } from "src/helpers/functions";
import {
  ShieldCheck,
  Fuel,
  Calendar,
  Gauge,
  Cog,
  Car,
  Tag,
} from "lucide-react";

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

  if (isLoading && !carData)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-cyan-400 font-semibold animate-pulse">
        Loading...
      </div>
    );
  if (error && !carData)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-400 font-semibold">
        Error loading car details
      </div>
    );
  if (!displayData)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-500 font-semibold">
        No car data available
      </div>
    );

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Title Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Vehicle
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {displayData?.brandName}{" "}
            <span className="text-slate-400 font-light">
              {displayData?.model}
            </span>
          </h1>
        </div>

        {/* Dynamic Availability & Price Badge */}
        <div className="flex items-center gap-3">
          <span
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              displayData?.available
                ? "bg-emerald-950/80 border border-emerald-800/80 text-emerald-400"
                : "bg-red-950/80 border border-red-800/80 text-red-400"
            }`}
          >
            {displayData?.available ? "On Sale" : "Sold"}
          </span>

          {displayData?.available && displayData?.requiredPrice && (
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
              {displayData?.requiredPrice}
            </div>
          )}
        </div>
      </div>

      {/* Main Showcase Section */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Gallery / Image Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hero Main Image Showcase */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-900">
            <img
              src={displayData?.image?.[0]}
              alt="car"
              className="w-full h-80 sm:h-105 lg:h-120 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-slate-300 font-medium">
              <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80">
                {displayData?.year} Edition
              </span>
              <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80">
                {displayData?.typeOfCar}
              </span>
            </div>
          </div>

          {/* Gallery Slider Component */}
          {displayData?.image && displayData.image.length > 0 && (
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-xl">
              <Swipe source={displayData.image} autoPlayInterval={5000} />
            </div>
          )}
        </div>

        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Car className="w-5 h-5 text-cyan-400" />
              Car Specifications
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Detailed technical specifications and verified status.
            </p>
          </div>

          <div className="divide-y divide-slate-800/80 text-sm">
            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Car className="w-4 h-4 text-cyan-400/80" /> Make
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.brandName}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Tag className="w-4 h-4 text-cyan-400/80" /> Model
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.model}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <ShieldCheck className="w-4 h-4 text-cyan-400/80" /> Sale Status
              </span>
              <span
                className={`px-3 py-1 rounded-lg font-bold text-xs text-right border ${
                  displayData?.available
                    ? "bg-emerald-950 border-emerald-800 text-emerald-400"
                    : "bg-red-950 border-red-800 text-red-400"
                }`}
              >
                {displayData?.available ? "On Sale" : "Sold"}
              </span>
            </div>

            {displayData?.available && (
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                  <Tag className="w-4 h-4 text-cyan-400/80" /> Price
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-bold text-xs text-right">
                  {displayData?.requiredPrice}
                </span>
              </div>
            )}

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Fuel className="w-4 h-4 text-cyan-400/80" /> Fuel Type
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.fuelType?.toUpperCase()}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Cog className="w-4 h-4 text-cyan-400/80" /> Transmission
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.transmission || "N/A"}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Car className="w-4 h-4 text-cyan-400/80" /> Type
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.typeOfCar}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Calendar className="w-4 h-4 text-cyan-400/80" /> Year
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.year}
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-4">
              <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                <Gauge className="w-4 h-4 text-cyan-400/80" /> Mileage
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-slate-100 font-semibold text-xs text-right truncate">
                {displayData?.mileAge} km
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
