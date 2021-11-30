import styles from "../../styles/Project.module.css";
import Image from "next/image";
const ProjectContainer = (props) => {
  return (
    <div className={styles.projectContainer}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className={styles.imageWrapper}>
          <Image src={props.src} layout={"fill"} alt={props.heading} placeholder={'blur'} blurDataURL='/pngegg.png' />
          <div className={styles.overlay}></div>
        </div>
      </a>
      <div className={styles.text}>
        <div className={styles.projectHeader}>
          <h2>{props.heading}</h2>
          <p>{props.tag}</p>
        </div>
        <div className={styles.projectDescription}>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
