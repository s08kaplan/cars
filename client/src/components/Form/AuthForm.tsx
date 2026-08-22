"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { login, registerUser } from "src/helpers/functions";
import { useAuthStore } from "src/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import useLanguageStore from "src/store/useLanguageStore";
import { Shield, Lock, Mail, User, Phone, Image as ImageIcon, ArrowRight } from "lucide-react";
import { useAuth } from "src/hooks/auth-hooks/useAuth";
import { useLogin } from "src/hooks/auth-hooks/useLogin";
import { useRegister } from "src/hooks/auth-hooks/useRegister";

const loginSchema = z.object({
  email: z.email("Invalid email"),
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
  image: z.string(),  
 /*  role: z.enum(["1", "2"], {
    errorMap: () => ({ message: "Please select a valid user role" }),
  }), */
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
    { name: "image", type: "text", placeholder: "Image (Optional)" },
  ],
  login: [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
};

export default function AuthForm({ formType }: { formType: FormType }) {
  const lang = useLanguageStore((s) => s.lang);
  const t = useLanguageStore((s) => s.t);

  const translatedFields = {
    register: [
      { name: "firstName", type: "text", placeholder: t("formFields.firstName"), icon: User },
      { name: "lastName", type: "text", placeholder: t("formFields.lastName"), icon: User },
      { name: "email", type: "email", placeholder: t("formFields.email"), icon: Mail },
      { name: "contactNumber", type: "text", placeholder: t("formFields.contactNumber"), icon: Phone },
      { name: "password", type: "password", placeholder: t("formFields.password"), icon: Lock },
      { name: "image", type: "text", placeholder: t("formFields.image"), icon: ImageIcon },
    ],
    login: [
      { name: "email", type: "email", placeholder: t("formFields.email"), icon: Mail },
      { name: "password", type: "password", placeholder: t("formFields.password"), icon: Lock },
    ],
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    formType === "login" ? navigate("/register") : navigate("/login");
  };

  const { mutateAsync: loginMutate, isPending: isLoginPending } = useLogin();
  const { mutateAsync: registerMutate, isPending: isRegisterPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(getSchema(formType)) });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(`${formType.toUpperCase()} DATA:`, data);
    
    try {
      if (formType === "login") {
        await loginMutate(data as LoginFormData);
      } else {
        await registerMutate(data as RegisterFormData);
        await loginMutate({
          email: (data as RegisterFormData).email,
          password: (data as RegisterFormData).password,
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.log("error login/register", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 selection:bg-cyan-500 selection:text-slate-950">
      
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-1">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {formType === "login" ? t("formFields.signIn") : t("formFields.signUpTitle")}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {formType === "login" ? t("formFields.signInSubtitle") : t("formFields.signUpSubtitle")}
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {socialIcons.map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800 hover:scale-105"
            >
              <img src={icon} alt="social icon" className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-3 text-[11px] font-medium uppercase tracking-wider text-slate-500 absolute">
            or continue with
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {translatedFields[formType].map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.name} className="space-y-1">
                <div className="relative flex items-center">
                  <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    {...register(field.name as keyof FormData)}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                  />
                </div>
                {errors[field.name as keyof FormData] && (
                  <p className="text-xs text-red-400 pl-1 font-medium">
                    {errors[field.name as keyof FormData]?.message as string}
                  </p>
                )}
              </div>
            );
          })}

          {formType === "login" && (
            <div className="text-right">
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                {t("formFields.forgotPassword")}
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            {formType === "login" ? t("formFields.signIn") : t("formFields.signUp")}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Navigation Toggle */}
        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          {formType === "login" ? (
            <p>
              {t("formFields.signUpMessage")}{" "}
              <button
                type="button"
                onClick={handleNavigate}
                className="text-cyan-400 font-semibold hover:underline cursor-pointer ml-1"
              >
                {t("formFields.signUp")}
              </button>
            </p>
          ) : (
            <p>
              {t("formFields.signInMessage")}{" "}
              <button
                type="button"
                onClick={handleNavigate}
                className="text-cyan-400 font-semibold hover:underline cursor-pointer ml-1"
              >
                {t("formFields.signIn")}
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}