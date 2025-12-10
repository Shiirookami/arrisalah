import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <p className="hero-kicker">Portal Pesantren</p>
          <h1 className="hero-title">
            Cahaya Ilmu, Akhlak, dan Pengabdian Santri
          </h1>
          <p className="hero-subtitle">
            Ikuti kegiatan, kajian, dan informasi terbaru Pondok Pesantren
            Modern Ar-Risalah Syafi&apos;iyyah. Menggabungkan kekuatan tradisi
            salaf dengan sentuhan teknologi modern.
          </p>
          <div className="hero-actions">
            <Link to="/posts" className="btn-primary">
              Lihat Artikel Terbaru
            </Link>
            <Link to="/agenda" className="btn-outline">
              Jadwal Kegiatan
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <p className="hero-panel-label">Pengumuman pesantren</p>
        <p className="hero-panel-title">
          Penerimaan Santri Baru Tahun Ajaran 2026/2027
        </p>
        <p className="hero-panel-text">
          Pendaftaran dibuka untuk program SMP dan SMA Islam terpadu, dengan
          fokus pada tahfidz, bahasa Arab, dan pembinaan karakter.
        </p>
        <Link to="/about" className="hero-panel-link">
          Info lebih lanjut
        </Link>
      </div>
    </section>
  );
}
