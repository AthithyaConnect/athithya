"use client";
import { useState, useRef } from "react";
import {
  Button,
  Input,
  Textarea,
  Chip,
  RadioGroup,
  Radio,
  DatePicker,
  Form,
} from "@heroui/react";
import Image from "next/image";
import { Plus } from "phosphor-react";
import { getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { validateUsername, validateBio } from "@/util/validation";

const CreateProfile = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [languages, setLanguages] = useState([]);
  const [gender, setGender] = useState("male");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [saved, setSaved] = useState(false);

  const availableLanguages = ["Hindi", "English", "Spanish", "French"];

  const [image, setImage] = useState(
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
  );
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleLanguage = (lang) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    );
  };

  const formatter = useDateFormatter({
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    formData.languages = languages;
    formData.gender = gender;
    formData.dateOfBirth = dateOfBirth
      ? formatter.format(dateOfBirth.toDate(getLocalTimeZone()))
      : "";

    const isUsernameValid = validateUsername(username, setUsernameError);
    const isBioValid = validateBio(bio, setBioError);

    if (isUsernameValid && isBioValid) {
      console.log("Saved Profile:", formData);
      setSaved(true);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 md:p-4 md:items-center md:px-4">
      <div className="w-full max-w-md p-4 bg-white sm:p-8 md:rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
          Create Profile
        </h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Welcome to Athithya! Your journey starts with you!
        </p>

        {!saved ? (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative w-fit">
              <Image
                src={image}
                alt="Athithya Logo"
                width={1000}
                height={1000}
                className="object-cover mb-6 border-white rounded-full shadow-lg border-3 w-28 h-28"
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute right-0 p-2 bg-white rounded-full shadow-md cursor-pointer bottom-6 w-fit"
              >
                <Plus />
              </div>
            </div>

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              name="name"
              label="Name"
              type="text"
              placeholder="John Doe"
            />

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              name="username"
              label="Username Handle"
              type="text"
              placeholder="john_doe"
              startContent="@"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => validateUsername(username, setUsernameError)}
              isInvalid={!!usernameError}
              errorMessage={usernameError}
            />

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              name="phone"
              label="Phone"
              type="number"
              placeholder="Enter your phone number"
            />

            <DatePicker
              label="Date of Birth"
              labelPlacement="outside"
              value={dateOfBirth}
              onChange={setDateOfBirth}
            />

            <div>
              <label className="block mb-2 font-medium">
                Select languages you speak
              </label>
              <div className="flex flex-wrap gap-2 p-3 bg-zinc-100 rounded-2xl">
                {availableLanguages.map((lang) => (
                  <Chip
                    key={lang}
                    variant={languages.includes(lang) ? "solid" : "bordered"}
                    color={languages.includes(lang) ? "primary" : "default"}
                    onClick={() => toggleLanguage(lang)}
                    className="cursor-pointer"
                    role="checkbox"
                    aria-checked={languages.includes(lang)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        toggleLanguage(lang);
                      }
                    }}
                  >
                    {lang}
                  </Chip>
                ))}
              </div>
            </div>

            <RadioGroup
              color="primary"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Select your gender"
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              label="Location"
              name="location"
              type="text"
              placeholder="Enter your location"
            />

            <Textarea
              size="lg"
              radius="lg"
              name="bio"
              labelPlacement="outside"
              label="Short Bio (150 characters)"
              placeholder="Tell us a little about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              onBlur={() => validateBio(bio, setBioError)}
              isInvalid={!!bioError}
              errorMessage={bioError}
            />

            <Button
              size="lg"
              radius="lg"
              color="primary"
              className="w-full text-base font-semibold sm:text-lg"
              type="submit"
            >
              Save Profile
            </Button>
          </Form>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center w-full gap-2 p-4 text-center border border-gray-200 cursor-pointer select-none h-fit rounded-2xl sm:text-lg active:bg-gray-100">
              <p className="font-bold"> Continue as Traveller</p>
              <p className="text-sm text-gray-500 h-fit">
                Explore and book amazing experiences made just for you.
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-2 p-4 text-center border border-gray-200 cursor-pointer select-none h-fit rounded-2xl sm:text-lg active:bg-gray-100">
              <p className="font-bold"> Continue as Host</p>
              <p className="text-sm text-gray-500 h-fit">
                Create and share unique experiences with travelers worldwide.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
