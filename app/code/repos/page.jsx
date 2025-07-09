import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaCode } from "react-icons/fa";
import styles from "./repos.module.css";

async function fetchRepos(params) {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repos = await response.json();
  return repos;
}

const ReposePage = async () => {
  const repos = await fetchRepos();

  return (
    <div className={styles.codeContainer}>
      <div className={styles.codeHeader}>
        <h1 className="text-4xl font-bold mb-2">Code Repository</h1>
        <p className="text-xl mb-8">Explore our open-source projects and contributions to the developer community.</p>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.repoGrid}>
        {repos.map((repo) => (
          <div key={repo.id} className={styles.repoCard}>
            <Link href={`/code/repos/${repo.name}`} className={styles.repoLink}>
              <div className={styles.repoHeader}>
                <div className={styles.repoIcon}>
                  <FaCode />
                </div>
                <h3 className={styles.repoTitle}>{repo.name}</h3>
              </div>
              
              <p className={styles.repoDescription}>{repo.description || "No description available"}</p>
              
              <div className={styles.repoStats}>
                <div className={styles.statItem}>
                  <FaStar className={styles.statIcon} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className={styles.statItem}>
                  <FaCodeBranch className={styles.statIcon} />
                  <span>{repo.forks_count}</span>
                </div>
                <div className={styles.statItem}>
                  <FaEye className={styles.statIcon} />
                  <span>{repo.watchers_count}</span>
                </div>
              </div>
              
              {repo.language && (
                <div className={styles.repoLanguage}>
                  <span className={`${styles.languageDot} ${styles[repo.language.toLowerCase()] || ''}`}></span>
                  <span>{repo.language}</span>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposePage;
