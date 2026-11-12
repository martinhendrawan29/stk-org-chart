# STK Organization Chart

Bagan struktur organisasi PT STK. Halaman statis (`index.html`) untuk GitHub Pages.

Bagan dibaca dari Supabase (`org_chart_state`, id `stk`) setelah masuk. Tanpa sesi, halaman hanya menampilkan gerbang masuk. Akun yang masuk dapat melihat, mencari, menggeser, memperbesar, mengunduh PNG, dan mengubah bagan. Perubahan tersimpan ke cloud. Tidak ada akun khusus yang hanya boleh melihat.

## Mencoba sinkronisasi

1. Buka halaman tanpa sesi. Gerbang masuk menutup seluruh layar. Bagan tidak dimuat.
2. Masuk dengan username dan kata sandi akun STK yang aktif. Bagan cloud muncul, tombol ubah tampil, tombol Semua menyesuaikan tampilan, dan baris "Terakhir diperbarui ..." mengikuti waktu cloud.
3. Ubah nama, posisi, atau geser kotak. Tunggu status "Tersinkron".
4. Muat ulang halaman. Sesi yang masih berlaku menampilkan bagan yang sama.
5. Keluar. Bagan dan salinan di perangkat hilang, gerbang masuk kembali.
6. Kalau dua perangkat sama-sama masuk, simpan di satu perangkat dan biarkan yang lain terbuka. Bagan di perangkat kedua ikut berubah.
