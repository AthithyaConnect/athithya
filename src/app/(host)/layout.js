"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  Compass,
  PlusCircle,
  ChatTeardropDots,
  User,
  Stack,
} from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

const navItems = [
  { href: "/h/home", icon: House, label: "Home" },
  { href: "/h/my-listings", icon: Stack, label: "My Listings" },
  { href: "/h/inbox", icon: ChatTeardropDots, label: "Inbox" },
  { href: "/h/profile", icon: User, label: "Profile" },
];

const allowedPaths = ["/h/home", "/h/my-listings", "/h/profile", "/h/inbox"];

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const shouldShowNav =
    allowedPaths.includes(pathname) || pathname.startsWith("/h/inbox/");
  const variants = {
    initial: { x: "100%", opacity: 1 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 1 }, // keep page A underneath
  };
  return (
    <div className="flex h-[100dvh] md:flex-row overflow-hidden">
      {shouldShowNav && (
        <nav
          className={`fixed bottom-0 left-0 right-0 z-10  py-2 overflow-hidden bg-white border-t border-gray-200 md:flex md:relative md:flex-col md:w-20 lg:w-64 md:border-t-0 md:px-8  md:border-r md:h-full md:py-8 md:gap-4 ${pathname.startsWith("/h/inbox/") ? "hidden" : "flex flex-row"}`}
        >
          {navItems.map(({ href, icon: Icon, label, isAddButton }) => {
            const isActive = pathname === href;
            const iconColorClass = isActive
              ? "text-gray-900 "
              : "text-neutral-500";
            const labelColorClass = isActive
              ? "text-gray-900"
              : "text-neutral-500";

            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col w-full items-center md:scale-110 rounded-xl gap-0.5 md:flex-row md:justify-start md:py-2 md:px-4 md:gap-4 lg:px-6 ${isActive ? "md:bg-gray-100" : ""}`}
              >
                {isAddButton ? (
                  <div
                    className={`p-3 rounded-full ${iconColorClass} bg-gray-100 md:flex gap-4  md:bg-transparent md:p-0 `}
                  >
                    <Icon
                      weight={isActive ? "fill" : "regular"}
                      color="currentColor"
                      className="w-6 h-6 md:w-5 md:h-5"
                    />
                    <span
                      className={`text-xs md:text-sm md:flex  hidden  ${labelColorClass}`}
                    >
                      Add
                    </span>
                  </div>
                ) : (
                  <>
                    <Icon
                      weight={isActive ? "fill" : "regular"}
                      color="currentColor"
                      className={`w-6 h-6 md:w-5 md:h-5 ${iconColorClass}`}
                    />
                    <span
                      className={`text-xs md:text-sm md:flex ${labelColorClass}`}
                    >
                      {label}
                    </span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      )}
      <div className="relative flex-1 overflow-y-auto pb-14 md:pb-0">
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      </div>{" "}
    </div>
  );
}
