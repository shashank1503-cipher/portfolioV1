import styles from "../../styles/Skills.module.css";
import Image from 'next/image'
const Skill = (props) => {
    return (
        <div className={styles.image}>
            <Image src = {props.src} width={80} height={80} placeholder={'blur'}  blurDataURL = "/pngegg.png" alt={props.caption} className={styles.img}/>
            <div className={styles.caption}>{props.caption}</div>
        </div>
    )
}

export default Skill
