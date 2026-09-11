/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col transition-colors duration-300">
        {/* Top Fixed Header with Dark/Light Toggle */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-grow">
          {/* 1. Hero with animated rotating word & marquee */}
          <Hero />

          {/* 2. Practical Industry Experience (Tata iQ Job Simulation) */}
          <ExperienceSection />

          {/* 3. Who Builds This (About Jayesh Suthar) */}
          <AboutSection />

          {/* 4. Featured Production-Grade Projects */}
          <ProjectsSection />

          {/* 5. Accredited Certifications (Google, Tata, Coding Ninjas) */}
          <CertificatesSection />

          {/* 6. Ready to Connect / Direct Inquiry Section */}
          <ContactSection />
        </main>

        {/* Floating WhatsApp Quick Connect */}
        <FloatingWhatsApp />

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
