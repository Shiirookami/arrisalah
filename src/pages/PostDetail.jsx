import { useParams, Link } from "react-router-dom";
import { dummyPosts } from "../data/dummyPosts";

export default function PostDetail() {
  const { slug } = useParams();
  const post = dummyPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page">
        <section className="section">
          <p>Artikel tidak ditemukan.</p>
          <Link to="/posts" className="link-muted">
            Kembali ke daftar artikel
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section section-narrow">
        <Link to="/posts" className="link-muted">
          ← Kembali ke daftar artikel
        </Link>
        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-meta">
          {post.category} •{" "}
          {new Date(post.date).toLocaleDateString("id-ID")}
        </p>
        <div
          className="detail-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </div>
  );
}
