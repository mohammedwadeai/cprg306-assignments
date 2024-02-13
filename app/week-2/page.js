import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping List</h1>
      <StudentInfo/>
    </main>
  );
}
