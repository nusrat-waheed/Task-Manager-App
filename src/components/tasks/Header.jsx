
import { Search } from "lucide-react";

function Header({ search, onSearchChange }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">YOUR WORKSPACE</p>
        <h2>Manage your day</h2>
      </div>

      <label className="search-box">
        <Search size={18} />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search tasks..."
          aria-label="Search tasks"
        />
      </label>
    </header>
  );
}

export default Header;
