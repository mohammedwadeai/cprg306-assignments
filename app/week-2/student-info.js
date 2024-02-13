import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
      <p className="text-lg mb-2">Mohammed Al-wadeai</p>
      <p className="text-lg">
        My GitHub is: <Link className="text-blue-500 hover:text-blue-600 font-bold" href="https://github.com/mohammedwadeai"> 
            mohammedwadeai
        </Link>
      </p>
    </div>
  );
}
