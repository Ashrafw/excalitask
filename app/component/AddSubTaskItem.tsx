import React from "react";

const AddSubTaskItem = () => {
  return (
    <div className="flex gap-1 mb-2 ml-8 ">
      <input type="text" placeholder="Enter task" className="shadow rounded p-2 w-full" />
      <button className=" bg-gray-800 w-[40px] text-gray-100 text-xl p-2 rounded-md  ">
        +
      </button>
    </div>
  );
};

export default AddSubTaskItem;
