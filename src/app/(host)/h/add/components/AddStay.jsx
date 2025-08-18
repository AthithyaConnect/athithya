"use client";

import { useState, useRef } from "react";
import {
  Form,
  Input,
  Textarea,
  RadioGroup,
  Radio,
  Chip,
  DatePicker,
  Button,
  Checkbox,
} from "@heroui/react";
import { Plus, MapPin, Bed, Users, CurrencyInr } from "phosphor-react";
import Image from "next/image";

export default function AddStayForm() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState("/placeholder.jpg");

  // Demo states
  const [stayType, setStayType] = useState("local");
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState("");
  const [offerings, setOfferings] = useState("");
  const [cancellation, setCancellation] = useState("");

  const toggleAmenity = (item) => {
    setAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    formData.stayType = stayType;
    formData.amenities = amenities;
    formData.rules = rules;
    formData.offerings = offerings;
    formData.cancellation = cancellation;
    formData.image = image;
    console.log("Form Data:", formData);

    alert("Stay Published ✅");
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
      {/* Cover Image */}
      <div className="relative w-fit">
        <Image
          src={image}
          alt="Stay Image"
          width={1000}
          height={1000}
          className="object-cover w-40 mb-6 border-white shadow-lg rounded-xl border-3 h-28"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const url = URL.createObjectURL(e.target.files[0]);
              setImage(url);
            }
          }}
          className="hidden"
        />
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute right-0 p-2 bg-white rounded-full shadow-md cursor-pointer bottom-6 w-fit"
        >
          <Plus />
        </div>
      </div>

      {/* Title */}
      <Input
        radius="lg"
        labelPlacement="outside"
        name="title"
        label="Title"
        placeholder="Ishan’s Stay Invitation"
      />

      {/* Stay Type */}
      <RadioGroup
        value={stayType}
        onChange={(e) => setStayType(e.target.value)}
        label="Stay Type"
        orientation="horizontal"
      >
        <Radio value="local">Local</Radio>
        <Radio value="hotel">Hotel</Radio>
      </RadioGroup>

      {/* Short + Long Description */}
      <Input
        radius="lg"
        labelPlacement="outside"
        name="shortDesc"
        label="Short Description"
        placeholder="Write a catchy line..."
      />
      <Textarea
        radius="lg"
        labelPlacement="outside"
        name="longDesc"
        label="Long Description"
        placeholder="Describe your stay in detail..."
      />

      {/* Amenities */}
      <div className="w-full">
        <label className="block mb-2 text-sm">Amenities Offered</label>
        <div className="flex flex-wrap gap-2 p-3 bg-zinc-100 rounded-2xl">
          {["Wifi", "TV", "AC"].map((a) => (
            <Chip
              key={a}
              variant={amenities.includes(a) ? "solid" : "bordered"}
              color={amenities.includes(a) ? "primary" : "default"}
              onClick={() => toggleAmenity(a)}
              className="cursor-pointer"
            >
              {a}
            </Chip>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <Input
        radius="lg"
        type="number"
        label="Price (per person / per day)"
        labelPlacement="outside"
        name="price"
        startContent={<CurrencyInr size={18} />}
        placeholder="1200"
      />
      <div className="text-sm text-gray-600">
        Platform Fee : ₹30 <br />
        GST : <br />
        <span className="font-semibold">You’ll receive ₹846 per booking.</span>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          type="number"
          name="guests"
          label="Max Guests"
          labelPlacement="outside"
          startContent={<Users size={18} />}
          placeholder="6"
        />
        <Input
          type="number"
          name="beds"
          label="No. of Beds"
          labelPlacement="outside"
          startContent={<Bed size={18} />}
          placeholder="4"
        />
        <Input
          type="number"
          label="No. of Bathrooms"
          labelPlacement="outside"
          name="bathrooms"
          placeholder="2"
        />
      </div>

      {/* Available Dates */}
      <DatePicker label="Available Dates and Time" labelPlacement="outside" />

      {/* Policies */}
      <Textarea
        label="Rules (write in points)"
        labelPlacement="outside"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
      />
      <Textarea
        label="Stay Offerings (write in points)"
        labelPlacement="outside"
        value={offerings}
        onChange={(e) => setOfferings(e.target.value)}
      />
      <Textarea
        label="Cancellation Policy (write in points)"
        labelPlacement="outside"
        value={cancellation}
        onChange={(e) => setCancellation(e.target.value)}
      />

      {/* Location */}
      <Input
        label="Landmark"
        labelPlacement="outside"
        placeholder="Green valley Building"
        startContent={<MapPin size={18} />}
      />
      <Textarea
        label="Full Address"
        labelPlacement="outside"
        placeholder="123 Green Valley Road, Dehradun, Uttarakhand, 248001, India"
      />
      <Input
        label="Pin on Google Maps"
        labelPlacement="outside"
        placeholder="Paste Google Maps link"
      />

      {/* Terms */}
      <Checkbox>I agree to the Terms & Conditions and Privacy Policy.</Checkbox>

      {/* Submit */}
      <Button type="submit" color="primary" radius="lg" className="w-full">
        Publish Stay
      </Button>
    </Form>
  );
}
