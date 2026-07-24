"use client";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router";

const CarCard = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <section className="group relative flex flex-col bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 overflow-hidden backdrop-blur-sm w-full">
      {/* Image Container */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-950">
        <img
          src={props.image[0]}
          alt={`${props.brandName} ${props.model}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />

        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-md ${
              props.available
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-rose-500/10 text-rose-400 border-rose-500/30"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                props.available ? "bg-emerald-400" : "bg-rose-400"
              }`}
            />
            {props.available ? "On Sale" : "Sold"}
          </span>
        </div>

        {/* Model Year Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/50 text-slate-300 text-xs font-medium backdrop-blur-md">
            {props.year} Model
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-5 gap-5 flex-1">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-amber-400 transition-colors duration-200 line-clamp-1">
            {props.brandName} {props.model}
          </h3>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs">
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">Mileage</span>
            <span className="font-semibold text-slate-200">{props.mileAge?.toLocaleString()} km</span>
          </div>
          
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">Fuel Type</span>
            <span className="font-semibold text-slate-200 capitalize">{props.fuelType}</span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Price</span>
            <span className="text-xl font-extrabold text-amber-400 tracking-tight">
              ${props.requiredPrice?.toLocaleString()}
            </span>
          </div>

          <Button
            message="Details"
            onClick={() =>
              navigate(`/car-detail/${props._id}`, {
                state: { carData: props },
              })
            }
            className="w-28 px-4 py-2 text-xs font-semibold rounded-xl bg-linear-to-r from-slate-500 to-slate-600 hover:from-silver-400 hover:to-silver-500 text-slate-950! shadow-lg shadow-amber-500/10 transition-all duration-200 active:scale-95"
          />
        </div>
      </div>
    </section>
  );
};

export default CarCard;