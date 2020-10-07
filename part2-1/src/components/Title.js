import React from "react";
import Part from "./Part";

const Title = (props) => {
  const entry = props.entry;
  const total = entry.reduce(function (sum, number) {
    return sum + number.exercises;
  }, 0);
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {entry.map((y) => (
          <Part key={y.id} name={y.name} exercises={y.exercises} />
        ))}
      </ul>
      <div> Total of {total} exercises </div>
    </div>
  );
};

export default Title;
