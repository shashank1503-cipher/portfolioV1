import styles from "../../styles/Contact.module.css";
import { FiGithub,FiTwitter,FiLinkedin,FiInstagram,FiMail } from 'react-icons/fi';
const Contact = () => {
    return (
        <div className={styles.contactContainer} data-aos="fade-up" id = "Contact">
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.contactContent}>I am actively looking for internship opportunities. Feel free to drop a mail in my Inbox.</p>
            <div className={styles.button}><a href="mailto:shashank.srivastava25sks@gmail.com">Say Hello!</a></div>
            <div className ={styles.socials}>
                <a href = "#"><FiGithub /></a>
                <a href = "#"><FiLinkedin/></a>
                <a href = "#"><FiTwitter /></a>
                <a href = "#"><FiMail /></a>
                <a href = "#"><FiInstagram /></a>
            </div>
        </div>
    )
}

export default Contact
