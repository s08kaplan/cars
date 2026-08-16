import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { carSchema, type CarFormData } from "src/functions/carApiCalls";
import { useAddCar } from "src/hooks/cars/useAddCar";

const AddCarForm = () => {
  const { mutate, isPending } = useAddCar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      typeOfCar: "Sedan",
      fuelType: "Petrol",
      transmission: "Automatic",
      carStatus: "Waiting",
      available: true,
      features: [],
    },
  });

  const onSubmit = (data: CarFormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("brandName")} placeholder="Brand Name" />
      {errors.brandName && <p>{errors.brandName.message}</p>}

      <input {...register("model")} placeholder="Model" />
      {errors.model && <p>{errors.model.message}</p>}

      <input 
        type="number" 
        {...register("year", { valueAsNumber: true })} 
        placeholder="Year" 
      />
      {errors.year && <p>{errors.year.message}</p>}

      <input 
        type="number" 
        {...register("boughtPrice", { valueAsNumber: true })} 
        placeholder="Bought Price" 
      />
      {errors.boughtPrice && <p>{errors.boughtPrice.message}</p>}

      <input 
        type="number" 
        {...register("requiredPrice", { valueAsNumber: true })} 
        placeholder="Required Price" 
      />
      {errors.requiredPrice && <p>{errors.requiredPrice.message}</p>}

      <input type="file" multiple {...register("imageFiles")} />
      {errors.imageFiles && <p>{errors.imageFiles.message}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Save Car"}
      </button>
    </form>
  );
};
export default AddCarForm;