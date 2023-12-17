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
const mainTaskTemplate = {
  title: "",
  isComplete: false,
  tasks: [],
  isSubtask: false,
};
const AddModal = ({ setOpenAddTask }) => {
  const [category, setCategory] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [numArr, setNumArr] = useState(new Array(1).fill(mainTaskTemplate));
  const [mainTaskList, setMainTaskList] = useState([]);
  const searchInput = React.useRef(null);

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: title,
        isComplete: false,
        tasks: [],
        isSubtask: false,
      },
    ]);
    setTitle("");
  };
  const handleCategorySubmit = (e) => {
    e.preventDefault();

    setMainTaskList({
      id: uuidv4(),
      title: category,
      isComplete: false,
      tasks: [],
      isSubtask: false,
    });
    searchInput.current.focus();
  };
  console.log("mainTaskList", mainTaskList);
  console.log("mainTaskList?.title?.length", mainTaskList?.title?.length);
  console.log("taskList", taskList);
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
              <div className="flex flex-col gap-1">
                {taskList.map((item, index) => (
                  <AddModalTaskItem
                    key={item.id}
                    item={item}
                    focused={focused}
                    index={index + 1}
                  />
                ))}
              </div>

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
              <button
                // onClick={() => setNumArr((prev) => [...prev, mainTaskTemplate])}
                className=" w-full bg-gray-300 rounded-md p-1 mt-4"
              >
                Save
              </button>
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
