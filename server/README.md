# Ecoco Nusantara — Website Company Profile

Website company profile dibangun dengan **Node.js + Express + EJS**. Belum pakai database — pesan dari form kontak disimpan sederhana di `data/messages.json`.

## Cara Menjalankan

1. Pastikan Node.js sudah terinstal (versi 18 ke atas disarankan).
2. Install dependency:
   ```
   npm install
   ```
3. Jalankan server:
   ```
   npm start
   ```
4. Buka browser ke `http://localhost:3000`

Untuk mode development (auto-restart saat file berubah):
```
npm run dev
```

## Struktur Halaman

| Route             | Halaman        |
|--------------------|----------------|
| `/`                | Beranda        |
| `/tentang-kami`    | Tentang Kami   |
| `/produk`          | Produk         |
| `/kontak`          | Kontak (form)  |

## Struktur Folder

```
ecoco-nusantara/
├── server.js              # Entry point Express
├── views/                 # Template EJS
│   ├── partials/           # header & footer
│   ├── index.ejs
│   ├── about.ejs
│   ├── products.ejs
│   ├── contact.ejs
│   └── 404.ejs
├── public/
│   ├── css/style.css
│   └── js/
├── data/messages.json     # Penyimpanan pesan form kontak (sementara, tanpa DB)
└── package.json
```

## Ganti Konten

- Nama & tagline perusahaan: edit objek `company` di `server.js`.
- Teks & produk: edit langsung di file `.ejs` terkait di folder `views/`.
- Warna & font: edit variabel di bagian `:root` pada `public/css/style.css`.

## Lanjutan (opsional)

Kalau nanti mau simpan pesan kontak lebih rapi atau butuh fitur admin, tinggal ganti bagian `readMessages` / `saveMessage` di `server.js` dengan database (MongoDB/PostgreSQL) — struktur route lain tidak perlu diubah.
