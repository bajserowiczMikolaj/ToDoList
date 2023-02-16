import "./App.scss";
import AddToDo from "./components/AddToDo/AddToDo.jsx";
import ToDoItem from "./components/ToDoItem/ToDoItem.jsx";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const getItem = (item) => {
    const newArr = [...todo]
    newArr.push(item)
    setTodo(newArr)
  };

  const getCompleted = (id) => {
    setTodo((prevState)=>{
       return prevState.filter((item,index)=>{
        return index !== id;
       })
    })
  };
  const handleReset = () => {
    setTodo([])
  }

  const handleClear = (event) => {
    const targetIndex = event.target.parentElement.id
    const newArr = [...todo]
    newArr.splice(targetIndex, 1)
    setTodo(newArr)

  }

  const todoJSX = todo.map((todoItem, index) => {
    return <ToDoItem item={todoItem} id={index} handleClear={handleClear}/> 
  })

  return (
    <div className="todo">
      <header className="header">
      <div className="todo__title">My Todos</div>
      <button className="todo__button-reset" onClick={handleReset}>Reset</button>
      </header>
      <div className="todo__add">
      <AddToDo getItem={getItem} />
      {/* {todo && todo.map((todo, index) => {
      <ToDoItem id={index} item={todo} getCompleted={getCompleted} />;
        })} */}
    {todoJSX}
     </div>
    </div>
  );
}

export default App;
