import React from "react";
import { useAuth } from "../auth-hooks/useAuth";
import useLanguageStore from "src/store/useLanguageStore";

const useNavigation = () => {
  const { user, isLoading, isError } = useAuth();
  const authorized = user && user.firstName;
  console.log(user);
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);
  const t = useLanguageStore((s) => s.t);

  const publicNavigation = [
    {id: "dashboard", name: t("navbar.dashboard"), to: "/dashboard" },
    {id: "about",  name: t("navbar.about"), to: "/about-us" },
    { id: "contact", name: t("navbar.contact"), to: "/contact" },
  ];

  const privateNavigation = [
    ...publicNavigation,
    {id: "car_statistics", name: t("navbar.car_statistics"), to: "/car-statistics" },
    { id: "budget", name: t("navbar.budget"), to: "/budget" },
    {id: "messages", name: t("navbar.messages"), to: "/messages" },
  ];

  const navigation = authorized ? privateNavigation : publicNavigation;
  return { navigation };
};

export default useNavigation;
