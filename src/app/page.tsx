import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
        Selamat Datang di Portal Keluarga
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        Tempat kita merawat ingatan, mengenal lebih dekat sejarah leluhur, dan menyambung tali silaturahmi antar generasi.
      </p>
      <div className="flex gap-4">
        <Link href="/silsilah" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">
          Lihat Silsilah
        </Link>
        <Link href="/tentang" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg border border-blue-100 hover:bg-gray-50 transition">
          Sejarah Keluarga
        </Link>
      </div>
    </main>
  );
}