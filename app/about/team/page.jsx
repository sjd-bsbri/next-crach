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
      bio: "Passionate about creating beautiful, intuitive user interfaces with React and Next.js.",
      image: "/globe.svg", // Using existing SVG as placeholder
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UX/UI Designer",
      bio: "Combines art and psychology to craft user experiences that delight and engage.",
      image: "/window.svg",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Backend Developer",
      bio: "Architecting robust server solutions and APIs that power our applications.",
      image: "/file.svg",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Full Stack Developer",
      bio: "Bridging frontend and backend technologies to build seamless web applications.",
      image: "/next.svg",
    },
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h1 className="text-4xl font-bold mb-6">Our Team</h1>
        <p className="text-xl mb-8">
          Meet the talented individuals who make our vision a reality. Our diverse team brings together expertise across design, development, and strategy.
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
                width={100}
                height={100}
              />
            </div>
            <div className={styles.memberInfo}>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <h3 className="text-lg text-blue-600 mb-2">{member.role}</h3>
              <p>{member.bio}</p>
            </div>
            <div className={styles.memberSocial}>
              <a href="#" className={styles.socialLink}>GitHub</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.joinTeam}>
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-6">
          We're always looking for talented individuals to join our team. If you're passionate about web development and creating amazing user experiences, we'd love to hear from you.
        </p>
        <a href="#" className={styles.ctaButton}>
          View Open Positions
        </a>
      </div>
    </div>
  );
};

export default TeamPage;
