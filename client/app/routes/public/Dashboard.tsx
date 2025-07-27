"use client";
import React, { use, useEffect, useState } from "react";
import CarCard from "src/components/Card/CarCard";
import Swipe from "src/components/Swipe/Swipe";
import { images } from "../../../src/helpers/test-swipe/test";
import { getCars } from "src/helpers/functions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "src/store/useAuthStore";
import Banner from "src/components/UI/Banner";

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
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading cars...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">
          Error loading cars: {error?.message || "Unknown error"}
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-3 bg-[#14202E] text-[#F0F2F5]">
    <Banner/>
      <section className="flex justify-center">
        <Swipe source={images} />
      </section>
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-3">
        {cars?.data.map((car: any) => (
          <CarCard key={car._id} {...car} />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
