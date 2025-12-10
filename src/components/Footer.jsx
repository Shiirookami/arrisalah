import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* garis gradient atas */}
      <div className="footer-accent" />

      <div className="footer-inner">
        {/* Kolom kiri: logo + tagline */}
        <div className="footer-col footer-col-main">
          <div className="footer-logo">
            <div className="footer-logo-mark">AR</div>
            <div>
              <p className="footer-logo-title">
                Pondok Pesantren Modern Ar-Risalah
              </p>
              <p className="footer-logo-sub">
                Mencetak generasi berilmu, beradab, dan bermanfaat.
              </p>
            </div>
          </div>
          <p className="footer-text">
            Kombinasi kurikulum diniyah, tahfidz, dan pendidikan modern untuk
            menyiapkan santri siap mengabdi di tengah masyarakat.
          </p>
        </div>

        {/* Kolom tengah: link cepat */}
        <div className="footer-col">
          <h4 className="footer-title">Tautan Cepat</h4>
          <ul className="footer-list">
            <li>
              <Link to="/about" className="footer-link">
                Profil Pesantren
              </Link>
            </li>
            <li>
              <Link to="/posts?category=program" className="footer-link">
                Program Tahfidz
              </Link>
            </li>
            <li>
              <Link to="/posts?category=kegiatan" className="footer-link">
                Kegiatan Santri
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                Pendaftaran Santri Baru
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom kanan: kontak & sosial media */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-title">Kontak & Lokasi</h4>
          <p className="footer-text">
            Jl. Jangari, Desa Hegarmanah, Kecamatan Sukaluyu, Cianjur, Indonesia
          </p>
          <p className="footer-text">
            Telp: (0263) 123456<br />
            Email: info@arrisalah.sch.id
          </p>

          <div className="footer-social">
            <span className="footer-social-label">Ikuti kami:</span>
            <div className="footer-social-badges">

              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge"
              >
                Facebook
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge"
              >
                Instagram
              </a>

              {/* YOUTUBE */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge"
              >
                YouTube
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Pondok Pesantren Modern Ar-Risalah.
          Seluruh hak cipta dilindungi.
        </p>
        <p className="footer-bottom-text muted">
          Dikembangkan oleh Tim IT Pesantren
        </p>
      </div>
    </footer>
  );
}
