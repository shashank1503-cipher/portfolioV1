import { useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import Name from "./Name";
const Navbar = () => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    };
  });
  return (
    <nav className={styles.navBar} id="navbar">
      <Name />
      <ul>
        <li>
          <a
            href="#AboutMe"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-once="true"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-once="true"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Xp"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Project"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Contact Me
          </a>
        </li>
        <li>
          <a
            href="#"
            className={styles.hover_underline_animation}
            data-aos="fade-down"
            data-aos-delay="350"
            data-aos-once="true"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
