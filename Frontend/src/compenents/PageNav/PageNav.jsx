import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Contact</NavLink>
        </li>
      </li>
    </nav>
  );
}

export default PageNav;
