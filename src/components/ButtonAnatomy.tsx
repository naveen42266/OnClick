import React, { useState } from 'react';
import { 
  Sliders, 
  Check, 
  X, 
  Accessibility, 
  Maximize2 
} from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled' | 'loading';

export const ButtonAnatomy: React.FC = () => {
  const [inspectedState, setInspectedState] = useState<ButtonState>('default');
  const [nativeButtonCount, setNativeButtonCount] = useState(0);
  const [fakeDivCount, setFakeDivCount] = useState(0);
  const [lastKeyPressed, setLastKeyPressed] = useState<string>('None');

  const statesConfig: Record<ButtonState, {
    label: string;
    description: string;
    cssClasses: string;
    ariaNotes: string;
  }> = {
    default: {
      label: 'Default (Resting)',
      description: 'The baseline state. Affordance must communicate clickability clearly without requiring a hover first.',
      cssClasses: 'bg-accent-violet text-white shadow-md hover:bg-violet-600',
      ariaNotes: 'Normal role="button", tabindex="0"',
    },
    hover: {
      label: 'Hover (Mouse Entered)',
      description: 'Triggered when pointer hovers over the button. Elevates or alters brightness to confirm interactivity.',
      cssClasses: 'bg-violet-600 text-white shadow-glow-violet -translate-y-0.5',
      ariaNotes: ':hover pseudo-class. Does not apply on touch screens.',
    },
    active: {
      label: 'Active (Pressed Down)',
      description: 'The split second the user holds down the click or finger. Needs tactile feedback (depression, inset shadow).',
      cssClasses: 'bg-violet-800 text-violet-200 translate-y-1 shadow-inner scale-[0.98]',
      ariaNotes: ':active pseudo-class. Mirrors physical spring compression.',
    },
    focus: {
      label: 'Focus-Visible (Keyboard Tab)',
      description: 'Critical for keyboard users. Shows an unmistakable outline or ring when focused via Tab key.',
      cssClasses: 'bg-accent-violet text-white ring-4 ring-cyan-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-surface-950',
      ariaNotes: ':focus-visible pseudo-class. Essential for WCAG AA compliance.',
    },
    disabled: {
      label: 'Disabled',
      description: 'Action is currently unavailable. Must communicate why it is disabled or prevent confusing dead clicks.',
      cssClasses: 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60 border border-slate-300 dark:border-slate-700',
      ariaNotes: 'aria-disabled="true" or disabled attribute. Remove from tab order or announce reason.',
    },
    loading: {
      label: 'Loading / Busy',
      description: 'Async task is in flight. Prevents accidental double-clicks and communicates system progress.',
      cssClasses: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-wait border border-accent-cyan/40',
      ariaNotes: 'aria-busy="true" and aria-live="polite" to inform screen readers.',
    },
  };

  return (
    <section id="anatomy" className="py-20 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-accent-violet mb-4 shadow-sm">
            <Sliders className="w-3.5 h-3.5" />
            <span>The Science & Specs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Button Anatomy & Properties
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A button is much more than a styled rectangle. Discover the 6 crucial interaction states, accessibility requirements, and ergonomic laws.
          </p>
        </div>

        {/* Feature 1: The 6 States Inspector */}
        <div className="bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-14 backdrop-blur-md shadow-lg dark:shadow-none transition-colors duration-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-violet dark:text-accent-cyan">Interactive Inspector</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">The 6 Lifecycle States of a Button</h3>
            </div>
            
            {/* State Picker Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(statesConfig) as ButtonState[]).map((stateKey) => (
                <button
                  key={stateKey}
                  onClick={() => {
                    soundEffects.play('switch');
                    setInspectedState(stateKey);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    inspectedState === stateKey
                      ? 'bg-accent-violet text-white shadow-glow-violet'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                  }`}
                >
                  {stateKey}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Simulator */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-surface-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 flex flex-col items-center justify-center min-h-[220px] relative transition-colors duration-200">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest absolute top-3 left-3">
                Live State Render
              </div>

              <button
                className={`px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${statesConfig[inspectedState].cssClasses}`}
              >
                {inspectedState === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
                    Saving Changes...
                  </span>
                ) : (
                  <span>Submit Action</span>
                )}
              </button>

              <span className="text-[11px] font-mono text-slate-500 mt-4">
                Pseudo-class: <span className="text-accent-violet dark:text-accent-cyan font-bold">:{inspectedState}</span>
              </span>
            </div>

            {/* Explanation & Best Practices */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {statesConfig[inspectedState].label}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {statesConfig[inspectedState].description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                  <Accessibility className="w-4 h-4 text-accent-emerald" />
                  <span>Accessibility & ARIA Rule</span>
                </div>
                <p className="font-mono text-accent-violet dark:text-accent-cyan text-[11px]">
                  {statesConfig[inspectedState].ariaNotes}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Why <button> beats <div onClick> (Accessibility & Semantics) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: Semantic Native <button> */}
          <div className="bg-white/90 dark:bg-slate-900/60 border border-emerald-200 dark:border-emerald-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-md dark:shadow-none transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>The Right Way: Semantic &lt;button&gt;</span>
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">WCAG Compliant</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Native Semantic Button</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Native buttons come out-of-the-box with keyboard listeners for <code className="text-emerald-700 dark:text-emerald-300 font-bold">Space</code> and <code className="text-emerald-700 dark:text-emerald-300 font-bold">Enter</code>, automatic focus trapping in tab loops, form submission events, and screen reader role announcements.
              </p>

              {/* Interactive Demo */}
              <div className="p-6 bg-slate-50 dark:bg-surface-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => {
                    soundEffects.play('pop');
                    setNativeButtonCount((prev) => prev + 1);
                  }}
                  onKeyDown={(e) => {
                    setLastKeyPressed(e.key);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-surface-950 active:scale-95 transition-all cursor-pointer"
                >
                  Test Native &lt;button&gt;
                </button>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span>Clicks/Keypresses: <strong className="text-slate-900 dark:text-white">{nativeButtonCount}</strong></span>
                  <span>•</span>
                  <span>Key: <strong className="text-emerald-600 dark:text-emerald-400">{lastKeyPressed}</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Automatically accessible</div>
              <div>✓ Native Tab index & focus ring</div>
              <div>✓ Triggers with Enter or Space key</div>
            </div>
          </div>

          {/* Card 2: Anti-pattern <div onClick> */}
          <div className="bg-white/90 dark:bg-slate-900/60 border border-rose-200 dark:border-rose-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-md dark:shadow-none transition-colors duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 text-xs font-bold border border-rose-500/30 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5" />
                  <span>Anti-Pattern: &lt;div onClick&gt;</span>
                </span>
                <span className="text-xs font-mono text-rose-600 dark:text-rose-400">Inaccessible</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Unfocusable &lt;div&gt;</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                When developers attach an <code className="text-rose-600 dark:text-rose-300 font-bold">onClick</code> to a <code className="text-rose-600 dark:text-rose-300 font-bold">&lt;div&gt;</code> without tabindex or key listeners, screen reader users cannot find it, keyboard users cannot Tab to it, and Space/Enter do nothing.
              </p>

              {/* Interactive Demo */}
              <div className="p-6 bg-slate-50 dark:bg-surface-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-3">
                <div
                  onClick={() => {
                    soundEffects.play('switch');
                    setFakeDivCount((prev) => prev + 1);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-rose-600/70 hover:bg-rose-600 text-white font-bold text-xs tracking-wider uppercase active:scale-95 transition-all cursor-pointer select-none"
                >
                  Fake &lt;div onClick&gt;
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Clicks: <strong className="text-slate-900 dark:text-white">{fakeDivCount}</strong> (Try Tabbing or Space - it won't work!)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
              <div className="text-rose-600 dark:text-rose-400 font-semibold">✗ Inaccessible to keyboard navigation</div>
              <div>✗ Screen readers announce as "group" or plain text</div>
              <div>✗ Breaks native browser accessibility tree</div>
            </div>
          </div>

        </div>

        {/* Feature 3: Ergonomics & Fitts's Law */}
        <div className="bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-lg dark:shadow-none transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-xs font-bold text-amber-700 dark:text-accent-amber">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ergonomics & Touch Targets</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Fitts's Law & The 44×44px Rule
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                In 1954, psychologist Paul Fitts formulated the mathematical model predicting human movement time:
              </p>
              
              <div className="p-3 bg-slate-50 dark:bg-surface-950 border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-accent-violet dark:text-accent-cyan text-sm font-bold">
                T = a + b · log₂(1 + Distance / Width)
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                The larger and closer a button is, the faster a user can acquire it. Apple's Human Interface Guidelines (HIG) and Android Material specify a minimum touch hitbox of <strong className="text-slate-900 dark:text-white">44 × 44 pixels</strong> (or 48dp on Android) to accommodate adult finger pads without mis-taps.
              </p>
            </div>

            {/* Hit Target Comparison */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-surface-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                Visual Size vs Touch Hitbox
              </span>

              {/* 44x44 hitbox visualizer */}
              <div className="relative p-6 border-2 border-dashed border-amber-500/60 rounded-2xl flex items-center justify-center group">
                <div className="absolute -top-3 left-4 px-2 bg-slate-50 dark:bg-surface-950 text-[10px] font-mono text-amber-600 dark:text-accent-amber font-bold">
                  44px × 44px Minimum Touch Area
                </div>
                
                <button
                  onClick={() => soundEffects.play('pop')}
                  className="px-4 py-2 rounded-lg bg-accent-violet text-white font-bold text-xs shadow-md active:scale-95 cursor-pointer"
                >
                  Inner Button
                </button>
              </div>

              <span className="text-[11px] text-slate-500 mt-4">
                Even if the visible button is compact, its clickable padding should reach at least 44px.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
