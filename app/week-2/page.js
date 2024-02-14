// page.js
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen bg-fixed bg-gradient-to-br from-green-400 to-blue-600 flex flex-col items-center justify-center p-4">
      <div className="animate-pulse mb-8 text-white text-5xl font-bold text-center">Shopping List</div>
      <StudentInfo />
      
    </main>
  );
}
