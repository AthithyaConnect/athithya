"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputOtp } from "@heroui/input-otp";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  // if otp value is less than 4 characters, empty error

  const handleComplete = (value) => {
    if (value !== "1234") {
      setError("Invalid OTP");
      return;
    }
    const expires = new Date(Date.now() + 10 * 60 * 1000).toUTCString(); // 10 mins
    document.cookie = `otp=${value}; path=/; expires=${expires}`;
    setError(null);
    router.push("/u/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-xl font-semibold mb-6">Enter Access Code</h1>

      <InputOtp
        length={4}
        radius="full"
        value={otp}
        onValueChange={(val) => {
          setOtp(val);
          setError(null);
        }}
        color="success"
        onComplete={handleComplete}
        className={`w-fit max-w-xs ${error ? "border-red-500" : ""}`}
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
