
import React from "react";
import Image from "next/image";
import styles from "./team.module.css";

export const metadata = {
  title: "Our Team | Next.js Project",
  description: "Meet the talented individuals behind our success",
};

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Lead",
      bio: "Alex leads our frontend efforts, specializing in React and Next.js. With a keen eye for detail and a passion for performant web applications, he ensures our user interfaces are both beautiful and highly responsive. His expertise in state management and component architecture is invaluable to our projects.",
      image: "https://i.pravatar.cc/150?img=1", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UX/UI Designer",
      bio: "Sarah is our creative force, combining art and psychology to craft user experiences that delight and engage. She's a master of user research, wireframing, and prototyping, translating complex ideas into intuitive and visually stunning designs that put the user first.",
      image: "https://i.pravatar.cc/150?img=5", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Backend Developer",
      bio: "Michael is the architect behind our robust server solutions and APIs. With extensive experience in Node.js and database management, he ensures our applications are scalable, secure, and perform efficiently under heavy loads. He's passionate about clean code and reliable infrastructure.",
      image: "https://i.pravatar.cc/150?img=11", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Full Stack Developer",
      bio: "Priya is our versatile full stack developer, expertly bridging frontend and backend technologies to build seamless web applications from end to end. Her ability to navigate both client-side and server-side challenges makes her an invaluable asset to any project.",
      image: "https://i.pravatar.cc/150?img=70", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 5,
      name: "David Lee",
      role: "DevOps Engineer",
      bio: "David ensures our development and operations run smoothly. He specializes in setting up CI/CD pipelines, managing cloud infrastructure, and optimizing deployment processes to deliver software rapidly and reliably. His focus is on automation and system stability.",
      image: "https://i.pravatar.cc/150?img=14", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Jackson White",
      role: "Product Manager",
      bio: "Jackson defines our product vision and strategy. She works closely with engineering, design, and stakeholders to identify market needs, prioritize features, and guide products from conception to launch, ensuring they meet user demands and business goals.",
      image: "https://i.pravatar.cc/150?img=13", 
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h1 className="text-4xl font-bold mb-6">Our Talented Team</h1>
        <p className="text-xl mb-8">
          Meet the dedicated professionals who drive our innovation. Our diverse team brings together expertise across design, development, strategy, and operations, working collaboratively to achieve excellence.
        </p>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamCard}>
            <div className={styles.memberImage}>
              <Image
                src={member.image}
                alt={member.name}
                width={150} 
                height={150} 
                className={styles.profilePic} 
              />
            </div>
            <div className={styles.memberInfo}>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <h3 className="text-lg text-blue-600 mb-2">{member.role}</h3>
              <p className="text-base text-gray-700">{member.bio}</p> 
            </div>
            <div className={styles.memberSocial}>
              {member.social.github && <a href={member.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>}
              {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>}
              {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.joinTeam}>
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Family!</h2> 
        <p className="text-lg mb-6">
          We're always seeking passionate and driven individuals to expand our innovative team. If you thrive in a collaborative environment and are eager to create groundbreaking web experiences, explore our opportunities.
        </p>
        <a href="#" className={styles.ctaButton}>
          View Open Positions
        </a>
      </div>
    </div>
  );
};

export default TeamPage;