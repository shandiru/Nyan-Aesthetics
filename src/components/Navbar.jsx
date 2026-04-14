"use client";
import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F0FBFB] fixed w-full z-50">
      <div className="max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* new logo */}
        <div className="flex items-center rounded-md  bg-[#3C3C3B]">
          <img
            src="/logo.png"
            alt="Nyan Aesthetics logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Desktop Navigation (Hidden on tablet & below) */}
        <nav className="hidden lg:flex items-center space-x-10">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#4A4A4A] text-[15px] font-normal hover:text-[#3C3C3B] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section (Hidden on tablet & below) */}
        <div className="hidden xl:flex items-center space-x-6 text-sm text-gray">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-gray" />
            <a href="tel:+447423294552" className="text-gray hover:text-rose transition-colors">+44 7423 294552</a>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4 text-gray" />
            <a href="mailto:info@nyanaesthetics.co.uk" className="text-gray hover:text-rose transition-colors">info@nyanaesthetics.co.uk</a>
          </div>

          <button className="bg-primary text-white rounded-md px-5 py-2 text-sm font-medium shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:bg-[#2d2d2c] transition-all duration-200">
            Book Consultation
          </button>
        </div>

        {/* Hamburger Menu (visible on mobile + tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#4A4A4A] hover:text-[#3C3C3B] transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F0FBFB] px-6 py-4 space-y-4 text-[#4A4A4A]">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-[#4A4A4A] hover:text-[#3C3C3B] transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E5E2E1] space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray">
              <Phone className="h-4 w-4" />
              <a href="tel:+447928475214" className="text-gray hover:text-rose transition-colors">+44 7928 475214</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@beautybygemma.co.uk" className="text-gray hover:text-rose transition-colors">info@beautybygemma.co.uk</a>
            </div>
            <button className="w-full mt-3 bg-primary text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#2d2d2c] transition-all">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}