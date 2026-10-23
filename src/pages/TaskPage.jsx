
import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import TaskList from "../components/tasks/TaskList";

function TaskPage({ type }) {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const { search } = useOutletContext();
  const today = new Date().toISOString().slice(0, 10);

  const filtered = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.category.toLowerCase().includes(search.toLowerCase());

      if (type === "today") {
        return matchesSearch && task.dueDate === today;
      }

      if (type === "upcoming") {
        return matchesSearch && task.dueDate > today && !task.completed;
      }

      if (type === "completed") {
        return matchesSearch && task.completed;
      }

      return matchesSearch;
    });
  }, [tasks, search, type, today]);

  const titles = {
    all: "All Tasks",
    today: "Today's Tasks",
    upcoming: "Upcoming Tasks",
    completed: "Completed Tasks",
  };

  return (
    <section className="content-panel standalone-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TASK MANAGEMENT</p>
          <h1>{titles[type]}</h1>
          <p>Found {filtered.length} task(s).</p>
        </div>
      </div>

      <TaskList
        tasks={filtered}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </section>
  );
}

export default TaskPage;
