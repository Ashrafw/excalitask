"use client";
import React from "react";
import TaskSubject from "./MainTask";
import TaskSub from "./TaskSub";

const TaskItem = ({ task }) => {
  // console.log("task", task);
  return (
    <>
      <div className="flex gap-2 items-center justify-center px-4 py-2  border-b border-t rounded-lg border-opacity-5  cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 ">
        <input type="checkbox" className=" p-2" />
        <label className="w-full text-medium text-gray-900">{task.title}</label>
      </div>
    </>
  );
};

export default TaskItem;
