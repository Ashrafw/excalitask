import React, { useState } from "react";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import AddSubTaskItem from "./AddSubTaskItem";
import { FaRegTrashAlt } from "react-icons/fa";

const subTaskTemplate = {
  title: "",
  isComplete: false,
  tasks: [],
  isSubtask: false,
};
const AddMainTaskItem = () => {
  const [numArr, setNumArr] = useState(new Array(0).fill(subTaskTemplate));

  return (
    <div>
      <div className="flex gap-1 mb-2 mt-2">
        <input
          type="text"
          placeholder="Enter task"
          className="shadow rounded p-2 w-full"
        />
        <button className=" bg-gray-800 w-[40px] text-gray-100 text-xl p-2 rounded-md  ">
          +
        </button>
        {/* <button className=" bg-gray-800 w-[40px] text-gray-100 text-xl p-2 rounded-md  ">
          <FaRegTrashAlt />
        </button> */}
        {/* <button className=" bg-gray-800 w-[60px] text-gray-100 text-xs p-2 rounded-md  ">
          <PiArrowElbowRightDownFill />
          create subtask
        </button> */}
      </div>
      {numArr.map((item) => (
        <AddSubTaskItem />
      ))}
    </div>
  );
};

export default AddMainTaskItem;
