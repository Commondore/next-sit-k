import { Navigation } from "@/components/navigation";
import Image from "next/image";

export const Header = ({ isAuth }: { isAuth: boolean }) => {
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
        <Navigation isAuth={isAuth} />
      </div>
    </header>
  );
};
