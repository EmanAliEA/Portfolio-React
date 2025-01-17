import style from "./Home.module.css";
import img from "../assets/ground.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import file from "../assets/EmanAli-Frontend-CV.pdf";
import { BiLogoGithub } from "react-icons/bi";
function Home() {
  return (
    <main>
      <div className={style.mainText}>
        <p>Hello, I am</p>
        <h1> eman ali</h1>
        <p>
          Fresh Graduated from Computer Science.
          <br /> Software Engineer , Junior Frontend Developer.
        </p>
        <div>
          <a
            href="https://www.facebook.com/yousif.mohamed.942145/"
            target="_blank"
          >
            <RiFacebookCircleLine className={`nameColor ${style.svg}`} />
          </a>

          <a
            href="https://www.linkedin.com/in/eman-ali-b94a031b8"
            target="_blank"
          >
            <TiSocialLinkedinCircular className={`nameColor ${style.svg}`} />
          </a>
          <a href="https://github.com/EmanAliEA" target="_blank">
            <BiLogoGithub className={`nameColor ${style.svg}`} />
          </a>
        </div>
        <a href={file} download className={style.btn}>
          Download CV
        </a>
      </div>
      <img src={img} alt="homeImage" />
    </main>
  );
}

export default Home;
