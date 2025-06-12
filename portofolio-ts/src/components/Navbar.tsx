import React from 'react'
import Sidebar from "./Sidebar";
import './Navbar.css';
import { motion } from 'framer-motion';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  const portfolioName = "Orlando's Portfolio."

  return (
    <>
      <header className="navbar shadow-lg flex flex-col sm:flex-row  items-center justify-between px-2 py-2 sm:py-0">
        <div>
          <motion.a 
          href="/home"
          className="text-2xl sm:text-3xl md:text-4xl font-bold p-2 sm:p-4"
          animate={{
            scale: [1, 1.05, 1],
            color: ["#9B4AFF", "#e0b0ff", "#9B4AFF"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          {portfolioName}
        </motion.a>
        </div>
        <div className="w-full sm:w-auto">
          <Sidebar />
        </div>
      </header>

       
    </>
  )
}

export default Navbar