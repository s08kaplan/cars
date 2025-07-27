"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { login, registerUser } from "src/helpers/functions";
import { useAuthStore } from "src/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export const registerSchema = loginSchema.extend({
  firstName: z.string().min(2, "Name is required"),
  lastName: z.string().min(2, "Name is required"),
  contactNumber: z
    .string()
    .min(11, "Phone number is too short")
    .max(13, "Phone number is too long")
    .refine(
      (val) => {
        const cleaned = val.replace(/[\s-]/g, "");
        return /^(\+90|0)5\d{9}$/.test(cleaned);
      },
      {
        message:
          "Phone number must start with +90 or 0, followed by 5 and 9 more digits",
      }
    ),
  role: z.enum(["1", "2"], {
    errorMap: () => ({ message: "Please select a valid user role" }),
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

type FormType = "login" | "register";
type FormData = LoginFormData | RegisterFormData;

const getSchema = (type: FormType) =>
  type === "login" ? loginSchema : registerSchema;

const socialIcons = [
  "https://imgs.search.brave.com/AYjdgGsW6meEA14jfpSrWHnH1BkApGdprRXA2Cg4R_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yODc1LzI4NzUz/MzEucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
  "https://imgs.search.brave.com/vLH5j1NhqCKKJ7DO3J5hhVgbPO2qxXhfgOFH30acMsI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDM2MTUv/Z2l0aHViLWljb24t/MS1sb2dvLnN2Zw",
  "https://imgs.search.brave.com/yq3kDIhYoYbQAo8739YE5dqH9npbmpHgINsybDlucc8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9saW5rZWRpbi1p/Y29uLnN2Zw",
];

export const fields = {
  register: [
    { name: "firstName", type: "text", placeholder: "First Name" },
    { name: "lastName", type: "text", placeholder: "Last Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "contactNumber", type: "text", placeholder: "Contact Number" },
    { name: "password", type: "password", placeholder: "Password" },
    {
      name: "role",
      type: "select",
      placeholder: "Select User Role",
      options: [
        { value: "", label: "Select User Role" },
        { value: "1", label: "Manager" },
        { value: "2", label: "User" },
        /* { value: "moderator", label: "Moderator" } */
      ],
    },
  ],
  login: [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
};

export default function AuthForm({ formType }: { formType: FormType }) {
  /*  const [formType, setFormType] = useState<FormType>("login"); */

  const navigate = useNavigate();

  const handleNavigate = () => {
    /*  if(formType == "login"){
      setFormType("register")
      navigate("/register")
    }else {
     setFormType("login")
    navigate("/login")  
    } */
    formType == "login" ? navigate("/register") : navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(getSchema(formType)) });

  const setUser = useAuthStore((state) => state.setUser);
  const setIsAuthenticate = useAuthStore((state) => state.setIsAuthenticate);

  const queryClient = useQueryClient()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(`${formType.toUpperCase()} DATA:`, data);
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
              <img src={icon} alt="icon" />
            </a>
          ))}
        </div>

        <span className="text-sm text-center block">
          or use your email{" "}
          {formType === "login" ? "to sign in" : "for registration"}
        </span>

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

        <div className="text-center text-sm">
          {formType === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => handleNavigate()}
                className="text-pink-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => handleNavigate()}
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
