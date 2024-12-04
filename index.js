import express from 'express';
import cors from 'cors';
import wilayahNTT from './wilayahNTT.json' assert { type: 'json' }; // Menggunakan `assert` untuk JSON

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint untuk mendapatkan semua provinsi
app.get('/api/provinsi', (req, res) => {
  const provinsi = wilayahNTT.provinsi.map((prov) => ({ id: prov.id, nama: prov.nama }));
  res.json(provinsi);
});

// Endpoint untuk mendapatkan kabupaten/kota berdasarkan ID provinsi
app.get('/api/kabupaten/:provinsiId', (req, res) => {
  const { provinsiId } = req.params;
  const provinsi = wilayahNTT.provinsi.find((prov) => prov.id === parseInt(provinsiId));
  if (!provinsi) {
    return res.status(404).json({ message: 'Provinsi tidak ditemukan' });
  }
  res.json(provinsi.kabupaten_kota.map((kab) => ({ id: kab.id, nama: kab.nama })));
});

// Endpoint untuk mendapatkan kecamatan berdasarkan ID kabupaten/kota
app.get('/api/kecamatan/:kabupatenId', (req, res) => {
  const { kabupatenId } = req.params;
  let kecamatan = [];
  wilayahNTT.provinsi.forEach((prov) => {
    prov.kabupaten_kota.forEach((kab) => {
      if (kab.id === parseInt(kabupatenId)) {
        kecamatan = kab.kecamatan;
      }
    });
  });
  if (kecamatan.length === 0) {
    return res.status(404).json({ message: 'Kabupaten/Kota tidak ditemukan' });
  }
  res.json(kecamatan.map((kec) => ({ id: kec.id, nama: kec.nama })));
});

// Endpoint untuk mendapatkan kelurahan berdasarkan ID kecamatan
app.get('/api/kelurahan/:kecamatanId', (req, res) => {
  const { kecamatanId } = req.params;
  let kelurahan = [];
  wilayahNTT.provinsi.forEach((prov) => {
    prov.kabupaten_kota.forEach((kab) => {
      kab.kecamatan.forEach((kec) => {
        if (kec.id === parseInt(kecamatanId)) {
          kelurahan = kec.kelurahan;
        }
      });
    });
  });
  if (kelurahan.length === 0) {
    return res.status(404).json({ message: 'Kecamatan tidak ditemukan' });
  }
  res.json(kelurahan.map((kel) => ({ id: kel.id, nama: kel.nama })));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
