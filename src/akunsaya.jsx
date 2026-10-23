import React from "react";

export default function AkunSaya({ navigate, goBack }) {
  const user = {
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567890",
    avatar: "https://via.placeholder.com/80",
  };

  const handleLogout = () => {
    alert("Anda telah keluar");
    navigate('beranda');
  };

  const handleMenuClick = (nama) => {
    alert(`Navigasi ke ${nama}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Akun Saya</h2>

      <div style={styles.profileCard}>
        <img src={user.avatar} alt="Foto Profil" style={styles.avatar} />
        <div>
          <p style={{ fontWeight: 'bold' }}>{user.name}</p>
          <p style={{ fontSize: 12, color: '#666' }}>{user.email}</p>
        </div>
      </div>

      <div style={styles.menu}>
        <button style={styles.menuItem} onClick={() => handleMenuClick("Pesanan Saya")}>
          📦 Pesanan Saya
        </button>
        <button style={styles.menuItem} onClick={() => handleMenuClick("Alamat")}>
          📍 Alamat Tersimpan
        </button>
        <button style={styles.menuItem} onClick={() => handleMenuClick("Pembayaran")}>
          💳 Metode Pembayaran
        </button>
        <button style={styles.logout} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 16, paddingBottom: 80, backgroundColor: '#f5f5f5', minHeight: '100vh' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  profileCard: { display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 20 },
  avatar: { width: 70, height: 70, borderRadius: '50%', marginRight: 15 },
  menu: { backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  menuItem: { display: 'flex', width: '100%', padding: '15px 20px', border: 'none', borderBottom: '1px solid #f1f1f1', backgroundColor: '#fff', textAlign: 'left', cursor: 'pointer' },
  logout: { width: '100%', padding: 12, backgroundColor: '#e74c3c', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: 10 }
};
