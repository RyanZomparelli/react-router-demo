import { Link, Outlet } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  //The outlet Component tag is necessary to make the parent route render the children routes
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="MyStory">My Story</Link>
        </li>
        <li>
          <Link to="Hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
      <p>I&apos;m a simple person. I see Emojis, I write reviews.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;
