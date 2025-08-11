import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__link">
        Home
      </NavLink>
      <NavLink to="/Reviews" className="menu__link">
        Emoji reviews
      </NavLink>
      <NavLink to="/AboutMe" className="menu__link">
        About me
      </NavLink>
    </nav>
  );
}

export default NavBar;
