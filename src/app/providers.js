'use client'
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

const Providers = ({ children }) => {
  return <HeroUIProvider>
<main  className="light">
    {children}
</main>
  </HeroUIProvider>;
};

export default Providers;
