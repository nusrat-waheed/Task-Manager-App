
import { useState } from "react";
import { Plus, X } from "lucide-react";

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function TaskForm({ onAddTask }) {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Personal",
    startDate: getToday(),
    dueDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(form);

    setForm({
      title: "",
      description: "",
      category: "Personal",
      startDate: getToday(),
      dueDate: "",
    });

    setIsOpen(false);
  }

  return (
    <>
      {/* This button stays on the dashboard */}
      <button
        type="button"
        className="primary-button"
        onClick={() => setIsOpen(true)}
      >
        <Plus size={16} />
        Add Task
      </button>

      {/* All form fields are inside the modal */}
      {isOpen && (
        <div
          className="task-popup-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="task-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="task-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="task-popup-header">
              <div>
                <h2 id="task-popup-title">Create New Task</h2>
                <p>Enter the details of your task below.</p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form starts inside the modal */}
            <form
              className="task-popup-form"
              onSubmit={handleSubmit}
            >
              <div className="form-field">
                <label htmlFor="task-title">Task Title *</label>
                <input
                  id="task-title"
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="task-description">
                  Description
                </label>
                <textarea
                  id="task-description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your task..."
                  rows={3}
                />
              </div>

              <div className="form-field">
                <label htmlFor="task-category">Category</label>
                <select
                  id="task-category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Learning">Learning</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="task-date-fields">
                <div className="form-field">
                  <label htmlFor="task-start-date">
                    Start Date *
                  </label>
                  <input
                    id="task-start-date"
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    max={form.dueDate || undefined}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="task-due-date">
                    Due Date
                  </label>
                  <input
                    id="task-due-date"
                    type="date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={handleChange}
                    min={form.startDate}
                  />
                </div>
              </div>

              {/* Modal buttons */}
              <div className="task-popup-actions">
                <button
                  type="button"
                  className="filter-tab"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  <Plus size={16} />
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskForm;
