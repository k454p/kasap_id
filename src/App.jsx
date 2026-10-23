import React, { useState } from 'react';
import Beranda from './beranda';
import './App.css';

function App() {
  const [menu, setMenu] = useState('beranda');

  // Hapus baris 8-10 lama, ganti dengan fungsi navigate baru ini:
  const navigate = (halamanBaru, opsi = {}) => {
    setMenu(halamanBaru);
    if (opsi.state) {
      window.history.replaceState({ usr: opsi.state }, '');
    }
  };

  const goBack = () => {
    setMenu('beranda');
  };

  return (
    <Beranda menu={menu} navigate={navigate} goBack={goBack} />
  );
}

export default App;
