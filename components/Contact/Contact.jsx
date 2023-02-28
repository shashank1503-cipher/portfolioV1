import styles from "../../styles/Contact.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si'
import { FaDev } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className={styles.contactContainer} data-aos="fade-up" id="Contact">
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.contactContent}>I am actively looking for internship opportunities. Feel free to drop a mail in my Inbox.</p>
            <div className={styles.button}><a href="mailto:shashank.srivastava25sks@gmail.com">Say Hello!</a></div>
            <div className={styles.socials}>
                <a href="https://github.com/shashank1503-cipher" target="_blank" rel="noreferrer"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/shashank-srivastava-a72899201/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                <a href="https://twitter.com/shashank1503_" target="_blank" rel="noreferrer"><FiTwitter /></a>
                <a href="mailto:shashank.srivastava25sks@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a>
                <a href="https://dev.to/shashank1503cipher" target="_blank" rel="noreferrer"><FaDev /></a>
                <a href="https://leetcode.com/shashank1503/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            </div>
        </div>
    )
}

export default Contact
