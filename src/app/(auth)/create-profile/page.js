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
import { validateUsername, validateBio } from "@/utils/validation";
import { handleImageUpload, toggleLanguage } from "@/utils";
import { interestCategories } from "@/constants";
import { useRouter } from "next/navigation";

const CreateProfile = () => {
  const [username, setUsername] = useState("jjj");
  const [bio, setBio] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [bioError, setBioError] = useState("");
  const [languages, setLanguages] = useState([]);
  const [gender, setGender] = useState("male");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef(null);
  const [userType, setUserType] = useState("");
  const availableLanguages = ["Hindi", "English", "Spanish", "French"];
  const router = useRouter();
  const [userInterests, setUserInterests] = useState(
    interestCategories.reduce((acc, category) => {
      acc[category.category] = [];
      return acc;
    }, {}),
  );

  const toggleInterest = (category, option) => {
    setUserInterests((prev) => {
      const isSelected = prev[category].includes(option);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== option)
          : [...prev[category], option],
      };
    });
  };

  const [image, setImage] = useState(
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
  );

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
    formData.image = image;
    formData.userType = userType;

    const isUsernameValid = validateUsername(username, setUsernameError);
    const isBioValid = validateBio(bio, setBioError);

    if (isUsernameValid && isBioValid) {
      console.log("Saved Profile:", formData);
      setSaved(true);
    }
  };

  return (
    <div className="flex items-start justify-center bg-gray-100 min-h-100dvh md:p-4 md:px-4">
      <div className="w-full max-w-md p-4 bg-white sm:p-8 md:rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
          Create Profile
        </h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Welcome to Athithya! Your journey starts with you!
        </p>

        {!saved && !userType && (
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
                onChange={(e) => handleImageUpload(e, setImage)}
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
              radius="lg"
              labelPlacement="outside"
              name="name"
              label="Name"
              type="text"
              placeholder="John Doe"
            />

            <Input
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
                    onClick={() => toggleLanguage(lang, setLanguages)}
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
              radius="lg"
              labelPlacement="outside"
              label="Location"
              name="location"
              type="text"
              placeholder="Enter your location"
            />

            <Textarea
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
              radius="lg"
              color="primary"
              className="w-full text-base sm:text-lg"
              type="submit"
            >
              Save Profile
            </Button>
          </Form>
        )}

        {saved && !userType && (
          <div className="flex flex-col gap-4">
            {userType && userType}
            <div
              onClick={() => setUserType("traveller")}
              className="flex flex-col items-center w-full gap-2 p-4 text-center border border-gray-200 cursor-pointer select-none h-fit rounded-3xl sm:text-lg active:bg-gray-100"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747444.jpg"
                }
                alt="Traveller"
                width={1000}
                height={1000}
                className="object-cover w-full h-32 mb-2 rounded-2xl"
              />
              <p className="font-bold"> Continue as Traveller</p>
              <p className="text-sm text-gray-500 h-fit">
                Explore and book amazing experiences made just for you.
              </p>
            </div>
            <div
              onClick={() => setUserType("host")}
              className="flex flex-col items-center w-full gap-2 p-4 text-center border border-gray-200 cursor-pointer select-none h-fit rounded-3xl sm:text-lg active:bg-gray-100"
            >
              <Image
                src={
                  "https://img.freepik.com/free-photo/diverse-young-people-being-digital-nomads-working-remotely-from-dreamy-locations_23-2151187937.jpg"
                }
                alt="Traveller"
                width={1000}
                height={1000}
                className="object-cover w-full h-32 mb-2 rounded-2xl"
              />
              <p className="font-bold"> Continue as Host</p>
              <p className="text-sm text-gray-500 h-fit">
                Create and share unique experiences with travelers worldwide.
              </p>
            </div>
          </div>
        )}

        {userType && userType == "traveller" && (
          <div>
            <h4 className="mb-4 text-xl font-bold">
              Select Your Interests ({userType})
            </h4>

            {interestCategories.map((cat) => (
              <div key={cat.category} className="mb-6">
                <p className="mb-2 font-semibold">{cat.category}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.options.map((option) => {
                    const selected =
                      userInterests[cat.category].includes(option);
                    return (
                      <Chip
                        key={option}
                        variant={selected ? "solid" : "bordered"}
                        color={selected ? "primary" : "default"}
                        onClick={() => toggleInterest(cat.category, option)}
                        className="p-2 py-4 border cursor-pointer"
                      >
                        {option}
                      </Chip>
                    );
                  })}
                </div>
              </div>
            ))}
            <Button
              color="primary"
              className="w-full"
              onPress={() => router.push("/u/home")}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
