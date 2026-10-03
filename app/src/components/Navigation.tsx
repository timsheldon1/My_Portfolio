import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'What I Do', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed nav bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 md:h-20">

            {/* Hamburger button - always visible */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pointer-events-auto relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-[2px] w-6 bg-[#f5f0e8] transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#f5f0e8] transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#f5f0e8] transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-[#2c2622] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => scrollToSection(link.href)}
                  className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f0e8] hover:text-[#a0897a] transition-colors duration-200 py-3 leading-tight"
                >
                  {link.name}
                </motion.button>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.06, duration: 0.4 }}
                className="mt-8"
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-[#a0897a] text-[#2c2622] hover:bg-[#b09a8c] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 rounded-none transition-colors"
                >
                  Hire Me
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center gap-6 mt-10"
              >
                <a
                  href="https://github.com/timsheldon1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a716a] hover:text-[#f5f0e8] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/timsheldon-oure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a716a] hover:text-[#f5f0e8] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
