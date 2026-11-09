# STK Organization Chart

Bagan struktur organisasi PT STK. Halaman statis (`index.html`) untuk GitHub Pages.

Bagan dibaca dari Supabase (`org_chart_state`, id `stk`) supaya perangkat mana pun melihat versi yang sama. `localStorage` tetap menjadi salinan offline. Menyimpan ke cloud membutuhkan masuk dengan akun STK HR yang aktif. Tanpa masuk, bagan tetap bisa dilihat dan diedit di perangkat itu, tetapi perubahan tidak ikut ke perangkat lain.

## Mencoba sinkronisasi

1. Buka halaman. Status harus menjadi "Melihat bagan cloud · masuk untuk menyimpan" (atau "Tersinkron" jika sudah masuk).
2. Masuk dengan email dan kata sandi akun STK yang aktif.
3. Ubah nama, posisi, atau geser kotak. Tunggu status "Tersinkron".
4. Muat ulang halaman, atau buka situs di browser lain. Bagan yang sama harus muncul.
5. Kalau dua perangkat sama-sama masuk, simpan di satu perangkat dan biarkan yang lain terbuka. Bagan di perangkat kedua ikut berubah.
