import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Payments from "../pages/Payments";
import Subscriptions from "../pages/Subscriptions";
import Analyzes from "../pages/Analyzes";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

import ProtectedRoute from "./ProtectedRoute";
import AboutUsPage from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import WelcomePage from "@/pages/Welcome";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <ProtectedRoute /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "welcome", element: <WelcomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <Contact /> },
      { path: "pricing", element: <Pricing /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "payments", element: <Payments /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "analyzes", element: <Analyzes /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
