import styles from "../../styles/Contact.module.css";
import { FiGithub,FiTwitter,FiLinkedin,FiInstagram,FiMail } from 'react-icons/fi';
const Contact = () => {
    return (
        <div className={styles.contactContainer} data-aos="fade-up" id = "Contact">
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.contactContent}>I am actively looking for internship opportunities. Feel free to drop a mail in my Inbox.</p>
            <div className={styles.button}><a href="mailto:shashank.srivastava25sks@gmail.com">Say Hello!</a></div>
            <div className ={styles.socials}>
                <a href = "https://github.com/shashank1503-cipher" target="_blank" rel="noreferrer"><FiGithub /></a>
                <a href = "https://www.linkedin.com/in/shashank-srivastava-a72899201/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
                <a href = "https://twitter.com/Shashan87956421" target="_blank" rel="noreferrer"><FiTwitter /></a>
                <a href = "mailto:shashank.srivastava25sks@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a>
                <a href = "https://www.instagram.com/beast_skas/" target="_blank" rel="noreferrer"><FiInstagram /></a>
            </div>
        </div>
    )
}

export default Contact
