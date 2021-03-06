import React from "react";
import Course from "./components/Course";

const App = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        <Course course={course} />
      </ul>
    </div>
  );
};

export default App;
