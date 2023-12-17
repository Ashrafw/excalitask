import React from "react";

type Props = {};

const SubItem = ({ subTask }) => {
  // console.log("subTask.title", subTask.title);
  return (
    <div className="flex gap-2 items-center justify-center pl-2 py-2 border-b border-t  border-opacity-5 rounded-lg   cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 ">
      <input type="checkbox" className=" text " />
      <label className="w-full text-medium  text-gray-00">{subTask.title}</label>
    </div>
  );
};

export default SubItem;
