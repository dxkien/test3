import { FaRegCircle, FaRegCheckCircle } from "react-icons";
import { useState, useContext, useEffect } from "react";
import { NewTask } from "./App";

const Header = () => {
  const ctxTask = useContext(NewTask);
  let a = 0;
  const newListTask = ctxTask.task;
  for (let i = 0; i < newListTask.length; i++) {
    if (newListTask[i].check == true) {
      a = a + 1;
    }
  }

  const handleCheckBoxClick = () => {
    ctxTask.setShow(!ctxTask.show);
  };

  return (
    <div className="header">
      <span>You have {a} tasks left! </span>
      <input
        onClick={handleCheckBoxClick}
        className="checkbox"
        type="checkbox"
      />{" "}
      Not finished only
    </div>
  );
};

export default Header;