import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { carSchema, type CarFormData } from "src/functions/carApiCalls";
import { useAddCar } from "src/hooks/cars/useAddCar";

export const carFields = [
  { name: "brandName", type: "text", placeholder: "Brand Name" },
  { name: "model", type: "text", placeholder: "Model" },
  { name: "vehicleIdentificationNumber", type: "text", placeholder: "VIN Number" },
  { name: "color", type: "text", placeholder: "Color" },
  { name: "year", type: "number", placeholder: "Year (Min 1950)", min: 1950 },
  { name: "mileAge", type: "number", placeholder: "Mileage (km)", min: 0 },
  {
    name: "typeOfCar",
    type: "select",
    options: ["Sedan", "SUV", "Hatchback"],
  },
  {
    name: "fuelType",
    type: "select",
    options: ["Petrol", "Diesel", "Electric", "Hybrid"],
  },
  {
    name: "transmission",
    type: "select",
    options: ["Automatic", "Manual"],
  },
  {
    name: "carStatus",
    type: "select",
    options: ["Waiting", "Dealing", "Sold", "Repair", "Cleaning"],
  },
  { name: "boughtPrice", type: "number", placeholder: "Bought Price", min: 0 },
  { name: "requiredPrice", type: "number", placeholder: "Required Price", min: 0 },
  {
    name: "soldPrice",
    type: "number",
    placeholder: "Sold Price (Optional)",
    min: 0,
    fullWidth: true,
  },
] as const;

const AddCarForm = () => {
  const { mutate, isPending } = useAddCar();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      typeOfCar: "Sedan",
      fuelType: "Petrol",
      transmission: "Automatic",
      carStatus: "Waiting",
      available: true,
      features: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features" as never,
  });

  const onSubmit = (data: CarFormData) => {
    mutate(data);
  };

  const inputStyles = (hasError: boolean) =>
    `w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-slate-950/60 border rounded-xl sm:rounded-2xl text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-200 ${
      hasError
        ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-slate-800/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80"
    }`;

  // Custom arrow styling for <select> elements
  const selectStyles = (hasError: boolean) =>
    `${inputStyles(
      hasError
    )} appearance-none bg-[right_0.75rem_center] sm:bg-[right_1rem_center] bg-no-repeat pr-8 sm:pr-10 cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white [background-image:url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]`;

  const renderError = (message?: string) =>
    message ? (
      <p className="text-[10px] sm:text-[11px] font-medium text-red-400 mt-1 pl-1 flex items-center gap-1">
        <span>•</span> {message}
      </p>
    ) : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-3 mt-40 sm:mt-0 md:mt-0 lg:mt-0 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Hide default number spin arrows across all browsers */}
      <style>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
          margin: 0 !important;
        }
        input[type="number"] {
          -moz-appearance: textfield !important;
          appearance: textfield !important;
        }
      `}</style>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {carFields.map((field) => {
            const fieldName = field.name as keyof CarFormData;
            const fieldError = errors[fieldName];
            const isFullWidth = "fullWidth" in field && field.fullWidth;

            return (
              <div
                key={field.name}
                className={`flex flex-col ${
                  isFullWidth ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1"
                }`}
              >
                <div className="relative">
                  {field.type === "select" ? (
                    <select
                      {...register(fieldName)}
                      className={selectStyles(!!fieldError)}
                    >
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      min={"min" in field ? field.min : undefined}
                      {...register(
                        fieldName,
                        field.type === "number"
                          ? {
                              setValueAs: (v) =>
                                v === "" ? undefined : Number(v),
                            }
                          : {}
                      )}
                      placeholder={field.placeholder}
                      className={inputStyles(!!fieldError)}
                    />
                  )}
                </div>
                {renderError(fieldError?.message as string)}
              </div>
            );
          })}

          {/* Features Dynamic Array */}
          <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-3 space-y-2">
            <label className="text-xs font-medium text-slate-400 pl-1">
              Features
            </label>
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <input
                  {...register(`features.${index}`)}
                  placeholder={`Feature #${index + 1}`}
                  className={inputStyles(!!errors.features?.[index])}
                />
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="shrink-0 px-3 py-3 sm:py-3.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl sm:rounded-2xl text-xs sm:text-sm hover:bg-red-500/20 transition-all cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => append("")}
              className="self-start text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-1 pl-1 cursor-pointer"
            >
              + Add Feature
            </button>
            {renderError(errors.features?.message)}
          </div>

          {/* Availability Checkbox */}
          <div className="flex items-center gap-3 col-span-1 sm:col-span-2 lg:col-span-3 py-1 pl-1">
            <input
              type="checkbox"
              id="available"
              {...register("available")}
              className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500/80 focus:ring-offset-slate-950 cursor-pointer"
            />
            <label
              htmlFor="available"
              className="text-xs sm:text-sm font-medium text-slate-300 cursor-pointer select-none"
            >
              Available for Sale
            </label>
          </div>

          {/* Image File Input */}
          <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
            <input
              type="file"
              multiple
              {...register("imageFiles")}
              className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-950/60 border rounded-xl sm:rounded-2xl text-xs sm:text-sm text-slate-400 file:mr-3 sm:file:mr-4 file:py-1 file:sm:py-1.5 file:px-2.5 file:sm:px-3.5 file:rounded-lg file:sm:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20 file:cursor-pointer cursor-pointer transition-all duration-200 ${
                errors.imageFiles
                  ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-800/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80"
              }`}
            />
            {renderError(errors.imageFiles?.message as string)}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-2 py-3.5 sm:py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Submitting..." : "Save Car"}
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;