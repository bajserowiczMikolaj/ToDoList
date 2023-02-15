import "./App.scss";
import AddToDo from "./components/AddToDo/AddToDo.jsx";
import ToDoItem from "./components/ToDoItem/ToDoItem.jsx";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const getItem = (item) => {
    setTodo((prevState) => {
      return [...prevState, item];
    });
  };

  const getCompleted = (id) => {
    setTodo((prevState)=>{
       return prevState.filter((item,index)=>{
        return index !== id;
       })
    })
  };

  return (
    <div className="todo">
      <header className="header">
      <div className="todo__title">My Todos</div>
      <button className="todo__button-reset">Reset</button>
      </header>
      <div className="todo__add">
      <AddToDo item={getItem} />
      {/* {todo && todo.map((todo, index) => {
      <ToDoItem id={index} item={todo} getCompleted={getCompleted} />;
        })} */}
     <ToDoItem item={todo} getCompleted={getCompleted}/>
     </div>
    </div>
  );
}

export default App;
