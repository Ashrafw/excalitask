"use client";
import React from "react";
import TaskItem from "./TaskItem";
import TaskWithSubItem from "./TaskWithSubItem";

const MainTask = ({ task }) => {
  return (
    <div className=" shadow-xl rounded-2xl overflow-hidden ">
      <h1 className=" font-semibold border-b-4 px-4 py-2  text-lg">{task.title}</h1>
      <div className="flex flex-col text-[18px] min-w-[290px] ">
        {task.tasks.map((item) => (
          <>
            {item.isSubtask ? <TaskWithSubItem task={item} /> : <TaskItem task={item} />}
          </>
        ))}
      </div>
      <div className=" flex gap-2 items-center px-4 py-2 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer text-lg">
        +
      </div>
    </div>
  );
};
const aaa = [
  {
    id: 1,
    title: "excalitask.com",
    tasks: [
      { title: "Main item 1", isComplete: false, task: [], isSubtask: false },
      { title: "Main item 2", isComplete: false, task: [], isSubtask: false },
      {
        title: "Main item 3",
        isComplete: false,
        tasks: [
          { title: "sub item 1", isComplete: false, task: [] },
          { title: "sub item 2", isComplete: false, task: [] },
          { title: "sub item 3", isComplete: false, task: [] },
          { title: "sub item 4", isComplete: false, task: [] },
        ],
        isSubtask: true,
      },
    ],
  },
];

export default MainTask;
