import { NavLink } from "react-router-dom";

const adminNav = [
  { to: "/admin", label: "Ringkasan" },
  { to: "/admin/posts", label: "Artikel" },
];

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <p className="admin-sidebar-kicker">Panel Admin</p>
        <p className="admin-sidebar-title">Portal Pesantren</p>
      </div>
      <nav className="admin-sidebar-nav">
        {adminNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/admin"}
            className={({ isActive }) =>
              "admin-nav-link" + (isActive ? " admin-nav-link-active" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="admin-sidebar-footer">
        <span>v0.1 UI</span>
      </div>
    </aside>
  );
}
