import img from "../assets/ground2.png";
import style from "./About.module.css";
function About() {
  return (
    <div className={`container ${style.about} vhCom `}>
      <div className="text">
        <h1>About</h1>
        <p>
          Hi Everyone, Iam <span className="nameColor">Eman Ali</span>.
          <br />
          I graduated from the Computer and Information Science faculty,
          <br /> Ain Shams University. and am proficient in HTML, CSS,
          JavaScript, <br />
          and Bootstrap. I am currently expanding my skillset to React JS.
          <br />
        </p>
      </div>
      <img src={img} alt="aboutImage" />
    </div>
  );
}

export default About;
