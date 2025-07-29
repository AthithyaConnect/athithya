
import { indianStates } from "@/constants"

export default function Step1State({ formData, setFormData }) {
const states = Object.keys(indianStates);
  return (
    <div className="grid grid-cols-2 gap-3">
      {states.map((state) => (
        <div
          key={state}
          onClick={() => setFormData({ ...formData, state })}
          className={`p-4 border rounded-2xl  cursor-pointer ${
            formData.state === state ? "bg-blue-100 border-primary border" : "bg-white border-none"
          }`}
        >
          {state}
        </div>
      ))}
    </div>
  );
}
