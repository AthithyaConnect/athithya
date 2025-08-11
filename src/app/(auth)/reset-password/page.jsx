"use client";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validatePassword(password, setError)) return;
    if (!validateConfirmPassword(password, confirmPassword, setError)) return;
    setError("");
    //  logic here to handle password reset
    router.push("/login");
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 md:items-center md:px-4">
      <div className="w-full max-w-md p-4 bg-white sm:p-8 md:rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Reset Your Password{" "}
        </h3>
        <p className="mt-1 mb-6 text-sm text-gray-500 sm:text-base">
          Enter your new password below.
        </p>

        <div className="flex flex-col gap-4">
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {" "}
            <Input
              size="lg"
              radius="lg"
              labelPlacement="outside"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
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
              className="w-full text-base font-semibold sm:text-lg"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
