import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import useNewMessage from "src/hooks/messages/useNewMessage";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z
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
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
const { mutateAsync, isSuccess, isError, isPending } = useNewMessage()
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(`DATA:`, data);
    try {
      await mutateAsync(data);
      reset(); 

      const popover = document.getElementById("success-popover");
      if (popover && "showPopover" in popover) {
        (popover as HTMLElement).showPopover();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="space-y-4">
      {/* Grid container for 2-column input arrangement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactFields.map((field) => {
          const fieldError = errors[field.name as keyof ContactFormData];
          const isFullWidth = field.name === "title" || field.type === "textarea";

          return (
            <div 
              key={field.name} 
              className={`flex flex-col ${isFullWidth ? "sm:col-span-2" : "col-span-1"}`}
            >
              <div className="relative">
                {field.type === "textarea" ? (
                  <textarea
                    {...register(field.name as keyof ContactFormData)}
                    placeholder={field.placeholder}
                    rows={4}
                    className={`w-full px-4 py-3.5 bg-slate-950/60 border rounded-2xl text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-200 resize-none ${
                      fieldError 
                        ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                        : "border-slate-800/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80"
                    }`}
                  />
                ) : (
                  <input
                    type={field.type}
                    {...register(field.name as keyof ContactFormData)}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3.5 bg-slate-950/60 border rounded-2xl text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-200 ${
                      fieldError 
                        ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                        : "border-slate-800/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80"
                    }`}
                  />
                )}
              </div>

              {/* Error Message Display */}
              {fieldError && (
                <p className="text-[11px] font-medium text-red-400 mt-1.5 pl-1 flex items-center gap-1">
                  <span>•</span> {fieldError.message as string}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isPending}
        /* popoverTarget={isSuccess ? "success-popover" : ""} */
        className="w-full mt-2 py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm rounded-2xl shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer"
      >
       {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;