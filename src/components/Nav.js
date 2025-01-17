import style from "./Nav.module.css";
function Nav() {
  return (
    <nav>
      <div className={`container ${style.nav}`}>
        <h2 className="nameColor">EA</h2>
        <ul className={style.list}>
          <li>
            <a href="./Home.js">home</a>
            {/* <NavLink to="/Home">home</NavLink> */}
          </li>
          <li>
            <a href="./About.js">About</a>
            {/* about */}
          </li>
          <li>
            <a href="./Projects.js">projects</a>
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
