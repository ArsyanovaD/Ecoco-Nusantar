const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (css, js, gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Parser buat form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Lokasi penyimpanan pesan (file JSON sederhana, belum pakai database)
const DATA_FILE = path.join(__dirname, 'data', 'messages.json');

function readMessages() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    return [];
  }
}

function saveMessage(msg) {
  const messages = readMessages();
  messages.push(msg);
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

// Data profil perusahaan, dipakai di beberapa halaman
const company = {
  name: 'Ecoco Nusantara',
  tagline: 'Dari Sabut Kelapa Nusantara, untuk Bumi yang Lebih Hijau',
  year: new Date().getFullYear()
};

// ===== ROUTES =====

app.get('/', (req, res) => {
  res.render('index', { company, page: 'home' });
});

app.get('/tentang-kami', (req, res) => {
  res.render('about', { company, page: 'about' });
});

app.get('/produk', (req, res) => {
  res.render('products', { company, page: 'products' });
});

app.get('/kontak', (req, res) => {
  res.render('contact', { company, page: 'contact', sent: false });
});

app.post('/kontak', (req, res) => {
  const { nama, email, pesan } = req.body;

  if (!nama || !email || !pesan) {
    return res.render('contact', {
      company,
      page: 'contact',
      sent: false,
      error: 'Mohon lengkapi semua kolom ya.'
    });
  }

  saveMessage({
    nama,
    email,
    pesan,
    waktu: new Date().toISOString()
  });

  res.render('contact', { company, page: 'contact', sent: true });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { company });
});

app.listen(PORT, () => {
  console.log(`Ecoco Nusantara jalan di http://localhost:${PORT}`);
});
