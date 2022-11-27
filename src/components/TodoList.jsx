import React from "react";
import { AiFillCheckCircle, AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const TodoList = ({
  todos,
  setTodos,
  completedList,
  setCompletedList,
  pendingList,
  setPendingList,
}) => {
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
      })
    );

    setCompletedList(
        todos.filter((todo) => todo.completed === false
        
        ));

    setPendingList(pendingList.filter((todo) => todo.completed === true));
  };

  const handleDelete = ({title}) => {
    setTodos(todos.filter((todo) => todo.title !== title));
    setPendingList(pendingList.filter((todo) => todo.title !== title));
    setCompletedList(completedList.filter((todo) => todo.title !== title));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div style={{ marginLeft: "40px" }}>
            <button
              className="button-complete task-button"
              onClick={() => handleCompleted(todo)}
            >
              <AiFillCheckCircle />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
