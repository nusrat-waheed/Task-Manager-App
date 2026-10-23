
import { Check, Circle, Trash2 } from "lucide-react";

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Add a new task or change your search and filters.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <article className="task-card" key={task.id}>
          <button
            className={`complete-button ${
              task.completed ? "is-complete" : ""
            }`}
            onClick={() => onToggle(task.id)}
            aria-label={
              task.completed ? "Mark incomplete" : "Mark complete"
            }
            title="Toggle completion"
          >
            {task.completed ? <Check size={17} /> : <Circle size={17} />}
          </button>

          <div className="task-details">
            <h3 className={task.completed ? "completed-title" : ""}>
              {task.title}
            </h3>

            {task.description && (
              <p className="task-description">
                {task.description}
              </p>
            )}

            <p className="task-meta">
              {task.category}

              {task.startDate && (
                <>
                  <span> • </span>
                  Start {task.startDate}
                </>
              )}

              {task.dueDate && (
                <>
                  <span> • </span>
                  Due {task.dueDate}
                </>
              )}
            </p>
          </div>

          <span
            className={`status ${
              task.completed ? "done" : "pending"
            }`}
          >
            {task.completed ? "Completed" : "In progress"}
          </span>

          <button
            className="delete-button"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
            title="Delete task"
          >
            <Trash2 size={17} />
          </button>
        </article>
      ))}
    </div>
  );
}

export default TaskList;
