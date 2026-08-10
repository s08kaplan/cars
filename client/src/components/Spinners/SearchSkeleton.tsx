const SearchSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="w-full h-96 bg-slate-900/60 border border-slate-800/80 rounded-2xl animate-pulse"
      />
    ))}
  </div>
);

export default SearchSkeleton;