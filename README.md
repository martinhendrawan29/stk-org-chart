# STK Organization Chart

Bagan struktur organisasi PT STK. Halaman statis (`index.html`) untuk GitHub Pages.

Bagan dibaca dari Supabase (`org_chart_state`, id `stk`) supaya perangkat mana pun melihat versi resmi yang sama. Tanpa masuk, pengunjung hanya dapat melihat, mencari, menggeser, memperbesar, dan mengunduh PNG. Salinan di perangkat dipakai untuk melihat saat offline, dan tidak bisa diubah sebelum masuk. Mengubah bagan membutuhkan masuk dengan akun STK HR yang aktif, dan perubahan itu tersimpan ke cloud.

## Mencoba sinkronisasi

1. Buka halaman. Tombol ubah (tambah, undo, geser kotak) tidak muncul. Status menjadi "Melihat bagan resmi · masuk untuk mengubah", dengan baris "Terakhir diperbarui ..." setelah cloud termuat. Seluruh bagan terlihat di layar; tombol Semua mengulang tampilan itu.
2. Masuk dengan username dan kata sandi akun STK yang aktif. Tombol ubah muncul.
3. Ubah nama, posisi, atau geser kotak. Tunggu status "Tersinkron".
4. Muat ulang halaman, atau buka situs di browser lain. Bagan yang sama harus muncul.
5. Keluar. Bagan kembali ke versi cloud, dan tombol ubah hilang lagi.
6. Kalau dua perangkat sama-sama masuk, simpan di satu perangkat dan biarkan yang lain terbuka. Bagan di perangkat kedua ikut berubah.
