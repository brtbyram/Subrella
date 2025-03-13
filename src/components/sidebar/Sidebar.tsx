import {
  BellRing,
  ChartNoAxesCombined,
  CircleUser,
  LogOut,
  Logs,
  Receipt,
  Settings,
  SquareKanban,
  Store,
  Tags,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { logout } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Sidebar() {

const dispatch = useDispatch();
    const navigate = useNavigate();

const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("Çıkış başarılı:", response.data);
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Çıkış sırasında bir hata oluştu", error);
    }
  };

  return (
    <nav className="w-80 bg-gray-800 text-white p-4 sticky left-0 top-0 h-screen">
      <Link to="/">
        <img src="/public/logo-uzun.png" alt="logo" />
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-900 text-white p-2 rounded w-full mt-4"
        />
      </div>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Dashboard
      </h2>
      <ul className="flex flex-col ">
        <Link
          to="/"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-[#112d5d]"
        >
          <SquareKanban size="24" className="mr-2" />
          Overview
        </Link>
        <Link
          to="/subscriptions"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-red-600"
        >
          <Logs size="24" className="mr-2" /> Subscriptions
        </Link>
        <Link
          to="/payments"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-cyan-600"
        >
          <Receipt size="24" className="mr-2" /> Invoices
        </Link>
        <Link
          to="/analytics"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <ChartNoAxesCombined size="24" className="mr-2" /> Analytics
        </Link>
        <Link
          to="/notifications"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <BellRing size="24" className="mr-2" /> Notifications
        </Link>
      </ul>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Discover
      </h2>
      <ul className="flex flex-col ">
        <Link
          to="/overview"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <Store  size="24" className="mr-2" />
          All Apps
        </Link>
        <Link
          to="/subscriptions"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <Tags size="24" className="mr-2" /> Deals & Offers
        </Link>
      </ul>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Settings
      </h2>
      <ul className="flex flex-col ">
        <Link
          to="/profile"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <CircleUser size="24" className="mr-2" />
          Account
        </Link>
        <Link
          to="/subscriptions"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <Settings size="24" className="mr-2" /> Preferences
        </Link>
        <button
        onClick={handleClick}
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <LogOut size="24" className="mr-2" /> Logout
        </button>
      </ul>
    </nav>
  );
}
