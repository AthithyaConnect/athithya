// app/InvitationPage.jsx
"use client";
import { Button, Chip, Divider } from "@heroui/react";
import Image from "next/image";
import BookingCard from './../components/BookingCard';
import {
  Heart,
  ShareNetwork,
  Star,
  MapPin,
  Users,
  Bed,
  Plus,
  ArrowLeft,
} from "phosphor-react";

const IconText = ({ icon: Icon, text, className = "" }) => (
  <div
    className={`flex items-center gap-1 flex-col text-xs w-fit  text-gray-600 ${className}`}
  >
    <Icon size={18} weight="regular" />
    <span className="text-xs">{text}</span>
  </div>
);

const Section = ({ title, children }) => (
  <section className="flex flex-col gap-3">
    <h2 className="font-semibold">{title}</h2>
    <div className="text-sm text-gray-700">{children}</div>
  </section>
);

const HostCard = ({ host }) => (
  <div className="flex items-center gap-4 p-2 border border-gray-200 rounded-2xl">
    <Image
      src={host.avatar}
      alt={host.name}
      width={48}
      height={48}
      className="border rounded-full border-neutral-200"
    />
    <div>
      <div className="flex items-center gap-2 font-semibold ">
        {host.name}{" "}
        <Chip
          variant="flat"
          color="success"
          className="text-green-600 bg-green-200"
          size="sm"
        >
          Host
        </Chip>
      </div>
      <p className="text-xs text-gray-500">
        ⭐ {host.rating} ({host.reviews}) • Hosting from {host.hostingSince}
      </p>
    </div>
  </div>
);

export default function InvitationPage() {
  const {
    title,
    description,
    rating,
    reviews,
    category,
    location,
    amenities,
    beds,
    maxGuests,
    bedrooms,
    about,
    host,
    offerings,
    rules,
    cancellation,
    map,
    price,
    days,
    dates,
    image,
  } = invitation;

  return (
    <div className="flex flex-col min-h-screen p-4 text-gray-800 bg-white md:flex-row md:gap-8 md:p-8">
      {/* Left: Image + Info */}
      <div className="flex flex-col flex-1 gap-6">
        {/* Cover Image */}
        <div className="relative overflow-hidden border rounded-2xl border-neutral-200">
          <Image
            src={
              "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823123.jpg?t=st=1755340218~exp=1755343818~hmac=22b0f4143496d3b14e10e56ccc1b162c3fc164a9c46aeeb394a789a41ed83d6d&w=1480"
            }
            alt={title}
            width={1000}
            height={1000}
            className="object-cover w-full h-72 md:h-[420px]"
          />
          <div className="absolute top-0 flex justify-between w-full gap-3 p-4 ">
            <Button
              isIconOnly
              className="w-12 h-12 border rounded-full shadow bg-black/30 border-neutral-700"
            >
              <ArrowLeft size={22} weight="regular" color="white" />
            </Button>
            <div className="flex gap-2 ">
              <Button
                isIconOnly
                className="w-12 h-12 border rounded-full shadow bg-black/30 border-neutral-700"
              >
                <Heart size={22} weight="regular" color="white" />
              </Button>
              <Button
                isIconOnly
                className="w-12 h-12 border rounded-full shadow bg-black/30 border-neutral-700"
              >
                <ShareNetwork size={22} weight="regular" color="white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Title & Info */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star
                size={18}
                weight="fill"
                className="text-yellow-500"
                color="green"
              />
              <span className="flex flex-row items-center gap-2 ">
                {rating} ({reviews}){" "}
                <Divider
                  orientation="vertical"
                  className="w-[0.5] h-4 bg-gray-600"
                />{" "}
                {category}
              </span>
            </div>
            <IconText
              icon={MapPin}
              text={location.address}
              className="flex flex-row text-lg"
            />
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mt-4">
            {amenities.map((a) => (
              <span
                key={a}
                className="px-3 py-1 text-sm border border-neutral-200 rounded-2xl bg-neutral-50"
              >
                {a}
              </span>
            ))}
          </div>

          {/* Beds info */}
          <div className="flex justify-around gap-1 p-2 py-4 text-sm border border-gray-200 rounded-2xl">
            <IconText icon={Bed} text={`${beds} Beds`} className="font-medium" />
            <Divider
              orientation="vertical"
              className="w-[0.3] h-8 text-black bg-gray-500"
            />
            <IconText icon={Users} text={`${maxGuests} Max Guests`} className="font-medium" />
            <Divider
              orientation="vertical"
              className="w-[0.3] h-8 text-black bg-gray-500"
            />
            <IconText icon={Bed} text={`${bedrooms} Bedrooms`} className="font-medium" />
          </div>
        </div>

        {/* About + Host + Offerings */}
        <div className="flex flex-col gap-6 ">
          <Section title="About this Place">{about}</Section>
          <HostCard host={host} />
          <Section title="Host’s Offerings">
            <ul className="space-y-1 list-disc list-inside">
              {offerings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Section>
          <Section title="Host’s Rules">
            <ul className="space-y-1 list-disc list-inside">
              {rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Section>
          <Section title="Cancellation Policy">
            <ul className="space-y-1 list-disc list-inside">
              {cancellation.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Section>

          {/* Map */}
          <div className="overflow-hidden border rounded-2xl border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53721.47288543514!2d77.98050570031515!3d30.3236403877752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1755374505149!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full aspect-video"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right: Booking Card */}
      <aside className="sticky top-0 flex flex-col gap-4 mt-8 md:mt-0 md:w-96">
      <BookingCard/>
      </aside>
    </div>
  );
}



export const invitation = {
  image:
    "https://img.freepik.com/free-photo/view-mountain-with-dreamy-aesthetic_23-2151700214.jpg?t=st=1755340353~exp=1755343953~hmac=f90ade31c067e3a7ca20b211254cfe3751fb3ed6b9ed4824de099ae08f1500ed&w=1480",
  title: "Sumit’s Stay Invitation",
  description:
    "Experience cozy mountain living with home-cooked meals by the Rawat family in Manali.",
  rating: 4.8,
  reviews: 120,
  category: "Local Home Stay",
  location: { address: "123, Rajpur Road, Near IT Park, Dehradun" },
  amenities: ["AC", "Wi-Fi", "Washing Machine", "Electricity"],
  beds: "3 (1d + 2s)",
  maxGuests: 4,
  bedrooms: 2,
  about: "Stay with the Rawat family in a traditional Himachali wooden home...",
  host: {
    name: "Sumit Rawat",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671145.jpg",
    rating: 4.8,
    reviews: 120,
    hostingSince: "last 3 months",
  },
  offerings: [
    "Private Room with View",
    "Morning Chai & Local Breakfast (Optional ₹100)",
    "Home-cooked Dinner (₹200)",
    "Guided Walk to Waterfall (Optional)",
    "Bonfire Experience (₹150 per guest)",
  ],
  rules: [
    "No loud music after 10 PM",
    "No smoking inside rooms",
    "Check-in: 12:00 PM",
    "Check-out: 11:00 AM",
    "Respect local customs",
  ],
  cancellation: [
    "Full refund before 48 hours of check-in",
    "50% refund within 24 hours",
    "No refund if canceled on the same day",
  ],
  map: "",
  price: 2080,
  dates: { checkIn: "Wed, 4 Sep 25", checkOut: "Sat, 7 Sep 25" },
};
