"use client"
import React, { useState } from "react"

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Lore", href: "#lore" },
    { name: "Factions", href: "#factions" },
    { name: "Gallery", href: "#gallery" },
    { name: "Chronicles", href: "#chronicles" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/30 backdrop-blur-sm shadow-lg shadow-black/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-3xl font-cinzel font-bold text-amber-300 tracking-wider"
          style={{ textShadow: "0 0 10px rgba(252, 211, 77, 0.7)" }}
        >
          AETHELGARD
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 font-merriweather text-lg transition-colors duration-300 border-b-2 border-transparent hover:border-amber-400/50 pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#preorder"
          className="hidden md:block bg-amber-600/80 text-white font-bold py-2 px-6 rounded-sm border-2 border-amber-500 hover:bg-amber-500 transition-all duration-300 shadow-md hover:shadow-amber-400/20"
        >
          Pre-order
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-300 hover:text-amber-400"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black/90 backdrop-blur-md`}
      >
        <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-amber-400 font-merriweather text-lg transition-colors duration-300 py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#preorder"
            onClick={() => setIsOpen(false)}
            className="bg-amber-600/80 text-white font-bold mt-4 py-2 px-8 rounded-sm border-2 border-amber-500 hover:bg-amber-500 transition-all duration-300 shadow-md"
          >
            Pre-order Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
