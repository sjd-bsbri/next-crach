import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

async function fetchAllRepos() {
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

export async function generateStaticParams() {
  const repos = await fetchAllRepos(); 
  
  return repos.map((repo) => ({
    name: repo.name,
  }));
}

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo ...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories ...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;