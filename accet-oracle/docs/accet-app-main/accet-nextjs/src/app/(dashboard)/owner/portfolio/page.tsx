"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlatinumLoader } from "@/components/ui/PlatinumLoader";

export default function OwnerPortfolioDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate real-world data fetching delay to display Platinum UX
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PlatinumLoader fullScreen={false} />;

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* 1. Hero Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-card-dark p-8 md:p-12"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
          style={{ backgroundImage: "url('/images/corporate_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-white font-syne tracking-tight">
              Bienvenida, <span className="text-primary">Andrea</span>
            </h1>
            <p className="text-lg text-slate-400 font-sans max-w-lg leading-relaxed">
              Monitorea y gestiona tus inversiones inmobiliarias y tokens del mundo real (RWA) bajo estándares institucionales.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-3 rounded-xl bg-primary text-background-dark font-syne font-bold text-sm hover:brightness-110 transition-all glow-primary">
              Explorar Proyectos
            </button>
            <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-syne font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-md">
              Cómo Funciona
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. Primary Metrics Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="glass p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-5xl">account_balance_wallet</span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Valor Total</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-syne">$132,750</span>
          </div>
          <span className="text-xs font-bold text-pass flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            +$932 esta semana
          </span>
        </div>

        <div className="glass p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-5xl">payments</span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Dividendos Generados</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-syne">$1,875</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">
            Próximo pago: <strong className="text-white">Oct 24</strong>
          </span>
        </div>

        <div className="glass p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-5xl">token</span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Tokens Totales</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-syne">19,432</span>
          </div>
          <span className="text-xs text-slate-400 mt-1">
            Distribuido en 3 activos
          </span>
        </div>

        <div className="glass p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group border-l-2 border-l-primary">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-5xl">trending_up</span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Rendimiento Anualizado</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary font-syne">9.7%</span>
          </div>
          <span className="text-xs font-bold text-pass flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            +$2,100 proyectado
          </span>
        </div>
      </motion.div>

      {/* 3. Main Data Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Featured Property Area Chart Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="xl:col-span-2 glass rounded-3xl p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white font-syne">Park Avenue Residences</h2>
              <p className="text-sm text-slate-400 font-sans flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Miami, FL · Desarrollador Verificado
              </p>
            </div>
            <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all flex items-center gap-2">
              Ver Detalles <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="h-64 w-full bg-black/20 rounded-xl relative overflow-hidden border border-white/5 p-4 flex flex-col justify-end">
             {/* Simulated Area Chart Background */}
             <div className="absolute bottom-0 left-0 right-0 border-b border-primary/50">
               <svg viewBox="0 0 1000 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                 <path d="M0,200 L0,150 Q250,50 500,120 T1000,20 L1000,200 Z" fill="rgba(94, 200, 242, 0.1)" />
                 <path d="M0,150 Q250,50 500,120 T1000,20" fill="none" stroke="#5EC8F2" strokeWidth="3" />
               </svg>
             </div>
             <div className="relative z-10 flex justify-between items-end">
               <div>
                 <span className="text-xs font-mono text-slate-500 uppercase">Rentabilidad Histórica</span>
                 <p className="text-2xl font-black text-white font-syne mt-1">+$26,120</p>
               </div>
               <div className="flex gap-2">
                 {['1D', '1W', '1M', '1Y', 'ALL'].map(t => (
                   <button key={t} className={`text-[10px] font-mono px-2 py-1 rounded ${t==='1Y' ? 'bg-primary text-background-dark font-bold' : 'text-slate-400 hover:text-white'}`}>
                     {t}
                   </button>
                 ))}
               </div>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
               <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Mi Inversión</span>
               <span className="text-lg font-bold text-white">$42,300</span>
               <div className="w-full bg-white/5 h-1 md:h-1.5 rounded-full mt-2 overflow-hidden">
                 <div className="bg-primary h-full w-[12.5%]"></div>
               </div>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
               <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Tokens Poseídos</span>
               <span className="text-lg font-bold text-white flex items-center gap-2"><span className="size-2 rounded-full bg-primary glow-primary"></span> 6,320</span>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
               <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Rendimiento (APY)</span>
               <span className="text-lg font-bold text-teal">9.5%</span>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-white/5">
               <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Valor del Token</span>
               <span className="text-lg font-bold text-white">$6.69</span>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Distribution & Recents */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Donut Chart / Distribution */}
          <div className="glass rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white font-syne mb-6">Resumen de Portafolio</h3>
            <div className="flex items-center gap-6">
              <div className="size-32 rounded-full border-[10px] border-black/40 relative flex items-center justify-center">
                {/* Simulated Donut segments */}
                <div className="absolute inset-0 border-[10px] border-primary rounded-full hover:scale-110 transition-transform origin-center" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute inset-0 border-[10px] border-teal rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0 100%, 0 50%)' }}></div>
                <div className="absolute inset-0 border-[10px] border-ice rounded-full" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }}></div>
                <div className="text-center z-10 bg-card-dark size-24 rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-xl font-black text-white">3</span>
                  <span className="text-[8px] font-mono text-slate-400 uppercase">Activos</span>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-slate-300"><span className="size-2 rounded-full bg-primary"></span> Residencial</span>
                  <span className="font-bold text-white">38%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-slate-300"><span className="size-2 rounded-full bg-teal"></span> Comercial</span>
                  <span className="font-bold text-white">33%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-slate-300"><span className="size-2 rounded-full bg-ice"></span> Infraestructura</span>
                  <span className="font-bold text-white">29%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white font-syne">Actividad Reciente</h3>
              <button className="text-[10px] font-mono text-primary uppercase tracking-wider hover:underline">Ver Todo</button>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Dividendo', act: 'Park Ave', amount: '+$340', date: 'Hoy', status: 'pass' },
                { type: 'Compra', act: 'Skyline', amount: '-$5,200', date: '21 Mar', status: 'white' },
                { type: 'Dividendo', act: 'Logistics', amount: '+$1,120', date: '15 Mar', status: 'pass' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/5 text-${item.status}`}>
                      <span className="material-symbols-outlined text-[16px]">
                        {item.type === 'Compra' ? 'shopping_cart' : 'payments'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.type}</p>
                      <p className="text-[10px] text-slate-400 font-mono uppercase">{item.act}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold text-${item.status}`}>{item.amount}</p>
                    <p className="text-[10px] text-slate-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
