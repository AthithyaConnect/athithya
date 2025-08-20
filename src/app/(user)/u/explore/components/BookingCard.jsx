"use client";

import { useState } from "react";
import { differenceInDays } from "date-fns";

export default function BookingCard() {
  const [persons, setPersons] = useState(1);
  const [dates, setDates] = useState({
    checkIn: null,
    checkOut: null,
  });
  const [pricePerNight] = useState(1200); // per night
  
  // Calculate the number of nights
  const nights =
    dates.checkIn && dates.checkOut
      ? differenceInDays(new Date(dates.checkOut), new Date(dates.checkIn))
      : 0;

  // Calculate the total price based on nights and number of persons
  const totalPrice = nights > 0 ? nights * pricePerNight * persons : 0;

  // Handle person count
  const handleAddPerson = () => setPersons(prev => prev + 1);
  const handleRemovePerson = () => setPersons(prev => Math.max(1, prev - 1));

  return (
    <div className="flex flex-col max-w-sm gap-6 p-6 mx-auto my-12 font-sans bg-white shadow-xl top-4 rounded-2xl">
      
      {/* Persons section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-gray-800">
            Number of Guests
          </p>
          <p className="text-sm text-gray-500">
            Who's joining you?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRemovePerson}
            disabled={persons <= 1}
            className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path></svg>
          </button>
          <p className="w-6 text-lg font-medium text-center">{persons}</p>
          <button
            onClick={handleAddPerson}
            className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
          </button>
        </div>
      </div>

      {/* Dates section */}
      <div className="flex items-center justify-between gap-0 p-0">
        <div className="relative w-1/2">
          <label htmlFor="check-in" className="absolute text-xs font-medium text-gray-500 top-2 left-4">Check In</label>
          <input
            id="check-in"
            type="date"
            onChange={(e) =>
              setDates((prev) => ({ ...prev, checkIn: e.target.value }))
            }
            className="w-full h-16 p-4 pt-6 text-sm bg-gray-100 appearance-none rounded-xl"
          />
        </div>
        <div className="relative w-1/2">
        <label htmlFor="check-out" className="absolute text-xs font-medium text-gray-500 top-2 left-4">Check Out</label>
          <input
            id="check-out"
            type="date"
            onChange={(e) =>
              setDates((prev) => ({ ...prev, checkOut: e.target.value }))
            }
            className="w-full h-16 p-4 pt-6 text-sm bg-gray-100 appearance-none rounded-xl"
          />
        </div>
      </div>

      {/* Price & Continue button */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-800">
            ₹{totalPrice.toLocaleString("en-IN")}{" "}
          </p>
          <p className="text-sm text-gray-500">
            {nights || 0} nights • {persons} person{persons > 1 ? "s" : ""}
          </p>
          <p className="text-xs text-gray-500">
            ₹{pricePerNight}/night per person
          </p>
        </div>
        <button className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
          Continue
        </button>
      </div>
    </div>
  );
}
