import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg shadow-xl rounded-xl p-8 text-gray-800 text-center space-y-6 transition-all duration-500 hover:scale-[1.03] hover:rotate-[2deg]">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 animate-pulse">
          CPRG 306: Web Development 2
        </h1>
        <p className="text-xl font-medium mt-2 ">Discover my Assignments</p>
        <div className="space-y-4 mt-6">
          {["week-1", "week-2", "week-3", "week-4", "week-5", "week-5grouping", "week-6", "week-7", "week-8", "week-10" ].map((week, index) => (
            <Link className="block py-3 px-6 bg-gradient-to-br from-blue-500 to-green-400 text-white font-bold text-lg leading-tight uppercase rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105" key={index} href={`/${week}`}>
              
                Click HERE for {week.replace('-', ' ').toUpperCase()}
              
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
