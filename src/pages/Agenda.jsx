export default function Agenda() {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <h2>Agenda Kegiatan Pesantren</h2>
          <p className="section-subtitle">
            Jadwal kegiatan rutin dan acara khusus santri.
          </p>
        </div>
        <ul className="agenda-list">
          <li>
            <strong>Halaqah Subuh Santri Kelas Akhir</strong>
            <span>Setiap Sabtu & Ahad, Ba&apos;da Subuh</span>
          </li>
          <li>
            <strong>Malamlul Qiyam Santri Tahfidz</strong>
            <span>Malam Jumat, setelah Isya</span>
          </li>
          <li>
            <strong>Kajian Umum Ahad Pagi</strong>
            <span>Terbuka untuk masyarakat sekitar</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
