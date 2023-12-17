"use client";
import { useState } from "react";
import { FaFont } from "react-icons/fa";
import AddModal from "./AddModal";
import Image from "next/image";
import logo from "../../public/logo.png";
const Navbar = () => {
  const [openAddTask, setOpenAddTask] = useState(false);

  const handleAddTask = () => {};
  return (
    <>
      {/* <div className=" w-[40px] border-2 rounded-md overflow-hidden absolute top-8 right-8">
        <Image src={logo} alt="" className=" " />
      </div> */}
      <div className=" bg-white rounded-lg shadow-lg p-2 text-lg flex items-center gap-2 mb-4">
        <button
          onClick={() => setOpenAddTask((prev) => !prev)}
          className=" w-[50px] h-[50px] flex justify-center items-center rounded-lg hover:bg-slate-200 text-3xl"
        >
          +
        </button>
        <button className=" w-[50px] h-[50px] flex justify-center items-center rounded-lg hover:bg-slate-200">
          <FaFont />
        </button>
      </div>
      {openAddTask && <AddModal setOpenAddTask={setOpenAddTask} />}
    </>
  );
};

export default Navbar;
