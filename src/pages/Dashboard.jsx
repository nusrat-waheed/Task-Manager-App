
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext.jsx";
import TaskForm from "../components/tasks/TaskForm.jsx";
import TaskList from "../components/tasks/TaskList.jsx";

export default function Dashboard() {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskContext();
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="dashboard">
      <h1>My Task Manager</h1>
      <p>Add, complete, search, and delete your tasks.</p>

      <TaskForm onAddTask={addTask} />

      <input
        type="search"
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{ margin: "16px 0", padding: "10px", width: "100%" }}
      />

      <h2>My Tasks ({filteredTasks.length})</h2>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </section>
  );
}
