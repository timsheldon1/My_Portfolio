import { Github, Linkedin, Mail } from 'lucide-react';
import { workHistory } from '@/data/profile';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  ...(workHistory.length > 0 ? [{ name: 'Experience', href: '#experience' }] : []),
  { name: 'What I Do', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/timsheldon1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/timsheldon-oure/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:timsheldonoure1@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-dark-primary border-t border-dark-tertiary/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="font-serif text-xl text-text-primary inline-block mb-1">
              Timsheldon<span className="text-accent-warm">.</span>
            </a>
            <p className="text-text-tertiary text-xs uppercase tracking-wider">Full Stack Developer based in Nairobi</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-text-tertiary hover:text-text-primary transition-colors text-xs uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-dark-tertiary flex items-center justify-center text-text-tertiary hover:text-accent-warm hover:border-accent-warm/40 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-tertiary/50 mb-8" />

        {/* Copyright */}
        <p className="text-text-tertiary/60 text-xs text-center tracking-wider">
          © {new Date().getFullYear()} Timsheldon Oure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
