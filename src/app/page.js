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
    if (value !== "1874") {
      setError("Invalid OTP");
      return;
    }
    const expires = new Date(Date.now() + 300 * 60 * 1000).toUTCString(); // 10 mins
    document.cookie = `otp=${value}; path=/; expires=${expires}`;
    setError(null);
    router.push("/u/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="mb-6 text-xl font-semibold">Welcome to Athithya</h1>
       <h1 className="mb-6 text-xl font-semibold">Enter Access Code</h1>

      <InputOtp
        length={4}
        radius="full"
        value={otp}
        onValueChange={(val) => {
          setOtp(val);
          setError(null);
        }}
        color="default"
        onComplete={handleComplete}
        className={`w-fit max-w-xs ${error ? "border-red-500" : ""}`}
      />

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
