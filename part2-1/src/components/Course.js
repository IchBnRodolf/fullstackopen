import React from "react";
import Title from "./Title";

const Course = ({ course }) => {
  return course.map((x) => <Title key={x.id} title={x.name} entry={x.parts} />);
};

export default Course;
