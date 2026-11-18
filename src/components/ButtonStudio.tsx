import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sliders, 
  Copy, 
  Check, 
  Volume2, 
  Play
} from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

type SoundType = 'mechanical' | 'bubble' | 'arcade' | 'switch' | 'thud' | 'pop' | 'success';

export const ButtonStudio: React.FC = () => {
  const [text, setText] = useState('Build With Me');
  const [radius, setRadius] = useState(12);
  const [paddingX, setPaddingX] = useState(28);
  const [paddingY, setPaddingY] = useState(14);
  const [depth, setDepth] = useState(4);
  const [colorTheme, setColorTheme] = useState<'indigo' | 'cyan' | 'rose' | 'amber' | 'emerald' | 'dark'>('indigo');
  const [shadowStyle, setShadowStyle] = useState<'none' | 'glow' | 'brutal' | 'soft'>('glow');
  const [soundChoice, setSoundChoice] = useState<SoundType>('mechanical');
  const [copied, setCopied] = useState(false);

  const colorsMap = {
    indigo: {
      bg: 'bg-indigo-600',
      hover: 'hover:bg-indigo-500',
      activeBg: 'active:bg-indigo-700',
      border: 'border-indigo-400',
      shadowColor: '#4338ca',
      textColor: 'text-white',
      glow: 'shadow-[0_0_20px_rgba(99,102,241,0.5)]',
    },
    cyan: {
      bg: 'bg-cyan-500',
      hover: 'hover:bg-cyan-400',
      activeBg: 'active:bg-cyan-600',
      border: 'border-cyan-300',
      shadowColor: '#0891b2',
      textColor: 'text-surface-950',
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    },
    rose: {
      bg: 'bg-rose-600',
      hover: 'hover:bg-rose-500',
      activeBg: 'active:bg-rose-700',
      border: 'border-rose-400',
      shadowColor: '#be123c',
      textColor: 'text-white',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.5)]',
    },
    amber: {
      bg: 'bg-amber-500',
      hover: 'hover:bg-amber-400',
      activeBg: 'active:bg-amber-600',
      border: 'border-amber-300',
      shadowColor: '#b45309',
      textColor: 'text-slate-950',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.5)]',
    },
    emerald: {
      bg: 'bg-emerald-600',
      hover: 'hover:bg-emerald-500',
      activeBg: 'active:bg-emerald-700',
      border: 'border-emerald-400',
      shadowColor: '#047857',
      textColor: 'text-white',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]',
    },
    dark: {
      bg: 'bg-slate-900',
      hover: 'hover:bg-slate-800',
      activeBg: 'active:bg-slate-950',
      border: 'border-slate-700',
      shadowColor: '#020617',
      textColor: 'text-slate-200',
      glow: 'shadow-[0_0_20px_rgba(15,23,42,0.8)]',
    },
  };

  const currentTheme = colorsMap[colorTheme];

  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play(soundChoice);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 25,
      spread: 45,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      }
    });
  };

  // Generate exported code
  const activeClass = depth > 0 ? 'active:translate-y-1' : 'active:scale-95';
  const shadowClass = shadowStyle === 'glow' ? currentTheme.glow : shadowStyle === 'brutal' ? 'border-2 border-black shadow-[4px_4px_0_#000]' : 'shadow-md';

  const generatedTailwind = `<button
  className="${currentTheme.bg} ${currentTheme.hover} ${currentTheme.textColor} font-bold text-sm tracking-wide transition-all duration-100 ${shadowClass} ${activeClass}"
  style={{
    padding: '${paddingY}px ${paddingX}px',
    borderRadius: '${radius}px',
    boxShadow: ${depth > 0 ? `'0 ${depth}px 0 ${currentTheme.shadowColor}'` : 'undefined'}
  }}
>
  ${text}
</button>`;

  const copyCode = () => {
    navigator.clipboard.writeText(generatedTailwind);
    soundEffects.play('pop');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="studio" className="py-20 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-accent-emerald mb-4 shadow-sm">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            The Button Studio & Lab
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Craft your own button in real-time. Tweak corner radius, extrusion depth, color, shadows, and click audio — then export production-ready code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-lg dark:shadow-none transition-colors duration-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
              <Sliders className="w-5 h-5 text-accent-violet dark:text-accent-cyan" />
              <span>Property Controls</span>
            </h3>

            {/* Button Label */}
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                Button Label
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={24}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-surface-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-accent-violet dark:focus:border-accent-cyan transition-colors"
                placeholder="Button text..."
              />
            </div>

            {/* Color Palette */}
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                Color Palette
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(colorsMap) as (keyof typeof colorsMap)[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      soundEffects.play('switch');
                      setColorTheme(c);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      colorTheme === c
                        ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Shadow & Glow Style */}
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                Shadow / Aura
              </label>
              <div className="flex flex-wrap gap-2">
                {(['glow', 'soft', 'brutal', 'none'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      soundEffects.play('switch');
                      setShadowStyle(s);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      shadowStyle === s
                        ? 'bg-accent-violet dark:bg-accent-cyan text-white dark:text-surface-950 shadow-md dark:shadow-glow-cyan'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: Radius, Padding, Depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  <span>Border Radius</span>
                  <span className="font-mono text-accent-violet dark:text-accent-cyan font-bold">{radius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="36"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-full accent-accent-violet dark:accent-accent-cyan cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  <span>3D Extrusion Depth</span>
                  <span className="font-mono text-accent-violet dark:text-accent-cyan font-bold">{depth}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full accent-accent-violet dark:accent-accent-cyan cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  <span>Padding X (Horizontal)</span>
                  <span className="font-mono text-accent-violet dark:text-accent-cyan font-bold">{paddingX}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={paddingX}
                  onChange={(e) => setPaddingX(Number(e.target.value))}
                  className="w-full accent-accent-violet dark:accent-accent-cyan cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  <span>Padding Y (Vertical)</span>
                  <span className="font-mono text-accent-violet dark:text-accent-cyan font-bold">{paddingY}px</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="24"
                  value={paddingY}
                  onChange={(e) => setPaddingY(Number(e.target.value))}
                  className="w-full accent-accent-violet dark:accent-accent-cyan cursor-pointer"
                />
              </div>
            </div>

            {/* Click Sound Profile */}
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-accent-violet" />
                <span>Audio Feedback Sound</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {(['mechanical', 'bubble', 'arcade', 'switch', 'pop'] as SoundType[]).map((sound) => (
                  <button
                    key={sound}
                    onClick={() => {
                      soundEffects.play(sound);
                      setSoundChoice(sound);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                      soundChoice === sound
                        ? 'bg-accent-violet text-white shadow-glow-violet'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {sound}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Preview & Code Export */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Sandbox Render */}
            <div className="bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md flex flex-col items-center justify-center min-h-[280px] relative shadow-lg dark:shadow-none transition-colors duration-200">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest absolute top-4 left-4 flex items-center gap-1.5">
                <Play className="w-3 h-3 text-accent-emerald fill-accent-emerald" />
                <span>Live Studio Preview</span>
              </div>

              {/* The Customized Live Button */}
              <div className="py-12">
                <button
                  onClick={handleTestClick}
                  className={`${currentTheme.bg} ${currentTheme.hover} ${currentTheme.textColor} font-bold text-sm tracking-wide transition-all duration-75 select-none cursor-pointer outline-none ${
                    shadowStyle === 'glow' ? currentTheme.glow : ''
                  }`}
                  style={{
                    paddingLeft: `${paddingX}px`,
                    paddingRight: `${paddingX}px`,
                    paddingTop: `${paddingY}px`,
                    paddingBottom: `${paddingY}px`,
                    borderRadius: `${radius}px`,
                    boxShadow: depth > 0 ? `0 ${depth}px 0 ${currentTheme.shadowColor}` : undefined,
                  }}
                  onMouseDown={(e) => {
                    if (depth > 0) {
                      e.currentTarget.style.transform = `translateY(${depth}px)`;
                      e.currentTarget.style.boxShadow = `0 0 0 ${currentTheme.shadowColor}`;
                    }
                  }}
                  onMouseUp={(e) => {
                    if (depth > 0) {
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = `0 ${depth}px 0 ${currentTheme.shadowColor}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (depth > 0) {
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = `0 ${depth}px 0 ${currentTheme.shadowColor}`;
                    }
                  }}
                >
                  {text || 'Button'}
                </button>
              </div>

              <span className="text-xs text-slate-500 font-medium">
                Click to feel your custom depth, motion, sound, and confetti burst!
              </span>
            </div>

            {/* Generated Code Display */}
            <div className="bg-slate-100 dark:bg-surface-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-colors duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
                <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">Exported Component</span>
                <button
                  onClick={copyCode}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-accent-violet dark:text-accent-cyan hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Tailwind / React'}</span>
                </button>
              </div>

              <pre className="text-xs font-mono text-slate-700 dark:text-slate-400 overflow-x-auto whitespace-pre-wrap max-h-48 scrollbar-hidden">
                {generatedTailwind}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
