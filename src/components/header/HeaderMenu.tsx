import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";

export default function HeaderMenu(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user, token } = useSelector((state: any) => state.auth);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

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
    <>
      {userId && token ? (
        <div className="flex justify-center items-center lg:w-1/3 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <User className="h-7 w-7 cursor-pointer text-gray-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#112d5d] text-white p-4 border-none rounded-b-xl shadow-lg md:absolute md:right-0 md:top-4.5 w-screen md:w-56">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                <DropdownMenuLabel className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8 border-gray-700 border-2">
                    <AvatarImage
                      src="/placeholder.svg?height=50&width=50"
                      alt="Ahmet"
                    />
                    <AvatarFallback className="text-gray-700">
                      AY
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-2 font-semibold">{userId}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-500" />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      Billing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      Notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-gray-500" />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="hover:text-black group checked:text-black">
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem className="group hover-bg-black">
                          Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-500" />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">
                      New Team
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-gray-500" />
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">
                    Support
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-500" />
                <Button
                  variant="ghost"
                  className="w-full text-center bg-gray-500 mt-1"
                  onClick={handleClick}
                >
                  Log Out
                </Button>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex justify-center items-center lg:w-1/3 ">
          <NavLink to="/login" className="lg:hidden w-full">
            <LogIn />
          </NavLink>
          <div className="max-lg:hidden">
            <Button
              variant="outline"
              className="text-black hover:bg-white text-lg hover:bg-white/90 mr-2 transition-colors h-10"
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-[#2563EB] text-lg hover:bg-[#1D4ED8] h-10">
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
