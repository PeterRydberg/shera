import Link from "next/link";
import { Button } from "./ui/button";
import { AuthButton } from "./AuthButton";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between p-1">
      <Button asChild variant="ghost" className="text-lg">
        <Link href="/home">
          <Image
            src="/shera_icon.svg"
            alt="Shera Logo"
            width={25}
            height={25}
          />
        </Link>
      </Button>
      <AuthButton />
    </div>
  );
};

export default NavBar;
