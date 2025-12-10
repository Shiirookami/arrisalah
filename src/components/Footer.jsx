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
            Kombinasi kurikulum diniyah, tahfidz, dan pendidikan
            modern untuk menyiapkan santri siap mengabdi di tengah
            masyarakat.
          </p>
        </div>

        {/* Kolom tengah: link singkat */}
        <div className="footer-col">
          <h4 className="footer-title">Tautan Cepat</h4>
          <ul className="footer-list">
            <li>Profil Pesantren</li>
            <li>Program Tahfidz</li>
            <li>Kegiatan Santri</li>
            <li>Pendaftaran Santri Baru</li>
          </ul>
        </div>

        {/* Kolom kanan: kontak & sosmed fake */}
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
              <span className="footer-badge">Facebook</span>
              <span className="footer-badge">Instagram</span>
              <span className="footer-badge">YouTube</span>
              <span className="footer-badge">Tiktok</span>
              <span className="footer-badge">Thread</span>
              <span className="footer-badge">Twitter</span>
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
