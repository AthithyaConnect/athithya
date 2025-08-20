"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ComingSoon() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const u = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgd4ejf6u0TxeIUfHNjL7Eocp4M5AKk2NlnUSLPlTI-VMuYw/formResponse"


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    await fetch(
    u,
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // important!
      }
    );

    setSubmitted(true);
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-6 text-white bg-gradient-to-b from-gray-900 to-black">
      {!submitted ? (
        <div className="w-full max-w-md text-center">
          {/* Heading */}
          <h1 className="mb-2 text-3xl font-bold">🚀 We&apos;re Launching Soon</h1>
          <p className="mb-6 text-neutral-400">
            Be the first to know when we go live. <br />
            Sign up and we&apos;ll keep you updated.
          </p>

          {/* Hidden iframe for Google Form */}
          <iframe name="hidden_iframe" className="hidden"></iframe>

          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
           
            className="flex flex-col gap-3 p-4 shadow-lg rounded-3xl bg-white/10 backdrop-blur-sm"
        
          >
            <input
              placeholder="Your Name"
              className="p-2 text-white rounded-full outline-none placeholder-neutral-300 bg-white/20"
              name="entry.847864802"
            />
            <input
              placeholder="Your Email"
              type="email"
              className="p-2 text-white rounded-full outline-none placeholder-neutral-300 bg-white/20"
              name="entry.430646801"
              required
            />
            <textarea
              placeholder="Message (optional)"
              className="p-2 text-white outline-none rounded-3xl placeholder-neutral-300 bg-white/20"
              name="entry.673567467"
            ></textarea>

            <button
              type="submit"
              className="p-2 font-semibold text-black transition bg-white rounded-full hover:bg-neutral-200"
            >
              Notify Me
            </button>
          </form>

          {/* Incentive */}
          <p className="mt-6 text-sm text-neutral-400">
            🎁 Sign up now to get{" "}
            <span className="text-white">early access</span> and exclusive launch
            updates!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-green-500">
            ✅ Thanks! You&apos;re on the list. We&apos;ll update you soon
          </span>
          <Button
            variant="solid"
            className="bg-white"
            radius="full"
            onPress={() => router.push("/")}
          >
            Continue to Home
          </Button>
        </div>
      )}
    </div>
  );
}
