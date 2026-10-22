import React from "react";

export default function AkunSaya({ navigate, goBack }) {
  const user = {
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567890",
    avatar: "https://via.placeholder.com/80"
  };

  const handleMenuClick = (menuName) => {
    navigate(menuName); // ini yang bikin pindah ke halaman nama, alamat, email dll
  };

  const handleLogout = () => {
    alert("Anda telah keluar");
    navigate('beranda');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Akun Saya</h2>

      <div style={styles.profileCard}>
        <img src={user.avatar} alt="Foto Profil" style={styles.avatar} />
        <div>
          <p style={{fontWeight:'bold'}}>{user.name}</p>
          <p style={{fontSize:12, color:'#666'}}>{user.email}</p>
        </div>
      </div>

      <div style={styles.menu}>
        <button style={styles.menuItem} onClick={() => handleMenuClick('nama')}>Nama <span>›</span></button>
        <button style={styles.menuItem} onClick={() => handleMenuClick('alamat')}>Alamat <span>›</span></button>
        <button style={styles.menuItem} onClick={() => handleMenuClick('email')}>Email <span>›</span></button>
        <button style={styles.menuItem} onClick={() => handleMenuClick('nomerhp')}>No. HP <span>›</span></button>
        <button style={styles.menuItem} onClick={() => handleMenuClick('bankewallet')}>Bank & E-Wallet <span>›</span></button>
        <button style={styles.menuItem} onClick={() => handleMenuClick('saldo')}>Saldo <span>›</span></button>
      </div>

      <button style={styles.logout} onClick={handleLogout}>Logout</button>
    </div>
  );
}

const styles = {
  container: { padding: 16, paddingBottom: 80, backgroundColor: '#f5f5f5', minHeight: '100vh' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  profileCard: { display: 'flex', gap: 12, backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 16, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  menu: { backgroundColor: 'white', borderRadius: 12, overflow: 'hidden' },
  menuItem: { width: '100%', textAlign: 'left', padding: 16, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', background: 'white' },
  logout: { width: '100%', marginTop: 20, padding: 12, backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: 8 }
}