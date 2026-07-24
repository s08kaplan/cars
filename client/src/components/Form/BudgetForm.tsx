import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
            <div key={field.name} className="space-y-1">
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.name as keyof BudgetFormData)}
                  placeholder={field.placeholder}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.name as keyof BudgetFormData, {
                    valueAsNumber: field.type === "number",
                  })}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                />
              )}
              {errors[field.name as keyof BudgetFormData] && (
                <p className="text-xs text-red-400 pl-1 font-medium">
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
            className="w-full sm:w-32 py-2.5 px-4 text-sm font-bold text-slate-950 uppercase bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer mt-2"
          >
            Submit
          </button>
        </form>
     
    </section>
  );
}

export default BudgetForm;