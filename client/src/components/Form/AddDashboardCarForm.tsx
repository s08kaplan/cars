import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  dashboardCarSchema,
  type DashboardCarFormData,
} from "src/functions/dashboardCarsApiCalls";
import { useAddDashboardCar } from "src/hooks/dashboard-cars/useAddDashboardCard";

const AddDashboardCarForm: React.FC = () => {
  const { mutateAsync, isPending } = useAddDashboardCar();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DashboardCarFormData>({
    resolver: zodResolver(dashboardCarSchema),
  });

  const onSubmit = async (data: DashboardCarFormData) => {
    try {
      await mutateAsync(data);
      reset();

      const popover = document.getElementById("success-dashboard-car-popover");
      if (popover && "showPopover" in popover) {
        (popover as HTMLElement).showPopover();
      }
    } catch (error) {
      console.error("Failed to upload dashboard car images:", error);
    }
  };

  const renderError = (message?: string) =>
    message ? (
      <p className="text-[10px] sm:text-[11px] font-medium text-red-400 mt-1 pl-1 flex items-center gap-1">
        <span>•</span> {message}
      </p>
    ) : null;

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-medium text-slate-400 pl-1">
            Dashboard Car Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            {...register("imageFiles")}
            className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-950/60 border rounded-xl sm:rounded-2xl text-xs sm:text-sm text-slate-400 file:mr-3 sm:file:mr-4 file:py-1 file:sm:py-1.5 file:px-2.5 file:sm:px-3.5 file:rounded-lg file:sm:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20 file:cursor-pointer cursor-pointer transition-all duration-200 ${
              errors.imageFiles
                ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-slate-800/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80"
            }`}
          />
          {renderError(errors.imageFiles?.message as string)}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-2 py-3.5 sm:py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Uploading..." : "Upload Dashboard Images"}
        </button>
      </form>
    </div>
  );
};

export default AddDashboardCarForm;