"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Compass,
  PlusCircle,
  ChatTeardropDots,
  User,
} from "phosphor-react";

const navItems = [
  { href: "/u/home", icon: House, label: "Home" },
  { href: "/u/explore", icon: Compass, label: "Explore" },
  { href: "/u/add", icon: PlusCircle, label: "Add", isAddButton: true },
  { href: "/u/inbox", icon: ChatTeardropDots, label: "Inbox" },
  { href: "/u/profile", icon: User, label: "Profile" },
];

// Define which routes should show the bottom nav
const allowedPaths = ["/u/home", "/u/explore", "/u/profile", "/u/inbox"];

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const shouldShowNav = allowedPaths.includes(pathname);

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <div className="flex-1 overflow-y-auto">{children}</div>

      {shouldShowNav && (
        <nav className="flex justify-around py-2 bg-white border-t border-gray-200">
          {navItems.map(({ href, icon: Icon, label, isAddButton }) => {
            const isActive = pathname === href;
            const iconColorClass = isActive ? "text-primary" : "text-gray-500";
            const labelColorClass = isActive ? "text-primary" : "text-gray-500";

            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5"
              >
                {isAddButton ? (
                  <div
                    className={`p-3 rounded-full ${iconColorClass} bg-gray-100`}
                  >
                    <Icon
                      weight={isActive ? "fill" : "regular"}
                      color="currentColor"
                      className="w-6 h-6"
                    />
                  </div>
                ) : (
                  <>
                    <Icon
                      weight={isActive ? "fill" : "regular"}
                      color="currentColor"
                      className={`w-6 h-6 ${iconColorClass}`}
                    />
                    <span className={`text-xs ${labelColorClass}`}>{label}</span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
