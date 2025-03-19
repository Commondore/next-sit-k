import { logoutAction } from "@/actions/login.action";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { IUser } from "@/interfaces/auth";
import Image from "next/image";

interface Props {
  user: IUser | null;
}

export const Header = ({ user }: Props) => {
  return (
    <header className="py-4 border boder-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/next.svg"
            width={100}
            height={50}
            alt="Logo"
            style={{ objectFit: "cover" }}
          />
        </div>
        <Navigation />
        {user && <div className="ml-4">{user?.email}</div>}
        {user && (
          <form action={logoutAction}>
            <Button type="submit" size={"sm"}>
              Выйти
            </Button>
          </form>
        )}
      </div>
    </header>
  );
};
