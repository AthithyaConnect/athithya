"use client";
import { Avatar, Button, Card, Divider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bed, Bell, Star, BowlSteam, ForkKnife } from "phosphor-react";

const Home = () => {
  return (
    <div className="w-full h-full mesh-bg ">
      {/* header  */}
      <div className="flex items-center justify-between p-4 ">
        <div className="flex flex-row items-center w-full gap-2 border-neutral-200 rounded-3xl ">
          <Avatar
            src={
              "https://cdn.dribbble.com/userupload/3396433/file/original-a7938da0f7cbc7a5a75d4237da6d2d02.png"
            }
            name="John Doe"
            size="md"
            className="w-12 h-12 "
          />
          <div className="flex flex-col justify-center ">
            <div className="font-medium ">Welcome back, Ishan</div>
            <div className="text-xs text-gray-500">Host</div>
          </div>
          <div className="text-sm text-gray-400"></div>
        </div>
        <Button isIconOnly variant="solid" className="bg-white">
          <Bell size={24} className="text-gray-600 cursor-pointer" />
        </Button>
      </div>

      {/* card  */}

      <div className="p-4">
        <StatCard
          data={{ totalEarnings: 14000, totalBookings: 18, overallRating: 4.5 }}
        />
      </div>

      {/* action buttons  */}
      <div className="p-4">
        <ActionButtons />
      </div>
    </div>
  );
};

export default Home;

const StatCard = ({ data }) => {
  const { totalEarnings, totalBookings, overallRating } = data;
  return (
    <div className="p-4 text-white bg-[#01005B] rounded-3xl flex flex-col gap-4 ">
      <div className="flex items-center justify-around ">
        <div className="flex flex-col items-center gap-2 ">
          <span className="text-xl font-bold">₹14,000</span>
          <p className="text-xs text-gray-300">Total Earnings</p>
        </div>

        <Divider
          orientation="vertical"
          className="w-[0.5] bg-gray-200/50 h-8"
        />

        <div className="flex flex-col items-center gap-2 ">
          <span className="text-xl font-bold">18</span>
          <p className="text-xs text-gray-300">Total Bookings</p>
        </div>
      </div>
      <Divider
        orientation="vertical"
        className="w-full bg-gray-200/50 h-[0.5]"
      />
      <div className="flex flex-row items-center justify-center gap-2 text-sm">
        <Star size={20} color="yellow" weight="fill" />
        Overall Rating {overallRating}
      </div>
    </div>
  );
};


const ActionButtons = () => {
    const router = useRouter()
  return (
    <div className="flex flex-row justify-center gap-2">
     <Card onPress={()=>router.push('/h/add?page=stay')} isPressable  className="flex items-center w-full gap-3 px-2 py-4 shadow-none">
        <Bed size={24} color="black" weight="regular" />
       <p className="text-xs"> Add Stay</p>
     </Card>
       <Card onPress={()=>router.push('/h/add?page=cuisine')} isPressable  className="flex items-center w-full gap-3 px-2 py-4 shadow-none">
        <ForkKnife size={24} color="black" weight="regular" />
       <p className="text-xs"> Add Cuisine</p>
     </Card>
       <Card onPress={()=>router.push('/h/add?page=experience')} isPressable  className="flex items-center w-full gap-3 px-2 py-4 shadow-none">
        <Bed size={24} color="black" weight="regular" />
       <p className="text-xs"> Add Experience</p>
     </Card>
    </div>
  );
};
