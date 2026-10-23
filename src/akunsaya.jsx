import React, { useState } from 'react';

const AkunSaya = () => {
  // State untuk menyimpan data profil yang siap ditampilkan
  const [profile, setProfile] = useState({
    nama: "Pengguna Kasap",
    email: "user@kasap.id",
    telepon: "081234567890",
    alamat: "Jl. Merdeka No. 123, Jakarta"
  });

  // State bantuan saat mode edit aktif
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  // Fungsi navigasi/aksi menu sesuai dengan commit GitHub Anda
  const handleMenuClick = (nama) => {
    alert(`Navigasi ke ${nama}`);
    // Jika menggunakan react-router-dom, Anda bisa mengaktifkan baris di bawah ini:
    // navigate(`/${nama.toLowerCase()}`);
  };

  // Fungsi logout sesuai dengan commit GitHub Anda
  const handleLogout = () => {
    alert("Anda telah keluar");
    // Jika menggunakan react-router-dom, Anda bisa mengaktifkan baris di bawah ini:
    // navigate('beranda');
  };

  // Menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Menyimpan perubahan data profil
  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
    alert("Profil berhasil diperbarui!");
  };

  // Membuka mode edit dengan memuat data profil saat ini
  const handleEditToggle = () => {
    setFormData({ ...profile });
    setIsEditing(!isEditing);
  };

  return (
    <div style={styles.container}>
      {/* Header Aplikasi dengan Tema Hijau Kasap.id */}
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>Akun Saya</h2>
      </div>

      {/* Bagian Foto Profil / Avatar */}
      <div style={styles.avatarSection}>
        <img 
          src="https://placeholder.com" 
          alt="Avatar" 
          style={styles.avatar}
        />
        {!isEditing && <h3 style={styles.profileName}>{profile.nama}</h3>}
      </div>

      {/* Bagian Konten / Form Pengisian Data */}
      <div style={styles.contentCard}>
        {isEditing ? (
          <form onSubmit={handleSave} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nama Lengkap</label>
              <input 
                type="text" 
                name="nama" 
                value={formData.nama} 
                onChange={handleChange} 
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Nomor Telepon</label>
              <input 
                type="tel" 
                name="telepon" 
                value={formData.telepon} 
                onChange={handleChange} 
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Alamat</label>
              <textarea 
                name="alamat" 
                value={formData.alamat} 
                onChange={handleChange} 
                style={styles.textarea}
                rows="3"
              />
            </div>

            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.btnSave}>Simpan Perubahan</button>
              <button type="button" onClick={handleEditToggle} style={styles.btnCancel}>Batal</button>
            </div>
          </form>
        ) : (
          <div style={styles.infoList}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Email</span>
              <span style={styles.infoValue}>{profile.email}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Nomor Telepon</span>
              <span style={styles.infoValue}>{profile.telepon || "-"}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>Alamat Lengkap</span>
              <span style={styles.infoValue}>{profile.alamat || "-"}</span>
            </div>
            
            <button onClick={handleEditToggle} style={styles.btnEdit}>
              Ubah Data Profil
            </button>
          </div>
        )}
      </div>

      {/* Bagian Menu Pilihan Tambahan */}
      <div style={styles.menuSection}>
        <div onClick={() => handleMenuClick('Pesanan Saya')} style={styles.menuItem}>
          <span>📦 Pesanan Saya</span>
          <span>&gt;</span>
        </div>
        <div onClick={() => handleMenuClick('KasapPay')} style={styles.menuItem}>
          <span>💳 KasapPay</span>
          <span>&gt;</span>
        </div>
        <div onClick={() => handleMenuClick('Bantuan')} style={styles.menuItem}>
          <span>💬 Pusat Bantuan</span>
          <span>&gt;</span>
        </div>
      </div>

      {/* Tombol Logout */}
      <div style={styles.logoutSection}>
        <button onClick={handleLogout} style={styles.btnLogout}>
          Keluar dari Akun
        </button>
      </div>
    </div>
  );
};

// Styling Objek dengan Struktur Mobile-First ala Kasap.id
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    paddingBottom: '80px', // Memberikan ruang untuk navbar bawah aplikasi Anda
  },
  header: {
    background: 'linear-gradient(to right, #00a86b, #00c853)', // Gradasi hijau sesuai UI Kasap.id
    padding: '20px 15px',
    color: '#fff',
    textAlign: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid #fff',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ddd',
  },
  profileName: {
    marginTop: '10px',
    fontSize: '1.1rem',
    color: '#333',
  },
  contentCard: {
    backgroundColor: '#fff',
    margin: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '12px',
  },
  label: {
    display: 'block',
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '4px',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '0.95rem',
  },
  textarea: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '0.95rem',
    resize: 'none',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  btnSave: {
    flex: 2,
    backgroundColor: '#00a86b',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  btnCancel: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    color: '#333',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  infoItem: {
    borderBottom: '1px solid #eee',
    paddingBottom: '8px',
  },
  infoLabel: {
    display: 'block',
    fontSize: '0.8rem',
    color: '#888',
  },
  infoValue: {
    fontSize: '0.95rem',
    color: '#333',
    fontWeight: '500',
  },
  btnEdit: {
    backgroundColor: 'transparent',
    color: '#00a86b',
    border: '1px solid #00a86b',
    padding: '8px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  menuSection: {
    backgroundColor: '#fff',
    margin: '15px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    fontSize: '0.95rem',
    color: '#333',
  },
  logoutSection: {
    margin: '20px 15px',
  },
  btnLogout: {
    width: '100%',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  }
};

export default AkunSaya;
