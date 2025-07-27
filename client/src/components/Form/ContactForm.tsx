import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuthStore } from "src/store/useAuthStore";
import { registerSchema } from "./AuthForm";
import { fields } from "./AuthForm";

const contactSchema = registerSchema.omit({ role: true });

type ContactFormData = z.infer<typeof contactSchema>;

const contactFields = fields.filter((f) => f.name !== "role");

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

   const onSubmit: SubmitHandler<FormData> = async (data) => {
      console.log(`DATA:`, data);
      let user;
      try {
        if (formType === "login") {
          user = await login(data as LoginFormData);
        } else {
          await registerUser(data as RegisterFormData);
          user = await login({
            email: (data as RegisterFormData).email,
            password: (data as RegisterFormData).password,
          });
        }
  
        setUser(user);
        setIsAuthenticate(true);
        queryClient.setQueryData(["auth", "current-user"], user);
        navigate("/dashboard");
      } catch (error) {
        console.log("error login/register", error);
      }
    };

  return (
    <section>
      <h3>Contact us</h3>
      <h4>We value your opinions and suggestions</h4>
      <div>
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {fields[formType].map((field) => (
                    <div key={field.name}>
                      {field.type === "select" ? (
                        <select
                          {...register(field.name as keyof FormData)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                        >
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          {...register(field.name as keyof FormData)}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      )}
                      {errors[field.name as keyof FormData] && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors[field.name as keyof FormData]?.message as string}
                        </p>
                      )}
                    </div>
                  ))}
        
                  {formType === "login" && (
                    <a href="#" className="block text-sm text-gray-600 text-right">
                      Forgot your password?
                    </a>
                  )}
        
                  <button
                    type="submit"
                    className="w-full py-2 text-sm font-bold text-white uppercase bg-pink-500 rounded hover:bg-pink-600 transition"
                  >
                    {formType === "login" ? "Sign In" : "Sign Up"}
                  </button>
                </form>
      </div>
    </section>
  );
};

export default ContactForm;
