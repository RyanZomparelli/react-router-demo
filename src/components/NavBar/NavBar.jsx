import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  //NavLink takes a special isActive object to aid in styling
  function addCustomClassName({ isActive }) {
    return "menu__link" + (isActive ? " menu__link_active" : "");
  }

  //The NavLink component is just like the Link component but takes a special attribute for styling

  return (
    <nav className="menu">
      <NavLink to="/" className={addCustomClassName}>
        Home
      </NavLink>
      <NavLink to="/Reviews" className={addCustomClassName}>
        Emoji reviews
      </NavLink>
      <NavLink to="/AboutMe" className={addCustomClassName}>
        About me
      </NavLink>
      <NavLink to="/AboutUs" className={addCustomClassName}>
        About Us
      </NavLink>
    </nav>
  );
}

export default NavBar;
