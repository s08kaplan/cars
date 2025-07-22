import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AutoDen Car App" },
    { name: "description", content: "Welcome to AutoDen car gallery" },
  ];
}

export default function Home() {
     useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
    
    <Welcome />
    </>
);
}
