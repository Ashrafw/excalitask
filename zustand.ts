import { create } from "zustand";
import { persist } from "zustand/middleware";

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
interface StateStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  //

  tasksMain: MainTaskType[];
  setTaskMain: (id: MainTaskType[]) => void;
}
export const usePersistStore = create<StateStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),

      //
      tasksMain: [],
      setTaskMain: (tasksMain: MainTaskType[]) => set({ tasksMain }),
    }),

    {
      name: "excalitask",
    }
  )
);
