import { Link, NavLink } from "react-router";

export const Header = () => {
     const navLinkClass = ({ isActive }) => 
          `transition-colors duration-200 ${isActive ? "text-cyan-600" : "text-cyan-900 hover:text-cyan-600"}`;

     return (
          <header className="header bg-cyan-100 h-20   border border-cyan-200  rounded-xl flex justify-between items-center m-top-4 px-6 py-4 fixed w-full top-0 z-100 shadow-sm">
               {/* Left Header: Name / Branding */}
               <div>
                    <Link to="/">
                         <h1 className="text-3xl font-extrabold text-cyan-900 tracking-tight sm:text-4xl">
                              Hariom Singh Thakur
                         </h1>
                    </Link>
               </div>

               {/* Right Header: Navigation Links */}
               <nav className="flex items-center gap-6 text-base font-semibold">
                    <NavLink 
                         to="/about" 
                         className={navLinkClass}
                    >
                         About
                    </NavLink>
                    <NavLink 
                         to="/projects" 
                         className={navLinkClass}
                    >
                         Projects
                    </NavLink>
                    <NavLink 
                         to="/contact" 
                         className={navLinkClass}
                    >
                         Contact
                    </NavLink>
               </nav>
          </header>
     )
}