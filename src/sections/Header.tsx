import ClassLogo from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 sticky top-0 z-10 border-b-2 border-white/15 md:border-none backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur-2xl">
        <div className="absolute inset-0 backdrop-blur -z-10"></div>
          <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
            <ClassLogo className="h-6 w-6" />
          </div>
          <div className="hidden md:flex">
            <nav className="flex gap-8 text-white/70 hover:text-white">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Students
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Teachers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-all"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex justify-content gap-4">
            <Button>Enter ClassCraft AI</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
