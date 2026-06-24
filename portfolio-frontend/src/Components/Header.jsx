import { useState } from "react";

export const Header = () => {
     const [isOpen, setIsOpen] = useState(false);

     const headerVals = [
          "About",
          "Skills",
          "Projects",
          "Experience",
          "Coding Profiles",
     ];

     return (
          <header className="fixed top-0 w-full z-[100] bg-white shadow">
               <div className="max-w-6xl  mx-auto px-4 py-4 flex items-center justify-around">

                    {/* Logo */}

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-8">
                         {headerVals.map((val, index) => (
                              <a
                                   key={index}
                                   className="cursor-pointer hover:underline"
                              >
                                   {val}
                              </a>
                         ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                         className="md:hidden text-2xl"
                         onClick={() => setIsOpen(!isOpen)}
                    >
                         ☰
                    </button>
               </div>

               {/* Mobile Dropdown */}
               {isOpen && (
                    <nav className="md:hidden bg-white border-t">
                         <div className="flex flex-col items-center py-4 gap-4">
                              {headerVals.map((val, index) => (
                                   <a
                                        key={index}
                                        className="cursor-pointer hover:underline"
                                   >
                                        {val}
                                   </a>
                              ))}
                         </div>
                    </nav>
               )}
               
          </header>
     );
};