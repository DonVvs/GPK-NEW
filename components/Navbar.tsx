"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-kraft-50/90 backdrop-blur-md border-b border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">

          {/* Logo (Left) */}
          <Link href="/" className="flex items-center space-x-2 group relative z-50">
            <Image
              src="/logo.png"
              alt="Gargi PaperKraft Logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Centered Icon */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[40%] z-20 hidden md:block">
            <div className="bg-forest-900 p-3 rounded-full border-4 border-kraft-50 shadow-lg relative">
              <img
                src="/images/navbar-bag.png"
                alt="Highlight Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation (Right) */}
          <div className="hidden md:flex items-center space-x-8 relative z-30">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-forest-700 hover:text-forest-900 font-medium transition-colors">Home</Link>
              <Link href="/products" className="text-forest-700 hover:text-forest-900 font-medium transition-colors">Products</Link>
              <Link href="/manufacturing" className="text-forest-700 hover:text-forest-900 font-medium transition-colors">Manufacturing</Link>
              <Link href="/about" className="text-forest-700 hover:text-forest-900 font-medium transition-colors">About Us</Link>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-forest-900 text-white rounded-full font-semibold hover:bg-forest-800 transition-all shadow-lg hover:shadow-forest-900/30"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest-900 p-2 hover:bg-forest-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-kraft-50/95 backdrop-blur-xl border-b border-forest-900/10 shadow-xl md:hidden flex flex-col p-6 space-y-4"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-forest-800 text-lg font-medium p-2 hover:bg-forest-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-forest-800 text-lg font-medium p-2 hover:bg-forest-50 rounded-lg"
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              onClick={() => setIsOpen(false)}
              className="text-forest-800 text-lg font-medium p-2 hover:bg-forest-50 rounded-lg"
            >
              Manufacturing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-forest-800 text-lg font-medium p-2 hover:bg-forest-50 rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-forest-800 text-lg font-medium p-2 hover:bg-forest-50 rounded-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


