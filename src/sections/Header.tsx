import ClassLogo from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b-2 border-white/15">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="h-8 w-8">
            <div className="border h-9 w-9 rounded-lg inline-flex items-center justify-center border-white/15">
              <ClassLogo className="h-6 w-6"/>
            </div>
          </div>
          <div className="flex justify-content gap-4">
            <button className="relative py-2 px-3 rounded-lg font-sm text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <span>
                Enter ClassCraft AI
              </span>
            </button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
