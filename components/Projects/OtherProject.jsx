import styles from "../../styles/Project.module.css";

const OtherProject = (props) => {
  return (
    <div className={styles.otherProjectContainer}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <h3 className={styles.otherHeading}>{props.heading}</h3>
      </a>
      <p className={styles.otherTag}>{props.tag}</p>
      <p className={styles.otherDesc}>{props.desc}</p>
    </div>
  );
};

export default OtherProject;
