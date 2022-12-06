import styles from "../../styles/Project.module.css";
import Image from "next/image";
// import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiGithub, FiLink } from "react-icons/fi";
const ProjectContainer = (props) => {
  return (
    <div className={styles.projectContainer} >
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className={styles.imageWrapper}>
          <Image src={props.src} layout={"fill"} alt={props.heading} placeholder={'blur'} blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
          <div className={styles.overlay}></div>
        </div>
      </a>
      <div className={styles.text}>
        <div className={styles.projectHeader}>
          <h2>{props.heading}</h2>
          <p>{props.tag}</p>

        </div>
        <div className={styles.projectDescription}>
          <div className={styles.links}>
            <a href={props.github} target="_blank" rel="noreferrer"><FiGithub /></a>
            {props.link ? <a href={props.link} target="_blank" rel="noreferrer"><FiExternalLink /></a> : null}
          </div>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
