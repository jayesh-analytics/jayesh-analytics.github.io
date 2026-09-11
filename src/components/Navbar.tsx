import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Send,
  Sun,
  Moon,
  Mail,
} from 'lucide-react';
import { GitHubLogo, LinkedInLogo } from './Logos';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Location */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-[var(--border)] shadow-xs bg-[var(--bg-card)] shrink-0 transition-transform group-hover:scale-105">
            <img
              src="/profile.png"
              alt="Jayesh Suthar"
              className="w-full h-full object-cover object-center filter brightness-[1.04]"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png') {
                  target.src = 'https://raw.githubusercontent.com/jayesh-analytics/jayesh-analytics.github.io/main/images/profile.png';
                }
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[var(--ink)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                Jayesh Suthar
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-[var(--muted)] leading-none mt-1">
              Sirohi, Rajasthan
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border)] px-3 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-[var(--ink-light)] hover:text-[var(--ink)] rounded-full hover:bg-[var(--bg-alt)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle, Socials, Contact Button */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink-light)] hover:text-[var(--ink)] hover:border-[var(--border-hover)] transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/jayesh-analytics"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink-light)] hover:text-[var(--ink)] hover:border-[var(--border-hover)] transition-all"
          >
            <GitHubLogo className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jayesh-s-5566b9220/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink-light)] hover:text-blue-500 hover:border-[var(--border-hover)] transition-all"
          >
            <LinkedInLogo className="w-4 h-4" />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink)]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink)]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-4 py-4 space-y-3 shadow-md"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[var(--ink-light)] hover:text-[var(--ink)] hover:bg-[var(--bg-alt)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[var(--border)] flex items-center gap-2">
              <a
                href="https://github.com/jayesh-analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--ink)] text-xs font-semibold flex items-center justify-center gap-2"
              >
                <GitHubLogo className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jayesh-s-5566b9220/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-blue-500 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <LinkedInLogo className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:sutharjayesh607@gmail.com"
                className="flex-1 py-2 px-3 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
