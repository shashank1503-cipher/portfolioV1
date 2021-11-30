import styles from "../../styles/Experience.module.css";
import Job from "./Job";
import JobData from "./JobData";
const Experience = () => {
  return (
    <div id = "Xp"className={styles.container} data-aos="fade-right">
      <h2 className={styles.heading}>Volunteer Experiences</h2>
      <div className={styles.jobs}>
      {JobData.map((data) =>(
                <Job key = {data.id} src = {data.logoSrc} jobTitle = {data.jobTitle} companyName = {data.companyName} desc = {data.desc} />
            ))}
      </div>
    </div>
  );
};

export default Experience;
