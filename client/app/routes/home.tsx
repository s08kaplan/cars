import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AutoDen Car App" },
    { name: "description", content: "Welcome to AutoDen car gallery" },
  ];
}

export default function Home() {
  return (
    <>
    
    <Welcome />
    </>
);
}
