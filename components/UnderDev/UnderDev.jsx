import styles from "../../styles/UnderDev.module.css";
const UnderDev = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <p className={styles.hello} data-aos="fade-down">
          Hello! I&apos;m
        </p>
        <h1 data-aos="fade-down" data-aos-delay="100">
          Shashank Kumar Srivastava
        </h1>
        <p data-aos="fade-down" data-aos-delay="200">
          Thank You for visiting my portfolio. <br /><br />Mobile site is currently under
          development.<br />
          Please visit the desktop site through your Laptop or
          Desktop.
        </p>
      </div>
    </header>
  );
};

export default UnderDev;
