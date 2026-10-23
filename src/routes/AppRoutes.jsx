
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import TaskPage from "../pages/TaskPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskPage type="all" />} />
        <Route path="/today" element={<TaskPage type="today" />} />
        <Route path="/upcoming" element={<TaskPage type="upcoming" />} />
        <Route path="/completed" element={<TaskPage type="completed" />} />
      </Route>
    </Routes>
  );
}
