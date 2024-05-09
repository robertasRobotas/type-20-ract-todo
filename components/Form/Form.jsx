import React from "react";
import styles from "./Form.module.css";

const Form = ({ task, insertTask, setTask }) => {
  return (
    <form className={styles.form}>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button
        onClick={(e) => {
          e.preventDefault();
          insertTask();
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
