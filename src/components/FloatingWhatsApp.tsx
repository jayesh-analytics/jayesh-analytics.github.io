import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { WhatsAppLogo } from './Logos';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--ink)] shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat directly with Jayesh on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[var(--muted)] hover:text-[var(--ink)] ml-1 cursor-pointer"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/918302763167?text=Hi%20Jayesh%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message to Jayesh Suthar"
        whileHover={{
          scale: 1.08,
          boxShadow: '0 0 24px rgba(16, 185, 129, 0.55), 0 8px 16px rgba(0, 0, 0, 0.25)',
        }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative group p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center cursor-pointer"
      >
        <WhatsAppLogo className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--bg)] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--bg)]" />
      </motion.a>
    </div>
  );
};
