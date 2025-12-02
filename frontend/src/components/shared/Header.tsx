
import ThemeSwitchButton from "../ui/ThemeSwitchButton";
import { MessageCircle } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-gray-600 bg-base-300">
    
        <div className="p-2 md:p-3 flex justify-between items-center">
          
          {/* Left: Logo / App Title */}
          <div className="flex items-center gap-2">
            <MessageCircle size={28} className="text-blue-600 dark:text-blue-400" />
            <h1 className="font-semibold text-lg md:text-xl text-base-content">ChatWave</h1>
          </div>

          {/* Right: Theme Switch */}
          <div className="flex items-center gap-4">
            <ThemeSwitchButton />
          </div>

        </div>
   
    </header>
  );
}

export default Header;
