import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/bradtraversy/${name}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const repo = await response.json();
    return repo;
  } catch (error) {
    console.error("Error fetching repository:", error);
    return null;
  }
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  
  if (!repo) {
    return <div className="error-message">Failed to load repository information. Please try again later.</div>;
  }
  
  return (
    <>
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-description">{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar className="stat-icon" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch className="stat-icon" />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye className="stat-icon" />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;