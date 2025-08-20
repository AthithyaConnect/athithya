export default function Step6Map({ formData }) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <div className="text-lg font-semibold">Your Trip Map</div>
      <div className="flex items-center justify-center w-full h-64 bg-gray-200">
        <span className="text-gray-600">
          Map for {formData.location} (placeholder)
        </span>
      </div>
    </div>
  );
}
