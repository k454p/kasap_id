import { useState } from 'react'
import akunsaya from './akunsaya.jsx'
import alamat from './alamat.jsx'
import bankewallet from './bankewallet.jsx'
import belumdibayar from './belumdibayar.jsx'
import beranda from './beranda.jsx'
import berinilai from './berinilai.jsx'
import chat from './chat.jsx'
import chekout from './chekout.jsx'
import dikemas from './dikemas.jsx'
import dikirim from './dikirim.jsx'
import email from './email.jsx'
import hubungics from './hubungics.jsx'
import keranjang from './keranjang.jsx'
import laporan from './laporan.jsx'
import live from './live.jsx'
import masukkeranjang from './masukkeranjang.jsx'
import nama from './nama.jsx'
import nomerhp from './nomerhp.jsx'
import pembeli from './pembeli.jsx'
import penjual from './penjual.jsx'
import produk from './produk.jsx'
import selesai from './selesai.jsx'

export default function App(){
  const [page,setPage]=useState('beranda')
  if(page==='akunsaya') return <akunsaya />
  if(page==='alamat') return <alamat />
  if(page==='bankewallet') return <bankewallet />
  if(page==='belumdibayar') return <belumdibayar />
  if(page==='beranda') return <beranda />
  if(page==='berinilai') return <berinilai />
  if(page==='chat') return <chat />
  if(page==='chekout') return <chekout />
  if(page==='dikemas') return <dikemas />
  if(page==='dikirim') return <dikirim />
  if(page==='email') return <email />
  if(page==='hubungics') return <hubungics />
  if(page==='keranjang') return <keranjang />
  if(page==='laporan') return <laporan />
  if(page==='live') return <live />
  if(page==='masukkeranjang') return <masukkeranjang />
  if(page==='nama') return <nama />
  if(page==='nomerhp') return <nomerhp />
  if(page==='pembeli') return <pembeli />
  if(page==='penjual') return <penjual />
  if(page==='produk') return <produk />
  if(page==='selesai') return <selesai />
  return (
    <div style={{padding:20}}>
      <h1>KASAP_ID - BUILD OK</h1>
      <p>Pilih halaman:</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
        {["akunsaya","alamat","bankewallet","belumdibayar","beranda","berinilai","chat","chekout","dikemas","dikirim","email","hubungics","keranjang","laporan","live","masukkeranjang","nama","nomerhp","pembeli","penjual","produk","selesai"].map(p=><button key={p} onClick={()=>setPage(p)} style={{padding:'6px 10px'}}>{p}</button>)}
      </div>
    </div>
  )
}
