export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4 className="footer-title">Pondok Pesantren Modern Ar-Risalah</h4>
          <p className="footer-text">
            Jl. Pendidikan No. 1, Desa Ilmu, Kecamatan Barokah, Indonesia
          </p>
          <p className="footer-text">
            Telp: (0263) 123456 • Email: info@arrisalah.sch.id
          </p>
        </div>
        <div>
          <h4 className="footer-title">Layanan</h4>
          <ul className="footer-list">
            <li>Kegiatan Santri</li>
            <li>Informasi Pendaftaran</li>
            <li>Program Tahfidz</li>
            <li>Program Bahasa</li>
          </ul>
        </div>
        <div className="footer-right">
          <p className="footer-text">
            © {new Date().getFullYear()} Ponpes Ar-Risalah. All rights
            reserved.
          </p>
          <p className="footer-text-muted">
            Dikembangkan oleh Tim IT Pesantren.
          </p>
        </div>
      </div>
    </footer>
  );
}
