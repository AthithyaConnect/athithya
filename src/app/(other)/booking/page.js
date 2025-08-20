"use client";

import { Calendar, Users, CreditCard, Money, House } from "phosphor-react";
import Image from "next/image";
import { useState } from "react";
import { hosts } from "@/constants/tempData";
import { Button } from "@heroui/react";

export default function BookingPage() {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("2025-08-01 to 2025-08-05");

  const pricePerNight = 2000;
  const nights = 4;
  const platformFee = 500;
  const tax = 300;
  const total = pricePerNight * nights + platformFee + tax;

  return (
    <div className="flex flex-col min-h-screen gap-2 bg-neutral-100">
      {/* Host Card */}
      <div className="flex gap-4 p-4 bg-white ">
        <Image
          src={hosts[0].imageUrl}
          alt="Room Image"
          width={100}
          height={100}
          className="object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2 font-semibold text-black text-md">
            {hosts[0].title}
          </div>
          <div className="text-sm text-neutral-600">
            Hosted by {hosts[0].hostedBy}
          </div>
          <div className="text-sm text-neutral-500">
            Location: {hosts[0].address}
          </div>
        </div>
      </div>

      {/* Date & Guests */}
      <div className="flex flex-col gap-4 p-4 space-y-3 bg-white">
        <p className="text-lg font-semibold">Trip Details</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <Calendar size={20} /> Date
          </div>
          <button
            onClick={() => setDate("2025-08-10 to 2025-08-15")}
            className="text-sm text-black underline"
          >
            {date}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <Users size={20} /> Guests
          </div>
          <button
            onClick={() => setGuests((prev) => (prev < 4 ? prev + 1 : 1))}
            className="text-sm text-black underline"
          >
            {guests} Guest{guests > 1 ? "s" : ""}
          </button>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="p-4 space-y-3 text-sm bg-white ">
        <p className="text-lg font-semibold">Pricing Breakdown</p>

        <div className="flex justify-between text-neutral-700">
          <div>
            ₹{pricePerNight} x {nights} nights
          </div>
          <div>₹{pricePerNight * nights}</div>
        </div>
        <div className="flex justify-between text-neutral-700">
          <div>Platform Fee</div>
          <div>₹{platformFee}</div>
        </div>
        <div className="flex justify-between text-neutral-700">
          <div>Taxes</div>
          <div>₹{tax}</div>
        </div>
        <hr className="my-2 border-neutral-200" />
        <div className="flex justify-between font-semibold text-black">
          <div>Total</div>
          <div>₹{total}</div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="fixed bottom-0 w-full max-w-sm p-4 bg-white shadow-2xl ">
        <Button
          onPress={() => alert("Booking Confirmed!")}
          radius="full"
          color="primary"
          className="w-full"
        >
          Proceed to pay 8800
        </Button>
      </div>
    </div>
  );
}
