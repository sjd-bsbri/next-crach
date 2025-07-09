import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us | Next.js Project",
  description: "Learn about our mission and values",
};

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className={styles.divider}></div>
      </div>
      
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6 text-lg">
            We're dedicated to empowering developers with cutting-edge tools and knowledge to build 
            exceptional web experiences. Our platform serves as a bridge between innovation and practical
            implementation, making complex concepts accessible to everyone.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="mb-6 text-lg">
            We provide comprehensive resources, tutorials, and ready-to-use components that help
            developers create modern, responsive, and performant web applications. Our focus is on
            Next.js and React ecosystems, but our principles apply across the web development spectrum.
          </p>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p>We constantly explore new technologies and approaches to stay at the forefront of web development.</p>
            </div>
            <div className={styles.valueCard}>
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p>We believe great web experiences should be accessible to everyone, regardless of ability.</p>
            </div>
            <div className={styles.valueCard}>
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p>We foster a supportive community where developers can learn, share, and grow together.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.aboutImageContainer}>
          <div className={styles.aboutImage}>
            <Image 
              src="/globe.svg" 
              alt="Global Web Development" 
              width={400} 
              height={400} 
              className={styles.animateFloat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
