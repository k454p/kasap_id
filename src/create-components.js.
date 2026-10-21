const fs = require('fs');
const path = require('path');

const components = [
    'akunsaya',
    'alamat',
    'bankewallet',
    'belumdibayar',
    'beranda',
    'berinilai',
    'chat',
    'chekout',
    'dikemas',
    'dikirim',
    'email',
    'hubungics',
    'keranjang',
    'laporan',
    'live',
    'masukkeranjang',
    'tarikdana',
    'produk'
];

const srcDir = path.join(__dirname, 'src');

if (!fs.existsSync(srcDir)){
    fs.mkdirSync(srcDir, { recursive: true });
}

components.forEach(name => {
    const filePath = path.join(srcDir, `${name}.jsx`);
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    const templateContent = `import React from 'react';

export default function ${formattedName}() {
    return (
        <div>
            <h1>Halaman ${formattedName}</h1>
        </div>
    );
}
`;

    // Timpa semua file agar isinya lengkap otomatis
    fs.writeFileSync(filePath, templateContent, 'utf8');
    console.log(`Berhasil mengisi: ${name}.jsx`);
});

console.log('Semua komponen selesai diperbarui!');