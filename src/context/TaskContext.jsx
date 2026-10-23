
import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const taskState = useTasks();

  return (
    <TaskContext.Provider value={taskState}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (context === null) {
    throw new Error("TaskProvider is missing in main.jsx");
  }

  return context;
}
