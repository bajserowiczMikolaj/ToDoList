import React from "react";
import "./AddToDo.scss";
import { useState } from "react";

const AddToDo = (props) => {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.item(item);
    console.log(item)
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        value={item}
        onChange={handleChange}
        placeholder="Enter ToDo"
      />
      <button>Add</button>
    </form>
  );
};
export default AddToDo;
