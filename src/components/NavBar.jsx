import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about-us">About us</NavLink>
    </div>
  );
}

export default NavBar;
