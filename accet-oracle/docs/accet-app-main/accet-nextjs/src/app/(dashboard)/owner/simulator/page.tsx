"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlatinumLoader } from "@/components/ui/PlatinumLoader";

export default function SimulatorDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [comercialValue, setComercialValue] = useState(750000000);
  const [ltv, setLtv] = useState(55);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic calculations
  const liquidityCap = comercialValue * (ltv / 100);
  const originationFee = liquidityCap * 0.015;
  const gasFees = 1250000;
  const netAmount = liquidityCap - originationFee - gasFees;
  const monthlyService = liquidityCap * (0.18 / 12);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Hero Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-card-dark p-8 md:p-12 shadow-2xl"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
          style={{ backgroundImage: "url('/images/corporate_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-[#050A14]/90 to-transparent" />
        
        <div className="relative z-10 w-full md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-widest">
            <span className="size-2 rounded-full bg-primary animate-pulse glow-primary"></span>
            Live Market Liquidity
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white font-syne leading-tight tracking-tight">
            Portal del Propietario <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal">Simulador de Liquidez</span>
          </h1>
          <p className="text-slate-400 font-sans text-lg leading-relaxed">
            Proyecte la capacidad financiera de sus activos inmobiliarios mediante tokenización RWA (Real World Assets) con estándares institucionales.
          </p>
        </div>
      </motion.div>

      {/* Progress Journey */}
      <div className="glass rounded-3xl p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[10px] font-bold font-mono uppercase tracking-[3px] text-slate-500">Ruta de Tokenización</h3>
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">Etapa 1 de 6</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          <div className="relative flex flex-col items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl">
            <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
            <p className="text-[10px] font-mono font-bold text-white uppercase tracking-wider text-center">1. Simulación</p>
            <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-t-full glow-primary"></div>
          </div>
          <Link href="/owner/onboarding" className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl opacity-50 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-slate-400 text-3xl">person_search</span>
            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider text-center">2. Registro KYC</p>
          </Link>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl opacity-40">
            <span className="material-symbols-outlined text-slate-500 text-3xl">description</span>
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider text-center">3. Legal</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl opacity-40">
            <span className="material-symbols-outlined text-slate-500 text-3xl">verified_user</span>
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider text-center">4. Due Diligence</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl opacity-40">
            <span className="material-symbols-outlined text-slate-500 text-3xl">task_alt</span>
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider text-center">5. Aprobación</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl opacity-40">
            <span className="material-symbols-outlined text-slate-500 text-3xl">token</span>
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider text-center">6. Minting</p>
          </div>
        </div>
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Input Parameters */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass p-8 rounded-3xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <h2 className="text-xl font-bold text-white font-syne mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">tune</span> 
              Parámetros de Liquidez
            </h2>
            
            <div className="space-y-8 relative z-10">
              {/* Comercial Value Input */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[2px]">Avalúo Comercial (COP)</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-black">$</span>
                  <input 
                    className="w-full bg-[#050A14] border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white font-bold text-2xl font-syne focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
                    type="number" 
                    value={comercialValue}
                    onChange={(e) => setComercialValue(Number(e.target.value))}
                  />
                </div>
              </div>
              
              {/* LTV Slider */}
              <div className="p-6 bg-[#050A14]/80 border border-white/5 rounded-2xl relative">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[2px]">LTV (%)</span>
                  <span className="text-4xl font-black text-primary font-syne">{ltv}%</span>
                </div>
                <input 
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" 
                  max="60" min="10" type="range" 
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                />
                <div className="flex justify-between mt-4 text-[9px] text-slate-500 font-mono font-bold uppercase tracking-[2px]">
                  <span>Capital Conservador</span>
                  <span>Límite ACCET 60%</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="w-full bg-[#050A14] hover:bg-white/5 border border-white/10 text-slate-300 font-syne font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg hidden sm:block">picture_as_pdf</span> Guardar PDF
                </button>
                <Link href="/owner/onboarding" className="w-full bg-primary hover:brightness-110 text-[#050A14] font-syne font-bold py-4 rounded-xl transition-all glow-primary flex items-center justify-center gap-2">
                  KYC <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Projection Ledger */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass rounded-3xl overflow-hidden h-full flex flex-col">
            <div className="bg-[#050A14] px-8 py-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-[2px] flex items-center gap-3">
                <span className="material-symbols-outlined text-teal text-xl">account_balance</span>
                Proyección On-Chain
              </h3>
              <span className="text-[9px] font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">ESTIMADO</span>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Liquidity Granted */}
                <div className="space-y-2">
                  <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[2px]">Monto Aprobado ({ltv}%)</p>
                  <p className="text-4xl lg:text-5xl font-black text-white font-syne tracking-tight">
                    ${(liquidityCap / 1000000).toFixed(1)}<span className="text-2xl text-slate-500">M</span>
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">COP (Pesos Colombianos)</p>
                  
                  <div className="mt-8 space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-2">
                      <span>Estructuración (1.5%)</span>
                      <span className="text-white">-${originationFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-2">
                      <span>Smart Contract & Gas</span>
                      <span className="text-white">-${gasFees.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-primary font-bold tracking-[2px]">DESEMBOLSO NETO</span>
                      <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">
                        ${netAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Costs Box */}
                <div className="bg-[#050A14] rounded-2xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-teal/5 blur-2xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <p className="text-[10px] font-mono font-bold text-teal uppercase tracking-[3px] mb-4">Costo de Capital</p>
                    <div className="flex items-end gap-2 text-white">
                      <span className="text-5xl font-black font-syne tracking-tighter">18<span className="text-3xl">%</span></span>
                      <span className="text-xs font-bold text-slate-400 mb-2">E.A.</span>
                    </div>
                    <p className="text-[10px] font-mono text-slate-500 mt-2">Tasas preferenciales para grado institucional RWA.</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 relative z-10">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[2px] mb-2">Cuota Servicio (Mes)</p>
                    <p className="text-2xl font-bold text-white font-syne">
                      ${monthlyService.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 border-t border-white/5 pt-6 mt-auto">
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">bolt</span>
                  <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[1px]">72h Liquid</p>
                </div>
                <div className="flex flex-col items-center gap-2 border-x border-white/5 group cursor-default">
                  <span className="material-symbols-outlined text-teal text-xl group-hover:scale-110 transition-transform">shield_lock</span>
                  <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[1px]">Smart Contract</p>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-slate-500 text-xl group-hover:text-white transition-all">balance</span>
                  <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[1px]">Sin Hipoteca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
