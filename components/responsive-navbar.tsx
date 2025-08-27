"use client";

import { useState } from "react";
import { Link } from "@heroui/link";
import Image from "next/image";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full py-6 md:py-16">
      <div className="container mx-auto px-6 md:px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            className="text-2xl font-bold text-green-600"
            href="/"
            onClick={closeMobileMenu}
          >
            <Image
              alt="DhruboTara Logo"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
              height={100}
              src={"/images/logo.png"}
              width={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-gray-700 hover:text-green-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 pb-4 border-t border-gray-200`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors block px-4 py-2 rounded hover:bg-gray-50"
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
