export default function Step5Checkout({ formData }) {
  return (
    <div className="space-y-2 text-sm">
      <div><strong>State:</strong> {formData.state}</div>
      <div><strong>Location:</strong> {formData.location}</div>
      <div><strong>Dates:</strong> {formData.startDate} to {formData.endDate}</div>
      <div><strong>Stay:</strong> {formData.stay?.title} - ₹{formData.stay?.price}/night</div>
    </div>
  );
}