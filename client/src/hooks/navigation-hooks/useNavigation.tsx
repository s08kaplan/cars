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
    { name: t("navbar.dashboard"), to: "/dashboard" },
    { name: t("navbar.about"), to: "/about-us" },
    { name: t("navbar.contact"), to: "/contact" },
  ];

  const privateNavigation = [
    ...publicNavigation,
    { name: t("navbar.car_statistics"), to: "/car-statistics" },
    { name: t("navbar.budget"), to: "/budget" },
    { name: t("navbar.messages"), to: "/messages" },
  ];

  const navigation = authorized ? privateNavigation : publicNavigation;
  return { navigation };
};

export default useNavigation;
