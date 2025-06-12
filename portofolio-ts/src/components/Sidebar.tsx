import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Mobile toggle */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white rounded-md hover:bg-[#3d1a64]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* AnimatePresence handles unmount */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0  bg-opacity-40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar Panel */}
              <motion.div
                className="fixed top-0 right-0 h-full w-64  shadow-2xl p-6 flex flex-col gap-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleSmoothScroll(id)}
                    className="text-white text-lg text-left hover:bg-[#6f42c1] px-4 py-2 rounded-md transition"
                  >
                    {label}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop nav */}
      <nav className="hidden sm:flex justify-end gap-4 p-4 text-white">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleSmoothScroll(id)}
            className="hover:bg-[#6f42c1] px-4 py-2 rounded-xl duration-300 cursor-pointer transition-colors"
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
