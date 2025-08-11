"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InputOtp } from "@heroui/input-otp";
import Image from "next/image";
import { Button } from "@heroui/react";
import as from "./../../.next/static/chunks/src_a739314f._";
import SignUp from './(auth)/register/page';

export default function MainPage() {
  return (
    <div className="full-wrapper">
      <Button as="a" href="/login" color="primary" >
        Login
      </Button>

       <Button as="a" href="/register" color="primary" >
        SignUp
      </Button> <Button as="a" href="/create-profile" color="primary" >
        Create Profile
      </Button>
    </div>
  );
}
