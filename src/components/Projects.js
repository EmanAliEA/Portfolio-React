import Card from "./Card";
import styles from "./Projects.module.css";
import { images } from "./Images";
// import file from "../assets/EmanAli-Frontend-CV.pdf";
function Projects() {
  // console.log(images);
  return (
    <div className={`container ${styles.project} vhCom`}>
      <div className="text">
        <h1>
          My Recent <span className="nameColor">Works</span>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
      </div>
      <div className="cards">
        <ul className={styles.list}>
          {images.map((item) => (
            <Card
              title={item.title}
              description={item.des}
              demo={item.live}
              github={item.git}
              imgName={item.img}
            />
          ))}
        </ul>
      </div>
      {/* <iframe src={file} width="1500" height="1000"></iframe> */}
    </div>
  );
}

export default Projects;
