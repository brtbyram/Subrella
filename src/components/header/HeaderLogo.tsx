import { NavLink } from "react-router";

export default function HeaderLogo():any {
  return (
    <div className="text-3xl font-bold w-1/2 md:w-1/3 text-center justify-center flex flex-1 md:items-start font-poppins">
      <NavLink to="/">
        <img
          src="/public/subrella-long.png"
          className="h-10 w-auto overflow-hidden object-contain " 
        />
      </NavLink>
    </div>
  );
}
