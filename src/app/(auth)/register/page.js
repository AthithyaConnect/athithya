"use client";
import { useState } from "react";
import { Button, Divider, Form, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash } from "phosphor-react";
import { useRouter } from "next/navigation";
import { validatePassword, validateConfirmPassword } from "@/util/validation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validatePassword(password, setError)) return;
    if (!validateConfirmPassword(password, confirmPassword, setError)) return;
    setError("");
    console.log("Form Data:", formData);
    // Logic here to handle registration use formDate data
    router.push("/create-profile");
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
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Sign Up
        </h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Create an account to get started with Athithya.
        </p>

        <div className="flex flex-col gap-4">
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              label="Email"
              type="email"
              name="email"
              placeholder="john@gmail.com"
            />

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <Button
                  isIconOnly
                  variant="text"
                  onPress={() => setShowPassword((prev) => !prev)}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <EyeSlash
                      size={22}
                      weight="bold"
                      className="text-gray-600"
                    />
                  ) : (
                    <Eye size={22} weight="bold" className="text-gray-600" />
                  )}
                </Button>
              }
            />

            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endContent={
                <Button
                  isIconOnly
                  variant="text"
                  onPress={() => setShowPassword((prev) => !prev)}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <EyeSlash
                      size={22}
                      weight="bold"
                      className="text-gray-600"
                    />
                  ) : (
                    <Eye size={22} weight="bold" className="text-gray-600" />
                  )}
                </Button>
              }
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button
              size="lg"
              radius="lg"
              color="primary"
              type="submit"
              className="w-full text-base font-semibold sm:text-lg"
            >
              Sign Up
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
