"use client";
import React, { useEffect, useState } from "react";
import { getCarByQuery } from "src/helpers/search";

const Search = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      //api call
      console.log(search);
      getCarByQuery(search);
    }
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value)
    setSearch(e.target.value);
  };
  return (
    <section className="bg-amber-50 w-26 aspect-auto rounded-xl cursor-pointer ml-5">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          className="w-full outline-0 p-2"
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default Search;
