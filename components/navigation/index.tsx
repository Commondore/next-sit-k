"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { navData } from "@/components/navigation/navData";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {navData.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "underline-offset-2",
              pathname === link.href && "underline text-orange-500"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
