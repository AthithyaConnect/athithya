"use client";
import { RangeCalendar } from "@heroui/react";
import { today, getLocalTimeZone, toDate } from "@internationalized/date";
import { useState } from "react";

export default function Step3Dates({ formData, setFormData }) {
  const [range, setRange] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 }),
  });
const formatDate = (d) => {
  if (!d) return "";
  const date = d.toDate(getLocalTimeZone());
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const handleChange = (newRange) => {
  setRange(newRange);
  setFormData({
    ...formData,
    startDate: formatDate(newRange.start),
    endDate: formatDate(newRange.end),
    startDateRaw: newRange.start,
    endDateRaw: newRange.end,
  });
};
  return (
    <div className="flex flex-col gap-4">
      <RangeCalendar
        calendarWidth={300}
        className="border-2 border-white shadow-none"
        aria-label="Date (Uncontrolled)"
        minValue={today(getLocalTimeZone())}
        showMonthAndYearPickers
        defaultValue={range}
        color="primary"
        onChange={handleChange}
      />

      <div className="mt-2 text-sm text-gray-700">
        {range.start && range.end ? (
          <>
            <div>
              <strong>Start:</strong> {formatDate(range.start)}
            </div>
            <div>
              <strong>End:</strong> {formatDate(range.end)}
            </div>
          </>
        ) : (
          <div>Select a date range</div>
        )}
      </div>
    </div>
  );
}
