export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-600 border-opacity-50 border-t-gray-800"></div>
    </div>
  );
}
