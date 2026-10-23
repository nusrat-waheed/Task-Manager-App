
import { useEffect, useState } from "react";

const STORAGE_KEY = "taskflow-tasks";

function getInitialTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
}

export default function useTasks() {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

 function addTask(task) {
  setTasks((currentTasks) => [
    {
      id: crypto.randomUUID(),
      title: task.title,
      description: task.description,
      category: task.category,
      startDate: task.startDate,
      dueDate: task.dueDate,
      completed: false,
    },
    ...currentTasks,
  ]);
}
  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  return { tasks, addTask, toggleTask, deleteTask };
}
