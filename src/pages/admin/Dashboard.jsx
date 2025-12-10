import { dummyPosts } from "../../data/dummyPosts";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const total = dummyPosts.length;

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Ringkasan Pesantren</h2>
        <Link to="/admin/posts/new" className="btn-primary btn-small">
          + Tulis Artikel
        </Link>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <p className="admin-stat-label">Total Artikel</p>
          <p className="admin-stat-value">{total}</p>
        </div>
        <div className="admin-stat-card">
          <p className="admin-stat-label">Program Unggulan</p>
          <p className="admin-stat-value">Tahfidz 30 Juz</p>
        </div>
        <div className="admin-stat-card">
          <p className="admin-stat-label">Agenda Pekan Ini</p>
          <p className="admin-stat-value">3 Kegiatan</p>
        </div>
      </div>
    </div>
  );
}
