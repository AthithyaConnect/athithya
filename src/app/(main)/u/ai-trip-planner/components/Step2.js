import { indianStates } from "@/constants";

export default function Step2Locations({ formData, setFormData }) {
const locations = indianStates[formData.state] || [];
  return (
    <div className="grid grid-cols-2 gap-3">
      {locations.map((loc) => (
        <div
          key={loc}
          onClick={() => setFormData({ ...formData, location: loc })}
          className={`p-4 border rounded-2xl cursor-pointer ${
             formData.location === loc ? "bg-blue-100 border-primary border" : "bg-white border-none"
          }`}
        >
          {loc}
        </div>
      ))}
    </div>
  );
}