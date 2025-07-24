"use client";
import { hosts } from "@/constants";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
// pages/booking.tsx
import {
  ArrowLeft,
  UploadSimple,
  DotsThreeVertical,
  MapPin,
  Star,
  Users,
  Clock,
  Plus,
  Bathtub,
  Bed,
} from "phosphor-react";

export default function BookingPage() {
  const router = useRouter();

  return (

    <div className="w-full max-w-sm min-h-screen pb-20 bg-neutral-100">
      {/* Top Image */}
      <div className="relative h-[300px] w-full">
        <img
          src={hosts[0].imageUrl}
          alt="Bromo"
          className="object-cover w-full h-full "
        />
        {/* Top Buttons */}
        <div className="absolute top-4 left-4">
          <button onClick={() => router.back()} className="p-3 text-white rounded-full shadow bg-black/50 backdrop-blur-sm">
            <ArrowLeft color="white" />
          </button>
        </div>
        <div className="absolute flex space-x-2 top-4 right-4">
          <button className="p-3 text-white rounded-full shadow bg-black/50 backdrop-blur-sm">
            <UploadSimple color="white" />
          </button>
          <button className="p-3 text-white rounded-full shadow bg-black/50 backdrop-blur-sm">
            <DotsThreeVertical color="white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-2 p-4 bg-white">
          {/* Title + Price */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              3BHK Villa with Mountain View
            </h1>
           </div>

          {/* Location */}
          <div className="flex items-center mt-1 space-x-2 text-sm text-neutral-500">
            <MapPin size={14} />
            <span>123, Rajpur Road, Near IT Park</span>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-1 space-x-2">
            <Star
              size={16}
              weight="fill"
              className="text-yellow-400"
              color="green"
            />
            <span className="text-sm text-neutral-700">4.9/5</span>
            <span className="ml-2 text-sm font-medium text-neutral-700">
              137 Reviews
            </span>
          </div>
        </div>


        <div className="flex gap-2 px-4 py-3 bg-white ">
          <div className="flex items-center space-x-2">
            <Users size={18} className="text-neutral-600" />
            <span className="text-sm text-neutral-700">4 Guests</span>
            <span className="text-sm text-neutral-700">·</span>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <Bed size={18} className="text-neutral-600" />
            <span className="text-sm text-neutral-700">2 Beds</span>
            <span className="text-sm text-neutral-700">·</span>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <Bathtub size={18} className="text-neutral-600" />
            <span className="text-sm text-neutral-700">2 Bathrooms</span>
          </div>
        </div>
        {/* Details Box
        <div className="flex justify-between px-4 py-3 bg-white ">
          <div className="flex items-center space-x-2">
            <Users size={18} className="text-neutral-600" />
            <span className="text-sm text-neutral-700">20+ Going</span>
          </div>
          <div className="flex items-center space-x-2">
           <Button startContent={<Plus size={16}/>} radius='full' variant='bordered' className='border-1'  >Send Invite</Button>
          </div>
        </div> */}
        {/* Description */}
        <div className="p-4 bg-white">
          <h2 className="mb-1 text-base font-semibold">Description</h2>
          <p className="text-sm text-neutral-600">
            Bromo Tengger Semeru National Park, located in East Java, Indonesia,
            features active volcanoes, rugged landscapes, and the iconic Mount
            Bromo. Its a popular destination for hiking, sunrise views, and
            stunning volcanic scenery.
          </p>
        </div>
        {/* Location Link */}
        <div className="flex flex-col gap-2 p-4 bg-white ">
        <div className="flex justify-between w-full">
            <h2 className="text-base font-semibold">Location</h2>
          <a href="#" className="text-sm font-medium text-neutral-700">
            Open on Maps →
          </a>
        </div>
        <div className="w-full">
            <iframe className="w-full rounded-2xl border-1 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110933.13520793748!2d77.96455110995264!3d30.31577428063274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d07c0300a5%3A0xd3f30f743577e6e0!2sDecathlon%20Sports%20-%20Dehradun!5e1!3m2!1sen!2sin!4v1752658963253!5m2!1sen!2sin" style={{border:2, borderColor:"white"}}    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      
          <div className="px-4 py-5 space-y-5 bg-white">
      <div>
        <h3 className="mb-1 text-base font-semibold text-neutral-800">Room</h3>
        <ul className="space-y-1 text-sm list-disc list-inside text-neutral-600">
          <li>Deluxe King Bed</li>
          <li>Private balcony with ocean view</li>
          <li>Air-conditioned</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-1 text-base font-semibold text-neutral-800">Policies</h3>
        <ul className="space-y-1 text-sm list-disc list-inside text-neutral-600">
          <li>Check-in after 2:00 PM</li>
          <li>Check-out before 11:00 AM</li>
          <li>Free cancellation within 48 hours</li>
          <li>No smoking or pets allowed</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-1 text-base font-semibold text-neutral-800">In-room Services</h3>
        <ul className="space-y-1 text-sm list-disc list-inside text-neutral-600">
          <li>High-speed Wi-Fi</li>
          <li>Room service (until 10 PM)</li>
          <li>Mini fridge, tea/coffee maker</li>
          <li>Flat-screen TV</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-1 text-base font-semibold text-neutral-800">Nearby Attractions</h3>
        <ul className="space-y-1 text-sm list-disc list-inside text-neutral-600">
          <li>Beach – 2 min walk</li>
          <li>Downtown Market – 5 min drive</li>
          <li>Local Museum – 10 min walk</li>
        </ul>
      </div>
    </div>



        {/* Booking Button */}
        <div className="fixed bottom-0 w-full max-w-sm p-4 bg-white shadow-2xl shadow-neutral-900">
          <div className="flex items-center justify-between gap-1">
            <div className="flex flex-col ">
              <span className="font-semibold text-primary"> ₹1699 Total </span>
              <div className="flex items-center gap-1 text-sm">
                <span>4 days</span>
                <span>•</span>
                <span>₹424 per night</span>
              </div>
            </div>
      
          <Button onPress={()=> router.push("/booking")}  className="mt-2 " color="primary" radius="full">
            Book Now
          </Button>
              </div>
        </div>
      </div>
    </div>
  );
}
