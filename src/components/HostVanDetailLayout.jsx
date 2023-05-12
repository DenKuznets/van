
import { NavLink, Outlet } from "react-router-dom";

const HostVanDetailLayout = () => {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="."
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostVanDetailLayout;
