// Home.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 text-gray-800 text-center space-y-6 transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-500">CPRG 306: Web Development 2</h1>
        <p className="text-xl font-light">Assignments</p>
        <div className="space-y-4">
          <Link href="/week-2" className="block py-2 px-6 bg-gradient-to-br from-teal-400 to-emerald-500 text-white font-bold text-lg leading-tight uppercase rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            Click HERE for Week 2
          </Link>
          <Link href="/week-3" className="block py-2 px-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white font-bold text-lg leading-tight uppercase rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            Click HERE for Week 3
          </Link>
          <Link href="/week-4" className="block py-2 px-6 bg-gradient-to-br from-pink-500 to-rose-500 text-white font-bold text-lg leading-tight uppercase rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            Click HERE for Week 4
          </Link>
        </div>
      </div>
    </main>
  );
}