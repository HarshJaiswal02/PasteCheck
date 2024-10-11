import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center max-w-sm mx-auto mt-4">
      <div className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
