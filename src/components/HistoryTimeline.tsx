import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Calendar, 
  Lightbulb, 
  Play, 
  Sparkles
} from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

interface Era {
  id: string;
  year: string;
  eraName: string;
  tagline: string;
  description: string;
  affordanceTrait: string;
  historicalMilestone: string;
  buttonRenderer: () => React.ReactNode;
}

export const HistoryTimeline: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState(0);

  // Period-accurate button demos
  const eras: Era[] = [
    {
      id: 'mechanical-1888',
      year: '1888',
      eraName: 'The Mechanical Dawn',
      tagline: '"You press the button, we do the rest."',
      description: 'Before computers, buttons were physical, spring-loaded brass and bakelite switches. George Eastman popularized the phrase with the first Kodak camera in 1888, transforming a complex chemical and optical process into a single, effortless press.',
      affordanceTrait: 'Physical spring resistance, mechanical snap, audible click.',
      historicalMilestone: 'Eastman Kodak Camera, electric doorbells, telegraph keys.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('mechanical')}
          className="relative px-8 py-4 rounded-full bg-gradient-to-b from-amber-600 via-amber-700 to-amber-900 border-4 border-amber-950 text-amber-100 font-serif font-black tracking-widest shadow-[0_6px_0_#451a03] active:translate-y-1.5 active:shadow-[0_0_0_#451a03] transition-all cursor-pointer flex items-center gap-3 uppercase text-sm"
        >
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />
          <span>KODAK NO. 1 (1888)</span>
        </button>
      )
    },
    {
      id: 'macintosh-1984',
      year: '1984',
      eraName: '1-Bit Black & White GUI',
      tagline: 'The First Digital Affordance',
      description: 'The Xerox Star and 1984 Apple Macintosh faced a challenge: how do you convince someone looking at a glowing monitor that a box of pixels can be pushed? Bill Atkinson created the rounded rectangle algorithm (QuickDraw), and clicking an element inverted its pixels from white to black.',
      affordanceTrait: '1-bit black outline, rounded corners, instant color inversion on click.',
      historicalMilestone: 'Apple Macintosh System 1, Xerox Alto / Star.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('switch')}
          className="px-6 py-2.5 rounded-lg border-2 border-black bg-white text-black font-mono font-bold text-sm shadow-[2px_2px_0_#000] active:bg-black active:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-none cursor-pointer"
        >
          [ OK: Macintosh 1984 ]
        </button>
      )
    },
    {
      id: 'windows-1995',
      year: '1995',
      eraName: 'The 3D Bevel Masterpiece',
      tagline: 'Light from Top-Left: The Bevel Illusion',
      description: 'Windows 95 codified digital affordance for an entire generation. Since screens were flat, designers simulated a light source shining from the top-left: a 1px white highlight on the top & left edges, and a 1px dark charcoal shadow on the bottom & right. When clicked, the borders inverted, creating realistic downward motion.',
      affordanceTrait: 'Chiseled 3D bevels, light source physics, 1px depression upon press.',
      historicalMilestone: 'Windows 95, Windows 98, Classic Mac OS 8.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('mechanical')}
          className="px-8 py-3 bg-[#c0c0c0] text-black font-sans font-bold text-sm border-t-2 border-l-2 border-t-white border-l-white border-b-2 border-r-2 border-b-[#404040] border-r-[#404040] active:border-t-[#404040] active:border-l-[#404040] active:border-b-white active:border-r-white active:translate-x-0.5 active:translate-y-0.5 shadow-sm cursor-pointer outline-none"
        >
          Apply Changes (Win95)
        </button>
      )
    },
    {
      id: 'aqua-2001',
      year: '2001',
      eraName: 'Skeuomorphic Aqua & Gloss',
      tagline: '"We made buttons so good you\'ll want to lick them"',
      description: 'Steve Jobs introduced Mac OS X Aqua in 2001. Computers were now fast enough to render high-resolution 24-bit gradients, translucent gel drops, simulated water refraction, and glossy bubble reflections. The button became tactile eye-candy.',
      affordanceTrait: 'Glossy dual-layer highlights, pill shapes, saturated jewel tones.',
      historicalMilestone: 'Mac OS X Cheetah/Puma, iPhone OS 1 (2007).',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('bubble')}
          className="relative px-8 py-3 rounded-full text-white font-bold text-sm shadow-[0_3px_6px_rgba(0,0,0,0.3)] active:translate-y-0.5 active:brightness-90 transition-all border border-blue-400/60 overflow-hidden cursor-pointer"
          style={{
            background: 'linear-gradient(180deg, #70baff 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%)',
          }}
        >
          <div className="absolute top-1 left-2 right-2 h-[45%] bg-gradient-to-b from-white/80 to-transparent rounded-full" />
          <span className="relative drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            Aqua Gloss (2001)
          </span>
        </button>
      )
    },
    {
      id: 'flat-2012',
      year: '2012',
      eraName: 'The Flat Design Purge',
      tagline: 'Death of the Shadow & The "Clickability" Crisis',
      description: 'Rebelling against fake leather and glossy jelly, Windows 8 (Metro) and iOS 7 swung the pendulum all the way to extreme flat minimalism. All drop shadows, bevels, and textures were removed. However, this caused a major UX crisis: users could no longer tell what was clickable text versus an interactive button!',
      affordanceTrait: 'Zero depth, pure hex colors, borderless ghost buttons, rely on color alone.',
      historicalMilestone: 'Windows Phone Metro, iOS 7, Flat 2.0.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('pop')}
          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-colors cursor-pointer rounded-none outline-none active:bg-sky-700"
        >
          Flat Button (2012)
        </button>
      )
    },
    {
      id: 'material-2014',
      year: '2014',
      eraName: 'Material Design & Ink Ripples',
      tagline: 'Digital Paper with Physics & Elevation',
      description: 'Google solved the Flat Design affordance crisis with Material Design. Matias Duarte and team introduced the concept of "Digital Paper": buttons cast soft drop shadows representing elevation (z-index: 2dp, 4dp, 8dp), and clicking produced an organic radial ink ripple emanating directly from the touch coordinate.',
      affordanceTrait: 'Elevation shadows (z-index), radial ink ripples, spring physics.',
      historicalMilestone: 'Google Material Design 1 & 2, Android Lollipop.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('thud')}
          className="relative px-8 py-3 rounded-md bg-purple-600 text-white font-medium text-sm uppercase tracking-wider shadow-md hover:shadow-lg active:shadow-sm active:bg-purple-700 transition-all cursor-pointer overflow-hidden outline-none"
        >
          <span className="relative z-10">Material Ink (2014)</span>
        </button>
      )
    },
    {
      id: 'modern-today',
      year: 'Present',
      eraName: 'Kinetic, Neo-Brutalist & Tactile',
      tagline: 'Physics, Spatial Haptics & Micro-Interactions',
      description: 'Today, the button is a living, kinetic interface. We have Neo-Brutalist high-impact offset borders, fluid spring dynamics, magnetic cursor pull, micro-interactions that morph into loading spinners and success states, and synthesized audio feedback.',
      affordanceTrait: 'Spring physics, cursor magnetic attraction, reactive sound, multi-state morphs.',
      historicalMilestone: 'Framer Motion, Linear UI, Neo-Brutalism, VisionOS spatial gaze.',
      buttonRenderer: () => (
        <button
          onClick={() => soundEffects.play('success')}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-violet via-indigo-600 to-accent-cyan text-white font-bold text-sm tracking-wide shadow-glow-violet hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-cyan-200 animate-spin" />
          <span>Kinetic Button (Today)</span>
        </button>
      )
    }
  ];

  const currentEra = eras[selectedEraIndex];

  return (
    <section id="evolution" className="py-20 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-accent-amber mb-4 shadow-sm">
            <History className="w-3.5 h-3.5" />
            <span>The History of Human-Machine Input</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            The Evolution of the Button
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            How a mechanical spring became the universal catalyst of computing. Click each era on the timeline to test its authentic digital button.
          </p>
        </div>

        {/* Timeline Navigation Bar */}
        <div className="relative mb-12 overflow-x-auto scrollbar-hidden pb-4">
          <div className="flex items-center justify-between min-w-[700px] border-b border-slate-200 dark:border-slate-800 pb-4 relative">
            {eras.map((era, index) => {
              const isSelected = selectedEraIndex === index;
              return (
                <button
                  key={era.id}
                  onClick={() => {
                    soundEffects.play('switch');
                    setSelectedEraIndex(index);
                  }}
                  className={`flex flex-col items-center gap-2 group transition-all cursor-pointer relative px-2 ${
                    isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-accent-violet dark:text-accent-cyan' : 'text-slate-500 dark:text-slate-400'}`}>
                    {era.year}
                  </span>
                  
                  {/* Node Circle */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                    isSelected 
                      ? 'bg-accent-violet dark:bg-accent-cyan border-white shadow-glow-violet dark:shadow-glow-cyan scale-125' 
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 group-hover:border-slate-400 dark:group-hover:border-slate-500'
                  }`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950" />}
                  </div>

                  <span className={`text-[11px] font-semibold max-w-[90px] text-center truncate ${
                    isSelected ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-500'
                  }`}>
                    {era.eraName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Era Spotlight Card */}
        <motion.div
          key={currentEra.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg dark:shadow-none transition-colors duration-200"
        >
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-accent-violet/10 dark:bg-accent-violet/20 text-accent-violet font-mono text-sm font-bold border border-accent-violet/20 dark:border-accent-violet/30">
                {currentEra.year}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {currentEra.eraName}
              </span>
            </div>

            <blockquote className="text-accent-violet dark:text-accent-cyan font-semibold italic border-l-2 border-accent-violet dark:border-accent-cyan pl-4 text-base">
              {currentEra.tagline}
            </blockquote>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentEra.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <Lightbulb className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Affordance Clue:</strong> {currentEra.affordanceTrait}
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Milestones:</strong> {currentEra.historicalMilestone}
                </span>
              </div>
            </div>
          </div>

          {/* Right Live Period-Accurate Demo Sandbox */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-surface-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[260px] text-center relative overflow-hidden transition-colors duration-200">
            <div className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Play className="w-3 h-3 text-accent-violet dark:text-accent-cyan fill-accent-violet dark:fill-accent-cyan" />
              <span>Interactive Era Simulator</span>
            </div>

            <div className="my-8">
              {currentEra.buttonRenderer()}
            </div>

            <p className="text-[11px] text-slate-500">
              Press the button to test its tactile feedback, movement, and sound.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
