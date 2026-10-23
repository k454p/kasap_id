import React, { useState } from 'react';
import Beranda from './beranda';
import './App.css';

function App() {
  const [menu, setMenu] = useState('beranda');

  const navigate = (halamanBaru) => {
    setMenu(halamanBaru);
  };

  const goBack = () => {
    setMenu('beranda');
  };

  return (
    <Beranda menu={menu} navigate={navigate} goBack={goBack} />
  );
}

export default App;
