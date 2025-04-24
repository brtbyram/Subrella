import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Payments from "../pages/Payments";
import Subscriptions from "../pages/subscriptions/Subscriptions";
import Analyzes from "../pages/Analyzes";
import Pricing from "../pages/Pricing";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Contact from "../pages/Contact";

import ProtectedRoute from "./ProtectedRoute";
import AboutUsPage from "@/pages/about/About";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import WelcomePage from "@/pages/Welcome";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <ProtectedRoute /> },
      { path: "welcome", element: <WelcomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <Contact /> },
      { path: "pricing", element: <Pricing /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "payments", element: <Payments /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "analytics", element: <Analyzes /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

const router = createBrowserRouter(routes);

export default router;
