import React from "react";
import "./ToDoItem.scss";
import bin from "../../bin.png"
const ToDoItem = (props) => {
  const {item, id, handleClear} = props
  return (
    <div className="todo-item" id={id}>
      <input
        className="todo-item__checkbox"
        type="checkbox"
        onChange={() => props.completed()}/>
      <p className='todo-item__p'>{item}</p>
      <img className="todo-item__image" src={bin} alt="bin" onClick={handleClear} />
    </div>
  );
};

export default ToDoItem;
