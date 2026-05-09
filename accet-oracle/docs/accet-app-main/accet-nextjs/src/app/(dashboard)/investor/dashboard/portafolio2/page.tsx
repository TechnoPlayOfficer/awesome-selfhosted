import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Left Column: Primary Stats & Charts  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Hero Stats  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-panel rounded-2xl p-6 relative overflow-visible">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16"></div>
<p className="text-slate-400 text-sm font-medium mb-1">Total Portfolio Value</p>
<h2 className="text-4xl font-finance font-bold text-white mb-2">$49.5M <span className="text-lg font-display text-slate-400">COP</span></h2>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-sm font-bold">+7.2% <span className="text-slate-500 font-normal ml-1">vs last month</span></span>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 relative overflow-visible">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-3xl -mr-16 -mt-16"></div>
<p className="text-slate-400 text-sm font-medium mb-1">Accumulated IRR</p>
<h2 className="text-4xl font-finance font-bold text-white mb-2">19.2%</h2>
<div className="flex items-center gap-2 text-accent-blue">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="text-sm font-bold">Top 5% <span className="text-slate-500 font-normal ml-1">of ACCET pool</span></span>
</div>
</div>
</div>
{/*  Performance Chart  */}
<div className="glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-bold text-white">Monthly Distributions</h3>
<p className="text-slate-400 text-sm">Cash yield generated per month</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold">6M</button>
<button className="px-3 py-1 rounded hover:bg-white/5 text-slate-400 text-xs font-bold">1Y</button>
<button className="px-3 py-1 rounded hover:bg-white/5 text-slate-400 text-xs font-bold">ALL</button>
</div>
</div>
<div className="relative h-64 w-full flex items-end justify-between gap-4 px-2">
{/*  Chart Bars  */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-800 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50" style={{ height: "45%" }}></div>
<span className="text-xs text-slate-500">Jan</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-800 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50" style={{ height: "60%" }}></div>
<span className="text-xs text-slate-500">Feb</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-800 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50" style={{ height: "55%" }}></div>
<span className="text-xs text-slate-500">Mar</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-800 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50" style={{ height: "80%" }}></div>
<span className="text-xs text-slate-500">Apr</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-800 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50" style={{ height: "75%" }}></div>
<span className="text-xs text-slate-500">May</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary rounded-t-lg neon-emerald" style={{ height: "95%" }}></div>
<span className="text-xs text-primary font-bold">Jun</span>
</div>
</div>
</div>
{/*  Asset List  */}
<div className="flex flex-col gap-4">
<h3 className="text-lg font-bold text-white">Activos en Portafolio</h3>
<div className="grid grid-cols-1 gap-3">
{/*  New Asset: Skyline Tower A  */}
<div className="glass-panel rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-yellow-500 bg-yellow-500/5">
<div className="flex items-center gap-4">
<div className="size-12 rounded-lg overflow-visible shrink-0">
<img className="w-full h-full object-cover" data-alt="Skyline Tower A modern skyscraper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKSnJ_YcDagsvKAPTY9kIUujbCSIqGnBzNkObwA5Jd7M6-KuhtpgK8xnlMSRCMYgjj079cHDwfgk4IJdXed4M_Bw4r7YkAvzZeTpzsAafPgBQkF4PdRITre1K0YsfRgVhUQ7OW5wc1lGcqNRxpN6LQZVt63je1NS-U0omhdndGBMd02DiJf8OYHTWg4Cq6v_Kv10z7ESwze7eqnqVHu7hKbXmIOcvjcVV1C_hIZ-wgbt45reyhZMNgqB02uJvlT8Ww7lPQ_sJ227ax"/>
</div>
<div>
<h4 className="font-bold text-white">Skyline Tower A</h4>
<p className="text-xs text-slate-400">Cartagena, Colombia • Premium Residential</p>
</div>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:block text-right">
<p className="text-xs text-slate-500 uppercase">Valuation</p>
<p className="font-finance text-white">$1.0M</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 uppercase">Annual Yield</p>
<p className="font-finance text-primary">18.5% E.A.</p>
</div>
<span className="material-symbols-outlined text-slate-600">chevron_right</span>
</div>
</div>
{/*  Asset 1  */}
<div className="glass-panel rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-primary">
<div className="flex items-center gap-4">
<div className="size-12 rounded-lg overflow-visible shrink-0">
<img className="w-full h-full object-cover" data-alt="Modern high-rise glass building Torre Chicó" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8stjXWTc4V5ithPiEF3cfOh-I7Hl-5G01gJzpe2jjGIdHmMCD7-6_T_kPCLEcmhFQyfM5FqbbuOpwOYEmpbQgKjMryMNV6O22tcgjCaknu9tLnAQV2zQRcegPL06w7El5xDo0DWxcAJbBDNZY5NLEBWHu3CMJw6kZ-myPiIRVlm9WtVmgiRghvFlecERCqIKWpcCUxdQIgf3wLPyPOJlw7kaw--ODlyLZtOT2lx3nOUQaRND44jBl1ANc1gbrL4PmJK0QUiLnamqk"/>
</div>
<div>
<h4 className="font-bold text-white">Torre Chicó</h4>
<p className="text-xs text-slate-400">Bogotá, Colombia • Commercial</p>
</div>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:block text-right">
<p className="text-xs text-slate-500 uppercase">Valuation</p>
<p className="font-finance text-white">$28.2M</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 uppercase">Annual Yield</p>
<p className="font-finance text-primary">12.4%</p>
</div>
<span className="material-symbols-outlined text-slate-600">chevron_right</span>
</div>
</div>
{/*  Asset 2  */}
<div className="glass-panel rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer border-l-4 border-accent-blue">
<div className="flex items-center gap-4">
<div className="size-12 rounded-lg overflow-visible shrink-0">
<img className="w-full h-full object-cover" data-alt="Luxury residential complex El Poblado Medellín" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl6XoxOa_JBaLgJ7NAWB8b4IzGz5YGEslzqEvwa4TlaTlvMR2CxUn0LAK3ZSnllZjmDv7WHNk9Q1AO4KrtiIe7Xkpih-Khk1gscbhLc52oBVH7rmU_PSU_t7dzSIUU0CyOodSBRvPVinax8lYWJJn4b4KYjrqRjc44EeNrRNM4FInFdHMFJk0-DC5wn_UoMCGTi2QK5PzIXY4H9Y04jF-AqIrjnOu8uYAtMc_qYhWTEHhYkKEfUoIdd2HhAqK1elSDSOeeNJvA7FgK"/>
</div>
<div>
<h4 className="font-bold text-white">El Poblado Res.</h4>
<p className="text-xs text-slate-400">Medellín, Colombia • Residential</p>
</div>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:block text-right">
<p className="text-xs text-slate-500 uppercase">Valuation</p>
<p className="font-finance text-white">$20.3M</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 uppercase">Annual Yield</p>
<p className="font-finance text-primary">10.8%</p>
</div>
<span className="material-symbols-outlined text-slate-600">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Distribution & Allocation  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Distribution Countdown  */}
<div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 relative overflow-visible">
<div className="absolute -bottom-4 -right-4 size-24 bg-primary/20 blur-2xl rounded-full"></div>
<div className="flex items-center gap-2 text-primary mb-4">
<span className="material-symbols-outlined">schedule</span>
<span className="text-xs font-bold uppercase tracking-wider">Próxima distribución</span>
</div>
<h3 className="text-3xl font-finance font-bold text-white mb-2">$1.855M <span className="text-sm font-display text-slate-400">COP</span></h3>
<p className="text-[10px] text-primary/80 mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">add_circle</span>
                        Includes $15.42 from Skyline Tower A
                    </p>
<div className="flex items-end justify-between">
<div className="flex flex-col">
<span className="text-4xl font-finance text-primary leading-none">T-7</span>
<span className="text-[10px] text-slate-400 uppercase font-bold">Days Remaining</span>
</div>
<button className="bg-primary text-background-dark font-bold py-2 px-4 rounded-lg text-sm hover:brightness-110 transition-all neon-emerald">
                            Auto-Invest
                        </button>
</div>
</div>
{/*  Wallet Status  */}
<div className="glass-panel rounded-2xl p-6">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Hedera Wallet</h3>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 mb-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-slate-700 rounded-full flex items-center justify-center">
<img className="size-5" data-alt="Hedera Hashgraph logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATv2kPvrPu2tLYeC-7bsH8ZStf2xmFAhX-DZaU4M99D8vlrM9kcXA-7QbgXw2fGxvx-Pbzq83KnfTo4wiTI6Ip7vsCmSRSyy4zb7Ln0O89GlIAqopqwchsiqY38yfvBlmqXc3VnyUa6Pj3U9joy93y3hbQTxiCS8Up2VexJqwLgNLzQ-bv5jSYYP-NW6E2lCdOpU5cnn9b9CfPzrwq1RiSfC9k_Uxa0sDaWDBN0i-hU6TYZjFVstJAyZT9FI_YbeIy7M1SY4BDtrcP"/>
</div>
<span className="font-mono text-xs text-slate-300">0.0.1245...899b</span>
</div>
<span className="material-symbols-outlined text-slate-500 text-sm">content_copy</span>
</div>
{/*  Token List  */}
<div className="space-y-3 mb-6">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Balance HBAR</span>
<span className="font-finance text-white">4,250.22 HBAR</span>
</div>
<div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg border border-primary/10">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase font-bold">New Asset Token</span>
<span className="text-sm font-bold text-white">1,005 Tokens SKYL</span>
</div>
<div className="text-right">
<p className="text-[10px] font-mono text-primary">0.0.9283456</p>
<p className="text-[10px] text-slate-400 uppercase">Verified</p>
</div>
</div>
</div>
<button className="w-full py-2.5 rounded-xl border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 transition-all">
                        Withdraw Funds
                    </button>
</div>
{/*  Geographic Allocation  */}
<div className="glass-panel rounded-2xl p-6">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Asset Allocation</h3>
<div className="flex flex-col gap-6">
{/*  City 1  */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">Bogotá</span>
<span className="text-xs font-finance text-primary">56%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-visible">
<div className="h-full bg-primary neon-emerald" style={{ width: "56%" }}></div>
</div>
</div>
{/*  City 2  */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">Medellín</span>
<span className="text-xs font-finance text-accent-blue">31%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-visible">
<div className="h-full bg-accent-blue neon-sky" style={{ width: "31%" }}></div>
</div>
</div>
{/*  City 3 (Includes new investment)  */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">Cartagena (New)</span>
<span className="text-xs font-finance text-yellow-500">13%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-visible">
<div className="h-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.3)]" style={{ width: "13%" }}></div>
</div>
</div>
</div>
<div className="mt-8 relative rounded-xl overflow-visible h-40 border border-white/5">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
{/*  Placeholder for map UI  */}
<span className="material-symbols-outlined text-4xl text-slate-700">map</span>
<div className="absolute top-1/2 left-1/3 size-3 bg-primary rounded-full neon-emerald border-2 border-white/20"></div>
<div className="absolute top-1/4 right-1/4 size-2 bg-accent-blue rounded-full neon-sky border-2 border-white/20"></div>
{/*  New Marker  */}
<div className="absolute bottom-1/4 right-1/3 size-3 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.6)] border-2 border-white/20 animate-pulse"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-3">
<p className="text-[10px] text-slate-400 uppercase font-bold text-center">Portfolio Map View</p>
</div>
</div>
</div>
</div>
    </div>
  );
}
