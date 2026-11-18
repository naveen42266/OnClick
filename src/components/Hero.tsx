import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  RotateCcw, 
  Layers, 
  Sliders, 
  Compass, 
  Zap,
  MousePointer
} from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

type HeroButtonStyle = 'chunky3d' | 'cyberpunk' | 'brutalist' | 'neumorphic' | 'aqua';

export const Hero: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [activeStyle, setActiveStyle] = useState<HeroButtonStyle>('chunky3d');
  const [lastClickedAt, setLastClickedAt] = useState<string>('Never');

  const triggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    setClickCount((prev) => prev + 1);
    setLastClickedAt(new Date().toLocaleTimeString());

    // Play tactile sound based on active style
    if (activeStyle === 'cyberpunk') {
      soundEffects.play('arcade');
    } else if (activeStyle === 'neumorphic') {
      soundEffects.play('thud');
    } else if (activeStyle === 'aqua') {
      soundEffects.play('bubble');
    } else {
      soundEffects.play('mechanical');
    }

    // Trigger confetti every 5 clicks or on first click
    if (clickCount === 0 || (clickCount + 1) % 5 === 0) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x, y },
        colors: ['#06B6D4', '#8B5CF6', '#F59E0B', '#10B981', '#F43F5E'],
        disableForReducedMotion: true,
      });
    }
  };

  const styleOptions: { id: HeroButtonStyle; label: string; desc: string }[] = [
    { id: 'chunky3d', label: '🕹️ 3D Arcade Key', desc: 'Tactile mechanical push with physical spring' },
    { id: 'cyberpunk', label: '⚡ Cyberpunk Glow', desc: 'Neon pulses and radioactive cyan aura' },
    { id: 'brutalist', label: '🎨 Neo-Brutalist', desc: 'Heavy borders & sharp offset drop shadow' },
    { id: 'neumorphic', label: '🫧 Soft Inset', desc: 'Extruded plastic surface with soft shadows' },
    { id: 'aqua', label: '🍬 Aqua Skeuomorph', desc: 'Glossy 2000s jelly button with glass glare' },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden">
      {/* Background ambient radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/10 dark:bg-accent-violet/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
            <span>The Single Most Important Element in UX History</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Every digital journey <br />
            begins with{' '}
            <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-rose bg-clip-text text-transparent">
              OnClick.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
          >
            From 19th-century mechanical doorbells to glossy Mac OS X jelly and modern physics-driven micro-interactions. 
            Explore the history, dissect the anatomy, and experience the tactile physics of the button.
          </motion.p>
        </div>

        {/* Central Interactive Hero Canvas */}
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-surface-950/90 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-6 sm:p-10 shadow-xl dark:shadow-2xl backdrop-blur-xl relative transition-colors duration-200">
          
          {/* Top Controls: Switch Button Archetype */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Layers className="w-4 h-4 text-accent-violet" />
              <span>TEST ARCHETYPE:</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {styleOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    soundEffects.play('switch');
                    setActiveStyle(opt.id);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeStyle === opt.id
                      ? 'bg-accent-violet text-white shadow-glow-violet/50'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Button Arena */}
          <div className="py-16 sm:py-20 flex flex-col items-center justify-center relative min-h-[300px]">
            {/* Background grid dots */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{
                backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStyle}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="relative z-10 flex flex-col items-center gap-4"
              >
                {/* 1. Chunky 3D Arcade Push Key */}
                {activeStyle === 'chunky3d' && (
                  <button
                    onClick={triggerClick}
                    className="group relative select-none cursor-pointer outline-none transition-all duration-75 active:translate-y-2 focus-visible:ring-4 focus-visible:ring-accent-cyan"
                  >
                    {/* Shadow / Base layer */}
                    <div className="absolute inset-0 translate-y-3 rounded-2xl bg-indigo-950 border-2 border-indigo-900 shadow-xl" />
                    {/* Intermediate Bevel layer */}
                    <div className="absolute inset-0 translate-y-1.5 rounded-2xl bg-indigo-800" />
                    {/* Top Face */}
                    <div className="relative px-10 py-5 rounded-2xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 border-t border-indigo-300 text-white font-black text-xl tracking-wider uppercase shadow-inner flex items-center gap-3">
                      <MousePointer className="w-6 h-6 text-indigo-200 group-hover:scale-110 transition-transform" />
                      <span>Press Me</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                    </div>
                  </button>
                )}

                {/* 2. Cyberpunk Glow Button */}
                {activeStyle === 'cyberpunk' && (
                  <button
                    onClick={triggerClick}
                    className="relative px-12 py-5 rounded-xl bg-slate-900 dark:bg-slate-950 text-cyan-300 dark:text-accent-cyan font-black text-lg tracking-widest uppercase border border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] active:scale-95 transition-all duration-150 overflow-hidden group outline-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                    <span className="relative flex items-center gap-3">
                      <Zap className="w-5 h-5 text-accent-cyan animate-bounce" />
                      <span>Execute Pulse</span>
                    </span>
                  </button>
                )}

                {/* 3. Neo-Brutalist High Contrast */}
                {activeStyle === 'brutalist' && (
                  <button
                    onClick={triggerClick}
                    className="px-10 py-5 bg-[#FFE600] text-black font-extrabold text-xl uppercase tracking-wider rounded-lg border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-brutal-pressed transition-all duration-100 outline-none flex items-center gap-3"
                  >
                    <Sparkles className="w-6 h-6 text-black" />
                    <span>Click Hard!</span>
                  </button>
                )}

                {/* 4. Neumorphic Soft Inset */}
                {activeStyle === 'neumorphic' && (
                  <button
                    onClick={triggerClick}
                    className="px-10 py-5 rounded-2xl bg-slate-100 dark:bg-[#0F172A] text-slate-700 dark:text-slate-300 font-bold text-lg shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] dark:shadow-neumorph-flat active:shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-neumorph-pressed active:text-accent-violet dark:active:text-accent-cyan transition-all duration-150 outline-none flex items-center gap-3 border border-slate-200/50 dark:border-slate-800/40"
                  >
                    <div className="w-3 h-3 rounded-full bg-accent-violet shadow-[0_0_10px_#8b5cf6]" />
                    <span>Soft Tactile</span>
                  </button>
                )}

                {/* 5. Aqua Skeuomorph (Mac OS X 2001) */}
                {activeStyle === 'aqua' && (
                  <button
                    onClick={triggerClick}
                    className="relative px-12 py-4 rounded-full font-bold text-lg text-white shadow-aqua active:translate-y-0.5 active:brightness-95 transition-all outline-none border border-sky-600/50 overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #60A5FA 0%, #2563EB 50%, #1D4ED8 51%, #3B82F6 100%)',
                    }}
                  >
                    {/* Top glass pill reflection */}
                    <div className="absolute top-1 left-3 right-3 h-1/2 bg-gradient-to-b from-white/70 to-transparent rounded-full pointer-events-none" />
                    <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] flex items-center gap-2">
                      Aqua Aqua
                    </span>
                  </button>
                )}

                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-2">
                  Tip: Notice the difference in depth, click sound, active feedback, and hit travel.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Telemetry HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Total Clicks</span>
              <span className="text-2xl font-black text-accent-violet dark:text-accent-cyan">{clickCount}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Active State</span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1 inline-block capitalize px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">
                {activeStyle}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Last Pressed</span>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-1 inline-block">
                {lastClickedAt}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  soundEffects.play('switch');
                  setClickCount(0);
                }}
                className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
                title="Reset click count"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Count</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="#evolution"
            onClick={() => soundEffects.play('pop')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Compass className="w-4 h-4 text-accent-amber" />
            <span>1. History & Evolution</span>
          </a>

          <a
            href="#gallery"
            onClick={() => soundEffects.play('pop')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Layers className="w-4 h-4 text-accent-cyan" />
            <span>2. 20+ Button Styles</span>
          </a>

          <a
            href="#anatomy"
            onClick={() => soundEffects.play('pop')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Sliders className="w-4 h-4 text-accent-violet" />
            <span>3. Button Anatomy & a11y</span>
          </a>

          <a
            href="#studio"
            onClick={() => soundEffects.play('pop')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Zap className="w-4 h-4 text-accent-emerald" />
            <span>4. Interactive Button Studio</span>
          </a>
        </div>
      </div>
    </section>
  );
};
