import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
