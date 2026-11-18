import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Layers, 
  Sparkles, 
  Download, 
  Check, 
  Loader2, 
  Heart, 
  Copy, 
  Terminal, 
  MousePointer, 
  Zap, 
  ArrowRight,
  Lock,
  Unlock,
  ShieldCheck,
  Radio,
  Gamepad2,
  FoldHorizontal,
  Flame,
  Orbit,
  Sun,
  Waves,
  Magnet,
  ArrowDownToLine,
  Droplets,
  Type,
  Binary,
  Crosshair,
  Atom,
  Box,
  AlertTriangle,
  RotateCw,
  Fingerprint,
  Plane,
  PenTool,
  Smile,
  Shield
} from 'lucide-react';
import { soundEffects } from '../audio/soundEffects';

interface ButtonCardProps {
  title: string;
  category: string;
  description: string;
  codeSnippet: string;
  children: React.ReactNode;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ title, category, description, codeSnippet, children }) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    soundEffects.play('pop');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all group backdrop-blur-sm shadow-md dark:shadow-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {category}
          </span>
          <button
            onClick={() => {
              soundEffects.play('switch');
              setShowCode(!showCode);
            }}
            className="text-xs text-slate-500 hover:text-accent-violet dark:hover:text-accent-cyan flex items-center gap-1 transition-colors"
            title="Inspect CSS / Tailwind code"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{showCode ? 'Hide Code' : 'Code'}</span>
          </button>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">{description}</p>
      </div>

      {/* Button Interactive Sandbox */}
      <div className="py-8 bg-slate-50 dark:bg-surface-950/70 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-center min-h-[140px] px-4 overflow-hidden relative">
        {children}
      </div>

      {/* Code Drawer */}
      {showCode && (
        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-surface-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-800 dark:text-slate-300 relative">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800/60 mb-2">
            <span className="text-[10px] text-slate-500 font-semibold uppercase">Tailwind / CSS</span>
            <button
              onClick={copyCode}
              className="text-accent-violet dark:text-accent-cyan hover:underline flex items-center gap-1"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto scrollbar-hidden whitespace-pre-wrap max-h-28 text-slate-700 dark:text-slate-400">
            {codeSnippet}
          </pre>
        </div>
      )}
    </div>
  );
};

// 1. Black Hole Gravitational Singularity Button
const BlackHoleButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSingularity, setIsSingularity] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('thud');
    setIsSingularity(true);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 30,
      spread: 360,
      startVelocity: 15,
      colors: ['#8B5CF6', '#06B6D4', '#FFFFFF'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      }
    });
    setTimeout(() => setIsSingularity(false), 1200);
  };

  return (
    <div 
      className="relative flex items-center justify-center w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isSingularity ? [1, 1.8, 0] : isHovered ? [1, 1.25, 1.1] : 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 4, ease: 'linear' },
          scale: { duration: 0.6 }
        }}
        className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-violet-600/30 via-cyan-400/20 to-purple-800/40 blur-md pointer-events-none"
      />

      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [deg, deg + 360],
            scale: isHovered ? [1, 0.2] : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: isHovered ? 1.5 : 5,
            ease: 'linear'
          }}
          className="absolute w-32 h-32 pointer-events-none flex items-center justify-start"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#06b6d4]" />
        </motion.div>
      ))}

      <motion.button
        onClick={handleClick}
        animate={{
          scale: isSingularity ? 0.85 : isHovered ? 1.05 : 1,
        }}
        className="relative z-10 px-7 py-3 rounded-full bg-black text-white font-mono font-bold text-xs uppercase tracking-widest border border-violet-500/60 shadow-[0_0_20px_rgba(139,92,246,0.6)] flex items-center gap-2 cursor-pointer outline-none"
      >
        <Orbit className="w-4 h-4 text-cyan-400 animate-spin" />
        <span>Event Horizon</span>
      </motion.button>
    </div>
  );
};

// 2. Liquid Wave Fill Button
const LiquidWaveFillButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('bubble');
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 35,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ['#06B6D4', '#3B82F6', '#60A5FA', '#E0F2FE'],
    });
  };

  return (
    <button
      onMouseEnter={() => {
        soundEffects.play('bubble');
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative px-8 py-3.5 rounded-full border-2 border-cyan-400 text-cyan-600 dark:text-cyan-300 font-bold text-xs uppercase tracking-widest overflow-hidden group shadow-md transition-all duration-300 active:scale-95 cursor-pointer bg-white/40 dark:bg-slate-900/60"
    >
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-500 ease-out overflow-hidden"
        style={{ height: isHovered ? '100%' : '0%' }}
      >
        <div className="absolute top-0 left-0 w-[200%] h-full flex">
          <svg className="w-[200%] h-full absolute -top-3 left-0 animate-shimmer" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" className="fill-cyan-500/80 dark:fill-cyan-500/90" />
          </svg>
          <div className="w-full h-full bg-gradient-to-t from-cyan-600 to-cyan-400 opacity-90" />
        </div>
      </div>
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
        <Waves className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'rotate-180 scale-110' : ''}`} />
        <span>Liquid Wave Fill</span>
      </span>
    </button>
  );
};

// 3. Magnetic Repulsion Button
const MagneticRepulsionButton: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [repelling, setRepelling] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;
    const distance = Math.hypot(diffX, diffY);

    if (distance < 120) {
      setRepelling(true);
      const force = Math.max(15, (120 - distance) * 0.7);
      const angle = Math.atan2(diffY, diffX);
      const pushX = -Math.cos(angle) * force;
      const pushY = -Math.sin(angle) * force;
      setOffset({
        x: Math.max(-65, Math.min(65, pushX)),
        y: Math.max(-28, Math.min(28, pushY)),
      });
    }
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setRepelling(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[90px] flex items-center justify-center relative"
    >
      <motion.button
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        onClick={() => soundEffects.play('switch')}
        className={`px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-200 border-2 flex items-center gap-2 cursor-pointer shadow-md select-none ${
          repelling
            ? 'bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
            : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
        }`}
      >
        <Magnet className={`w-4 h-4 transition-transform duration-200 ${repelling ? 'rotate-180 text-rose-500' : 'text-slate-500'}`} />
        <span>{repelling ? 'N ↔ N Repel!' : 'Magnetic Repel'}</span>
      </motion.button>
    </div>
  );
};

// 4. Gravity Drop Button
const GravityDropButton: React.FC = () => {
  const [isDropping, setIsDropping] = useState(false);
  const [impact, setImpact] = useState(false);

  const handleDrop = () => {
    if (isDropping) return;
    setIsDropping(true);

    setTimeout(() => {
      soundEffects.play('thud');
      setImpact(true);
      setTimeout(() => setImpact(false), 300);
    }, 280);

    setTimeout(() => {
      setIsDropping(false);
    }, 1400);
  };

  return (
    <div className="w-full h-[120px] flex flex-col justify-between items-center relative overflow-hidden py-1">
      <motion.button
        animate={
          isDropping
            ? {
                y: [0, 50, 20, 50, 38, 50, 0],
                rotate: [0, 8, -6, 4, -2, 0],
              }
            : { y: 0, rotate: 0 }
        }
        transition={
          isDropping
            ? {
                duration: 1.3,
                times: [0, 0.25, 0.45, 0.65, 0.8, 0.92, 1],
                ease: ['easeIn', 'easeOut', 'easeIn', 'easeOut', 'easeIn', 'easeOut'],
              }
            : { type: 'spring', stiffness: 300, damping: 20 }
        }
        onClick={handleDrop}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 cursor-pointer select-none flex items-center gap-2 border border-amber-400"
      >
        <ArrowDownToLine className={`w-4 h-4 ${isDropping ? 'animate-bounce' : ''}`} />
        <span>{isDropping ? 'GRAVITY DROP! ⬇️' : 'Click to Drop'}</span>
      </motion.button>

      <div className="w-full flex flex-col items-center">
        {impact && (
          <motion.div
            initial={{ scaleX: 0.2, opacity: 1 }}
            animate={{ scaleX: 1.4, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-24 h-1.5 bg-amber-400 rounded-full blur-[2px] mb-1"
          />
        )}
        <div className="w-4/5 h-[2px] bg-slate-300 dark:bg-slate-700/80 rounded-full" />
        <span className="text-[9px] font-mono text-slate-400 mt-0.5">GROUND SURFACE</span>
      </div>
    </div>
  );
};

// 5. Liquid Morph / Gooey Blob Button
const LiquidMorphBlobButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-full h-[110px]">
      <motion.div
        animate={{
          x: [15, -20, 15],
          y: [-15, 12, -15],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-[2px] opacity-70 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [-25, 25, -25],
          y: [12, -18, 12],
          scale: [1, 0.7, 1],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-[2px] opacity-70 pointer-events-none"
      />
      <motion.button
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 60% 40% / 40% 50% 60% 50%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          borderRadius: {
            repeat: Infinity,
            duration: isHovered ? 2.5 : 5,
            ease: 'easeInOut',
          },
          scale: { type: 'spring', stiffness: 300, damping: 15 },
        }}
        whileTap={{ scale: 0.88 }}
        onMouseEnter={() => {
          soundEffects.play('bubble');
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => soundEffects.play('pop')}
        className="relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 active:shadow-sm cursor-pointer select-none flex items-center gap-2 border border-white/20"
      >
        <Droplets className="w-4 h-4 text-cyan-200 animate-pulse" />
        <span>Gooey Morph</span>
      </motion.button>
    </div>
  );
};

// 6. Elastic Letter Bounce Button
const ElasticLetterBounceButton: React.FC = () => {
  const text = "ELASTIC";
  const [bouncedIndices, setBouncedIndices] = useState<number[]>([]);

  const bounceLetter = (index: number) => {
    soundEffects.play('pop');
    setBouncedIndices((prev) => [...prev, index]);
    setTimeout(() => {
      setBouncedIndices((prev) => prev.filter((i) => i !== index));
    }, 400);
  };

  const handleFullClick = () => {
    soundEffects.play('success');
    text.split('').forEach((_, i) => {
      setTimeout(() => bounceLetter(i), i * 60);
    });
  };

  return (
    <button
      onClick={handleFullClick}
      className="relative px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-pink-500/30 active:scale-95 transition-transform cursor-pointer select-none border border-white/25 flex items-center gap-3 overflow-hidden"
    >
      <Type className="w-4 h-4 text-pink-200 shrink-0" />
      <div className="flex items-center">
        {text.split('').map((char, index) => {
          const isBounced = bouncedIndices.includes(index);
          return (
            <motion.span
              key={index}
              onMouseEnter={() => bounceLetter(index)}
              animate={
                isBounced
                  ? {
                      y: [-12, 4, -4, 0],
                      scaleY: [1.45, 0.75, 1.15, 1],
                      scaleX: [0.75, 1.25, 0.9, 1],
                      color: ['#FEF08A', '#FFFFFF'],
                    }
                  : { y: 0, scaleY: 1, scaleX: 1 }
              }
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-block cursor-pointer px-[2px] transition-colors"
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </button>
  );
};

// 7. Matrix Digital Rain Button
const MatrixDigitalRainButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHacked, setIsHacked] = useState(false);

  const columns = [
    ['0', '1', 'ｱ', '9', 'X', '4'],
    ['F', 'ｶ', '8', '0', 'B', '1'],
    ['1', 'ｻ', 'A', '3', '7', '0'],
    ['C', '0', 'ﾀ', '5', 'E', '2'],
    ['8', 'ﾅ', '1', 'F', '0', '6'],
    ['0', '1', 'ﾊ', '9', '2', 'A'],
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('laser');
    setIsHacked(true);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 45,
      spread: 70,
      colors: ['#10B981', '#34D399', '#A7F3D0', '#065F46'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
    setTimeout(() => setIsHacked(false), 2500);
  };

  return (
    <button
      onMouseEnter={() => {
        soundEffects.play('arcade');
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative px-8 py-3.5 rounded-xl bg-black border border-emerald-500/80 text-emerald-400 font-mono font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] overflow-hidden group cursor-pointer active:scale-95 transition-all"
    >
      <div
        className={`absolute inset-0 flex justify-between px-2 overflow-hidden pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-40' : 'opacity-0'
        }`}
      >
        {columns.map((col, colIdx) => (
          <motion.div
            key={colIdx}
            animate={isHovered ? { y: ['-100%', '100%'] } : { y: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2 + (colIdx % 3) * 0.4,
              ease: 'linear',
              delay: colIdx * 0.15,
            }}
            className="flex flex-col text-[10px] font-mono font-bold leading-tight select-none text-emerald-400"
          >
            {col.map((char, charIdx) => (
              <span key={charIdx} className={charIdx === col.length - 1 ? 'text-white' : 'text-emerald-500/80'}>
                {char}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
      <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_#10B981]">
        <Binary className="w-4 h-4 text-emerald-300 animate-pulse" />
        <span>{isHacked ? 'OVERRIDE_ROOT' : isHovered ? '> RUN MATRIX' : '[ ACCESS MATRIX ]'}</span>
      </span>
    </button>
  );
};

// 8. Laser Scanline Button
const LaserScanlineButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('laser');
    setIsLocked(true);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 40,
      spread: 60,
      colors: ['#EF4444', '#F87171', '#FCA5A5'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
    setTimeout(() => setIsLocked(false), 2000);
  };

  return (
    <button
      onMouseEnter={() => {
        soundEffects.play('laser');
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative px-8 py-3.5 rounded-xl bg-slate-950 border border-red-500/80 text-red-400 font-mono font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] overflow-hidden group cursor-pointer active:scale-95 transition-all select-none"
    >
      <motion.div
        animate={{ top: ['0%', '92%', '0%'] }}
        transition={{
          repeat: Infinity,
          duration: isHovered ? 0.9 : 2.2,
          ease: 'easeInOut',
        }}
        className="absolute inset-x-0 h-[2px] bg-red-400 shadow-[0_0_12px_#EF4444,0_0_24px_#DC2626] pointer-events-none z-20"
      >
        <div className="absolute -top-2 inset-x-0 h-5 bg-gradient-to-b from-transparent via-red-500/25 to-transparent pointer-events-none" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:8px_8px] opacity-15 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_#EF4444]">
        <Crosshair className={`w-4 h-4 ${isHovered ? 'animate-spin text-red-300' : 'text-red-500'}`} />
        <span>{isLocked ? 'TARGET_LOCKED 🎯' : isHovered ? 'LOCKING ON...' : 'LASER_SCAN'}</span>
      </span>
    </button>
  );
};

// 9. Portal Transition Button
const PortalTransitionButton: React.FC = () => {
  const [isWarping, setIsWarping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePortal = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('laser');
    setIsWarping(true);

    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 50,
      spread: 360,
      startVelocity: 25,
      colors: ['#8B5CF6', '#EC4899', '#06B6D4', '#F59E0B'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });

    setTimeout(() => {
      soundEffects.play('success');
    }, 600);

    setTimeout(() => {
      setIsWarping(false);
    }, 2800);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[110px]">
      {isWarping && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 1, rotate: 0 }}
            animate={{ scale: 3.2, opacity: 0, rotate: 180 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-24 h-24 rounded-full border-4 border-dashed border-cyan-400 shadow-[0_0_40px_#06B6D4] pointer-events-none z-30"
          />
          <motion.div
            initial={{ scale: 0, opacity: 1, rotate: 0 }}
            animate={{ scale: 2.5, opacity: 0, rotate: -180 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-violet-600/60 to-pink-500/60 blur-md pointer-events-none z-20"
          />
        </>
      )}

      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 3, ease: 'linear' },
          scale: { duration: 0.3 },
        }}
        className="absolute w-36 h-36 rounded-full border border-violet-500/30 border-t-cyan-400 border-r-pink-500 pointer-events-none"
      />

      <motion.button
        onMouseEnter={() => {
          soundEffects.play('switch');
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePortal}
        whileTap={{ scale: 0.9 }}
        className="relative z-10 px-8 py-3.5 rounded-full bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border-2 border-violet-400/80 text-violet-200 font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] cursor-pointer select-none flex items-center gap-2 overflow-hidden"
      >
        <Atom className={`w-4 h-4 text-cyan-300 ${isWarping ? 'animate-spin' : isHovered ? 'animate-pulse' : ''}`} />
        <span>{isWarping ? 'WARPING REALITY...' : isHovered ? 'ENGAGE PORTAL' : '[ OPEN PORTAL ]'}</span>
      </motion.button>
    </div>
  );
};

// 10. Holographic Projection Button
const HolographicProjectionButton: React.FC = () => {
  const [isProjecting, setIsProjecting] = useState(false);
  const [isEngaged, setIsEngaged] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('laser');
    setIsEngaged(true);

    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 40,
      spread: 70,
      colors: ['#06B6D4', '#38BDF8', '#67E8F9', '#FFFFFF'],
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });

    setTimeout(() => setIsEngaged(false), 2200);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-[130px]"
      onMouseEnter={() => {
        soundEffects.play('switch');
        setIsProjecting(true);
      }}
      onMouseLeave={() => setIsProjecting(false)}
    >
      <AnimatePresence>
        {isProjecting && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.6 }}
            animate={{
              opacity: [0.7, 1, 0.85, 1],
              y: [-24, -30, -24],
              scale: 1,
            }}
            exit={{ opacity: 0, y: 10, scale: 0.6 }}
            transition={{
              y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
              opacity: { repeat: Infinity, duration: 1.5 },
              duration: 0.3,
            }}
            className="absolute top-2 z-30 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-400/90 text-cyan-300 font-mono text-[10px] uppercase font-bold tracking-widest shadow-[0_0_20px_#06B6D4] flex items-center gap-1.5 backdrop-blur-sm pointer-events-none"
          >
            <Box className="w-3.5 h-3.5 text-cyan-200 animate-spin" />
            <span>HOLOGRAM_v4.2</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`absolute bottom-8 w-24 h-16 pointer-events-none transition-all duration-300 z-10 ${
          isProjecting ? 'opacity-80 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          clipPath: 'polygon(25% 100%, 75% 100%, 100% 0%, 0% 0%)',
          background: 'linear-gradient(to top, rgba(6,182,212,0.6), rgba(6,182,212,0.05))',
        }}
      />

      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="relative z-20 mt-6 px-8 py-3 rounded-xl bg-slate-950 border-2 border-cyan-500/80 text-cyan-300 font-mono font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] cursor-pointer select-none flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-ping" />
        <span>{isEngaged ? 'TRANSMITTING...' : 'HOLO_PROJECTOR'}</span>
      </motion.button>
    </div>
  );
};

// 10. Industrial Missile / Kill Switch Button
const IndustrialMissileButton: React.FC = () => {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);
  const [launchCount, setLaunchCount] = useState(0);

  const openCover = () => {
    if (!isCoverOpen) {
      soundEffects.play('switch');
      setIsCoverOpen(true);
    }
  };

  const closeCover = () => {
    if (isCoverOpen) {
      soundEffects.play('thud');
      setIsCoverOpen(false);
    }
  };

  const toggleCover = () => {
    if (isCoverOpen) {
      closeCover();
    } else {
      openCover();
    }
  };

  const handleLaunch = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isCoverOpen) {
      openCover();
      return;
    }

    soundEffects.play('metal');
    setTimeout(() => soundEffects.play('laser'), 90);
    setIsLaunched(true);
    setLaunchCount(prev => prev + 1);

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#ef4444', '#f97316', '#eab308', '#ffffff'],
    });

    setTimeout(() => setIsLaunched(false), 2400);
  };

  return (
    <div className="relative py-2 flex flex-col items-center justify-center select-none">
      {/* Industrial Base Housing Plate */}
      <div 
        onMouseEnter={openCover}
        onMouseLeave={closeCover}
        className="relative w-56 p-4 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-2 border-slate-700 shadow-2xl flex flex-col items-center"
        style={{ perspective: 900 }}
      >
        {/* Corner Industrial Hex Screws */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-slate-400 rotate-45" />
        </div>
        <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-slate-400 -rotate-45" />
        </div>
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-slate-400 -rotate-12" />
        </div>
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-slate-400 rotate-60" />
        </div>

        {/* Hazard Caution Bar */}
        <div 
          className="w-full h-3 rounded-md mb-2.5 border border-black/60 shadow-inner overflow-hidden relative"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #eab308, #eab308 8px, #0f172a 8px, #0f172a 16px)'
          }}
        />

        {/* Status Indicator LED Bar */}
        <div className="w-full flex items-center justify-between px-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isLaunched 
                  ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e] animate-ping'
                  : isCoverOpen
                    ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse'
                    : 'bg-emerald-500 shadow-[0_0_6px_#10b981]'
              }`} 
            />
            <span className="font-mono text-[9px] font-black uppercase tracking-wider text-slate-300">
              {isLaunched ? 'FIRING // ACTIVE' : isCoverOpen ? 'SYSTEM ARMED' : 'SAFE / LOCKED'}
            </span>
          </div>
          <span className="font-mono text-[9px] text-slate-400 font-bold">
            SEQ #{launchCount.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Sunken Switch Cavity */}
        <div className="relative w-full h-24 rounded-xl bg-slate-950/90 border border-slate-800 shadow-[inset_0_4px_12px_rgba(0,0,0,0.85)] flex items-center justify-center overflow-hidden">
          {/* Subtle grid pattern inside chamber */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}
          />

          {/* Missile Toggle Switch (Behind Cover) */}
          <motion.button
            onClick={handleLaunch}
            whileHover={isCoverOpen ? { scale: 1.05 } : {}}
            whileTap={isCoverOpen ? { scale: 0.92, y: 3 } : {}}
            className={`relative z-10 px-6 py-2.5 rounded-lg font-mono font-black text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              isLaunched
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_0_25px_#ef4444] border-2 border-red-300 scale-95'
                : isCoverOpen
                  ? 'bg-gradient-to-b from-red-500 via-red-600 to-red-700 text-white shadow-[0_4px_0_#991b1b,0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_4px_0_#991b1b,0_0_25px_rgba(239,68,68,0.8)] border border-red-400 active:translate-y-1 active:shadow-none'
                  : 'bg-gradient-to-b from-red-950 to-slate-900 text-red-500/50 border border-red-900/40 pointer-events-none'
            }`}
          >
            <Flame className={`w-4 h-4 ${isLaunched ? 'animate-bounce text-yellow-300' : 'text-white'}`} />
            <span>{isLaunched ? 'FIRE!' : 'LAUNCH'}</span>
          </motion.button>

          {/* Safety Flip Cover */}
          <motion.div
            onClick={toggleCover}
            animate={{
              rotateX: isCoverOpen ? -115 : 0,
              y: isCoverOpen ? -22 : 0,
              opacity: isCoverOpen ? 0.35 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 22,
            }}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-0 z-20 rounded-xl bg-gradient-to-b from-red-600/35 via-red-700/45 to-red-950/70 backdrop-blur-[2px] border-2 border-red-500/80 shadow-[0_8px_20px_rgba(239,68,68,0.35)] flex flex-col items-center justify-between p-2 cursor-pointer group"
          >
            {/* Top Hinge Bar */}
            <div className="w-full flex items-center justify-between px-2 pt-0.5 pointer-events-none">
              <div className="w-4 h-1.5 rounded-full bg-slate-400 border border-slate-600" />
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-amber-300 animate-pulse" />
                <span className="font-mono text-[8px] font-black tracking-widest text-amber-300 uppercase">
                  SAFETY COVER
                </span>
              </div>
              <div className="w-4 h-1.5 rounded-full bg-slate-400 border border-slate-600" />
            </div>

            {/* Center Warning Stencil Label */}
            <div className="px-3 py-1 rounded bg-black/60 border border-red-500/50 text-center pointer-events-none">
              <span className="block font-mono text-[9px] font-black text-red-200 uppercase tracking-widest">
                ARMED MISSILE
              </span>
              <span className="block font-mono text-[7px] text-red-400 font-bold uppercase tracking-wider">
                {isCoverOpen ? 'COVER OPEN' : 'HOVER OR CLICK TO LIFT'}
              </span>
            </div>

            {/* Bottom Lift Handle Grip */}
            <div className="w-16 h-1.5 rounded-full bg-red-400/80 border border-red-300/40 group-hover:bg-red-300 transition-colors shadow-sm pointer-events-none" />
          </motion.div>
        </div>

        {/* Manual Cover Toggle for Touch / Accessibility */}
        <button
          onClick={toggleCover}
          className="mt-2.5 text-[10px] font-mono font-bold text-slate-400 hover:text-slate-200 transition-colors underline underline-offset-2 cursor-pointer"
        >
          {isCoverOpen ? '▼ Close Safety Cover' : '▲ Flip Open Safety Cover'}
        </button>
      </div>
    </div>
  );
};

// 11. Rotary Dial Knob (Discrete Detent Selector)
const RotaryDialKnob: React.FC = () => {
  const detents = [
    { angle: 0, label: '0°', name: 'OFF / BYPASS', color: '#64748b' },
    { angle: 45, label: '45°', name: 'LOW GAIN', color: '#38bdf8' },
    { angle: 90, label: '90°', name: 'OPTIMAL', color: '#06b6d4' },
    { angle: 135, label: '135°', name: 'OVERDRIVE', color: '#f43f5e' },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPressed, setIsPressed] = useState(false);

  const stepNext = () => {
    soundEffects.play('switch');
    setCurrentIndex((prev) => (prev + 1) % detents.length);
  };

  const setDetent = (index: number) => {
    if (index !== currentIndex) {
      soundEffects.play('mechanical');
      setCurrentIndex(index);
    }
  };

  const current = detents[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      {/* Outer Dial Chassis */}
      <div className="relative w-56 p-4 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-slate-800 shadow-2xl flex flex-col items-center">
        
        {/* Detent Legend & Arc Indicators */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          
          {/* Tick marks around perimeter for each detent */}
          {detents.map((d, idx) => {
            const rad = ((d.angle - 90) * Math.PI) / 180;
            const radius = 68;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isSelected = idx === currentIndex;

            return (
              <button
                key={d.label}
                onClick={() => setDetent(idx)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-20 flex flex-col items-center justify-center transition-all cursor-pointer group"
              >
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border ${
                    isSelected 
                      ? 'scale-125 border-white shadow-[0_0_10px_currentColor]' 
                      : 'border-slate-700 bg-slate-800 group-hover:border-slate-500'
                  }`}
                  style={{
                    backgroundColor: isSelected ? d.color : undefined,
                    color: d.color
                  }}
                />
                <span 
                  className={`font-mono text-[9px] font-black mt-1 tracking-tight transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'
                  }`}
                >
                  {d.label}
                </span>
              </button>
            );
          })}

          {/* Central Rotating Metallic Knob */}
          <motion.div
            onClick={stepNext}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            animate={{
              rotate: current.angle,
              scale: isPressed ? 0.95 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 24,
            }}
            className="relative z-10 w-24 h-24 rounded-full cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.2)] flex items-center justify-center border-4 border-slate-700 hover:border-slate-500 transition-colors"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #475569 0%, #1e293b 50%, #0f172a 100%)',
            }}
          >
            {/* Knurled Outer Edge Ring */}
            <div 
              className="absolute inset-1 rounded-full border border-slate-600/40 pointer-events-none opacity-80"
              style={{
                backgroundImage: 'repeating-conic-gradient(from 0deg, #334155 0deg 4deg, #0f172a 4deg 8deg)',
              }}
            />

            {/* Inner Metallic Cap */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 border border-slate-600 shadow-inner flex items-center justify-center">
              {/* Radial Pointer Notch Line */}
              <div 
                className="absolute top-1.5 w-1 h-4 rounded-full shadow-[0_0_8px_currentColor] transition-colors duration-300"
                style={{
                  backgroundColor: current.color,
                  color: current.color,
                }}
              />
              
              {/* Center Pivot Stud */}
              <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-700 shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Digital Readout Screen */}
        <div className="w-full mt-2.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">DETENT STATUS</span>
            <span className="text-xs font-black tracking-wider" style={{ color: current.color }}>
              {current.name}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">ANGLE</span>
            <span className="text-xs font-black text-white block">
              {current.angle}°
            </span>
          </div>
        </div>

        {/* User Hint */}
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <RotateCw className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Click knob or tick to ratchet</span>
        </div>
      </div>
    </div>
  );
};

// 12. Capacitive Touch Ring Button
interface TouchRipple {
  id: number;
  x: number;
  y: number;
}

const CapacitiveTouchRingButton: React.FC = () => {
  const [ripples, setRipples] = useState<TouchRipple[]>([]);
  const [isTouched, setIsTouched] = useState(false);
  const [capacitanceVal, setCapacitanceVal] = useState(12.4);

  const handleTouch = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEffects.play('charge');
    setTimeout(() => soundEffects.play('pop'), 60);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { id, x, y }]);
    setIsTouched(true);
    setCapacitanceVal((prev) => +(prev + 4.8 > 99 ? 14.2 : prev + 7.6).toFixed(1));

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1200);

    setTimeout(() => setIsTouched(false), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center py-3 select-none">
      {/* Sensor Housing Ring */}
      <div className="relative p-6 rounded-full bg-slate-950 border border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center">
        
        {/* Background Concentric Calibration Rings */}
        <div className="absolute inset-2 rounded-full border border-cyan-500/10 pointer-events-none" />
        <div 
          className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20 pointer-events-none animate-spin" 
          style={{ animationDuration: '30s' }} 
        />

        {/* Expanding Shockwave Rings */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <React.Fragment key={ripple.id}>
              {/* Outer Shockwave Ring 1 */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.9 }}
                animate={{ scale: 2.6, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_#06B6D4] pointer-events-none z-10"
              />
              {/* Secondary Delayed Shockwave Ring 2 */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0.7 }}
                animate={{ scale: 3.4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3, delay: 0.12, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border border-teal-300 shadow-[0_0_25px_#14B8A6] pointer-events-none z-10"
              />
            </React.Fragment>
          ))}
        </AnimatePresence>

        {/* Capacitive Biometric Sensor Button */}
        <motion.button
          onClick={handleTouch}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all cursor-pointer flex flex-col items-center justify-center group overflow-hidden"
        >
          {/* Subtle Grid Capacitance Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)',
              backgroundSize: '8px 8px',
            }}
          />

          {/* Glowing Inner Halo */}
          <div 
            className={`absolute inset-2 rounded-full transition-opacity duration-300 pointer-events-none ${
              isTouched ? 'opacity-100 bg-cyan-500/20 shadow-[inset_0_0_15px_#06b6d4]' : 'opacity-40 bg-cyan-900/10'
            }`} 
          />

          {/* Biometric Icon & Typography */}
          <Fingerprint 
            className={`w-9 h-9 transition-all duration-300 ${
              isTouched 
                ? 'text-white scale-110 drop-shadow-[0_0_10px_#06b6d4]' 
                : 'text-cyan-400/80 group-hover:text-cyan-300'
            }`} 
          />
          <span className="font-mono text-[8px] font-black tracking-widest text-cyan-300 uppercase mt-1">
            {isTouched ? 'DISCHARGE' : 'CAPACITIVE'}
          </span>
        </motion.button>
      </div>

      {/* Sensor Telemetry HUD */}
      <div className="mt-3 flex items-center gap-4 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isTouched ? 'bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-ping' : 'bg-emerald-400'}`} />
          <span className="text-slate-400">SENSE:</span>
          <span className="text-cyan-300 font-bold">{isTouched ? 'ENGAGED' : 'READY'}</span>
        </div>
        <div className="text-slate-500">|</div>
        <div>
          <span className="text-slate-400">CAP: </span>
          <span className="text-cyan-400 font-bold">{capacitanceVal} pF</span>
        </div>
      </div>
    </div>
  );
};

// 13. Typography Reveal / Airport Roll Button
const AirportRollButton: React.FC = () => {
  const departures = [
    { city: 'TOKYO // NRT', gate: 'B07', status: 'BOARDING', color: '#f59e0b' },
    { city: 'PARIS // CDG', gate: 'A12', status: 'ON TIME', color: '#10b981' },
    { city: 'NEW YORK / JFK', gate: 'C24', status: 'FINAL CALL', color: '#ef4444' },
    { city: 'LONDON // LHR', gate: 'D03', status: 'GATE OPEN', color: '#38bdf8' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipToNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    soundEffects.play('switch');
    setTimeout(() => soundEffects.play('mechanical'), 70);
    setTimeout(() => soundEffects.play('switch'), 140);

    setCurrentIndex((prev) => (prev + 1) % departures.length);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const current = departures[currentIndex];
  const paddedCity = current.city.padEnd(14, ' ');

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      {/* Solari Departure Board Capsule */}
      <div 
        onClick={flipToNext}
        onMouseEnter={() => {
          if (!isFlipping) flipToNext();
        }}
        className="relative px-6 py-4 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all cursor-pointer group"
      >
        {/* Top Header Sign */}
        <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <Plane className="w-3.5 h-3.5 rotate-45" />
            <span>SOLARI FLAP DEPARTURES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: current.color }}
            />
            <span className="font-black text-white">{current.status}</span>
          </div>
        </div>

        {/* Split Flap Characters Display Row */}
        <div className="flex items-center gap-1 bg-black/80 p-2 rounded-xl border border-slate-800 shadow-inner overflow-hidden">
          {paddedCity.split('').map((char, idx) => (
            <div
              key={`${currentIndex}-${idx}`}
              className="relative w-5 h-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded flex items-center justify-center overflow-hidden shadow-sm"
              style={{ perspective: 300 }}
            >
              {/* Horizontal Split Seam across the flap card */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.06)] z-20 pointer-events-none" />

              {/* Rolling Character with Staggered 3D Roll */}
              <motion.span
                initial={{ y: '100%', rotateX: -90, opacity: 0 }}
                animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.025,
                  ease: 'easeOut',
                }}
                className="font-mono text-sm font-black text-amber-300 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)] select-none"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Bottom Sub-info Bar */}
        <div className="flex items-center justify-between mt-3 text-[9px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">GATE:</span>
            <span className="text-white font-bold">{current.gate}</span>
          </div>
          <div className="text-amber-400/80 group-hover:text-amber-300 font-semibold transition-colors">
            Hover or click to roll flap ✈
          </div>
        </div>
      </div>
    </div>
  );
};

// 14. SVG Border Draw Button
const SvgBorderDrawButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const width = 230;
  const height = 58;
  const rx = 16;
  const perimeter = 544;

  const handleClick = () => {
    soundEffects.play('charge');
    setTimeout(() => soundEffects.play('success'), 120);
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      <div 
        onMouseEnter={() => {
          setIsHovered(true);
          soundEffects.play('switch');
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* SVG Canvas for perimeter stroke drawing */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
          viewBox={`0 0 ${width} ${height}`}
        >
          <defs>
            <linearGradient id="svg-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Static Background Blueprint Guide Path */}
          <rect
            x="1.5"
            y="1.5"
            width={width - 3}
            height={height - 3}
            rx={rx}
            fill="none"
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800"
            strokeWidth="2"
          />

          {/* Animated SVG Tracing Stroke */}
          <motion.rect
            x="1.5"
            y="1.5"
            width={width - 3}
            height={height - 3}
            rx={rx}
            fill="none"
            stroke="url(#svg-border-grad)"
            strokeWidth={isLocked ? "3.5" : "2.5"}
            strokeDasharray={isLocked ? `${perimeter} 0` : isHovered ? "140 404" : "0 544"}
            animate={
              isLocked
                ? { strokeDashoffset: [0, 0] }
                : isHovered
                  ? { strokeDashoffset: [0, -perimeter] }
                  : { strokeDashoffset: 0 }
            }
            transition={
              isLocked
                ? { duration: 0.3 }
                : isHovered
                  ? { repeat: Infinity, duration: 1.8, ease: "linear" }
                  : { duration: 0.4 }
            }
            filter="url(#svg-glow)"
          />
        </svg>

        {/* Central Button Body */}
        <button
          onClick={handleClick}
          className="w-full h-full rounded-2xl bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
        >
          <PenTool className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-45 text-accent-cyan' : 'text-slate-400'}`} />
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent font-black">
            {isLocked ? 'PERIMETER LOCKED' : isHovered ? 'VECTOR DRAWING' : 'SVG BORDER DRAW'}
          </span>
          {isLocked && <Check className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />}
        </button>
      </div>

      {/* Real-time Vector HUD Readout */}
      <div className="mt-3 flex items-center gap-3 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-cyan-400 animate-ping' : 'bg-slate-400'}`} />
          <span>PERIMETER:</span>
          <span className="text-slate-900 dark:text-white font-bold">{perimeter}px</span>
        </span>
        <span>|</span>
        <span className="text-accent-cyan font-bold">{isHovered ? 'ANIMATING' : 'IDLE'}</span>
      </div>
    </div>
  );
};

// 15. Claymorphism / Soft Clay Button
const ClaymorphismButton: React.FC = () => {
  const clayThemes = [
    {
      name: 'Lavender',
      bg: 'bg-[#a78bfa]',
      border: 'border-[#c4b5fd]',
      textColor: 'text-purple-950',
      shadowIdle: '0 18px 30px -4px rgba(167, 139, 250, 0.45), inset 0 6px 8px rgba(255, 255, 255, 0.8), inset 0 -6px 12px rgba(124, 58, 237, 0.35)',
      shadowActive: '0 4px 8px -2px rgba(167, 139, 250, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 6px rgba(124, 58, 237, 0.5)',
      indicator: '#8b5cf6',
    },
    {
      name: 'Peach',
      bg: 'bg-[#fb923c]',
      border: 'border-[#fdba74]',
      textColor: 'text-amber-950',
      shadowIdle: '0 18px 30px -4px rgba(251, 146, 60, 0.45), inset 0 6px 8px rgba(255, 255, 255, 0.8), inset 0 -6px 12px rgba(194, 65, 12, 0.35)',
      shadowActive: '0 4px 8px -2px rgba(251, 146, 60, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 6px rgba(194, 65, 12, 0.5)',
      indicator: '#f97316',
    },
    {
      name: 'Bubblegum',
      bg: 'bg-[#f472b6]',
      border: 'border-[#f9a8d4]',
      textColor: 'text-pink-950',
      shadowIdle: '0 18px 30px -4px rgba(244, 114, 182, 0.45), inset 0 6px 8px rgba(255, 255, 255, 0.8), inset 0 -6px 12px rgba(190, 24, 93, 0.35)',
      shadowActive: '0 4px 8px -2px rgba(244, 114, 182, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 6px rgba(190, 24, 93, 0.5)',
      indicator: '#ec4899',
    },
    {
      name: 'Mint',
      bg: 'bg-[#34d399]',
      border: 'border-[#6ee7b7]',
      textColor: 'text-emerald-950',
      shadowIdle: '0 18px 30px -4px rgba(52, 211, 153, 0.45), inset 0 6px 8px rgba(255, 255, 255, 0.8), inset 0 -6px 12px rgba(5, 150, 105, 0.35)',
      shadowActive: '0 4px 8px -2px rgba(52, 211, 153, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 6px rgba(5, 150, 105, 0.5)',
      indicator: '#10b981',
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);
  const [isSquished, setIsSquished] = useState(false);
  const [squishCount, setSquishCount] = useState(0);

  const theme = clayThemes[themeIndex];

  const handleSquish = () => {
    soundEffects.play('pop');
    setTimeout(() => soundEffects.play('thud'), 40);
    setSquishCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      {/* Soft Clay Surrounding Bed */}
      <div className="relative p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center">
        
        {/* Depressed Dimple Shadow under the clay button */}
        <div 
          className={`absolute w-44 h-16 rounded-3xl transition-all duration-200 pointer-events-none ${
            isSquished 
              ? 'scale-110 opacity-70 bg-black/25 dark:bg-black/60 blur-md' 
              : 'scale-90 opacity-40 bg-black/15 dark:bg-black/40 blur-sm'
          }`} 
        />

        {/* 3D Clay Button */}
        <motion.button
          onClick={handleSquish}
          onMouseDown={() => setIsSquished(true)}
          onMouseUp={() => setIsSquished(false)}
          onMouseLeave={() => setIsSquished(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scaleX: 1.1, scaleY: 0.86, y: 7 }}
          transition={{
            type: 'spring',
            stiffness: 420,
            damping: 14,
          }}
          style={{
            boxShadow: isSquished ? theme.shadowActive : theme.shadowIdle,
          }}
          className={`relative z-10 px-8 py-4 rounded-3xl ${theme.bg} ${theme.border} border-2 ${theme.textColor} font-sans font-black text-sm tracking-wide flex items-center gap-2.5 cursor-pointer transition-shadow duration-200`}
        >
          <Smile className={`w-5 h-5 transition-transform duration-300 ${isSquished ? 'scale-125 rotate-12' : ''}`} />
          <span>{isSquished ? 'SQUISHED!' : 'SQUISH CLAY'}</span>
        </motion.button>
      </div>

      {/* Palette Selector */}
      <div className="mt-3 flex items-center gap-2">
        {clayThemes.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => {
              soundEffects.play('switch');
              setThemeIndex(idx);
            }}
            className={`w-4 h-4 rounded-full transition-transform ${t.bg} ${
              themeIndex === idx ? 'scale-125 ring-2 ring-slate-400 dark:ring-white' : 'opacity-70 hover:opacity-100'
            }`}
            title={t.name}
          />
        ))}
        <span className="text-[10px] font-mono text-slate-400 ml-1">
          {theme.name} Clay ({squishCount} squishes)
        </span>
      </div>
    </div>
  );
};

// 16. Luxury Titanium / Brushed Metal Button
const LuxuryTitaniumButton: React.FC = () => {
  const alloys = [
    {
      id: 'natural',
      name: 'Natural Ti-6Al-4V',
      baseGrad: 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 25%, #64748b 50%, #94a3b8 75%, #e2e8f0 100%)',
      textColor: 'text-slate-800 dark:text-slate-100',
      tagColor: 'text-slate-600 dark:text-slate-300',
      accentGlint: 'rgba(255, 255, 255, 0.75)',
      chamfer: 'border-slate-300 dark:border-slate-600',
    },
    {
      id: 'space-black',
      name: 'DLC Space Black',
      baseGrad: 'linear-gradient(135deg, #334155 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #475569 100%)',
      textColor: 'text-slate-100',
      tagColor: 'text-slate-400',
      accentGlint: 'rgba(203, 213, 225, 0.65)',
      chamfer: 'border-slate-600',
    },
    {
      id: 'pvd-gold',
      name: 'PVD Titanium Gold',
      baseGrad: 'linear-gradient(135deg, #fef08a 0%, #eab308 25%, #a16207 50%, #ca8a04 75%, #fef9c3 100%)',
      textColor: 'text-amber-950',
      tagColor: 'text-amber-900',
      accentGlint: 'rgba(254, 240, 138, 0.85)',
      chamfer: 'border-amber-300',
    },
  ];

  const [alloyIndex, setAlloyIndex] = useState(0);
  const [glintAngle, setGlintAngle] = useState(45);
  const [isHovered, setIsHovered] = useState(false);
  const [isEngaged, setIsEngaged] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const alloy = alloys[alloyIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const angle = (Math.atan2(y, x) * 180) / Math.PI + 180;
    setGlintAngle(angle);
  };

  const handleClick = () => {
    soundEffects.play('metal');
    setTimeout(() => soundEffects.play('mechanical'), 70);
    setIsEngaged(true);
    setTimeout(() => setIsEngaged(false), 1800);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      {/* Precision Chamfered Casing */}
      <div 
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true);
          soundEffects.play('switch');
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setGlintAngle(45);
        }}
        onClick={handleClick}
        className={`relative p-1 rounded-2xl border-2 ${alloy.chamfer} shadow-xl cursor-pointer group transition-all duration-300`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), rgba(0,0,0,0.4))',
        }}
      >
        {/* Diamond-Cut Outer Bevel Ring */}
        <div 
          className="relative px-8 py-4 rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all active:scale-[0.98]"
          style={{
            background: alloy.baseGrad,
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -2px 3px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)',
          }}
        >
          {/* Micro Anisotropic Brushed Lines Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
            }}
          />

          {/* Dynamic Radial Specular Glint Cone */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={{
              opacity: isHovered ? 0.9 : 0.4,
              background: `conic-gradient(from ${glintAngle}deg at 50% 50%, transparent 0deg, ${alloy.accentGlint} 45deg, transparent 90deg, transparent 180deg, ${alloy.accentGlint} 225deg, transparent 270deg)`,
              mixBlendMode: 'color-dodge',
            }}
          />

          {/* Specular Sheen Sweep Line */}
          <div 
            className="absolute -inset-x-12 h-20 -rotate-45 pointer-events-none transition-all duration-500 opacity-25 group-hover:opacity-60"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)',
              transform: isHovered ? 'translateY(100%)' : 'translateY(-100%)',
            }}
          />

          {/* Laser-Etched Emblem & Typography */}
          <div className="relative z-10 flex items-center gap-2">
            <Shield className={`w-4 h-4 ${alloy.textColor} drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]`} />
            <span className={`font-mono font-black text-xs uppercase tracking-[0.2em] ${alloy.textColor} drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]`}>
              {isEngaged ? 'ENGAGED // 100%' : 'TITANIUM Ti-6Al-4V'}
            </span>
          </div>

          <div className="relative z-10 mt-0.5 flex items-center gap-1.5">
            <span className={`text-[8px] font-mono font-bold tracking-widest uppercase ${alloy.tagColor}`}>
              AEROSPACE GRADE 5 • SPECULAR GLINT: {Math.round(glintAngle)}°
            </span>
          </div>
        </div>
      </div>

      {/* Titanium Grade Finish Selector */}
      <div className="mt-3 flex items-center gap-2">
        {alloys.map((a, idx) => (
          <button
            key={a.id}
            onClick={() => {
              soundEffects.play('switch');
              setAlloyIndex(idx);
            }}
            className={`px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold transition-all ${
              alloyIndex === idx
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// 17. Cyberpunk Glitch Button
const CyberpunkGlitchButton: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    soundEffects.play('glitch');
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div className="relative">
      <button
        onClick={triggerGlitch}
        onMouseEnter={() => soundEffects.play('arcade')}
        className="relative px-8 py-3.5 bg-slate-950 text-cyan-400 font-mono font-black text-sm uppercase tracking-wider border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] group overflow-hidden cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Zap className="w-4 h-4 text-rose-500 animate-pulse" />
          <span>CYBER_GLITCH</span>
        </span>
        <span 
          aria-hidden="true" 
          className={`absolute inset-0 flex items-center justify-center text-rose-500 select-none pointer-events-none transition-transform font-mono font-black text-sm uppercase tracking-wider ${
            isGlitching ? 'translate-x-1.5 -translate-y-0.5 opacity-90' : 'group-hover:translate-x-0.5 opacity-0 group-hover:opacity-60'
          }`}
        >
          CYBER_GLITCH
        </span>
        <span 
          aria-hidden="true" 
          className={`absolute inset-0 flex items-center justify-center text-cyan-300 select-none pointer-events-none transition-transform font-mono font-black text-sm uppercase tracking-wider ${
            isGlitching ? '-translate-x-1.5 translate-y-0.5 opacity-90' : 'group-hover:-translate-x-0.5 opacity-0 group-hover:opacity-60'
          }`}
        >
          CYBER_GLITCH
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent bg-[length:100%_4px] pointer-events-none" />
      </button>
    </div>
  );
};

// 12. Spotlight Button
const SpotlightButton: React.FC = () => {
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true
    });
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        soundEffects.play('switch');
        setSpot((s) => ({ ...s, visible: true }));
      }}
      onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
      onClick={() => soundEffects.play('pop')}
      className="relative px-8 py-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-white font-medium text-sm tracking-wide shadow-xl overflow-hidden cursor-pointer"
    >
      {spot.visible && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 90px at ${spot.x}px ${spot.y}px, rgba(6, 182, 212, 0.45), transparent 75%)`,
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <Sun className="w-4 h-4 text-cyan-300" />
        <span>Magnetic Spotlight</span>
      </span>
    </button>
  );
};

// 13. Energy Reactor Button
const EnergyReactorButton: React.FC = () => {
  const [charge, setCharge] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [isDetonated, setIsDetonated] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCharging = () => {
    if (isDetonated) return;
    setIsCharging(true);
    soundEffects.play('charge');

    timerRef.current = setInterval(() => {
      setCharge((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleDetonate();
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const stopCharging = () => {
    if (isDetonated) return;
    setIsCharging(false);
    if (timerRef.current) clearInterval(timerRef.current);
    const drainInterval = setInterval(() => {
      setCharge((prev) => {
        if (prev <= 0) {
          clearInterval(drainInterval);
          return 0;
        }
        return prev - 8;
      });
    }, 30);
  };

  const handleDetonate = () => {
    soundEffects.play('laser');
    setIsDetonated(true);
    confetti({
      particleCount: 60,
      spread: 70,
      colors: ['#F59E0B', '#EF4444', '#10B981'],
    });
    setTimeout(() => {
      setIsDetonated(false);
      setCharge(0);
      setIsCharging(false);
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onMouseDown={startCharging}
        onMouseUp={stopCharging}
        onTouchStart={startCharging}
        onTouchEnd={stopCharging}
        className={`relative px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider overflow-hidden transition-all duration-150 select-none cursor-pointer border ${
          isDetonated
            ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_25px_#f59e0b]'
            : 'bg-slate-900 text-amber-300 border-amber-500/50 shadow-md'
        } ${isCharging ? 'scale-95' : ''}`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 opacity-60 transition-all duration-75"
          style={{ width: `${charge}%` }}
        />
        <span className="relative z-10 flex items-center gap-2">
          <Flame className={`w-4 h-4 ${isCharging ? 'animate-bounce text-red-500' : 'text-amber-400'}`} />
          <span>
            {isDetonated ? 'MAX CHARGE! 💥' : isCharging ? `CHARGING ${charge}%` : 'HOLD TO CHARGE'}
          </span>
        </span>
      </button>
      <span className="text-[10px] text-slate-500 font-mono">Press and hold to charge reactor</span>
    </div>
  );
};

// 14. Radar Scanner HUD Button
const RadarScannerButton: React.FC = () => {
  return (
    <button
      onClick={() => soundEffects.play('laser')}
      className="relative px-8 py-3.5 rounded-xl bg-slate-950 text-emerald-400 font-mono font-bold text-xs tracking-widest uppercase border border-emerald-500/70 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.4)_360deg)] animate-spin"
        style={{ animationDuration: '2.5s' }}
      />
      <div className="absolute inset-0 border border-emerald-500/20 rounded-xl pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">
        <Radio className="w-4 h-4 animate-pulse text-emerald-300" />
        <span>RADAR_SWEEP</span>
      </span>
    </button>
  );
};

// 15. Pixel Art 8-Bit Button
const PixelArtButton: React.FC = () => {
  return (
    <button
      onClick={() => soundEffects.play('arcade')}
      className="relative px-6 py-2.5 bg-[#48bb78] text-black font-mono font-black text-xs uppercase tracking-widest shadow-[4px_4px_0_#22543d] active:translate-x-1 active:translate-y-1 active:shadow-none border-2 border-black cursor-pointer select-none"
      style={{ imageRendering: 'pixelated' }}
    >
      <span className="flex items-center gap-2">
        <Gamepad2 className="w-4 h-4 text-black" />
        <span>[ 1-PLAYER START ]</span>
      </span>
    </button>
  );
};

// 16. Paper Fold 3D Origami Button
const PaperFoldButton: React.FC = () => {
  const [folded, setFolded] = useState(false);

  return (
    <div className="perspective-[800px]">
      <motion.button
        onClick={() => {
          soundEffects.play('pop');
          setFolded(!folded);
        }}
        animate={{
          rotateX: folded ? 35 : 0,
          scale: folded ? 0.95 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative px-7 py-3 rounded-md bg-amber-50 dark:bg-amber-100 text-amber-950 font-serif font-bold text-sm tracking-wide border border-amber-300 shadow-md cursor-pointer select-none flex items-center gap-2 transform-gpu"
        style={{
          boxShadow: folded
            ? '0 15px 25px -5px rgba(0, 0, 0, 0.3)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-400/40 pointer-events-none" />
        <FoldHorizontal className="w-4 h-4 text-amber-800" />
        <span>{folded ? 'Unfold Origami' : 'Fold Origami 3D'}</span>
      </motion.button>
    </div>
  );
};

// 17. Liquid Chrome Button
const LiquidChromeButton: React.FC = () => {
  return (
    <button
      onClick={() => soundEffects.play('metal')}
      className="relative px-8 py-3.5 rounded-full text-slate-900 font-extrabold text-xs uppercase tracking-widest shadow-xl border border-white/80 overflow-hidden group cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 25%, #94a3b8 50%, #ffffff 75%, #cbd5e1 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform" />
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        <Sparkles className="w-4 h-4 text-slate-800" />
        <span>Liquid Chrome</span>
      </span>
    </button>
  );
};

// 18. Elastic Band Snap Button
const ElasticBandButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scaleX: 1.25, scaleY: 0.85 }}
      whileTap={{ scaleX: 0.8, scaleY: 1.3 }}
      transition={{ type: 'spring', stiffness: 500, damping: 12 }}
      onClick={() => soundEffects.play('pop')}
      className="px-7 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-black text-xs uppercase tracking-wider shadow-lg cursor-pointer"
    >
      <span>Rubber Snap 🎯</span>
    </motion.button>
  );
};

// 19. Aurora Gradient Button
const AuroraGradientButton: React.FC = () => {
  return (
    <button
      onClick={() => soundEffects.play('bubble')}
      className="relative px-8 py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-glow-violet overflow-hidden group cursor-pointer border border-white/20"
      style={{
        background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #10B981, #F43F5E, #8B5CF6)',
        backgroundSize: '300% 100%',
        animation: 'shimmer 4s infinite linear',
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-white animate-spin" />
        <span>Aurora Borealis</span>
      </span>
    </button>
  );
};

// 20. Runaway Button
const RunawayButton: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const taunts = [
    "Catch me! 💨",
    "Accept the T&C! 📜",
    "Too slow! 😜",
    "Rules are rules! ✋",
    "Check the box first! 🏃",
    "Can't touch this! 😂"
  ];

  const handleHover = () => {
    if (isAccepted || isSubmitted) return;
    soundEffects.play('arcade');
    setDodgeCount((prev) => prev + 1);

    const possibleOffsets = [
      { x: -65, y: -22 },
      { x: 65, y: -22 },
      { x: -60, y: 22 },
      { x: 60, y: 22 },
      { x: -70, y: 0 },
      { x: 70, y: 0 },
      { x: 0, y: -25 },
      { x: 0, y: 25 },
    ];

    const candidates = possibleOffsets.filter(
      (p) => Math.abs(p.x - pos.x) > 30 || Math.abs(p.y - pos.y) > 15
    );
    const nextPos = candidates[Math.floor(Math.random() * candidates.length)] || possibleOffsets[0];
    setPos(nextPos);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsAccepted(checked);
    soundEffects.play('switch');
    if (checked) {
      setPos({ x: 0, y: 0 });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isAccepted) return;
    soundEffects.play('success');
    setIsSubmitted(true);
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
    setTimeout(() => setIsSubmitted(false), 3500);
  };

  return (
    <div className="w-full flex flex-col items-center gap-2.5">
      <label className="flex items-center gap-2 cursor-pointer select-none px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:border-accent-violet dark:hover:border-accent-cyan transition-colors">
        <input
          type="checkbox"
          checked={isAccepted}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
          className="w-3.5 h-3.5 rounded accent-accent-violet dark:accent-accent-cyan cursor-pointer"
        />
        <span>I agree to the Terms & Conditions</span>
      </label>
      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider">
        {isAccepted ? (
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <Unlock className="w-3 h-3" /> Unlocked & Anchored
          </span>
        ) : (
          <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Locked: Dodges on Hover ({dodgeCount})
          </span>
        )}
      </div>
      <div className="relative w-full h-[60px] flex items-center justify-center">
        <motion.button
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          onMouseEnter={handleHover}
          onClick={handleSubmit}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center gap-2 cursor-pointer select-none ${
            isSubmitted
              ? 'bg-emerald-500 text-white shadow-[0_0_20px_#10B981]'
              : isAccepted
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/30 active:scale-95'
              : 'bg-rose-500 text-white shadow-rose-500/30'
          }`}
        >
          {isSubmitted ? (
            <>
              <Check className="w-4 h-4" />
              <span>Accepted! 🎉</span>
            </>
          ) : isAccepted ? (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Confirm & Submit</span>
            </>
          ) : (
            <>
              <span>{dodgeCount === 0 ? "Submit (Locked)" : taunts[dodgeCount % taunts.length]}</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

// 21. Magnetic Pull Button
const MagneticButton: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.35;
    const deltaY = (clientY - centerY) * 0.35;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      onClick={() => soundEffects.play('pop')}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-violet to-indigo-600 dark:from-accent-cyan dark:to-blue-500 text-white dark:text-surface-950 font-bold text-sm tracking-wide shadow-md dark:shadow-glow-cyan hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
    >
      <MousePointer className="w-4 h-4 animate-bounce" />
      <span>Magnetic Pull</span>
    </motion.button>
  );
};

// 22. 3D Tilt Button
const TiltButton: React.FC = () => {
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRot({ x: -y * 0.15, y: x * 0.15 });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
  };

  return (
    <div 
      className="perspective-[600px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        animate={{ rotateX: rot.x, rotateY: rot.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        onClick={() => soundEffects.play('mechanical')}
        className="px-6 py-3 rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-semibold text-sm shadow-lg dark:shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer transform-gpu"
      >
        <Zap className="w-4 h-4 text-accent-amber" />
        <span>3D Gyro Tilt</span>
      </motion.button>
    </div>
  );
};

// 23. Morphing State Button
const MorphingButton: React.FC = () => {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state !== 'idle') return;
    soundEffects.play('switch');
    setState('loading');

    setTimeout(() => {
      soundEffects.play('success');
      setState('success');
      const rect = e.currentTarget.getBoundingClientRect();
      confetti({
        particleCount: 40,
        spread: 50,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
      });
      setTimeout(() => setState('idle'), 3000);
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== 'idle'}
      className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
        state === 'idle'
          ? 'bg-accent-violet hover:bg-violet-600 text-white shadow-glow-violet active:scale-95'
          : state === 'loading'
          ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-wait'
          : 'bg-emerald-500 text-white shadow-[0_0_20px_#10B981]'
      }`}
    >
      {state === 'idle' && (
        <>
          <Download className="w-4 h-4" />
          <span>Download Asset</span>
        </>
      )}
      {state === 'loading' && (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-accent-violet dark:text-accent-cyan" />
          <span>Processing...</span>
        </>
      )}
      {state === 'success' && (
        <>
          <Check className="w-4 h-4" />
          <span>Completed!</span>
        </>
      )}
    </button>
  );
};

// 24. Heart Like Button
const HeartLikeButton: React.FC = () => {
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    soundEffects.play('pop');
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  return (
    <button
      onClick={toggleLike}
      className={`px-6 py-3 rounded-full border transition-all duration-200 flex items-center gap-2 font-bold text-sm cursor-pointer active:scale-90 ${
        isLiked
          ? 'bg-rose-500/15 border-rose-500 text-rose-600 dark:text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
          : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
      }`}
    >
      <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'fill-rose-500 text-rose-500 scale-125' : ''}`} />
      <span>{likes}</span>
    </button>
  );
};

export const ButtonGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'physics' | 'scifi' | 'artistic' | 'premium' | 'tactile'>('all');

  const categories = [
    { id: 'all', label: 'All Styles (30+)' },
    { id: 'physics', label: '🧲 Advanced Physics' },
    { id: 'scifi', label: '⚡ Sci-Fi & Cyberpunk' },
    { id: 'artistic', label: '🎨 Artistic & 8-Bit' },
    { id: 'premium', label: '✨ Modern & Spotlight' },
    { id: 'tactile', label: '🕹️ 3D & Mechanical' },
  ];

  return (
    <section id="gallery" className="py-20 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-accent-cyan mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Button Typology & Styles Museum
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Arranged by popularity and real-world utility: from universal modern SaaS micro-interactions to kinetic physics, tactile hardware, and high-concept sci-fi.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundEffects.play('switch');
                  setActiveTab(cat.id as typeof activeTab);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-accent-violet dark:bg-accent-cyan text-white dark:text-surface-950 font-bold shadow-md dark:shadow-glow-cyan'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Arranged by Popularity & Common Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. State Morphing Action */}
          {(activeTab === 'all' || activeTab === 'physics' || activeTab === 'premium') && (
            <ButtonCard
              title="Morphing State Machine"
              category="Micro-Interaction"
              description="Single button transitions dynamically between Idle, Loading spinner, and Success."
              codeSnippet={`<button className="transition-all duration-300 px-6 py-3 rounded-xl">\n  {state === 'idle' && 'Download Asset'}\n  {state === 'loading' && <Spinner />}\n  {state === 'success' && 'Completed!'}\n</button>`}
            >
              <MorphingButton />
            </ButtonCard>
          )}

          {/* 2. Micro-Reaction Like */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Micro-Reaction Like"
              category="Micro-Interaction"
              description="Pulsing heart animation with real-time counter state and spring bounce."
              codeSnippet={`<button className="px-6 py-3 rounded-full border border-rose-500/50 bg-rose-500/10 text-rose-400 active:scale-90">\n  <Heart /> 42\n</button>`}
            >
              <HeartLikeButton />
            </ButtonCard>
          )}

          {/* 3. Magnetic Spotlight Button */}
          {(activeTab === 'all' || activeTab === 'premium') && (
            <ButtonCard
              title="Magnetic Spotlight"
              category="Minimalist & Lighting"
              description="Dynamic radial gradient spotlight cone directly tracks real-time cursor coordinates."
              codeSnippet={`<button onMouseMove={(e) => setSpot({ x: e.clientX, y: e.clientY })}>\n  <div style={{ background: \`radial-gradient(circle 90px at \${spot.x}px \${spot.y}px, rgba(6,182,212,0.45), transparent)\` }} />\n  Magnetic Spotlight\n</button>`}
            >
              <SpotlightButton />
            </ButtonCard>
          )}

          {/* 4. Aurora Gradient Flow */}
          {(activeTab === 'all' || activeTab === 'premium') && (
            <ButtonCard
              title="Aurora Gradient Flow"
              category="Modern Gradient"
              description="Multi-stop rainbow mesh gradient smoothly flowing through a translucent pill."
              codeSnippet={`<button className="bg-[linear-gradient(90deg,#8B5CF6,#06B6D4,#10B981,#F43F5E,#8B5CF6)] bg-[length:300%_100%] animate-shimmer">\n  Aurora Borealis\n</button>`}
            >
              <AuroraGradientButton />
            </ButtonCard>
          )}

          {/* 5. Neo-Brutalist Sticker */}
          {(activeTab === 'all' || activeTab === 'tactile' || activeTab === 'artistic') && (
            <ButtonCard
              title="Neo-Brutalist Sticker"
              category="Neo-Brutalist"
              description="Thick 3px solid black border with 5px offset hard shadow that slams down on press."
              codeSnippet={`<button className="px-7 py-3 bg-[#A3E635] text-black font-black uppercase border-3 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">\n  LET'S GO!\n</button>`}
            >
              <button
                onClick={() => soundEffects.play('mechanical')}
                className="px-7 py-3 bg-[#A3E635] text-black font-black text-sm uppercase tracking-wider rounded-md border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-brutal-pressed transition-all cursor-pointer flex items-center gap-2"
              >
                <span>LET'S GO!</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </ButtonCard>
          )}

          {/* 6. SVG Border Draw Button */}
          {(activeTab === 'all' || activeTab === 'artistic' || activeTab === 'premium') && (
            <ButtonCard
              title="SVG Path Border Draw"
              category="Artistic & Vector"
              description="Perimeter laser outline continuously draws itself around the rounded button boundary using stroke-dashoffset."
              codeSnippet={`// SVG Perimeter Drawing\n<motion.rect\n  strokeDasharray="140 404"\n  animate={{ strokeDashoffset: [0, -544] }}\n  transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}\n/>`}
            >
              <SvgBorderDrawButton />
            </ButtonCard>
          )}

          {/* 7. Magnetic Cursor Pull */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Magnetic Cursor Pull"
              category="Physics & Hover"
              description="Spring-loaded physics that tracks mouse coordinate delta and pulls toward the cursor."
              codeSnippet={`<motion.button animate={{ x: deltaX, y: deltaY }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>\n  Magnetic Pull\n</motion.button>`}
            >
              <MagneticButton />
            </ButtonCard>
          )}

          {/* 8. 3D Gyro Perspective Tilt */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="3D Perspective Tilt"
              category="Physics & Hover"
              description="Rotates along the X and Y axes depending on mouse quadrant coordinates."
              codeSnippet={`<div className="perspective-[600px]">\n  <motion.button animate={{ rotateX, rotateY }} className="px-6 py-3 rounded-xl bg-slate-800">\n    3D Gyro Tilt\n  </motion.button>\n</div>`}
            >
              <TiltButton />
            </ButtonCard>
          )}

          {/* 9. Elastic Rubber Band */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Elastic Band Snap"
              category="Spring Physics"
              description="Squashes and stretches with high stiffness and spring recoil on press."
              codeSnippet={`<motion.button\n  whileHover={{ scaleX: 1.25, scaleY: 0.85 }}\n  whileTap={{ scaleX: 0.8, scaleY: 1.3 }}\n  transition={{ type: "spring", stiffness: 500, damping: 12 }}\n>\n  Rubber Snap 🎯\n</motion.button>`}
            >
              <ElasticBandButton />
            </ButtonCard>
          )}

          {/* 10. Liquid Wave Fill Button */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Liquid Wave Fill"
              category="Fluid Dynamics"
              description="An undulating water wave rises from the bottom and fills the capsule on hover."
              codeSnippet={`// Liquid Wave Fill on hover\n<div className="relative overflow-hidden rounded-full border-2 border-cyan-400">\n  <div style={{ height: isHovered ? "100%" : "0%" }} className="absolute inset-x-0 bottom-0 transition-all duration-500">\n    <svg className="w-[200%] animate-shimmer" viewBox="0 0 1200 120">\n      <path d="..." className="fill-cyan-500" />\n    </svg>\n  </div>\n  <span className="relative z-10">Liquid Wave Fill</span>\n</div>`}
            >
              <LiquidWaveFillButton />
            </ButtonCard>
          )}

          {/* 11. Elastic Typography Letter Bounce Button */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Elastic Letter Bounce"
              category="Typography Physics"
              description="Individual letters stretch, squish, and bounce dynamically when brushed by the cursor."
              codeSnippet={`// Per-letter spring displacement\n{text.split('').map((char, i) => (\n  <motion.span\n    onMouseEnter={() => bounce(i)}\n    animate={bounced ? { y: [-12, 0], scaleY: [1.45, 1], scaleX: [0.75, 1] } : { y: 0 }}\n  >\n    {char}\n  </motion.span>\n))}`}
            >
              <ElasticLetterBounceButton />
            </ButtonCard>
          )}

          {/* 12. Liquid Morph Gooey Blob Button */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Liquid Morph & Gooey Blob"
              category="Organic Physics"
              description="Continuous organic shape-shifting between non-linear fluid border-radius coordinates."
              codeSnippet={`// Organic Liquid Morphing Border Radius\n<motion.button\n  animate={{\n    borderRadius: [\n      "60% 40% 30% 70% / 60% 30% 70% 40%",\n      "30% 60% 70% 40% / 50% 60% 30% 60%",\n      "60% 40% 30% 70% / 60% 30% 70% 40%"\n    ]\n  }}\n  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}\n>\n  Gooey Morph\n</motion.button>`}
            >
              <LiquidMorphBlobButton />
            </ButtonCard>
          )}

          {/* 13. Mechanical Cherry MX Keycap */}
          {(activeTab === 'all' || activeTab === 'tactile') && (
            <ButtonCard
              title="Mechanical Keycap Switch"
              category="3D & Mechanical"
              description="Realistic keycap with 6px bottom bevel that depresses 4px down on click."
              codeSnippet={`<button className="relative px-7 py-3 rounded-xl bg-slate-800 text-white font-mono font-bold shadow-[0_6px_0_#020617] active:translate-y-1.5 active:shadow-[0_1px_0_#020617] border border-slate-600">\n  [ CHERRY MX ]\n</button>`}
            >
              <button
                onClick={() => soundEffects.play('mechanical')}
                className="relative px-8 py-3.5 rounded-xl bg-slate-800 text-white font-mono font-bold tracking-wider shadow-[0_6px_0_#020617] active:translate-y-1.5 active:shadow-[0_1px_0_#020617] border border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent-rose shadow-[0_0_8px_#f43f5e]" />
                <span>[ CHERRY MX ]</span>
              </button>
            </ButtonCard>
          )}

          {/* 14. Industrial Missile / Kill Switch Button */}
          {(activeTab === 'all' || activeTab === 'tactile') && (
            <ButtonCard
              title="Industrial Missile Safety Switch"
              category="Tactile & Mechanical"
              description="Heavy-duty flip cover swings open on hover to expose an armed red missile switch with metallic latch clicks."
              codeSnippet={`// 3D Perspective Safety Flip Cover\n<motion.div\n  animate={{ rotateX: isOpen ? -115 : 0, y: isOpen ? -22 : 0 }}\n  transition={{ type: "spring", stiffness: 300, damping: 22 }}\n  style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}\n  className="safety-cover"\n>\n  LIFT TO ARM\n</motion.div>`}
            >
              <IndustrialMissileButton />
            </ButtonCard>
          )}

          {/* 15. Rotary Dial Knob */}
          {(activeTab === 'all' || activeTab === 'tactile') && (
            <ButtonCard
              title="Rotary Dial Knob Detent"
              category="Tactile & Mechanical"
              description="Rotating audiophile potentiometer knob that ratchets into discrete detents (0°, 45°, 90°, 135°)."
              codeSnippet={`// Discrete Angle Ratchet Spring Rotation\n<motion.div\n  animate={{ rotate: currentAngle }}\n  transition={{ type: "spring", stiffness: 450, damping: 24 }}\n  onClick={() => setAngle(nextDetent)}\n>\n  <KnobIndicator />\n</motion.div>`}
            >
              <RotaryDialKnob />
            </ButtonCard>
          )}

          {/* 16. Capacitive Touch Ring Button */}
          {(activeTab === 'all' || activeTab === 'tactile' || activeTab === 'scifi') && (
            <ButtonCard
              title="Capacitive Touch Luminescent Ring"
              category="Tactile & Capacitive"
              description="Biometric touch surface that emits dual expanding cyan luminescent shockwave rings on contact."
              codeSnippet={`// Expanding Luminescent Shockwaves on Touch\n{ripples.map(r => (\n  <motion.div\n    initial={{ scale: 0.8, opacity: 0.9 }}\n    animate={{ scale: 2.6, opacity: 0 }}\n    transition={{ duration: 1.1, ease: "easeOut" }}\n    className="rounded-full border-2 border-cyan-400 shadow-[0_0_20px_#06B6D4]"\n  />\n))}`}
            >
              <CapacitiveTouchRingButton />
            </ButtonCard>
          )}

          {/* 17. Energy Reactor (Hold to Charge) */}
          {(activeTab === 'all' || activeTab === 'scifi' || activeTab === 'tactile') && (
            <ButtonCard
              title="Energy Reactor (Hold Charge)"
              category="Power Interface"
              description="Continuous press charges the reactor core from 0% to 100% before releasing energy."
              codeSnippet={`// Hold-to-Charge with interval accumulator\n<button onMouseDown={startCharging} onMouseUp={stopCharging}>\n  <div style={{ width: \`\${charge}%\` }} className="bg-amber-500" />\n  HOLD TO CHARGE\n</button>`}
            >
              <EnergyReactorButton />
            </ButtonCard>
          )}

          {/* 18. Claymorphism Soft Clay Button */}
          {(activeTab === 'all' || activeTab === 'artistic' || activeTab === 'tactile') && (
            <ButtonCard
              title="Claymorphism Soft Clay"
              category="Artistic & 3D Clay"
              description="Pastel marshmallow matte clay button with inner pillowy highlights that squishes deeply into the surface on press."
              codeSnippet={`// 3D Soft Clay Squish Physics\n<motion.button\n  whileTap={{ scaleX: 1.1, scaleY: 0.86, y: 7 }}\n  transition={{ type: "spring", stiffness: 420, damping: 14 }}\n  style={{\n    boxShadow: "0 18px 30px -4px rgba(167,139,250,0.45), inset 0 6px 8px #fff, inset 0 -6px 12px rgba(124,58,237,0.35)"\n  }}\n>\n  Squish Clay\n</motion.button>`}
            >
              <ClaymorphismButton />
            </ButtonCard>
          )}

          {/* 19. Luxury Titanium / Brushed Metal Button */}
          {(activeTab === 'all' || activeTab === 'premium' || activeTab === 'artistic' || activeTab === 'tactile') && (
            <ButtonCard
              title="Luxury Anisotropic Titanium"
              category="Artistic & Luxury Metal"
              description="Aerospace Grade 5 brushed titanium with real-time radial specular light sheen and diamond-cut chamfered edges."
              codeSnippet={`// Dynamic Anisotropic Specular Glint Cone\n<div style={{\n  background: \`conic-gradient(from \${glintAngle}deg at 50% 50%, transparent, \${alloy.accentGlint} 45deg, transparent 90deg)\`,\n  mixBlendMode: "color-dodge"\n}} />`}
            >
              <LuxuryTitaniumButton />
            </ButtonCard>
          )}

          {/* 20. Typography Reveal / Airport Roll Button */}
          {(activeTab === 'all' || activeTab === 'artistic' || activeTab === 'tactile') && (
            <ButtonCard
              title="Typography Reveal Airport Roll"
              category="Artistic & Typography"
              description="Solari split-flap departure board typography where each letter rolls independently on hover."
              codeSnippet={`// Solari Split-Flap 3D Character Tumbler\n<motion.span\n  initial={{ y: "100%", rotateX: -90, opacity: 0 }}\n  animate={{ y: "0%", rotateX: 0, opacity: 1 }}\n  transition={{ duration: 0.35, delay: idx * 0.025 }}\n>\n  {char}\n</motion.span>`}
            >
              <AirportRollButton />
            </ButtonCard>
          )}

          {/* 21. Liquid Chrome */}
          {(activeTab === 'all' || activeTab === 'artistic' || activeTab === 'premium') && (
            <ButtonCard
              title="Liquid Chrome / Mercury"
              category="Metallic Art"
              description="Polished reflective silver gradient with specular light sweep on hover."
              codeSnippet={`<button className="bg-gradient-to-r from-slate-200 via-white to-slate-400 text-slate-900 font-extrabold shadow-xl">\n  <div className="translate-x-full group-hover:translate-x-0 transition-transform bg-white/80" />\n  Liquid Chrome\n</button>`}
            >
              <LiquidChromeButton />
            </ButtonCard>
          )}

          {/* 22. Paper Folding 3D Origami */}
          {(activeTab === 'all' || activeTab === 'artistic') && (
            <ButtonCard
              title="3D Origami Paper Fold"
              category="Paper Craft"
              description="Button physically folds along a central crease line using 3D perspective transforms."
              codeSnippet={`<motion.button\n  animate={{ rotateX: folded ? 35 : 0 }}\n  className="perspective-[800px] bg-amber-50 shadow-md"\n>\n  Fold Origami 3D\n</motion.button>`}
            >
              <PaperFoldButton />
            </ButtonCard>
          )}

          {/* 23. Pixel Art 8-Bit */}
          {(activeTab === 'all' || activeTab === 'artistic') && (
            <ButtonCard
              title="8-Bit Pixel Art Button"
              category="Retro Gaming"
              description="Pixelated stepped 4-pixel border, NES arcade palette, and 8-bit blip audio."
              codeSnippet={`<button className="bg-[#48bb78] text-black font-mono font-black shadow-[4px_4px_0_#22543d] active:translate-x-1 active:translate-y-1 active:shadow-none border-2 border-black">\n  [ 1-PLAYER START ]\n</button>`}
            >
              <PixelArtButton />
            </ButtonCard>
          )}

          {/* 24. Cyberpunk RGB Glitch */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Cyberpunk RGB Glitch"
              category="Digital Distortion"
              description="Chromatic RGB channel separation, horizontal slice displacement, and glitch audio."
              codeSnippet={`// Chromatic RGB Channel Split on Click / Hover\n<button className="border-2 border-cyan-400 text-cyan-400">\n  <span className="translate-x-1 text-rose-500">CYBER_GLITCH</span>\n  <span className="-translate-x-1 text-cyan-300">CYBER_GLITCH</span>\n</button>`}
            >
              <CyberpunkGlitchButton />
            </ButtonCard>
          )}

          {/* 25. Laser Scanline Button */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Laser Scanline Targeting"
              category="Sci-Fi HUD"
              description="High-intensity neon red laser bar constantly scanning vertically with targeting lock."
              codeSnippet={`// Sweeping Laser Beam\n<motion.div\n  animate={{ top: ["0%", "92%", "0%"] }}\n  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}\n  className="h-[2px] bg-red-400 shadow-[0_0_12px_#EF4444]"\n/>`}
            >
              <LaserScanlineButton />
            </ButtonCard>
          )}

          {/* 26. Holographic Projection Button */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Holographic Projection"
              category="Sci-Fi Hologram"
              description="Upward volumetric conical light beam projects a floating wireframe hologram on hover."
              codeSnippet={`// Volumetric Light Projection & Floating Hologram\n<AnimatePresence>\n  {isHovered && (\n    <motion.div animate={{ y: [-24, -30, -24], opacity: [0.7, 1, 0.85] }}>\n      HOLOGRAM_v4.2\n    </motion.div>\n  )}\n</AnimatePresence>`}
            >
              <HolographicProjectionButton />
            </ButtonCard>
          )}

          {/* 27. Matrix Digital Rain Button */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Matrix Digital Rain"
              category="Terminal & Sci-Fi"
              description="Cascading green terminal code characters rain down vertically inside the button on hover."
              codeSnippet={`// Cascading Matrix stream animation on hover\n<div className="flex justify-between px-2 overflow-hidden">\n  {columns.map((col, i) => (\n    <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5 }}>\n      {col.map(c => <span>{c}</span>)}\n    </motion.div>\n  ))}\n</div>`}
            >
              <MatrixDigitalRainButton />
            </ButtonCard>
          )}

          {/* 28. Portal Transition Button */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Portal Wormhole Warp"
              category="Spatial Sci-Fi"
              description="Clicking initiates a circular expanding spatial warp and interdimensional vortex wave."
              codeSnippet={`// Interdimensional Wormhole Pulse on Click\n{isWarping && (\n  <motion.div\n    initial={{ scale: 0, opacity: 1, rotate: 0 }}\n    animate={{ scale: 3.2, opacity: 0, rotate: 180 }}\n    transition={{ duration: 1.2, ease: "easeOut" }}\n    className="rounded-full border-4 border-dashed border-cyan-400"\n  />\n)}`}
            >
              <PortalTransitionButton />
            </ButtonCard>
          )}

          {/* 29. Black Hole Gravity Button */}
          {(activeTab === 'all' || activeTab === 'physics' || activeTab === 'scifi') && (
            <ButtonCard
              title="Black Hole Singularity"
              category="Space Physics"
              description="Orbiting cosmic particles get pulled inward toward the event horizon on hover."
              codeSnippet={`// Black Hole Gravitational Pull with Framer Motion\n<motion.div animate={{ rotate: [0, 360], scale: isHovered ? 0.3 : 1 }}>\n  <button className="bg-black text-white font-mono shadow-[0_0_20px_#8B5CF6]">\n    Event Horizon\n  </button>\n</motion.div>`}
            >
              <BlackHoleButton />
            </ButtonCard>
          )}

          {/* 30. Magnetic Repulsion Button */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Magnetic Repulsion"
              category="Physics & Vectors"
              description="Opposite of magnetic pull — pushes away from the cursor in reverse vector like matching poles."
              codeSnippet={`// Inverse Vector Repulsion with Framer Motion\nconst angle = Math.atan2(diffY, diffX);\nconst pushX = -Math.cos(angle) * force;\nconst pushY = -Math.sin(angle) * force;\n\n<motion.button animate={{ x: pushX, y: pushY }} transition={{ type: "spring", stiffness: 350, damping: 20 }}>\n  N ↔ N Repulsion\n</motion.button>`}
            >
              <MagneticRepulsionButton />
            </ButtonCard>
          )}

          {/* 31. Gravity Drop Button */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="Gravity Drop & Bounce"
              category="Physics & Gravity"
              description="On click, the button drops under simulated gravity and rebounds with decaying physical bounces."
              codeSnippet={`// Simulated Gravity & Damped Floor Bounces\n<motion.button\n  animate={isDropping ? {\n    y: [0, 50, 20, 50, 38, 50, 0],\n    rotate: [0, 8, -6, 4, -2, 0]\n  } : { y: 0 }}\n  transition={{ duration: 1.3, times: [0, 0.25, 0.45, 0.65, 0.8, 0.92, 1] }}\n>\n  Gravity Drop\n</motion.button>`}
            >
              <GravityDropButton />
            </ButtonCard>
          )}

          {/* 32. Radar Scanner HUD */}
          {(activeTab === 'all' || activeTab === 'scifi') && (
            <ButtonCard
              title="Radar Scanner HUD"
              category="Sci-Fi HUD"
              description="Continuous rotating 360-degree radar beam with target crosshairs and laser audio."
              codeSnippet={`<div className="relative overflow-hidden border border-emerald-500">\n  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.4)_360deg)] animate-spin" />\n  <span>RADAR_SWEEP</span>\n</div>`}
            >
              <RadarScannerButton />
            </ButtonCard>
          )}

          {/* 33. The Elusive Runaway (Conditional) */}
          {(activeTab === 'all' || activeTab === 'physics') && (
            <ButtonCard
              title="The Elusive Runaway (Conditional)"
              category="Physics & Rules"
              description="Dodges away on hover with physics until the prerequisite rule is checked."
              codeSnippet={`// Dodges on hover until condition is met!\nconst [agreed, setAgreed] = useState(false);\nconst [pos, setPos] = useState({ x: 0, y: 0 });\n\nconst onHover = () => {\n  if (!agreed) setPos({ x: random(), y: random() });\n};\n\n<motion.button animate={{ x: pos.x, y: pos.y }}>\n  {agreed ? "Submit" : "Catch me! 💨"}\n</motion.button>`}
            >
              <RunawayButton />
            </ButtonCard>
          )}

        </div>

      </div>
    </section>
  );
};
