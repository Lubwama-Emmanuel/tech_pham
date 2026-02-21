"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10"
          : "bg-transparent"
      }`}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        ...(scrolled && {
          backgroundColor: "rgba(15, 15, 35, 0.85)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo — left */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center flex-shrink-0"
          >
            <div className="relative h-12 w-40 overflow-hidden">
              <Image
                src="/logo_word.png"
                alt="Lubech"
                fill
                className="object-contain scale-[3] origin-center"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation — absolutely centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Get Started — right */}
          <div className="hidden md:flex flex-shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-6 py-2 rounded-full hover:glass-strong transition-all duration-200 border border-white/20"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="block text-center w-full glass text-white px-6 py-2 rounded-full hover:glass-strong transition-all duration-200 border border-white/20"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
