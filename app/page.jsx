"use client";

import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./code/repos/loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="hero-section">
        <h1>
          🚀 Welcome To Traversy Media</h1>
        <p className="hero-subtitle">
          Master modern web development with our comprehensive courses and tutorials
        </p>
      </div>
      <CourseSearch getSerachResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
