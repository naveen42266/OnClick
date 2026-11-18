import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HistoryTimeline } from '../components/HistoryTimeline';
import { ButtonGallery } from '../components/ButtonGallery';
import { ButtonAnatomy } from '../components/ButtonAnatomy';
import { ButtonStudio } from '../components/ButtonStudio';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-surface-950 text-slate-900 dark:text-slate-100 selection:bg-accent-violet selection:text-white flex flex-col font-montserrat transition-colors duration-200">
      {/* Top Fixed Header with Sound FX toggle & Nav */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Interactive Hero Arena with live Click counter & Confetti */}
        <Hero />

        {/* 2. History & Evolution of Buttons (1888 to Present) */}
        <HistoryTimeline />

        {/* 3. Button Styles: 3D, Magnetic Hover, Neon, Neo-Brutalist, Squishy */}
        <ButtonGallery />

        {/* 4. Anatomy, 6 Lifecycle States, Fitts's Law & a11y */}
        <ButtonAnatomy />

        {/* 5. Interactive Button Studio Customizer & Code Generator */}
        <ButtonStudio />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
