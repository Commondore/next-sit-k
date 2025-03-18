"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";
import { navData } from "@/components/navigation/navData";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/auth-context";

export const Navigation = () => {
  const { isAuth } = useAuthContext();

  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {navData.map((link) => {
        if (!isAuth && link.href === "/promos") {
          return null;
        }
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
      {!isAuth && (
        <Button size={"sm"} asChild>
          <Link href="/login">Войти</Link>
        </Button>
      )}
    </nav>
  );
};
