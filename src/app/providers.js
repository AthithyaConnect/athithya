'use client'
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

const Providers = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
