import styles from "../../styles/Skills.module.css";
import Image from "next/image";
const Skill = (props) => {
  return (
    <div className={styles.image}>
      <div className={styles.imageWrapper}>
        <Image
          src={props.src}
          layout = {'fill'}
          placeholder={"blur"}
          blurDataURL="/pngegg.png"
          alt={props.caption}
          className={styles.img}
        />
      </div>

      <div className={styles.caption}>{props.caption}</div>
    </div>
  );
};

export default Skill;
