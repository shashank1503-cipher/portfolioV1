import styles from "../../styles/Skills.module.css";
import Content from "./Content";
import SkillData from "./SkillData";
import { useState } from "react";
const Skills = () => {
  const [Lang, setLang] = useState(true);
  const [Frame, setFrame] = useState(false);
  const [Tools, setTools] = useState(false);
  const [Platforms, setPlatforms] = useState(false);
  const [DB, setDB] = useState(false);
  const [Heading, setHeading] = useState(SkillData[0].heading)
  const [imageList, setimageList] = useState(SkillData[0].imageList)
  const handleLang = () => {
    setLang(true);
    setDB(false);
    setFrame(false);
    setPlatforms(false);
    setTools(false);
    setHeading(SkillData[0].heading)
    setimageList(SkillData[0].imageList)
  };
  const handleDB = () => {
    setLang(false);
    setDB(true);
    setFrame(false);
    setPlatforms(false);
    setTools(false);
    setHeading(SkillData[4].heading)
    setimageList(SkillData[4].imageList)
  };
  const handFrame = () => {
    setLang(false);
    setDB(false);
    setFrame(true);
    setPlatforms(false);
    setTools(false);
    setHeading(SkillData[1].heading)
    setimageList(SkillData[1].imageList)
  };
  const handlePlatform = () => {
    setLang(false);
    setDB(false);
    setFrame(false);
    setPlatforms(true);
    setTools(false);
    setHeading(SkillData[3].heading)
    setimageList(SkillData[3].imageList)
  };
  const handleTool = () => {
    setLang(false);
    setDB(false);
    setFrame(false);
    setPlatforms(false);
    setTools(true);
    setHeading(SkillData[2].heading)
    setimageList(SkillData[2].imageList)
  };
  return (
    <div id = "Skills" className={styles.container} data-aos="fade-right" >
      <h2 className={styles.heading}>Things Up My Sleeve</h2>
      <div className={styles.skills}>
        <div className={styles.headers}>
          <ul className={styles.noBullets}>
            <li className={Lang ? styles.listItemActive : styles.listItem} onClick={handleLang}>
              Languages
            </li>
            <li className={Frame ? styles.listItemActive : styles.listItem} onClick={handFrame}>
              Frameworks
            </li>
            <li className={Tools ? styles.listItemActive : styles.listItem} onClick={handleTool}>
              Tools
            </li>
            <li className={Platforms ? styles.listItemActive : styles.listItem} onClick={handlePlatform}>
              Platforms
            </li>
            <li className={DB ? styles.listItemActive : styles.listItem} onClick={handleDB}>
              Databases
            </li>
          </ul>
        </div>
        <Content heading={Heading} imageList={imageList} />
      </div>
    </div>
  );
};

export default Skills;
