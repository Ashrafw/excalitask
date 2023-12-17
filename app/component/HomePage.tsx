"use client";
import React from "react";
import MainTask from "./MainTask";
import { usePersistStore } from "@/zustand";

const HomePage = () => {
  const { tasksMain, setTaskMain } = usePersistStore();
  console.log("tasksMain", tasksMain);
  return (
    <div className=" flex flex-wrap gap-4">
      {tasksMain.map((tasks, i) => (
        <MainTask key={tasks.id} task={tasks} />
      ))}
    </div>
  );
};

export default HomePage;
