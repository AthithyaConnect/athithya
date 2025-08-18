"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  Compass,
  PlusCircle,
  ChatTeardropDots,
  User,
} from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/u/home", icon: House, label: "Home" },
  { href: "/u/explore", icon: Compass, label: "Explore" },
  { href: "/u/add", icon: PlusCircle, label: "Add", isAddButton: true },
  { href: "/u/inbox", icon: ChatTeardropDots, label: "Inbox" },
  { href: "/u/profile", icon: User, label: "Profile" },
];

const allowedPaths = [
  "/u/home",
  "/u/explore",
  "/u/profile",
  "/u/inbox",
  "/u/inbox/",
];

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const shouldShowNav =
    allowedPaths.includes(pathname) || pathname.startsWith("/u/inbox/");
  const variants = {
    initial: { x: "100%", opacity: 1 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 1 }, // keep page A underneath
  };
  return (
    <div className="flex h-[100dvh] md:flex-row overflow-hidden">
      {shouldShowNav && (
        <nav
          className={`fixed bottom-0 left-0 right-0 z-10  py-2 overflow-hidden bg-white border-t border-gray-200 md:flex md:relative md:flex-col md:w-20 lg:w-64 md:border-t-0 md:px-8  md:border-r md:h-full md:py-8 md:gap-4 ${pathname.startsWith("/u/inbox/") ? "hidden" : "flex flex-row"}`}
        >
          {navItems.map(({ href, icon: Icon, label, isAddButton }) => {
            const isActive = pathname === href;
            const iconColorClass = isActive ? "text-gray-900 " : "text-neutral-500";
            const labelColorClass = isActive ? "text-gray-900" : "text-neutral-500";

            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col w-full items-center md:scale-110 rounded-xl gap-0.5 md:flex-row md:justify-start md:py-2 md:px-4 md:gap-4 lg:px-6 ${isActive ? "md:bg-gray-100" : ""}`}
              >
                {isAddButton ? (
                  <div
                    className={`p-3 rounded-full ${iconColorClass} bg-gray-100 md:flex gap-4  md:bg-white md:p-0 `}
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
        {children}
      </div>{" "}
    </div>
  );
}
