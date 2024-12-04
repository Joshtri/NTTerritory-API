# Wilayah NTT API

API ini adalah layanan statis yang menyajikan data wilayah di Provinsi Nusa Tenggara Timur (NTT), termasuk daftar kabupaten/kota, kecamatan, dan kelurahan. API ini dihosting menggunakan **GitHub Pages** untuk memudahkan akses dan distribusi data.

---

## 📁 **Struktur Data**

File `wilayahNTT.json` memiliki struktur berikut:

```json
{
  "provinsi": [
    {
      "id": 1,
      "nama": "Nusa Tenggara Timur",
      "kabupaten_kota": [
        {
          "id": 101,
          "nama": "Kota Kupang",
          "kecamatan": [
            {
              "id": 10101,
              "nama": "Kecamatan Oebobo",
              "kelurahan": [
                { "id": 1010101, "nama": "Kelurahan Fatululi" },
                { "id": 1010102, "nama": "Kelurahan Oetete" },
                { "id": 1010103, "nama": "Kelurahan Tuak Daun Merah" }
              ]
            }
          ]
        }
      ]
    }
  ]
}
