import React, { useState } from 'react'
import Sidebar from "./Sidebar";


// Define Props (if needed)
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

  const portfolioName = "Orlando's Portfolio."

  return (
    <>
      <header className="flex flex-col sm:flex-row bg-[#4a227d] items-center justify-between px-2 py-2 sm:py-0">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold p-2 sm:p-4">{portfolioName}</h1>
        </div>
        <div className="w-full sm:w-auto">
          <Sidebar />
        </div>
      </header>
    </>
  )
}

export default Navbar