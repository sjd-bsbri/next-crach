import React from "react";
import styles from "./about.module.css";

const IconPlaceholder = ({ children }) => (
  <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
    {children}
  </div>
);

export const metadata = {
  title: "About Us | Next.js Project",
  description: "Learn about our mission, values, and history.",
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
            implementation, making complex concepts accessible to everyone. We believe in fostering a dynamic ecosystem where 
            developers can elevate their skills and push the boundaries of what's possible on the web.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="mb-6 text-lg">
            We provide comprehensive resources, tutorials, and ready-to-use components that help
            developers create modern, responsive, and performant web applications. Our focus is on
            Next.js and React ecosystems, but our principles apply across the web development spectrum.
            Additionally, we host regular workshops and webinars to keep the community updated with the 
            latest trends and best practices.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="mb-6 text-lg">
            This project began in 2023 with the goal of bridging the gap between theory and practice in web development.
            We started with a small but dedicated team and have quickly grown into a trusted resource
            for developers worldwide. Over the years, we've continuously refined our platform with 
            community feedback and remain committed to delivering high-quality content.
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
            <div className={styles.valueCard}>
              <h3 className="text-xl font-medium mb-2">Quality</h3>
              <p>We are committed to delivering the highest quality content and tools to ensure your success.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.servicesGridContainer}>
            <h2 className="text-2xl font-semibold mb-6">Our Core Services</h2>
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <IconPlaceholder>⚡</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Performance Optimization</h3>
                    <p>Enhancing speed and efficiency for lightning-fast web experiences.</p>
                </div>
                <div className={styles.serviceCard}>
                    <IconPlaceholder>💡</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Modern UI/UX Design</h3>
                    <p>Crafting intuitive and visually appealing user interfaces.</p>
                </div>
                <div className={styles.serviceCard}>
                    <IconPlaceholder>🔒</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Secure Development</h3>
                    <p>Building robust applications with security best practices in mind.</p>
                </div>
                <div className={styles.serviceCard}>
                    <IconPlaceholder>⚙️</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Developer Tools</h3>
                    <p>Providing essential tools and utilities for streamlined workflows.</p>
                </div>
                 <div className={styles.serviceCard}>
                    <IconPlaceholder>📈</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Scalability Solutions</h3>
                    <p>Designing architectures that grow with your project's demands.</p>
                </div>
                 <div className={styles.serviceCard}>
                    <IconPlaceholder>🧩</IconPlaceholder> 
                    <h3 className="text-xl font-medium mb-2">Component Libraries</h3>
                    <p>Offering reusable components to accelerate development.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;