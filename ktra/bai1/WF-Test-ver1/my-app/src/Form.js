import { useState, useContext } from "react";
import { NewTask } from "./App";

const Form = () => {
  const ctxTask = useContext(NewTask);
  let inputnewtask;
  const inputTask = (e) => {
    inputnewtask = e.target.value;
  };
  const handleInput = (e) => {
    e.preventDefault();
    const newListTask = ctxTask.task;
    newListTask.push({
      id: Math.floor(Math.random() * 40),
      name: inputnewtask,
      check: true
    });
    ctxTask.setTask([...newListTask]);

    localStorage.setItem("listTask", JSON.stringify([...ctxTask.task]));
  };
  return (
    <form className="form">
      <input placeholder="Enter task ..." onChange={inputTask} />
      <button onClick={handleInput}>Submit</button>
    </form>
  );
};

export default Form;