import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      {post.image && (
        <div className="post-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
            loading="lazy"
          />
        </div>
      )}
      <div className="post-card-body">
        <p className="post-category">{post.category}</p>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-date">
          {new Date(post.date).toLocaleDateString("id-ID")}
        </p>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link to={`/posts/${post.slug}`} className="post-link">
          Baca selengkapnya
        </Link>
      </div>
    </article>
  );
}
