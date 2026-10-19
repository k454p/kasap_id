import React from 'react';
import './Beranda.css'; // Opsional: untuk file styling terpisah

export default function Beranda() {
  return (
    <div className="beranda-container">
      {/* Bagian Hero / Utama */}
      <header className="beranda-hero">
        <h1>Selamat Datang di Website Kami</h1>
        <p>Platform terbaik untuk mengelola dan mewujudkan ide-ide kreatif Anda.</p>
        <button className="cta-button" onClick={() => alert('Tombol diklik!')}>
          Mulai Sekarang
        </button>
      </header>

      {/* Bagian Fitur / Layanan */}
      <section className="beranda-features">
        <h2>Fitur Unggulan</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Cepat & Handal</h3>
            <p>Dibangun dengan teknologi modern untuk performa maksimal.</p>
          </div>
          <div className="feature-card">
            <h3>Mudah Digunakan</h3>
            <p>Antarmuka yang intuitif dan ramah pengguna.</p>
          </div>
          <div className="feature-card">
            <h3>Dukungan 24/7</h3>
            <p>Tim kami siap membantu Anda kapan saja.</p>
          </div>
        </div>
      </section>
    </div>
  );
}