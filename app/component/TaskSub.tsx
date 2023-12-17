"use client";
import React from "react";
import TaskItem from "./TaskItem";

const TaskSub = ({ task }) => {
  // console.log("TaskSub", task);
  return (
    <div className=" ">
      <h1 className=" font-semibold border-b-4 px-4 py-2  text-lg">{task.title}</h1>
      <div className="flex flex-col text-[18px] min-w-[280px] pr-4">
        {task.map((item) => (
          <TaskItem task={item} />
        ))}
      </div>
    </div>
  );
};

export default TaskSub;
