import React from "react";

export default function AkunSaya() {
  // Contoh data profil pengguna
  const user = {
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567890",
    avatar: "https://via.placeholder.com/80", // Placeholder foto profil
  };

  const handleMenuClick = (menuName) => {
    alert(`Navigasi ke halaman: ${menuName}`);
  };

  const handleLogout = () => {
    alert("Anda telah keluar (logout) dari akun.");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Akun Saya</h2>

      {/* Bagian Profil Pengguna */}
      <div style={styles.profileCard}>
        <img src={user.avatar} alt="Foto Profil" style={styles.avatar} />
        <div style={styles.profileInfo}>
          <h3 style={styles.userName}>{user.name}</h3>
          <p style={styles.userText}>{user.email}</p>
          <p style={styles.userText}>{user.phone}</p>
        </div>
      </div>

      {/* Menu Navigasi Akun */}
      <div style={styles.menuContainer}>
        <div style={styles.menuItem} onClick={() => handleMenuClick("Pesanan Saya")}>
          <span>📦 Pesanan Saya</span>
          <span>&rsaquo;</span>
        </div>
        <div style={styles.menuItem} onClick={() => handleMenuClick("Alamat Tersimpan")}>
          <span>📍 Alamat Tersimpan</span>
          <span>&rsaquo;</span>
        </div>
        <div style={styles.menuItem} onClick={() => handleMenuClick("Metode Pembayaran")}>
          <span>💳 Metode Pembayaran</span>
          <span>&rsaquo;</span>
        </div>
        <div style={styles.menuItem} onClick={() => handleMenuClick("Pusat Bantuan / CS")}>
          <span>💬 Pusat Bantuan</span>
          <span>&rsaquo;</span>
        </div>
      </div>

      {/* Tombol Logout */}
      <button style={styles.logoutButton} onClick={handleLogout}>
        Keluar Akun
      </button>
    </div>
  );
}

// Styling sederhana menggunakan inline CSS
const styles = {
  container: {
    maxWidth: "480px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "15px",
    border: "2px solid #ddd",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    margin: "0 0 5px 0",
    fontSize: "18px",
    color: "#2c3e50",
  },
  userText: {
    margin: "2px 0",
    fontSize: "13px",
    color: "#7f8c8d",
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "1px solid #f1f1f1",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333",
    fontWeight: "500",
  },
  logoutButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};