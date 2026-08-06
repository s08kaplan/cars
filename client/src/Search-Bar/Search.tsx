/* "use client";
import React, { useEffect, useState } from "react";
import { getCarByQuery } from "src/helpers/search";

const Search = () => {
  const [search, setSearch]                   = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const query = debouncedSearch.trim()
    if (!query) return
    getCarByQuery({ keyword: query })
  }, [debouncedSearch])

  return (
    <section className="relative w-full max-w-xs sm:max-w-sm ml-5">
      <div className="group relative flex items-center bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500 transition-all duration-200 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="size-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-200 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          value={search}
          placeholder="Brand, model, fuel type, color..."
          className="w-full bg-transparent outline-none border-none px-2.5 py-1 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  )
}

export default Search */

"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCarByQuery } from "src/helpers/search";
import { useDebounce } from "src/hooks/useDebounce";

const Search = () => {
  const [search, setSearch] = useState("")
  const debouncedSearch     = useDebounce(search, 500)

  const { data, isFetching, isError } = useQuery({
    queryKey: ["cars", "search", debouncedSearch],
    queryFn:  () => getCarByQuery(debouncedSearch),
    enabled:  debouncedSearch.trim().length > 0,
    staleTime: 1000 * 30,  // re-use cached result for 30s
    placeholderData: (prev) => prev,
  })

  return (
    <section className="relative w-full max-w-xs sm:max-w-sm ml-5">
      <div className="group relative flex items-center bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500 transition-all duration-200 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="size-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-200 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          value={search}
          placeholder="Brand, model, fuel type, color..."
          className="w-full bg-transparent outline-none border-none px-2.5 py-1 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0"
          onChange={(e) => setSearch(e.target.value)}
        />
        {isFetching && (
          <span className="text-xs text-slate-400 shrink-0">Searching...</span>
        )}
      </div>

      {isError && (
        <p className="mt-2 text-xs text-red-400">Search failed. Try again.</p>
      )}

      {/* Pass data up via props/store, or render inline: */}
      {data?.cars?.length === 0 && (
        <p className="mt-2 text-xs text-slate-400">No cars found.</p>
      )}
    </section>
  )
}

export default Search

