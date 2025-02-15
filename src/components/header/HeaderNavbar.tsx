import { NavLink, useLocation, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  ChartNoAxesCombined,
  CircleAlert,
  CircleDollarSign,
  CreditCard,
  LayoutList,
  List,
  PhoneCall,
} from "lucide-react";
import { useEffect, useState } from "react";

function HeaderNavbar(): any {
  const { token } = useSelector((state: RootState) => state.auth);
  const [isToken, setIsToken] = useState<boolean>();
  const location  = useLocation();

  const locationPath = location.pathname.replace("/", "");

  console.log(locationPath);

  useEffect(() => {
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [token]);

  const items = [
    { name: "Dashboard", icon: <LayoutList />, public: false },
    { name: "Payments", icon: <CircleDollarSign />, public: false },
    { name: "Subscriptions", icon: <List />, public: false },
    { name: "Analyzes", icon: <ChartNoAxesCombined />, public: false },
    { name: "About", icon: <CircleAlert />, public: true },
    { name: "Contact", icon: <PhoneCall/>, public: true },
    { name: "Pricing", icon: <CreditCard />, public: true },
  ];

  return (
    <>
      <nav className="flex flex-1 space-x-4 lg:w-1/3 items-center justify-end lg:justify-center">
        {items
          .filter((item) => !item.public === isToken)
          .map((item) => (
            <NavLink
              key={item.name}
              to={`${item.name.toLowerCase()}`}
              className={({ isActive }) =>
                `transition-all hover:scale-110 flex items-center justify-center gap-x-1 ${
                  isActive
                    ? "text-white border-b-2  p-1"
                    : "text-gray-300 "
                }`  
              }
            >
              <span>{item.icon}</span>
              <span className={` ${locationPath === item.name.toLowerCase() && "sm:flex" } hidden lg:flex`}>{item.name}</span>
            </NavLink>
          ))}
      </nav>
    </>
  );
}

export default HeaderNavbar;

