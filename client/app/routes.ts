import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/MainRoute.tsx", [
    index("routes/home.tsx"),
    layout("routes/public/layout.tsx", [
      route("login", "routes/public/Login.tsx"),
      route("register", "routes/public/Register.tsx"),
      route("about-us", "routes/public/About.tsx"),
      route("contact", "routes/public/Contact.tsx"),
      route("dashboard", "routes/public/Dashboard.tsx"),
      route("car-detail/:carId", "routes/public/CarDetail.tsx"),
    ]),
    layout("routes/private/layout.tsx", [
      route("car-statistics", "routes/private/CarStatistics.tsx"),
      route("profile", "routes/private/Profile.tsx"),
      route("budget", "routes/private/Budget.tsx"),
      route("/messages", "routes/private/Messages.tsx")
    ]),
  ]),
] satisfies RouteConfig;
