import Link from "next/link";
import React from "react";
import { FiExternalLink, FiBookOpen, FiStar } from "react-icons/fi";

const getLevelIcon = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return '🟢';
    case 'intermediate':
      return '🟡';
    case 'advanced':
      return '🔴';
    default:
      return '🔵';
  }
};

const Courses = ({ courses }) => {
  return (
    <div className="courses-section">
      <div className="courses-header">
        <h2>
          <FiBookOpen className="section-icon" />
          Featured Courses
        </h2>
        <p>Choose from our collection of premium web development courses</p>
      </div>
      
      <div className="courses">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div className="card-header">
              <div className="level-badge">
                <span className="level-icon">{getLevelIcon(course.level)}</span>
                <small>{course.level}</small>
              </div>
              <FiStar className="favorite-icon" />
            </div>
            
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            
            <Link href={course.link} target="_blank" className="btn course-btn">
              <span>Go To Course</span>
              <FiExternalLink className="btn-icon" />
            </Link>
          </div>
        ))}
      </div>
      
      {courses.length === 0 && (
        <div className="no-results">
          <p>No courses found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
