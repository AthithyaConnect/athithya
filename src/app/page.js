"use client";

import { Button } from "@heroui/react";

export default function MainPage() {
  return (
    <div className="full-wrapper">
      <Button as="a" href="/login" color="primary">
        Login
      </Button>
      <Button as="a" href="/register" color="primary">
        SignUp
      </Button>{" "}
      <Button as="a" href="/create-profile" color="primary">
        Create Profile
      </Button>
    </div>
  );
}
