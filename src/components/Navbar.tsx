import { useState } from "react";
import logo from "../assets/logo-vr.png";
import { navLinks } from "../constants/index";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const handleToggleNavbar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 hover:text-blue-600">
            <img className="h-10 w-10 mr-2" src={logo} alt="app logo" />
            <span className="text-xl tracking-tight ">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a className="hover:text-blue-600" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:text-blue-600 hover:border-blue-600"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-900 py-2 px-3 rounded-md  hover:text-black "
            >
              Create account
            </a>
          </div>

          <button className="lg:hidden md:flex" onClick={handleToggleNavbar}>
            {isMobileOpen ? (
              <LuX className="h-6 w-6" />
            ) : (
              <LuMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMobileOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul>
              {navLinks.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md ">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-gradient-to-r from-blue-600 to-purple-900 rounded-md"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
