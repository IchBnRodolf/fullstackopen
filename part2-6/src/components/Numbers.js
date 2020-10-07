import React from "react";
import numberService from "../services/number";

const Numbers = (props) => {
  const deleteEntry = () => {
    numberService.deleteEntry(`http://localhost:3001/persons/${props.name.id}`);
  };

  return (
    <div>
      <li>
        {props.name.name} {props.name.number}
        <button onClick={deleteEntry}>delete</button>
      </li>
    </div>
  );
};

export default Numbers;
