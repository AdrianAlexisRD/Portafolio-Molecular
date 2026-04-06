import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Inicio', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Estudios', href: '#studies' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-[#08DDFF]/10 shadow-lg shadow-[#08DDFF]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-black tracking-tight"
        >
          <span className="text-[#08DDFF]">A</span>
          <span className="text-white">L</span>
          <span className="text-[#08DDFF] ml-1">·</span>
          <span className="text-white/50 text-sm font-medium ml-2">dev</span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                active === link.href
                  ? 'text-[#08DDFF]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-[#08DDFF]/10 border border-[#08DDFF]/20"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA desktop */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(8,221,255,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block px-5 py-2 rounded-xl text-sm font-bold bg-[#08DDFF] text-[#15153D] transition-all duration-300"
        >
          Contáctame
        </motion.a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#08DDFF] origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white/60"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#08DDFF] origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-[#08DDFF]/10"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-white/70 hover:text-[#08DDFF] hover:bg-[#08DDFF]/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
