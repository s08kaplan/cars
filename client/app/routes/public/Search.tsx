"use client";
import CarCard from "src/components/Card/CarCard";
import SearchSkeleton from "src/components/Spinners/SearchSkeleton";
import SearchEmptyState from "src/components/Search/SearchEmptyState";
import { useCarSearch } from "src/hooks/search/useCarSearch";

const SearchPage = () => {
  const { query, cars, isLoading, isError, isEmpty } = useCarSearch();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {query ? (
              <>
                Search Results for <span className="text-cyan-400">"{query}"</span>
              </>
            ) : (
              "Explore Cars"
            )}
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            {!isLoading && `${cars.length} vehicles found`}
          </p>
        </header>

        {/* States */}
        {isError && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
            Failed to load search results. Please check your network connection and try again.
          </div>
        )}

        {isLoading && <SearchSkeleton />}

        {isEmpty && <SearchEmptyState query={query} />}

        {/* Results Grid */}
        {!isLoading && cars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        )}
      </div>
    </main>
  );
};

export default SearchPage;