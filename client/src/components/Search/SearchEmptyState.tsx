interface SearchEmptyStateProps {
  query: string;
}

const SearchEmptyState = ({ query }: SearchEmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
    <svg
      className="w-12 h-12 text-slate-600 mb-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <h3 className="text-lg font-semibold text-slate-300">No cars found</h3>
    <p className="text-sm text-slate-500 mt-1">
      We couldn't find any results matching "{query}". Try searching by another brand, model, or fuel type.
    </p>
  </div>
);

export default SearchEmptyState;