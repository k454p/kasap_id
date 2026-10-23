import React from 'react';

export default function AkunSaya({ navigate }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', background: '#fff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', background: '#ff4500', padding: '30px 20px', color: 'white', borderRadius: '0 0 20px 20px', margin: '-20px -20px 20px -20px' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px' }}>👤</div>
        <div>
          <h3 style={{ margin: 0 }}>Pengguna Kasap.id</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>Member Silver</p>
        </div>
      </div>

      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
        <h4>Pengaturan Akun</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', lineHeight: '2.5' }}>
          <li style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }}>📌 Alamat Saya</li>
          <li style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }}>🔒 Keamanan & Akun</li>
          <li style={{ cursor: 'pointer', color: '#ff4500' }} onClick={() => navigate('beranda')}>🚪 Keluar Kembali ke Beranda</li>
        </ul>
      </div>
    </div>
  );
}
