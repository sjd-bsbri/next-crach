// "use client";

// import React, { useEffect, useState } from "react";
// import Courses from "./components/Courses";
// import LoadingPage from "./code/repos/loading";
// import CourseSearch from "./components/CourseSearch";

// const HomePage = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const res = await fetch("/api/courses");
//       const data = await res.json();
//       setCourses(data);
//       setLoading(false);
//     };
//     fetchCourses();
//   }, []);

//   if (loading) {
//     return <LoadingPage />;
//   }

//   return (
//     <>
//       <div className="hero-section">
//         <h1>
//           🚀 Welcome To Traversy Media</h1>
//         <p className="hero-subtitle">
//           Master modern web development with our comprehensive courses and tutorials
//         </p>
//       </div>
//       <CourseSearch getSerachResults={(results) => setCourses(results)} />
//       <Courses courses={courses} />
//     </>
//   );
// };

// export default HomePage;






"use client";

import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./code/repos/loading";
import CourseSearch from "./components/CourseSearch";
import coursesData from "./api/courses/data.json"; // این خط را اضافه کنید

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // دیگر نیازی به fetch از API نیست
    setCourses(coursesData); // مستقیماً از داده‌های JSON استفاده کنید
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="hero-section">
        <h1>🚀 Welcome To Traversy Media</h1>
        <p className="hero-subtitle">
          Master modern web development with our comprehensive courses and tutorials
        </p>
      </div>
      {/* CourseSearch را نیز باید تغییر دهیم تا از API استفاده نکند */}
      <CourseSearch initialCourses={coursesData} getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;