import React from 'react';
import { ArrowUp, Heart, Sparkles, ExternalLink, MousePointerClick } from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEffects.play('pop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-surface-950 py-12 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet">
              <MousePointerClick className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight">OnClick</span>
              <p className="text-xs text-slate-500">
                Created by <strong className="text-slate-800 dark:text-slate-300">Naveen</strong> • The Anatomy, History & Playground of the Button
              </p>
            </div>
          </div>

          {/* Links & Sister Project */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://designversev2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.play('switch')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-accent-amber/50 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
              <span>Explore Designverse</span>
              <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-sm"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-500 dark:text-slate-600 flex items-center justify-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-accent-rose fill-accent-rose inline" />
          <span>audio physics and tactile micro-interactions.</span>
        </div>
      </div>
    </footer>
  );
};
