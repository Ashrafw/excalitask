"use client";
import { v4 as uuidv4 } from "uuid";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import AddSubTaskItem from "./AddSubTaskItem";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineMoreVert } from "react-icons/md";
import { letters } from "../helper/alphabet";

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
type AddModalTaskItemType = {
  actualTask: taskType;
  subTaskList: SubTaskType[];
  focused: boolean;
  index: number;
  setTaskList: React.Dispatch<React.SetStateAction<taskType[]>>;
};

const AddModalTaskItem = ({
  actualTask,
  subTaskList,
  focused,
  index,
  setTaskList,
}: AddModalTaskItemType) => {
  const [openSubtask, setOpenSubtask] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  //   const [subTaskList, setSubTaskList] = useState<SubTaskType[]>([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setSubTaskList((prev) => [
    //   ...prev,
    //   {
    //     id: uuidv4(),
    //     title: title,
    //     isComplete: false,
    //     isSubtask: false,
    //   },
    // ]);

    console.log("item.id", actualTask.id);
    setTaskList((prev: taskType[]): any => {
      console.log("prev", prev);
      return prev.map((task) => {
        if (task.id === actualTask.id) {
          // Update the tasklist for the specific object
          return {
            ...task,
            isSubtask: true,
            subTaskList: [
              ...task.subTaskList,
              {
                id: uuidv4(),
                title: title,
                isComplete: false,
                isSubtask: true,
              },
            ],
          };
        } else {
          return task;
        }
      });
    });

    setTitle("");
  };
  console.log("actualTask", actualTask);
  console.log("actualTask.subTaskList", actualTask.subTaskList);
  console.log("actualTask.subTaskList.length", actualTask.subTaskList.length);
  console.log("subTaskList", subTaskList);
  console.log("subTaskList?.length", subTaskList?.length);
  return (
    <div
      className={`${
        openSubtask && actualTask.subTaskList?.length > 0
          ? "border-2 shadow-xs rounded-md bg-gray-200"
          : ""
      } `}
    >
      <div
        key={actualTask.id}
        className="flex gap-1 item-center justify-between w-full border-b-2"
      >
        <div className="flex gap-2 p-1">
          <button className="  bg-opacity-50 text-gray-400 text-md p-1 rounded-md  ">
            <FaRegTrashAlt />
          </button>{" "}
          <h1 className=" w-[70%]">
            <strong className="mr-1">{index}. </strong> {actualTask.title}
          </h1>
        </div>

        {/* <button className=" bg-gray-500  bg-opacity-50 text-gray-100 text-md p-1 rounded-md  ">
  <FaRegTrashAlt />
</button> */}
        {/* <button
          onClick={() => setOpenSubtask((prev) => !prev)}
          className="  bg-opacity-50 text-gray-600 text-md p-1 rounded-md  "
        >
          {!openSubtask ? <PiArrowElbowRightDownFill /> : <FaChevronUp />}
          {/* create subtask */}
        {/* </button>  */}
        {/* */}

        {actualTask.subTaskList?.length > 0 ? (
          <button
            onClick={() => setDropDown((prev) => !prev)}
            className="  bg-opacity-50 text-gray-600 text-md p-1 rounded-md mr-1  "
          >
            {dropDown ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        ) : (
          <button
            onClick={() => {
              setOpenSubtask((prev) => !prev);
              setDropDown((prev) => !prev);
            }}
            className="  bg-opacity-50 text-gray-600 text-md p-1 rounded-md  mr-1 bg-gray-300 m-1 "
          >
            <PiArrowElbowRightDownFill />
          </button>
        )}
      </div>
      <div>
        {dropDown && (
          <>
            <div className="flex flex-col gap-1">
              {actualTask.subTaskList?.map((item, index) => (
                //   <AddModalTaskItem key={item.id} item={item} />
                <div className="pl-8" key={item.id}>
                  <div className="flex gap-1 item-center justify-between w-full border-b  border-white ">
                    <div className="flex gap-2 p-1">
                      <button className="  bg-opacity-50 text-gray-400 text-md  rounded-md  ">
                        <FaRegTrashAlt />
                      </button>{" "}
                      <h1 className=" w-[70%] text-sm flex gap-1">
                        <strong className="">{index + 1}. </strong>
                        {item?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pl-8 pr-1">
              {openSubtask && !focused && (
                <form onSubmit={handleSubmit}>
                  <div className=" flex items-center gap-1">
                    <input
                      required
                      type="text"
                      placeholder="Enter subtask"
                      className="shadow rounded p-1 w-full my-2  text-sm"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* <button className=" bg-gray-800 w-[40px] text-gray-100 text-sm p-2  rounded-md  ">
                    +
                  </button> */}
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddModalTaskItem;
