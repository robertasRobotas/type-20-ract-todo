import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import Card from "../Card/Card";
import styles from "./CardWrapper.module.css";

export const CardWrapper = ({ tasks, setTasks }) => {
  return (
    <div className={styles.cardsWrapper}>
      {tasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  );
};
