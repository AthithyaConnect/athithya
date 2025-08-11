"use client";
import { Button, Divider, Input, Form } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/util/validation";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validateEmail(formData.email, setError)) return;
    console.log("Form Data:", formData);
    // Logic here to handle login with formData
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 md:items-center md:px-4">
      <div className="w-full max-w-md p-4 bg-white sm:p-8 md:rounded-3xl">
        <Image
          src="/athithya.png"
          alt="Athithya Logo"
          width={1000}
          height={1000}
          className="w-24 mb-6"
        />
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Login</h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Enter your details to log in to your account.
        </p>

        <div className="flex flex-col gap-4">
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              name="email"
              label="Email"
              type="email"
              placeholder="john@gmail.com"
            />
            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
            />

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              size="lg"
              type="submit"
              radius="lg"
              color="primary"
              className="w-full text-base font-semibold sm:text-lg"
            >
              Login
            </Button>
          </Form>
        </div>

        <div className="flex items-center gap-3 my-6">
          <Divider className="flex-1" />
          <p className="text-sm text-gray-400">or</p>
          <Divider className="flex-1" />
        </div>

        <Button
          size="lg"
          radius="lg"
          className="w-full font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          startContent={
            <Image src="/google.png" width={24} height={24} alt="Google" />
          }
        >
          Continue with Google
        </Button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-sm font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
