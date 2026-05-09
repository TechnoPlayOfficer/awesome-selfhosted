"use client";
import { useState, useEffect } from 'react';

interface SuccessStateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SuccessState({ title, subtitle, children }: SuccessStateProps) {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsProcessing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse rounded-full"></div>
          <div className="relative size-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-black text-white mb-2 animate-pulse tracking-tighter">CALIBRANDO MOTORES NEURALES...</h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[3px]">Validando Protocolos Hedera & RWA Nexus</p>
        <div className="mt-8 flex gap-2">
          <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in zoom-in duration-500">
      {children}
    </div>
  );
}
