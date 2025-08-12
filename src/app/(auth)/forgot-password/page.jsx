"use client";
import { validateEmail } from "@/utils/validation";
import { Button, Input, Form } from "@heroui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validateEmail(formData.email, setError)) return;
    setError("");
    console.log("Form Data:", formData);
    // Logic here to handle forgot psswd  use formDate data
    router.push("/create-profile");
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 md:items-center md:px-4">
      <div className="w-full max-w-md p-4 bg-white sm:p-8 md:rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Forgot Password
        </h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Enter your email address to receive a password reset link.{" "}
        </p>

        <div className="flex flex-col gap-4">
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              radius="lg"
              labelPlacement="outside"
              label="Email"
              name="email"
              type="email"
              placeholder="john@gmail.com"
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

            <Button
              radius="lg"
              color="primary"
              type="submit"
              className="w-full text-base font-semibold sm:text-lg"
            >
              Send Reset Link
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
