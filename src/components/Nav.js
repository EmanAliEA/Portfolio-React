// import { NavLink } from "react-router";
import { Link } from "react-scroll";
import style from "./Nav.module.css";
function Nav() {
  return (
    <nav>
      <div className={`container ${style.nav}`}>
        <h2 className="nameColor">EA</h2>
        <ul className={style.list}>
          <li>
            {/* <a href="./Home.js">home</a> */}
            <Link
              to="home"
              smooth={true}
              activeClass="active"
              duration={500}
              spy={true}
            >
              home
            </Link>
          </li>
          <li>
            {/* <a href="./About.js">About</a> */}
            <Link
              to="about"
              smooth={true}
              activeClass="active"
              duration={500}
              spy={true}
            >
              About
            </Link>
            {/* about */}
          </li>
          <li>
            {/* <a href="./Projects.js">projects</a> */}
            <Link
              to="projects"
              smooth={true}
              activeClass="active"
              duration={500}
              spy={true}
            >
              projects
            </Link>
            {/* projects */}
          </li>
          <li>
            <a href="./Projects.js">resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
