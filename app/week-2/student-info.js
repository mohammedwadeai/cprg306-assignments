// student-info.js
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="transform transition duration-500 hover:scale-105 cursor-pointer p-6 rounded-xl shadow-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white">
      <h2 className="text-3xl font-bold mb-4">Student Information</h2>
      <p className="text-xl mb-2">Mohammed Al-wadeai</p>
      <p className="text-xl">
        My GitHub is: <Link href="https://github.com/mohammedwadeai" className="underline font-bold hover:text-blue-300">mohammedwadeai</Link>
      </p>
    </div>
  );
}
