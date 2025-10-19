import { Toaster } from "sonner";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";

type Props = { children: React.ReactNode };

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
        <NavBar />
        <div className="flex w-full flex-1">{children}</div>
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
        <NavBar />
        <div className="w-full">{children}</div>
        <Toaster />
      </div>
      <Footer />
    </>
  );
};
