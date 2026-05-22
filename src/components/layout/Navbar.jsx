import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Blog", href: "/Blog" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ inBlog = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-[#0d1520]/95 backdrop-blur-md shadow-sm"
              : "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")}>
            <div className="flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="gh logo"
                className={`h-12 w-auto object-contain transition-all duration-300 ${isDark ? 'invert' : ''}`}
                style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
              />
              <span className="text-[#2C2C2C] font-light text-xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Gloria Hernández
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks.map(link => {
              const href = inBlog && link.href.startsWith('#') ? `/${link.href}` : link.href;
              return (
              <a
                key={link.label}
                href={href}
                className="text-sm text-[#5C5C5C] hover:text-[#C4368C] transition-colors"
              >
                {link.label}
              </a>
            );
            })}
          </div>

          {/* Dark mode toggle + CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Cambiar modo"
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-[#1e3448] hover:bg-[#264560] text-sky-300"
                  : "bg-[#F8E8F4] hover:bg-[#F0D0E8] text-[#5C5C5C]"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contacto">
              <button className="text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2" style={{ backgroundColor: '#1B2E3C' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Contacto
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Cambiar modo"
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-[#1e3448] text-sky-300"
                  : "bg-[#F8E8F4] text-[#5C5C5C]"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`w-9 h-9 flex items-center justify-center rounded-full ${
                isDark ? "bg-[#2a0a18]" : "bg-[#F8E8F4]"
              }`}
            >
              {mobileOpen
                ? <X className={`w-4 h-4 ${isDark ? "text-[#F5E8EE]" : "text-[#2C2C2C]"}`} />
                : <Menu className={`w-4 h-4 ${isDark ? "text-[#F5E8EE]" : "text-[#2C2C2C]"}`} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-16 left-0 right-0 z-40 border-b shadow-lg ${
              isDark ? "bg-[#0d1520] border-[#1e3448]" : "bg-white border-[#F0D0E8]"
            }`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(link => {
                const href = inBlog && link.href.startsWith('#') ? `/${link.href}` : link.href;
                return (
                <a
                  key={link.label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium py-1 transition-colors ${
                    isDark ? "text-[#8AAFC8] hover:text-[#b8d4e8]" : "text-[#5C5C5C] hover:text-[#C4368C]"
                  }`}
                >
                  {link.label}
                </a>
              );
              })}
              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                <button className="w-full text-white py-3 rounded-full font-medium mt-4" style={{ backgroundColor: '#1B2E3C' }}>
                  Contacto
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}