import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedcourses, setlikedcourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      // if categery all ha to sara data pass karee gee
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // main shirf category ka array pass kru ga
      return courses[category];
    }
  }

  return (
    <div className="container-all-card">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={courses.id}
            likedcourses={likedcourses}
            setlikedcourses={setlikedcourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
