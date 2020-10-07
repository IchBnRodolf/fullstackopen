import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.text} : <input value={props.value} onChange={props.change} />
    </div>
  );
};

export default Input;
