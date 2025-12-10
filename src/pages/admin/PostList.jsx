import { Link } from "react-router-dom";
import { dummyPosts } from "../../data/dummyPosts";

export default function PostList() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Daftar Artikel</h2>
        <Link to="/admin/posts/new" className="btn-primary btn-small">
          + Tulis Artikel
        </Link>
      </div>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Kategori</th>
              <th>Tanggal</th>
              <th className="text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>
                  {new Date(post.date).toLocaleDateString("id-ID")}
                </td>
                <td className="text-right">
                  <Link
                    to={`/admin/posts/${post.id}/edit`}
                    className="table-link"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="table-link table-link-danger"
                  >
                    Hapus (dummy)
                  </button>
                </td>
              </tr>
            ))}
            {dummyPosts.length === 0 && (
              <tr>
                <td colSpan={4} className="empty-text">
                  Belum ada artikel.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
