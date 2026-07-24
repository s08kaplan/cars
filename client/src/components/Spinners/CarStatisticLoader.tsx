import React from 'react'

const CarStatisticLoader = () => {
  return (
   <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-slate-950 text-slate-100 min-h-screen space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4 border-b border-slate-800/80 animate-pulse">
        <div className="space-y-2 w-full sm:w-1/3">
          <div className="h-7 bg-slate-800 rounded-lg w-48" />
          <div className="h-3 bg-slate-800/60 rounded-md w-64" />
        </div>
        <div className="h-10 bg-slate-800 rounded-xl w-full sm:w-64" />
      </div>

      {/* Table Skeleton */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-4 animate-pulse">
        <div className="h-6 bg-slate-800 rounded-lg w-48 mx-auto" />
        <div className="space-y-3 pt-4">
          <div className="h-10 bg-slate-800/80 rounded-xl w-full" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-slate-900/80 rounded-xl w-full border border-slate-800/50" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarStatisticLoader