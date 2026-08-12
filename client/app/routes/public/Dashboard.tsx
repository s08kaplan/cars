"use client";

import React, { useRef } from "react";
import CarCard from "src/components/Card/CarCard";
import Swipe from "src/components/Swipe/Swipe";
import Banner from "src/components/UI/Banner";
import CarSpinner from "src/components/Spinners/CarSpinner";
import Pagination from "src/components/Pagination/Pagination";
import { images } from "src/helpers/test-swipe/test";
import { useCars } from "src/hooks/cars/useCars";

const Dashboard = () => {
  const { cars, details, isLoading, isError, error, handlePageChange } = useCars(1, 10);
  const inventoryRef = useRef<HTMLElement>(null);

  const onPageChange = (newPage: number) => {
    handlePageChange(newPage);
    inventoryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0B1120]">
        <CarSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0B1120] p-4">
        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 max-w-md text-center shadow-2xl backdrop-blur-md">
          <p className="font-semibold text-lg">Error loading cars</p>
          <p className="text-sm text-rose-300/80 mt-1">
            {(error as Error)?.message || "Unknown error occurred while fetching inventory."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#0B1120] text-slate-100 gap-10 pb-16">
      <Banner />

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-100">
            Featured Collections
          </h2>
          <p className="text-sm text-slate-400">
            Hand-picked selections updated daily
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl bg-slate-900/50 p-2">
          <Swipe source={images} />
        </div>
      </section>

      {/* Main Inventory Section */}
      <section ref={inventoryRef} className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">
              Available Inventory
            </h2>
            <p className="text-sm text-slate-400 mt-0.5">
              Explore our wide variety of premium vehicles
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-amber-400">
            {details?.totalRecords || cars.length} Vehicles
          </span>
        </div>

        {/* Responsive Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car: any) => (
            <CarCard
              key={car._id || car.id}
              _id={car._id || car.id}
              brandName={car.brandName || car.brand}
              model={car.model}
              image={car.image || [car.imageUrl || "/placeholder-car.jpg"]}
              available={car.available ?? true}
              year={car.year || new Date().getFullYear()}
              mileAge={car.mileAge || car.mileage || 0}
              fuelType={car.fuelType || "N/A"}
              requiredPrice={car.requiredPrice || car.price || 0}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination
          pages={details?.pages}
          totalRecords={details?.totalRecords}
          onPageChange={onPageChange}
        />
      </section>
    </main>
  );
};

export default Dashboard;