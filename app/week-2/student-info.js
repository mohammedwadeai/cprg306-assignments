import Link from "next/link";

export default function StudentInfo() {
  // Utilizing CSS classes for a more vibrant and interactive design
  return (
    <div className="relative transform transition-all duration-500 hover:scale-105 cursor-pointer p-8 rounded-2xl shadow-2xl bg-gradient-to-bl from-green-400 to-blue-600 via-purple-500 text-white overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Student Information</h2>
      <p className="text-xl mb-4 font-medium">Mohammed Al-wadeai</p>
      <p className="text-lg">
        My GitHub is: <Link className="underline text-red-600 font-semibold hover:text-purple-300" href="https://github.com/mohammedwadeai">mohammedwadeai</Link>
      </p>
      <div><Link className="mt-5 ml-12 relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            Back to Home
            <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
          
        </Link>
        </div>
    </div>
  );
}
