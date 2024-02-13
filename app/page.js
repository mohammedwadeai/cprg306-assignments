import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-6 text-gray-800 text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">CPRG 306: Web Development 2</h1>
        <p className="text-xl">Assignments</p>
        <div className="space-y-3">
          <Link className="inline-block mr-2 px-6 py-2 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="/week-2">
            Click HERE for Week2
          </Link>
          <Link className="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="/week-3">
            Click HERE for Week3
          </Link>
          <Link className="inline-block ml-2 px-6 py-2 border-2 border-blue-500 text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="/week-4">
            Click HERE for Week4
          </Link>
        </div>
      </div>
    </main>
  );
}
