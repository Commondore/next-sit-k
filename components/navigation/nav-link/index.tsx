"use client";
import cn from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: string;
}

export const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn("underline-offset-2", pathname === href && "underline text-orange-500")}
    >
      {children}
    </Link>
  );
};
