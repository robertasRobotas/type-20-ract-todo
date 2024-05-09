import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { CardWrapper } from "../components/CardWrapper/CardWrapper";
import Form from "../components/Form/Form";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  const insertTask = () => {
    const newTask = {
      title: task,
      isDone: false,
      id: new Date(),
    };

    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTask("");
  };

  return (
    <div>
      <Header />
      <Form task={task} insertTask={insertTask} setTask={setTask} />
      <CardWrapper tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
