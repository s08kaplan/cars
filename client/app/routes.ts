import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("routes/public/layout.tsx", [
        route("login", "routes/public/login.tsx"),
        route("register", "routes/public/register.tsx"),
        route("about", "routes/public/about.tsx"),
        route("contact", "routes/public/contact.tsx"),

    ])
] satisfies RouteConfig;
