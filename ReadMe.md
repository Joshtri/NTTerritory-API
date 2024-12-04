# Wilayah NTT API

API ini adalah layanan statis yang menyajikan data wilayah di Provinsi Nusa Tenggara Timur (NTT), termasuk daftar kabupaten/kota, kecamatan, dan kelurahan. API ini dihosting menggunakan **GitHub Pages** untuk memudahkan akses dan distribusi data.

API ini dapat diakses di: [https://nt-territory-api.vercel.app/](https://nt-territory-api.vercel.app/)

---

## 📁 **Struktur Data**

File `wilayahNTT.json` memiliki struktur data sebagai berikut:

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
```

### 🔍 **Penjelasan Struktur Data**

- **Provinsi**: Merupakan objek utama yang mewakili wilayah Provinsi Nusa Tenggara Timur.
  - **kabupaten_kota**: Berisi daftar kabupaten dan kota yang berada di wilayah provinsi tersebut.
    - **kecamatan**: Mencakup daftar kecamatan yang ada di setiap kabupaten/kota.
      - **kelurahan**: Menyajikan daftar kelurahan/desa yang berada di setiap kecamatan.

Struktur data ini memungkinkan pengguna untuk mengakses data wilayah mulai dari tingkat provinsi hingga ke tingkat kelurahan secara hierarkis.

### ❓ **Mengapa Khusus Wilayah NTT?**

API ini difokuskan pada wilayah Nusa Tenggara Timur (NTT) karena adanya kebutuhan khusus untuk menyediakan data wilayah yang detail dan terstruktur di provinsi ini. NTT merupakan salah satu provinsi di Indonesia dengan banyak kabupaten/kota, kecamatan, dan kelurahan yang memiliki karakteristik unik. Penyediaan data ini bertujuan untuk membantu pengguna yang memerlukan informasi spesifik terkait wilayah NTT, baik untuk keperluan penelitian, pengembangan aplikasi, ataupun layanan publik.

Dengan API ini, pengguna dapat dengan mudah mengakses informasi administratif yang valid dan terorganisir secara hierarkis, sehingga memudahkan berbagai keperluan seperti pemetaan wilayah, analisis data, dan pengembangan solusi digital untuk masyarakat di wilayah NTT.

