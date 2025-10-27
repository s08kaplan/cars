import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuthStore } from "src/store/useAuthStore";
import { registerSchema } from "./AuthForm";
import { fields } from "./AuthForm";
import axios from "axios";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // Optional field
        const cleaned = val.replace(/[\s-]/g, "");
        return /^(\+90|0)5\d{9}$/.test(cleaned);
      },
      {
        message:
          "Phone number must start with +90 or 0, followed by 5 and 9 more digits",
      }
    ),
  title: z.string().max(100, "Title must be at most 100 characters").optional(),
  content: z.string().min(1, "Message content is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const contactFields = [
  { name: "firstName", type: "text", placeholder: "First Name" },
  { name: "lastName", type: "text", placeholder: "Last Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "tel", placeholder: "Phone Number (Optional)" },
  { name: "title", type: "text", placeholder: "Subject (Optional)" },
  { name: "content", type: "textarea", placeholder: "Your Message" },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(`DATA:`, data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}`,
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
          {contactFields.map((field) => (
            <div key={field.name}>
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.name as keyof ContactFormData)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded text-sm"
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.name as keyof ContactFormData)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded text-sm"
                />
              )}
              {errors[field.name as keyof ContactFormData] && (
                <p className="text-xs text-red-500 mt-1">
                  {
                    errors[field.name as keyof ContactFormData]
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
};

export default ContactForm;
