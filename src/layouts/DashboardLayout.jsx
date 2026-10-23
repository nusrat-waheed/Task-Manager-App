
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/tasks/Sidebar.jsx";
import Header from "../components/tasks/Header.jsx";

function DashboardLayout() {
  const [search, setSearch] = useState("");

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <Header
          search={search}
          onSearchChange={setSearch}
        />

        <main className="page-content">
          <Outlet context={{ search }} />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
