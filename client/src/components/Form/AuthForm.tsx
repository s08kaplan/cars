"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useLanguageStore } from "src/store/useLanguageStore";
import { Shield, Lock, Mail, User, Phone, Image as ImageIcon, ArrowRight, Upload, Link as LinkIcon, Camera } from "lucide-react";
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
  image: z.string().optional(),  
  file: z.any().optional(),
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

export default function AuthForm({ formType }: { formType: FormType }) {
  const lang = useLanguageStore((s) => s.lang);
  const t = useLanguageStore((s) => s.t);
  const navigate = useNavigate();

  // Image tab and file state handling
  const [activeTab, setActiveTab] = useState<"file" | "url">("file");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const translatedFields = {
    register: [
      { name: "firstName", type: "text", placeholder: t("formFields.firstName"), icon: User },
      { name: "lastName", type: "text", placeholder: t("formFields.lastName"), icon: User },
      { name: "email", type: "email", placeholder: t("formFields.email"), icon: Mail },
      { name: "contactNumber", type: "text", placeholder: t("formFields.contactNumber"), icon: Phone },
      { name: "password", type: "password", placeholder: t("formFields.password"), icon: Lock },
    ],
    login: [
      { name: "email", type: "email", placeholder: t("formFields.email"), icon: Mail },
      { name: "password", type: "password", placeholder: t("formFields.password"), icon: Lock },
    ],
  };

  const handleNavigate = () => {
    formType === "login" ? navigate("/register") : navigate("/login");
  };

  const { mutateAsync: loginMutate } = useLogin();
  const { mutateAsync: registerMutate } = useRegister();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(getSchema(formType)) });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setValue("file" as any, file);
      setValue("image" as any, "");
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPreviewUrl(value);
    setValue("image" as any, value);
    setSelectedFile(null);
    setValue("file" as any, null);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (formType === "login") {
        await loginMutate(data as LoginFormData);
      } else {
        const payload: RegisterFormData = {
          ...(data as RegisterFormData),
          file: activeTab === "file" ? selectedFile : null,
          image: activeTab === "url" ? (data as RegisterFormData).image : "",
        };

        await registerMutate(payload);
        await loginMutate({
          email: payload.email,
          password: payload.password,
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

          {/* Image Picker for Register Mode */}
          {formType === "register" && (
            <div className="flex flex-col items-center gap-3 py-2 border-t border-slate-800/80 pt-4">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-slate-950 border-2 border-cyan-500/40 p-1 shadow-xl overflow-hidden flex items-center justify-center">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Profile Preview"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-cyan-400">
                      <User className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-slate-900 border border-slate-700 text-cyan-400 p-1 rounded-xl shadow-md">
                  <Camera className="w-3 h-3" />
                </div>
              </div>

              <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab("file")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "file"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" /> Upload File
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("url")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "url"
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" /> Image URL
                </button>
              </div>

              {activeTab === "file" ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-900 file:text-cyan-400 border border-slate-800 rounded-xl bg-slate-950/80 p-1 cursor-pointer"
                />
              ) : (
                <div className="relative flex items-center w-full">
                  <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="/car.webp"
                    onChange={handleUrlChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              )}
            </div>
          )}

          {formType === "login" && (
            <div className="text-right">
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                {t("formFields.forgotPassword")}
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            {formType === "login" ? t("formFields.signIn") : t("formFields.signUp")}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

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