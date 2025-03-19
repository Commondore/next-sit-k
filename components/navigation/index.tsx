import Link from "next/link";
import { navData } from "@/components/navigation/navData";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/navigation/nav-link";
import { getIsAuth } from "@/lib/server-helpers";

export const Navigation = async () => {
  const isAuth = await getIsAuth();
  console.log(isAuth);

  return (
    <nav className="flex gap-4">
      {navData.map((link) => {
        if (!isAuth && link.href === "/promos") {
          return null;
        }
        return (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
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
