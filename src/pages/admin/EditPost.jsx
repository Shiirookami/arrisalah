import { useParams } from "react-router-dom";
import { dummyPosts } from "../../data/dummyPosts";

export default function EditPost() {
  const { id } = useParams();
  const post = dummyPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="admin-page">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Edit Artikel</h2>
      </div>

      <form
        className="admin-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Ini hanya UI. Update belum dihubungkan ke backend.");
        }}
      >
        <div className="form-group">
          <label>Judul</label>
          <input type="text" className="form-input" defaultValue={post.title} />
        </div>

        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            className="form-input"
            defaultValue={post.category}
          />
        </div>

        <div className="form-group">
          <label>Ringkasan singkat</label>
          <textarea
            className="form-textarea"
            rows={3}
            defaultValue={post.excerpt}
          />
        </div>

        <div className="form-group">
          <label>Isi artikel</label>
          <textarea
            className="form-textarea"
            rows={8}
            defaultValue={post.content.replace(/<[^>]+>/g, "")}
          />
        </div>

        <button type="submit" className="btn-primary">
          Simpan Perubahan (UI Saja)
        </button>
      </form>
    </div>
  );
}
