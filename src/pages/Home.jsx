import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import PostCard from "../components/PostCard";
import { dummyPosts } from "../data/dummyPosts";

export default function Home() {
  const highlight = dummyPosts[0];
  const latest = dummyPosts;

  return (
    <div className="page">
      <Hero />

      {/* Section kategori */}
      <section className="section">
        <div className="section-header">
          <h2>Informasi Utama Pesantren</h2>
          <p className="section-subtitle">
            Sekilas kanal penting bagi wali santri dan masyarakat umum.
          </p>
        </div>
        <div className="category-grid">
          <CategoryCard
            title="Kegiatan Santri"
            description="Laporan kegiatan harian, muhadharah, rihlah, dan pembinaan santri."
            to="/posts?category=kegiatan"
          />
          <CategoryCard
            title="Pengumuman Resmi"
            description="Informasi penting untuk wali santri dan masyarakat."
            to="/posts?category=pengumuman"
          />
          <CategoryCard
            title="Program Tahfidz & Bahasa"
            description="Program unggulan tahfidz dan bahasa Arab/Inggris."
            to="/posts?category=program"
          />
          <CategoryCard
            title="Pendaftaran Santri Baru"
            description="Syarat, jadwal, dan alur pendaftaran."
            to="/about"
          />
        </div>
      </section>

      {/* Section program unggulan */}
      <section className="section">
        <div className="section-header">
          <h2>Program Unggulan Pesantren</h2>
          <p className="section-subtitle">
            Perpaduan antara hafalan, akademik, dan pembinaan akhlak santri.
          </p>
        </div>

        <div className="program-grid">
          <div className="program-card">
            <img
              src="/assets/santri-tahfidz.jpg"
              alt="Program Tahfidz 30 Juz"
              className="program-image"
              loading="lazy"
            />
            <div className="program-body">
              <h3>Program Tahfidz 30 Juz</h3>
              <p>
                Target khatam dalam 3 tahun dengan bimbingan musyrif
                berpengalaman dan jadwal setoran yang terukur.
              </p>
            </div>
          </div>

          <div className="program-card">
            <img
              src="/assets/kelas-modern.jpg"
              alt="Program Bahasa"
              className="program-image"
              loading="lazy"
            />
            <div className="program-body">
              <h3>Program Bahasa Arab & Inggris</h3>
              <p>
                Kelas komunikatif yang membiasakan santri menggunakan bahasa
                asing dalam kehidupan sehari-hari.
              </p>
            </div>
          </div>

          <div className="program-card">
            <img
              src="/assets/pesantren-hero.jpg"
              alt="Pembinaan Karakter"
              className="program-image"
              loading="lazy"
            />
            <div className="program-body">
              <h3>Pembinaan Karakter & Kepemimpinan</h3>
              <p>
                Kegiatan MABIT, organisasi santri, dan pelatihan kepemimpinan
                untuk membentuk pribadi yang siap mengabdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section highlight + berita */}
      <section className="section">
        <div className="section-header section-header-row">
          <h2>Berita Terbaru</h2>
        </div>

        <div className="posts-layout">
          {highlight && (
            <article className="highlight-card">
              {highlight.image && (
                <div className="highlight-image-wrapper">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="highlight-image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="highlight-body">
                <p className="post-category">{highlight.category}</p>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="post-date">
                  {new Date(highlight.date).toLocaleDateString("id-ID")}
                </p>
                <p className="highlight-excerpt">{highlight.excerpt}</p>
              </div>
            </article>
          )}

          <div className="posts-grid">
            {latest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Galeri singkat */}
      <section className="section">
        <div className="section-header">
          <h2>Suasana Pesantren</h2>
          <p className="section-subtitle">
            Sekilas suasana lingkungan belajar, masjid, dan kehidupan santri.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="/assets/masjid-malam.jpg"
              alt="Masjid pesantren"
              loading="lazy"
            />
            <p>Masjid sebagai pusat kegiatan ruhiyah santri.</p>
          </div>
          <div className="gallery-item">
            <img
              src="/assets/asrama-santri.jpg"
              alt="Asrama santri"
              loading="lazy"
            />
            <p>Asrama yang menjadi rumah kedua bagi para santri.</p>
          </div>
          <div className="gallery-item">
            <img
              src="/assets/kelas-modern.jpg"
              alt="Kelas belajar"
              loading="lazy"
            />
            <p>Kelas modern dengan suasana belajar yang kondusif.</p>
          </div>
          <div className="gallery-item">
            <img
              src="/assets/santri-halaqah.jpg"
              alt="Halaqah santri"
              loading="lazy"
            />
            <p>Halaqah dan kajian rutin untuk memperkuat ilmu dan adab.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="cta-text">
          <p className="cta-kicker">Pendaftaran Santri Baru</p>
          <h2 className="cta-title">
            Mari bergabung bersama keluarga besar Ar-Risalah
          </h2>
          <p className="cta-subtitle">
            Pesantren modern dengan nuansa ilmiah, bersanad, dan
            berteknologi. Insya Allah menjadi rumah kedua bagi putra-putri
            Anda.
          </p>
        </div>
        <div className="cta-note">
          <p>
            Informasi lengkap pendaftaran dapat diakses di menu Profil atau
            melalui nomor resmi panitia PSB (Penerimaan Santri Baru).
          </p>
          <p>
            Kami mengutamakan kerja sama dengan orang tua dalam mendidik
            amanah terbaik ini: putra-putri yang shalih dan berilmu.
          </p>
        </div>
      </section>
    </div>
  );
}
