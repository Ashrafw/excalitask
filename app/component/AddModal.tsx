"use client";
import React, { useState } from "react";
import { FaTimes, FaHeart } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import AddMainTaskItem from "./AddMainTaskItem";
import { v4 as uuidv4 } from "uuid";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import AddSubTaskItem from "./AddSubTaskItem";
import { FaRegTrashAlt } from "react-icons/fa";
import AddModalTaskItem from "./AddModalTaskItem";
import { usePersistStore } from "@/zustand";
const mainTaskTemplate = {
  title: "",
  isComplete: false,
  tasks: [],
  isSubtask: false,
};
type AddModalTypes = {
  setOpenAddTask: React.Dispatch<React.SetStateAction<boolean>>;
};
type SubTaskType = {
  id: string;
  title: string;
  isComplete: boolean;
  isSubtask: boolean;
};
type taskType = {
  id: string;
  title: string;
  isComplete: boolean;
  subTaskList: SubTaskType[];
  isSubtask: boolean;
};
type MainTaskType = {
  id: string;
  title: string;
  isComplete: boolean;
  taskList: taskType[];
  isSubtask: boolean;
};
const AddModal = ({ setOpenAddTask }: AddModalTypes) => {
  const [category, setCategory] = useState("");
  const [taskList, setTaskList] = useState<taskType[]>([]);
  const [title, setTitle] = useState("");
  const [numArr, setNumArr] = useState(new Array(1).fill(mainTaskTemplate));
  const [mainTaskList, setMainTaskList] = useState<MainTaskType>();
  const searchInput = React.useRef<HTMLInputElement>(null);
  const { tasksMain, setTaskMain } = usePersistStore();
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTaskList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: title,
        isComplete: false,
        subTaskList: [],
        isSubtask: false,
      },
    ]);
    setTitle("");
  };
  const handleCategorySubmit = (e: any) => {
    e.preventDefault();
    setMainTaskList({
      id: uuidv4(),
      title: category,
      isComplete: false,
      taskList: [],
      isSubtask: false,
    });
    if (searchInput.current !== null) {
      searchInput.current.focus();
    }
  };
  const handleSubmitTask = (e: any) => {
    e.preventDefault();
    setTaskMain([
      ...tasksMain,
      {
        id: uuidv4(),
        title: category,
        isComplete: false,
        taskList: taskList,
        isSubtask: false,
      },
    ]);
  };
  console.log("taskList main", taskList);

  return (
    <div
      className={`absolute bg-black bg-opacity-40 w-screen h-screen z-40 top-0 left-0 flex justify-center items-start pt-16`}
      onClick={() => setOpenAddTask(false)}
    >
      <div
        className={` relative max-w-[520px] blur-none shadow-xl w-[90%] ${
          false ? "bg-[#13212a] text-slate-100" : " bg-gray-100 text-black"
        } z-40 p-6 rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[90%] m-auto">
          <div className=" flex flex-col gap-2 border shadow-md rounded-md p-2">
            <div>
              {/* category */}
              <form onSubmit={handleCategorySubmit}>
                {!mainTaskList?.title ? (
                  <input
                    type="text"
                    placeholder="Task category"
                    className="shadow rounded p-1 px-4 w-full"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    autoFocus
                  />
                ) : (
                  <div className=" bg-slate-600 px-2 py-1 rounded text-gray-100">
                    {mainTaskList?.title}
                  </div>
                )}
              </form>
              {/* Task list */}
              <div className="flex flex-col gap-1">
                {taskList.map((item, index) => (
                  <AddModalTaskItem
                    key={item.id}
                    actualTask={item}
                    subTaskList={item.subTaskList}
                    focused={focused}
                    index={index + 1}
                    setTaskList={setTaskList}
                  />
                ))}
              </div>
              {/* task list form */}
              <form onSubmit={handleSubmit}>
                <div className="flex gap-1 mb-2 mt-2">
                  <input
                    ref={searchInput}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                    type="text"
                    placeholder="Enter task"
                    className="shadow rounded p-1 px-4 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {/* <button className=" bg-gray-800 w-[40px] text-gray-100 text-xl p-2 rounded-md  ">
                    +
                  </button> */}
                </div>
              </form>
              {/* Save All */}
              <form onSubmit={handleSubmitTask}>
                <button
                  // onClick={() => setNumArr((prev) => [...prev, mainTaskTemplate])}
                  className=" w-full bg-gray-300 rounded-md p-1 mt-4"
                >
                  Save
                </button>
              </form>
            </div>
            {/* <button className=" p-2 bg-gray-400 text-white rounded-md">create</button> */}
          </div>
        </div>
        <button
          className={`absolute top-0 right-0 m-2 ${
            false
              ? "bg-black bg-opacity-30 text-slate-200"
              : " bg-slate-300  text-neutral-500"
          } p-2 rounded-full`}
          onClick={() => setOpenAddTask(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default AddModal;
