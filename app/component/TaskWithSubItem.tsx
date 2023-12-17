"use client";
import React from "react";
import TaskItem from "./TaskItem";
import SubItem from "./SubItem";
import { IoIosArrowDown } from "react-icons/io";
const TaskWithSubItem = ({ task }) => {
  // console.log("TaskWithSubItem task", task);
  return (
    <div className="">
      {/* <h1 className=" font-medium border-b-4 px-4 py-2  text-lg bg-slate-400">
        {task.title}
      </h1> */}
      <div className="flex gap-2 items-center justify-center px-4 py-2 border-b  border-opacity-5  cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 ">
        <input type="checkbox" className=" p-2 opacity-0" />
        <label className="w-full text-medium text-gray-900">{task.title}</label>
        <IoIosArrowDown />
      </div>
      <div className="flex flex-col ml-8 border-l rounded-lg text-[16px] ">
        {task.tasks?.map((item) => (
          <SubItem subTask={item} />
        ))}
      </div>
    </div>
  );
};

export default TaskWithSubItem;
