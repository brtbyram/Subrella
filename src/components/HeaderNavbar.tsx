import { NavLink } from "react-router";

function HeaderNavbar() : any {
  return (
    <>
      <nav className="space-x-6 hidden md:flex">
        <NavLink to="/subscriptions" className="hover:text-[#2563EB]">
          Abonelikler
        </NavLink>
        <NavLink to="/payments" className="hover:text-[#2563EB]">
          Ödemeler
        </NavLink>
        <NavLink to="/analyzes" className="hover:text-[#2563EB]">
          Analizler
        </NavLink>
      </nav>
    </>
  );
}

export default HeaderNavbar;
