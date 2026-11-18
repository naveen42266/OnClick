import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, ExternalLink, MousePointerClick, Menu, X, Sun, Moon } from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMuted, setIsMuted] = useState(soundEffects.getIsMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const muted = soundEffects.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEffects.play('switch');
    }
  };

  const handleThemeToggle = () => {
    soundEffects.play('pop');
    toggleTheme();
  };

  const navLinks = [
    { label: 'Evolution', href: '#evolution' },
    { label: 'Gallery & Styles', href: '#gallery' },
    { label: 'Anatomy & a11y', href: '#anatomy' },
    { label: 'Button Studio', href: '#studio' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    soundEffects.play('bubble');
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-surface-950/80 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-violet to-accent-cyan p-0.5 shadow-glow-violet transition-transform group-hover:scale-105 active:scale-95 flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-surface-950 rounded-[10px] flex items-center justify-center">
              <MousePointerClick className="w-5 h-5 text-accent-violet dark:text-accent-cyan transition-transform group-hover:rotate-12" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-900 to-accent-violet dark:from-white dark:via-slate-200 dark:to-accent-cyan bg-clip-text text-transparent">
                OnClick
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-accent-violet/10 text-accent-violet border border-accent-violet/30">
                Interactive Lab
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">The Science & Art of the Button</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all active:scale-90"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute click sounds" : "Mute click sounds"}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all active:scale-90 ${
              isMuted
                ? 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                : 'bg-accent-violet/10 border-accent-violet/40 text-accent-violet hover:bg-accent-violet/20 shadow-glow-violet/20'
            }`}
            title={isMuted ? "Click sound is muted" : "Click sound is enabled"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isMuted ? "Muted" : "FX On"}</span>
          </button>

          {/* Designverse Sister Project Badge */}
          <a
            href="https://designversev2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.play('pop')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-accent-cyan/50 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all group"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-amber group-hover:rotate-45 transition-transform" />
            <span>Designverse</span>
            <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundEffects.play('switch');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-surface-950/95 backdrop-blur-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://designversev2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-amber" />
              Visit Designverse v2
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      )}
    </header>
  );
};
