export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600">Loading your joke...</p>
    </div>
  );
}
