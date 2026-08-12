import React from "react";

export type PageDetail = {
  current: number;
  next: number | boolean;
  previous: number | boolean;
  total: number;
};

export type PaginationProps = {
  pages?: PageDetail | false;
  totalRecords?: number;
  onPageChange?: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  pages,
  totalRecords = 0,
  onPageChange,
}) => {
  if (!pages) return null;

  const { current, next, previous, total } = pages;

  const handlePageClick = (page: number) => {
    if (onPageChange && page >= 1 && page <= total) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 text-sm text-slate-300 w-full">
      <div className="font-medium text-xs sm:text-sm">
        Page <span className="font-semibold text-white">{current}</span> of{" "}
        <span className="font-semibold text-white">{total}</span>{" "}
        <span className="text-slate-400">({totalRecords} items)</span>
      </div>

      <div className="inline-flex items-center gap-2">
        <button
          disabled={previous === false}
          onClick={() => typeof previous === "number" && handlePageClick(previous)}
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg border border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800/80 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          ← Previous
        </button>

        <button
          disabled={next === false}
          onClick={() => typeof next === "number" && handlePageClick(next)}
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;