import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

// Define Props Interface (for future flexibility)
interface SidebarProps {
  className?: string; // Optional className prop
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  {id: "skills", label: "Skills"},
  { id: "contact", label: "Contact" },
];

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after clicking a link on mobile
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className || ""}`}>
      {/* Hamburger menu button for mobile */}
      <div className="sm:hidden">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-[#3d1a64] focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#3d1a64] rounded-md shadow-lg py-1 z-10">
            <ul className="flex flex-col">
              {navItems.map(({ id, label }) => (
                <li
                  key={id}
                  className="px-4 py-2 hover:bg-[#6f42c1] cursor-pointer"
                  onClick={() => handleSmoothScroll(id)}
                >
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:block text-[16px]">
        <ul className="flex justify-end gap-2 p-4 m-2">
          {navItems.map(({ id, label }) => (
            <li
              key={id}
              className="rounded-2xl bg-[#3d1a64] p-2 cursor-pointer hover:bg-[#6f42c1] active:bg-[#3d1a64]"
              onClick={() => handleSmoothScroll(id)}
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar