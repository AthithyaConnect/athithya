"use client";
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";
import { IconContext } from "phosphor-react";

const Providers = ({ children }) => {
  return (
    <HeroUIProvider>
      <main className="light">
        <IconContext.Provider
          value={{
            color: "#101010",
            size: 24,
            weight: "regular",
            mirrored: false,
            alt: "icon",
          }}
        >
          {children}
        </IconContext.Provider>
      </main>
    </HeroUIProvider>
  );
};

export default Providers;
