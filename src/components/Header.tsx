
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Bell, UserCircle2 } from "lucide-react";
import HeaderNavbar from "./HeaderNavbar";

export default function Header() : any {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Kullanıcı oturum açmış mı?

  return (
    <header className="bg-[#1E293B] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">Subrella</h1>

      {/* Menü Bağlantıları */}
      <HeaderNavbar />

      {/* Sağ Taraftaki Butonlar */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <Bell className="w-6 h-6 hover:text-[#2563EB] cursor-pointer" />
            <UserCircle2 className="w-8 h-8 cursor-pointer hover:text-[#2563EB]" />
          </>
        ) : (
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            Giriş Yap
          </Button>
        )}
      </div>
    </header>
  );
}