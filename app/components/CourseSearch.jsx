// "use client"

// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";

// const CourseSearch = ({ getSerachResults }) => {
//   const [query, setQuery] = useState("");
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch(`/api/courses/search?query=${query}`);
//     const courses = await res.json();
//     getSerachResults(courses);
//   };

//   return (
//     <div className="search-container">
//       <form onSubmit={handleSubmit} className="search-form">
//         <div className="search-input-wrapper">
//           <FiSearch className="search-icon" />
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search courses by title, level, or description..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//         <button className="search-button" type="submit">
//           <FiSearch className="button-icon" />
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CourseSearch;





"use client"

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import coursesData from "../api/courses/data.json"; // این خط را اضافه کنید

// initialCourses را به عنوان یک پراپ دریافت کنید
const CourseSearch = ({ initialCourses, getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => { // تابع را async نکنید
    e.preventDefault();

    // فیلتر کردن داده‌ها در سمت کلاینت
    const filteredCourses = initialCourses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.level.toLowerCase().includes(query.toLowerCase())
    );

    getSearchResults(filteredCourses);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search courses by title, level, or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="search-button" type="submit">
          <FiSearch className="button-icon" />
          Search
        </button>
      </form>
    </div>
  );
};

export default CourseSearch;