"use client";

import { Divider, Button } from "@heroui/react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { invitation } from '@/constants/tempData';
import { useRouter } from "next/navigation";
 

const OrderPage = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-2 p-4">
         
             <Button onPress={() => router.back()} isIconOnly variant="light">
            <ArrowLeft size={24} className="text-gray-600 cursor-pointer" />
          </Button>  <h2 className="mb-10 text-2xl font-semibold"> Book your invitation</h2>
<OrderItem/>
 <Button   size="lg" className="w-full" variant="solid" color="primary">
             Complete Booking
            </Button>
        </div>
    );
}

export default OrderPage;





const OrderItem=()=> {
  // Sample Data
  const nights = 3;
  const pricePerNight = 1200;
  const subtotal = nights * pricePerNight; // 4872.83
  const tax = 512.4;
  const total = subtotal;

  return (
    <div className="max-w-md min-w-full p-4 mx-auto bg-white border border-gray-200 rounded-2xl">
      {/* Header Section */}
      <div className="flex gap-3">
        <Image
          src="https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823123.jpg?t=st=1755340218~exp=1755343818~hmac=22b0f4143496d3b14e10e56ccc1b162c3fc164a9c46aeeb394a789a41ed83d6d&w=1480"
          alt="Room"
          width={100}
          height={80}
          className="object-cover rounded-lg aspect-square"
        />
        <div>
          <h2 className="text-lg font-semibold">
           Rams Invitations 
          </h2>
          <p className="text-sm text-gray-600">Room in home</p>
          <p className="mt-1 text-sm text-gray-700">
            ⭐ 4.95 (140 reviews) 
          </p>
        </div>
      </div>

       <div
           className="flex items-center justify-between mt-2 text-sm text-gray-700 underline text-underline"
        >
           
            <>
              <div>Sun, Aug 12 2023</div>
              <span>
                <ArrowRight />
              </span>
              <div>Sun, Aug 14 2023</div>
            </>
         
        </div>

<Divider className="my-2" />
      {/* Price Section */}
      <h3 className="text-lg font-semibold">Your total</h3>
      <div className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>
            {nights} nights × ₹{pricePerNight.toFixed(2)}
          </span>
          <span>₹{subtotal.toFixed(2)-tax}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes (Inclusive)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
      </div>

<Divider className="my-2" />

      {/* Total */}
      <div className="flex justify-between text-lg font-semibold">
        <span>Total (INR)</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

        
    </div>
  );
}
