import Button from "./Button";
import styles from "./Card.module.css";
import { FaGithub } from "react-icons/fa";
import { VscRunAll } from "react-icons/vsc";

function Card({ title, description, github, demo, imgName }) {
  function handleGit() {}
  function handleDemo() {}
  return (
    <li className={styles.card}>
      <img src={imgName} alt="card" />
      <div className="cardDesc">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.btns}>
        <Button emoji={<FaGithub />} handleClick={handleGit}>
          <a href={github} target="_blank">
            Github
          </a>
        </Button>
        <Button emoji={<VscRunAll />} handleClick={handleDemo}>
          <a href={demo} target="_blank">
            Demo
          </a>
        </Button>
      </div>
    </li>
  );
}

export default Card;
