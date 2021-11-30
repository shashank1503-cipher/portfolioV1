import styles from "../../styles/Skills.module.css";
import Skill from "./Skill";
const Content = (props) => {
    const arr = props.imageList
    return (
        <>
        <div className={styles.content}>
            <h3>{props.heading}</h3>
            <div className ={styles.images}>
            {arr.map((data) =>(
                <Skill key = {data.id} src = {data.src} caption = {data.caption} />
            ))}
            </div>
        </div>
        </>
    )
}

export default Content
