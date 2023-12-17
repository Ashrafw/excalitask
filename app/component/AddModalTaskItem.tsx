import { v4 as uuidv4 } from "uuid";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import AddSubTaskItem from "./AddSubTaskItem";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineMoreVert } from "react-icons/md";

const mainTaskTemplate = {
  title: "",
  isComplete: false,
  tasks: [],
  isSubtask: false,
};
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// const alphabetLetters = letters?;

const AddModalTaskItem = ({ item, focused, index }) => {
  const [openSubtask, setOpenSubtask] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [subTaskList, setSubTaskList] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubTaskList((prev) => [
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
  console.log("subTaskList", subTaskList);
  console.log("item.title", item.title);
  return (
    <div
      className={`${
        openSubtask && subTaskList.length > 0
          ? "border-2 shadow-xs rounded-md bg-gray-200"
          : ""
      } `}
    >
      <div
        key={item.id}
        className="flex gap-1 item-center justify-between w-full border-b-2"
      >
        <div className="flex gap-2 p-1">
          <button className="  bg-opacity-50 text-gray-400 text-md p-1 rounded-md  ">
            <FaRegTrashAlt />
          </button>{" "}
          <h1 className=" w-[70%]">
            <strong className="mr-1">{index}. </strong> {item.title}
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

        {subTaskList.length > 0 ? (
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
              {subTaskList?.map((item, index) => (
                //   <AddModalTaskItem key={item.id} item={item} />
                <div className="pl-8">
                  <div
                    key={item.id}
                    className="flex gap-1 item-center justify-between w-full border-b  border-white "
                  >
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
