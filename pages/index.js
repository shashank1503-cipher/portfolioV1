import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer";
import UnderDev from "../components/UnderDev/UnderDev";
export default function Home() {
  useEffect(() => {
    AOS.init({
      
    });
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (
    <div>
      <Head>
        <title>Shashank Kumar Srivastava</title>

        <meta
          name="description"
          content="Hello I am Shashank Kumar Srivastava, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <meta
          name="keywords"
          content="Web Developer,Python,Django,JavaScript,Shashank Kumar Srivastava"
        />
        <meta name="author" content="Shashank Kumar Srivastava" />
        <meta property="og:title" content="Shashank Kumar Srivastava" />
        <meta
          property="og:description"
          content="Hello I am Shashank Kumar Srivastava, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <meta
          property="og:url"
          content="https://www.shashankkumarsrivastava.tech/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="2gE6r2Lha6MfqjriPS7jcocTxzrkQCRyjvnlKSqhhyw"
        />
        <meta property="og:site_name" content="Shashank Kumar Srivastava" />
        <meta property="og:locale" content="en_US" />
        <meta itemProp="name" content="Shashank Kumar Srivastava" />
        <meta
          itemProp="description"
          content="Hello I am Shashank Kumar Srivastava, Sophomore from IIIT Kottayam, who likes to code. Currently a python based full stack Web developer who also has a hand in JavaScript based stacks"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
