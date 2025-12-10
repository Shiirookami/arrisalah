export default function NewPost() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Tulis Artikel Baru</h2>
      </div>

      <form
        className="admin-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Ini hanya UI. Penyimpanan belum dihubungkan ke backend.");
        }}
      >
        <div className="form-group">
          <label>Judul</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label>Slug (link)</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            className="form-input"
            placeholder="Misal: Kegiatan Santri"
          />
        </div>

        <div className="form-group">
          <label>Ringkasan singkat</label>
          <textarea className="form-textarea" rows={3} />
        </div>

        <div className="form-group">
          <label>Isi artikel</label>
          <textarea className="form-textarea" rows={8} />
        </div>

        <button type="submit" className="btn-primary">
          Simpan (UI Saja)
        </button>
      </form>
    </div>
  );
}
