import React from "react";
import { FiBookOpen } from "react-icons/fi";

const LoadingPage = () => {
  return (
    <div className="loader">
      <div className="loading-content">
        <div className="spinner-container">
          <div className="spinner"></div>
          <FiBookOpen className="loading-icon" />
        </div>
        <h3 className="loading-text">Loading Courses...</h3>
        <p className="loading-subtitle">Please wait while we fetch the latest courses</p>
      </div>
    </div>
  );
};

export default LoadingPage;
 