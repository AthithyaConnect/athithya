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
  { href: "/u/plus", icon: PlusCircle, label: "Add", isAddButton: true },
  { href: "/u/inbox", icon: ChatTeardropDots, label: "Inbox" },
  { href: "/u/profile", icon: User, label: "Profile" },
];

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1 overflow-y-auto">{children}</div>

      <nav className="border-t border-gray-200 bg-white flex justify-around py-2">
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
    </div>
  );
}
