import React from "react";
import MainTask from "./MainTask";

const HomePage = () => {
  const example = [
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
        { title: "Main item 4", isComplete: false, task: [], isSubtask: false },
      ],
    },
    // {
    //   id: 2,
    //   title: "sumdigit.com",
    //   tasks: [
    //     { title: "create target number", isComplete: false, task: [], isSubtask: false },
    //     { title: "generate new data", isComplete: false, task: [], isSubtask: false },
    //     {
    //       title: "generate list",
    //       isComplete: false,
    //       tasks: [
    //         { title: "next app", isComplete: false, task: [] },
    //         { title: "next app", isComplete: false, task: [] },
    //       ],
    //       isSubtask: true,
    //     },
    //   ],
    // },
  ];

  return (
    <div className=" flex flex-col gap-4">
      {example.map((tasks, i) => (
        <MainTask key={`${i}-task`} task={tasks} />
      ))}
    </div>
  );
};

export default HomePage;
