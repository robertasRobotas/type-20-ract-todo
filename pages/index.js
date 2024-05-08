import React, { useState } from "react";
import Header from "../components/Header/Header";
import { CardWrapper } from "../components/CardWrapper/CardWrapper";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, isDone: false, title: "Learn HTML" },
    { id: 2, isDone: true, title: "Learn CSS" },
    { id: 3, isDone: false, title: "Learn React" },
  ]);
  const [task, setTask] = useState("");

  const insertTask = () => {
    const newTask = {
      title: task,
      isDone: false,
      id: new Date(),
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <div>
      <Header />

      <div className={styles.form}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={insertTask}>Add Task</button>
      </div>

      <CardWrapper tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
