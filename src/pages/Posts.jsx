import { Link, useLocation } from "react-router-dom";
import PostCard from "../components/PostCard";
import { dummyPosts } from "../data/dummyPosts";

export default function Posts() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFilter = params.get("category");

  const filtered = categoryFilter
    ? dummyPosts.filter((p) =>
        p.category.toLowerCase().includes(categoryFilter.toLowerCase())
      )
    : dummyPosts;

  return (
    <div className="page">
      <section className="section">
        <div className="section-header section-header-row">
          <div>
            <h2>Artikel & Berita Pesantren</h2>
            {categoryFilter && (
              <p className="section-subtitle">
                Filter: <strong>{categoryFilter}</strong>
              </p>
            )}
          </div>
          <Link to="/" className="link-muted">
            Kembali ke beranda
          </Link>
        </div>

        <div className="posts-grid">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {filtered.length === 0 && (
            <p className="empty-text">
              Belum ada artikel untuk kategori ini.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
