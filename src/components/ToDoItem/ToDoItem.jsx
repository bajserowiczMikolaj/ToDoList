import React from "react";
import "./ToDoItem.scss";

const ToDoItem = (props) => {
  return (
    <div className="todo-item">
      <input
        className="todo-item__checkbox"
        type="checkbox"
        onChange={() => props.completed()}/>
      <p className='todo-item__p'>{props.item}</p>

    </div>
  );
};

export default ToDoItem;
