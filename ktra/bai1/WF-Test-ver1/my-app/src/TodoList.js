import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { NewTask } from "./App";
const TodoList = () => {
  const ctxTask = useContext(NewTask);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const handleClick = (id) => {
    const newTask = ctxTask.task;
    for (let i = 0; i < newTask.length; i++) {
      if (newTask[i].id === id) {
        newTask[i].check = !newTask[i].check;
      }
    }
    ctxTask.setTask([...newTask]);
  };

  useEffect(() => {
    const incomplete = [];
    const complete = [];

    for (let i = 0; i < ctxTask.task.length; i++) {
      if (!ctxTask.task[i].check) {
        incomplete.push(ctxTask.task[i]);
      } else {
        complete.push(ctxTask.task[i]);
      }
    }

    setIncompleteTasks(incomplete);
    setCompleteTasks(complete);
  }, [ctxTask.task]);

  return (
    <div className="todo-list-container">
      {incompleteTasks.map((item) => (
        <div className="todo-item-container">
          <FaRegCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => handleClick(item.id)}
          />
          <div className="item-title">{item.name}</div>
        </div>
      ))}
      {ctxTask.show &&
        completeTasks.map((item) => (
          <div className="todo-item-container done">
            <FaRegCheckCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => handleClick(item.id)}
            />
            <div className="item-title">{item.name}</div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;