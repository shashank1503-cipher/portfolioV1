import styles from "../../styles/Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <p className={styles.hello} data-aos="fade-down" data-aos-delay="500">
          Hello! I&apos;m
        </p>
        <h1 data-aos="fade-down" data-aos-delay="600"> Shashank Kumar Srivastava</h1>
        <p data-aos="fade-down" data-aos-delay="700">
          a Student and a Software Developer who likes to build useful
          applications and services.
        </p>
        <a href="#Contact" data-aos="fade-down" data-aos-delay="800">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Hero;
