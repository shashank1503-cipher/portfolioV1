import styles from "../../styles/AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const AboutMe = () => {
  return (
    <div id="AboutMe" className={styles.container} data-aos="fade-right">
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.para}>
        I am a Sophomore at{" "}
        <span style={{ fontWeight: "bold" }}>
          Indian Institute of Information Technology, Kottayam
        </span> currently pursuing my bachelors in Computer Science and Engineering.
      </p>
      <p className={styles.para}>
        I began coding when I was 14 years old, and it has proven to be the most
        enjoyable hobby I have ever had.
        <br /> Fast forward to today, I enjoy creating softwares that help
        people address challenges they encounter on a daily basis which provide
        a <span style={{ fontWeight: "400" }}>nice user experience</span> while
        being <span style={{ fontWeight: "400" }}>efficient</span> and{" "}
        <span style={{ fontWeight: "400" }}>scalable</span> under the hood.
      </p>
    </div>
  );
};

export default AboutMe;
