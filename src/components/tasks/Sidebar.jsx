
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/tasks", label: "All Tasks", icon: ListTodo },
  { to: "/today", label: "Today", icon: CalendarDays },
  { to: "/upcoming", label: "Upcoming", icon: CalendarClock },
  { to: "/completed", label: "Completed", icon: CheckCircle2 },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon"><CheckCircle2 size={23} /></span>
        <span>TaskFlow</span>
      </div>

      <p className="nav-label">WORKSPACE</p>

      <nav className="side-nav">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            to={to}
            end={end}
            key={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <Icon size={19} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="avatar">NW</div>
        <div>
          <strong>My Workspace</strong>
          <p>Personal planner</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
