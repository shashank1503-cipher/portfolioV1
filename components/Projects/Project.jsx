import styles from "../../styles/Project.module.css";
import ProjectContainer from "./ProjectContainer";
import ProjectData from "./ProjectData";
import OtherProject from "./OtherProject";
import OtherProjectData from "./OtherProjectData";
const Project = () => {
    return (
        <div className = {styles.container} data-aos = "fade-right" id="Project" >
            <h2 className={styles.heading}>Things I&apos;ve built</h2>
            <h3 className = {styles.tagline}>Featured Projects</h3>
            {ProjectData.map((val) =>(
                <ProjectContainer key = {val.id} heading = {val.heading} desc = {val.desc} src = {val.src} link = {val.link} tag = {val.tag}/>
            ))}
             <h3 className={styles.tagline}>Other Noteworthy Projects</h3>
             {OtherProjectData.map((val) =>(
                <OtherProject key = {val.id} heading = {val.heading} desc = {val.desc} link = {val.link} tag = {val.tag}/>
            ))}
        </div>
    )
}

export default Project
