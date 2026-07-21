"use client";
import React, { use, useEffect, useState } from "react";
import CarCard from "src/components/Card/CarCard";
import Swipe from "src/components/Swipe/Swipe";
import { images } from "../../../src/helpers/test-swipe/test";
import { getCars } from "src/helpers/functions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "src/store/useAuthStore";
import Banner from "src/components/UI/Banner";
import CarSpinner from "src/components/Spinners/CarSpinner";

const Dashboard = () => {
  const {
    data: cars,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

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
            {error?.message || "Unknown error occurred while fetching inventory."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#0B1120] text-slate-100 gap-10 pb-16">
      <Banner />

      {/* Showcase Slider Section */}
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
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
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
            {cars?.data?.length || 0} Vehicles
          </span>
        </div>

        {/* Responsive Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars?.data.map((car: any) => (
            <CarCard key={car._id} {...car} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;