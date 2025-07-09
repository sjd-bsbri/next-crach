
import Link from "next/link";
import React from "react";

async function fetchRepoContents(name) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/bradtraversy/${name}/contents`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const contents = await response.json();
    return contents;
  } catch (error) {
    console.error("Error fetching repository contents:", error);
    return null;
  }
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  
  if (!contents) {
    return <div className="error-message">Failed to load repository directories. Please try again later.</div>;
  }
  
  const dirs = contents.filter((content) => content.type === "dir");
  
  return (
    <div className="repo-dirs-container">
      <h3 className="dirs-heading">Directories</h3>
      <ul className="dirs-list">
        {dirs.length > 0 ? (
          dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`} className="dir-link">
                {dir.path}
              </Link>
            </li>
          ))
        ) : (
          <li>No directories found</li>
        )}
      </ul>
    </div>
  );
};

export default RepoDirs;