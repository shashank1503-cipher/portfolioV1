import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Name from "./Name";
const Navbar = () => {
  const [menuOpacity, setmenuOpacity] = useState(0);

  const openNav = () => {
    setmenuOpacity(1);
  };
  const closeNav = () => {
    setmenuOpacity(0);
  };

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (document.getElementById("navbar").style.display == "none") {
      } else {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-80px";
          setmenuOpacity(0);
        }
      }

      prevScrollpos = currentScrollPos;
    };
  });
  return (
    <>
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
              href="https://drive.google.com/file/d/1zflinLeSMXiW9VwUBiTtoqi4qNh2SE-g/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
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
      <div className={styles.mobileNavbar}>
        <div className={styles.openButton}>
          <a
            href="#"
            onClick={openNav}
            style={{ display: `${menuOpacity ? "none" : "flex"}` }}
          >
            &#9776;
          </a>
        </div>
        <div
          className={styles.sideNav}
          style={{ width: `${menuOpacity ? "100%" : "0%"}` }}
        >
          <div className={styles.closeButton}>
            <a href="#" onClick={closeNav}>
              &times;
            </a>
          </div>
          <ul
            className={styles.menu}
            style={{ opacity: `${menuOpacity ? "1" : "0"}` }}
          >
            <li>
              <a href="#AboutMe" className={styles.hover_underline_animation}>
                About Me
              </a>
            </li>
            <li>
              <a href="#Xp" className={styles.hover_underline_animation}>
                Experience
              </a>
            </li>
            <li>
              <a href="#Project" className={styles.hover_underline_animation}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className={styles.hover_underline_animation}>
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1zflinLeSMXiW9VwUBiTtoqi4qNh2SE-g/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={styles.hover_underline_animation}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
