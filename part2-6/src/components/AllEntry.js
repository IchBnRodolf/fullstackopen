import React from "react";
import Numbers from "./Numbers";

const AllEntry = (props) => {
  const entry = props.entry;
  return (
    <div>
      <h2>Numbers</h2>
      {entry.map((x) => (
        <Numbers key={x.id} name={x} />
      ))}
    </div>
  );
};

export default AllEntry;
