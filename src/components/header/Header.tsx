import HeaderNavbar from "./HeaderNavbar";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function Header(): any {
  return (
    <header className="bg-[#112d5d] text-white py-4 fixed w-full z-20 border-b border-white/10">
      <div className="flex items-center justify-between gap-x-4 container mx-auto px-5 ">
        <HeaderLogo />
        <HeaderNavbar />
        <HeaderMenu />
      </div>
    </header>
  );
}
