import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuthStore } from "src/store/useAuthStore";
import { registerSchema } from "./AuthForm";
import { fields } from "./AuthForm";
import axios from "axios";


export const budgetSchema = z.object({
  addedBy: z.string().min(2, "The name of the person who added is required"),
  type: z.enum(["expense", "income"]),
  amount: z
    .number()
    .nonnegative(),
  explanation: z
    .string()
});

export type BudgetFormData = z.infer<typeof budgetSchema>;

export const budgetFields = [
  { name: "addedBy", type: "text", placeholder: "Added By (Name)*" },
  { name: "type", type: "text", placeholder: "Specify income or expense" },
  { name: "amount", type: "number", placeholder: "Enter the amount" },
  { name: "explanation", type: "textarea", placeholder: "Add explanation please" }
];


const BudgetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormData>({ resolver: zodResolver(budgetSchema) });

  const onSubmit: SubmitHandler<BudgetFormData> = async (data) => {
    console.log(`DATA:`, data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}budgets`,
        data
      );
      return response?.data;
    } catch (error) {
      console.error("Messagwe could not be sent", error);
    }
  };

  return (
    <section className="flex flex-col sm:flex">
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {budgetFields.map((field) => (
            <div key={field.name}>
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.name as keyof BudgetFormData)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded text-sm"
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.name as keyof BudgetFormData)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded text-sm"
                />
              )}
              {errors[field.name as keyof BudgetFormData] && (
                <p className="text-xs text-red-500 mt-1">
                  {
                    errors[field.name as keyof BudgetFormData]
                      ?.message as string
                  }
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-32 py-2 text-sm font-bold text-white uppercase bg-[#195190] rounded hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
     
    </section>
  );
}

export default BudgetForm