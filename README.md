# 🌳 Interactive Family Tree (Silsilah Keluarga 2.0)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React Flow](https://img.shields.io/badge/React_Flow-UI-FF0072?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Neo4j](https://img.shields.io/badge/Neo4j-Graph_DB-018bff?style=for-the-badge&logo=neo4j)

**Interactive Family Tree** adalah sebuah aplikasi web modern untuk memvisualisasikan silsilah keluarga. Tidak seperti diagram pohon statis tradisional, proyek ini menggunakan pendekatan *infinite canvas* (seperti Figma/Miro) dan *Graph Data Structure* untuk menangani relasi keluarga yang kompleks dengan antarmuka yang dinamis dan interaktif.

🔗 **[Lihat Live Demo di Sini] (Masukkan Link Vercel Kamu Nanti)**

---

## ✨ Fitur Utama

* **Infinite Interactive Canvas:** *Zoom in, zoom out*, dan *pan* (geser) ke seluruh kanvas keluarga secara bebas tanpa batasan layar.
* **Custom Profile Nodes:** Visualisasi anggota keluarga dengan *Card* khusus yang menampilkan foto, peran generasi, dan status.
* **Smart Relationship Edges:** Garis penghubung animasi yang secara otomatis menyesuaikan rute (*routing*) antara orang tua, anak, dan pasangan.
* **Graph-Ready Architecture:** Dibangun dengan pola pikir *Graph Database* (Node & Edge) agar siap diukur (*scale*) untuk ribuan data leluhur.
* **Responsive & Fast:** Di-render menggunakan Next.js App Router untuk performa optimal.

---

## 🛠 Tech Stack

Proyek ini dibangun menggunakan teknologi modern yang berfokus pada performa dan skalabilitas:

* **Frontend:** Next.js (App Router), React, TypeScript/JavaScript
* **Visualization:** React Flow (`reactflow`)
* **Styling:** Tailwind CSS
* **Backend:** Next.js API Routes / Server Actions
* **Database:** Neo4j AuraDB (Graph Database) / Supabase *(Pilih salah satu nanti saat sudah fix)*
* **Deployment:** Vercel

---

## 🚀 Cara Menjalankan di Komputer Lokal (Local Setup)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal kamu:

**1. Clone Repositori**
```bash
git clone [https://github.com/USERNAME_KAMU/interactive-family-tree.git](https://github.com/USERNAME_KAMU/interactive-family-tree.git)
cd interactive-family-tree
