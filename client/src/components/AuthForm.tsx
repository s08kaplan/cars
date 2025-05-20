"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

type FormType = "login" | "register";
type FormData = LoginFormData | RegisterFormData;

const getSchema = (type: FormType) =>
  type === "login" ? loginSchema : registerSchema;

const socialIcons = ["facebook-f", "google-plus-g", "linkedin-in"];

const fields = {
  register: [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
  login: [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
};

export default function AuthForm() {
  const [formType, setFormType] = useState<FormType>("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(getSchema(formType)) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(`${formType.toUpperCase()} DATA:`, data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          {formType === "login" ? "Sign In" : "Create Account"}
        </h2>

        <div className="flex justify-center space-x-3">
          {socialIcons.map((icon) => (
            <a
              key={icon}
              href="#"
              className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-pink-500"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>

        <span className="text-sm text-center block">
          or use your email {formType === "login" ? "to sign in" : "for registration"}
        </span>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {fields[formType].map((field) => (
            <div key={field.name}>
              <input
                {...register(field.name as keyof FormData)}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
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

        <div className="text-center text-sm">
          {formType === "login" ? (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => setFormType("register")}
                className="text-pink-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setFormType("login")}
                className="text-pink-500 hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}