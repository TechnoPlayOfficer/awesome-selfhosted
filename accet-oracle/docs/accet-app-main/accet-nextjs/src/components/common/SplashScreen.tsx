"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // 4.5 seconds splash for dramatic cinematic feel

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 35);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D0D0D] flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 vignette pointer-events-none z-10 opacity-70"></div>
      <div className="absolute inset-0 grain pointer-events-none z-[1] opacity-50"></div>
      
      {/* Signature line at top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] signature-line z-[10000]" />
      
      {/* Decorative large CC in background */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 text-[440px] font-black text-sky/[0.03] select-none pointer-events-none font-syne">
        CC
      </div>

      <div className="relative z-20 flex flex-col items-center gap-10 animate-fade-in-zoom">
        <div className="relative group">
          <Image 
            src="/logo.png" 
            alt="ACCET Logo" 
            width={140} 
            height={140} 
            className="transition-transform duration-1000"
          />
          {/* Glowing ring - Atmosphere */}
          <div className="absolute inset-[-30px] rounded-full border border-sky/10 blur-2xl group-hover:border-sky/20 transition-all duration-1000" />
          <div className="absolute inset-[-15px] rounded-full border border-sky/5 animate-[ping_3s_linear_infinite]" />
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="overflow-hidden">
            <p className="font-mono text-[10px] tracking-[6px] text-sky/40 uppercase animate-slide-up">
              Los Ladrillones · Spot 1
            </p>
          </div>
          
          <h1 className="font-syne text-5xl font-black text-white tracking-tighter leading-none">
            ACCET <span className="text-sky">TOKENIZER</span>
          </h1>
          
          <p className="font-mono text-[9px] tracking-[8px] text-sky/20 uppercase mt-2">
            Hedera Network · RWA Engine
          </p>
        </div>

        {/* Progress Bar - Cinematic Easing */}
        <div className="w-72 h-[2px] bg-white/5 rounded-full overflow-hidden relative mt-4">
          <div 
            className="absolute inset-y-0 left-0 bg-sky shadow-[0_0_15px_rgba(94,200,242,0.6)] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Caption bar matching the cinematic v4.0 manual */}
      <div className="absolute bottom-16 px-8 py-3 bg-black/60 backdrop-blur-xl border border-white/5 rounded-full text-white/40 font-mono text-[9px] tracking-widest uppercase animate-fade-in delay-1000">
        <span className="text-sky/60 mr-2">Status:</span> INITIALIZING COMPLIANCE PROTOCOL [ERC-3643]...
      </div>

      <style jsx>{`
        .animate-fade-in-zoom {
          animation: fade-in-zoom 2s var(--ease-hero) forwards;
        }
        @keyframes fade-in-zoom {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1s var(--ease-hero) 0.5s both;
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out 1s both;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
