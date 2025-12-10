import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/posts", label: "Artikel" },
  { to: "/agenda", label: "Agenda" },
  { to: "/about", label: "Profil" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">AR</div>
          <div className="brand-text">
            <p className="brand-title">Pondok Pesantren Modern Ar-Risalah</p>
            <p className="brand-subtitle">
              Portal resmi informasi & kegiatan santri
            </p>
          </div>
        </Link>

        <nav className="navbar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/admin" className="nav-cta">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
