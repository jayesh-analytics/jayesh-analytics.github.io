import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
} from 'lucide-react';
import { GitHubLogo, LinkedInLogo, WhatsAppLogo } from './Logos';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    roleOrCompany: '',
    message: '',
  });
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.emailOrPhone && !formData.message) {
      setSubmittedStatus('Please enter your name or message before sending.');
      setTimeout(() => setSubmittedStatus(null), 3000);
      return;
    }

    const subject = `Opportunity Inquiry - Jayesh Suthar Portfolio (${
      formData.name || 'Recruiter'
    })`;
    const body = `Hi Jayesh,\n\nName: ${formData.name}\nCompany/Role: ${formData.roleOrCompany}\nContact: ${formData.emailOrPhone}\n\nMessage:\n${formData.message}`;

    const mailtoUrl = `mailto:${portfolioData.cta.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
    setSubmittedStatus('Opening your email composer...');
    setTimeout(() => setSubmittedStatus(null), 4000);
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Jayesh,\n\nMy name is ${formData.name || 'a visitor / recruiter'}${
      formData.roleOrCompany ? ` from ${formData.roleOrCompany}` : ''
    }.\n\nMessage: ${
      formData.message || 'I came across your portfolio and would like to connect.'
    }\n\nMy Contact: ${formData.emailOrPhone || 'Provided here'}`;

    const url = `https://wa.me/918302763167?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
    setSubmittedStatus('Redirecting to WhatsApp...');
    setTimeout(() => setSubmittedStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#c25e36] dark:text-[#ea7a52] bg-[#c25e36]/10 border border-[#c25e36]/25">
            GET IN TOUCH
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-normal text-[var(--ink)] tracking-tight">
            Ready to connect?
          </h2>

          <p className="text-xs sm:text-sm text-[var(--ink-light)] max-w-lg mx-auto leading-relaxed">
            Get clarity on where data analytics, automated reporting, and AI can improve your operations. Start with a direct message or inquiry.
          </p>
        </div>

        {/* Send Direct Inquiry Card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-xs relative">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-soft-border)]">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--ink)]">
                Direct Inquiry Form
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Response
            </span>
          </div>

          <form onSubmit={handleSendViaEmail} className="space-y-3">
            {/* Field 1: Name */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink)] mb-1">
                Your Name / Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Hiring Manager / Operations Lead"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-9 px-3 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink)] text-xs focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--muted)]"
              />
            </div>

            {/* Fields 2 & 3: Contact & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-[var(--ink)] mb-1">
                  Your Contact (Email / Phone)
                </label>
                <input
                  type="text"
                  placeholder="name@company.com"
                  value={formData.emailOrPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, emailOrPhone: e.target.value })
                  }
                  className="w-full h-9 px-3 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink)] text-xs focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--muted)]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[var(--ink)] mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. FinTech / Retail / Agency"
                  value={formData.roleOrCompany}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      roleOrCompany: e.target.value,
                    })
                  }
                  className="w-full h-9 px-3 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink)] text-xs focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--muted)]"
                />
              </div>
            </div>

            {/* Field 4: Message */}
            <div>
              <label className="block text-[11px] font-medium text-[var(--ink)] mb-1">
                Role Details or Analytics Project Scope
              </label>
              <textarea
                rows={2}
                placeholder="Tell Jayesh about the data analyst role, reporting requirement, or analytics challenge..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-18 p-2.5 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--ink)] text-xs focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none placeholder:text-[var(--muted)]"
              />
            </div>

            {submittedStatus && (
              <div className="p-2 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-soft-border)] text-[var(--accent)] text-xs font-mono text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{submittedStatus}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email</span>
              </button>

              <motion.button
                type="button"
                onClick={handleSendViaWhatsApp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.45)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
              >
                <WhatsAppLogo className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </motion.button>
            </div>

            {/* Contact Details Row */}
            <div className="pt-3 mt-2.5 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[var(--ink-light)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 font-medium text-[var(--ink)]">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {portfolioData.cta.email}
                </span>
                <span className="flex items-center gap-1.5 text-[var(--muted)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--muted)]" />
                  Sirohi, Rajasthan, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.cta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-light)] hover:text-[var(--ink)] flex items-center gap-1 transition-colors"
                >
                  <GitHubLogo className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.cta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-light)] hover:text-blue-500 flex items-center gap-1 transition-colors"
                >
                  <LinkedInLogo className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
