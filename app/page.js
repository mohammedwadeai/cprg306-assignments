import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="space-y-4">
          <p>
            <Link className="text-lg text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="/week-2">
              Click HERE for my info
            </Link>
          </p>
          <p>
            <Link className="text-lg text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="/week-3">
              Click HERE for Shopping list
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
