import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Top Navbar  */}
<header className="h-16 border-b border-border-dark flex items-center justify-between px-8 bg-surface-dark/30 backdrop-blur-md">
<div className="flex items-center gap-4">
<div className="relative flex items-center bg-background-dark border border-border-dark rounded-full px-4 py-1.5 focus-within:border-primary/50 transition-all">
<span className="material-symbols-outlined text-slate-500 text-[18px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-slate-600" placeholder="Search tokens, wallets, properties..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">notifications</span>
<div className="size-2 bg-accent-sky rounded-full absolute -top-1 -right-1 border border-background-dark"></div>
</div>
<div className="flex items-center gap-3 pl-6 border-l border-border-dark">
<div className="text-right">
<p className="text-xs font-bold text-white">Chief Operator</p>
<p className="text-[10px] text-slate-500">Admin-4929-HED</p>
</div>
<div className="size-9 rounded-full bg-gradient-to-br from-primary to-accent-teal p-[1px]">
<div className="size-full rounded-full bg-surface-dark flex items-center justify-center overflow-visible">
<img className="w-full h-full object-cover" data-alt="Admin user profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN6kTDzrZanEmOsCzNKtCxQ4_jq0cJEFo0jbWXAq9UqM97GoxjWZH1kxqjVgoWwr8xOwn99Go3OSWfVyY8xxTjhi-CmON1D9vgErkJ_EAYHmX90hRLqU_LPORdJ9Oj2IZqi8eSNXcV925p5FghI5B7nJgthxm6hQrRrr3szuhEMw4la63MqGdlIJeiDC6tkIY0_MRS6IOKraHSZIinUuZDL_Z76Q-8XxTAvDoHZVgVW8nkm3GhFrQFQbIVLXlc3v0OxkwdAVHgJAmP"/>
</div>
</div>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
{/*  Global KPIs  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">+12.4%</span>
</div>
<h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total AUM</h3>
<p className="font-display text-2xl font-bold text-white">$16.3B <span className="text-sm font-sans text-slate-500">COP</span></p>
</div>
<div className="glass-panel p-6 rounded-xl hover:border-accent-sky/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-accent-sky/10 rounded-lg text-accent-sky">
<span className="material-symbols-outlined">real_estate_agent</span>
</div>
</div>
<h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Active Assets</h3>
<p className="font-display text-2xl font-bold text-white">3 <span className="text-sm font-sans text-slate-500">Verified Properties</span></p>
</div>
<div className="glass-panel p-6 rounded-xl hover:border-accent-teal/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-accent-teal/10 rounded-lg text-accent-teal">
<span className="material-symbols-outlined">health_and_safety</span>
</div>
<div className="h-1.5 w-16 bg-white/10 rounded-full mt-3 overflow-visible">
<div className="h-full bg-accent-teal w-[98%]"></div>
</div>
</div>
<h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Portfolio Health</h3>
<p className="font-display text-2xl font-bold text-white">98.4%</p>
</div>
<div className="glass-panel p-6 rounded-xl border-primary/20 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/20 rounded-lg text-primary">
<span className="material-symbols-outlined">verified</span>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">ISO 9001</span>
</div>
<h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Compliance Status</h3>
<p className="font-display text-2xl font-bold text-white">Verified</p>
</div>
</section>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
{/*  Operations Pipeline  */}
<div className="xl:col-span-2 glass-panel rounded-xl overflow-visible flex flex-col">
<div className="px-6 py-4 border-b border-border-dark flex justify-between items-center">
<h2 className="font-display text-lg font-bold">Operations Pipeline</h2>
<button className="text-primary text-xs font-bold flex items-center gap-1">View Full Queue <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
</div>
<div className="p-6">
<div className="relative flex justify-between">
{/*  Pipeline Trace Line  */}
<div className="absolute top-[18px] left-0 right-0 h-[2px] bg-border-dark z-0"></div>
<div className="absolute top-[18px] left-0 h-[2px] bg-primary w-[75%] z-0 transition-all"></div>
{/*  Stages  */}
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">magnification_large</span>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Due Diligence</p>
<span className="text-[10px] font-bold text-primary py-0.5 px-2 rounded-full bg-primary/10 border border-primary/20">5 Pending</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">gavel</span>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Legal Review</p>
<span className="text-[10px] font-bold text-orange-400 py-0.5 px-2 rounded-full bg-orange-400/10 border border-orange-400/20">2 Flagged</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-3">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">drive_file_rename_outline</span>
</div>
<div className="text-center">
<p className="text-xs font-bold text-white">Pending Approval</p>
<span className="text-[10px] font-bold text-primary py-0.5 px-2 rounded-full bg-primary/10 border border-primary/20">1 Final Sig</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-3 opacity-50">
<div className="size-10 rounded-full bg-border-dark border border-white/10 flex items-center justify-center text-slate-400">
<span className="material-symbols-outlined">generating_tokens</span>
</div>
<div className="text-center">
<p className="text-xs font-bold text-slate-400">Minting</p>
<span className="text-[10px] font-bold text-slate-500">Waitlist</span>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="bg-background-dark/40 border border-border-dark rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 rounded bg-accent-teal/20 text-accent-teal flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
<div>
<p className="text-xs font-bold text-white">Torre El Faro - Bogotá DC</p>
<p className="text-[10px] text-slate-500">ID: ACC-7729-PROP | 12,400 Units</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<p className="text-xs font-bold text-slate-300">ISO Verification</p>
<div className="flex gap-1 justify-end">
<div className="size-1 bg-primary rounded-full"></div>
<div className="size-1 bg-primary rounded-full"></div>
<div className="size-1 bg-primary rounded-full"></div>
<div className="size-1 bg-slate-700 rounded-full"></div>
</div>
</div>
<button className="bg-white/5 hover:bg-white/10 p-1.5 rounded text-slate-400 transition-all">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Batch Distributions  */}
<div className="glass-panel rounded-xl overflow-visible border-accent-sky/20 flex flex-col">
<div className="px-6 py-4 border-b border-border-dark flex justify-between items-center bg-accent-sky/5">
<h2 className="font-display text-lg font-bold">Batch Distributions</h2>
<span className="material-symbols-outlined text-accent-sky text-[20px]">calendar_today</span>
</div>
<div className="p-6 space-y-6">
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Next Execution Window</label>
<div className="bg-accent-sky/10 border border-accent-sky/20 rounded-lg p-4 flex items-center justify-between">
<div>
<p className="text-lg font-display font-bold text-white">Feb 28, 2024</p>
<p className="text-[10px] text-accent-sky uppercase tracking-tighter font-bold">Monthly Interest Yield</p>
</div>
<div className="text-right font-mono text-sm text-slate-300">
                                        04d : 12h : 30m
                                    </div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Projected Distribution</span>
<span className="text-white font-bold">$1.2M COP</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Total Recipients</span>
<span className="text-white font-bold">4,192 Wallets</span>
</div>
<div className="h-[1px] bg-border-dark"></div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Multi-sig Required</span>
<span className="text-accent-sky font-bold">2 of 3 Signs</span>
</div>
</div>
<button className="w-full bg-accent-sky text-background-dark font-bold py-3 rounded-lg text-sm shadow-lg shadow-accent-sky/10 hover:brightness-110 transition-all">
                                Execute Distribution Sequence
                            </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Compliance & Risk Monitor  */}
<div className="glass-panel rounded-xl overflow-visible">
<div className="px-6 py-4 border-b border-border-dark flex justify-between items-center">
<h2 className="font-display text-lg font-bold">Compliance &amp; Risk Monitor</h2>
<div className="flex gap-2">
<span className="text-[10px] font-bold text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">All Clear</span>
</div>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-3 gap-4">
<div className="bg-background-dark/50 p-4 rounded-lg border border-border-dark flex flex-col items-center">
<p className="text-[10px] text-slate-500 uppercase mb-2 font-bold">LTV Ratio</p>
<div className="relative size-16 flex items-center justify-center">
<svg className="size-full rotate-[-90deg]">
<circle className="text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175" stroke-dashoffset="61" strokeWidth="4"></circle>
</svg>
<span className="absolute text-sm font-bold">65%</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">Oracle Updated 2m ago</p>
</div>
<div className="bg-background-dark/50 p-4 rounded-lg border border-border-dark flex flex-col items-center">
<p className="text-[10px] text-slate-500 uppercase mb-2 font-bold">KYC/AML</p>
<span className="material-symbols-outlined text-primary text-3xl">shield</span>
<p className="text-[10px] text-primary mt-2 font-bold tracking-widest">SECURE</p>
</div>
<div className="bg-background-dark/50 p-4 rounded-lg border border-border-dark flex flex-col items-center">
<p className="text-[10px] text-slate-500 uppercase mb-2 font-bold">ISO 9001</p>
<span className="material-symbols-outlined text-accent-teal text-3xl">task_alt</span>
<p className="text-[10px] text-accent-teal mt-2 font-bold tracking-widest">ADHERENT</p>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-accent-teal text-[16px]">notifications_active</span> Recent Alerts
                                </h4>
<div className="space-y-2">
<div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
<span className="material-symbols-outlined text-accent-sky text-[18px] mt-0.5">info</span>
<div>
<p className="text-xs font-bold text-white">Periodic identity re-verification</p>
<p className="text-[10px] text-slate-500">Scheduled for 124 token holders in 48h</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  On-chain Infrastructure  */}
<div className="glass-panel rounded-xl overflow-visible">
<div className="px-6 py-4 border-b border-border-dark flex justify-between items-center">
<h2 className="font-display text-lg font-bold">Engine Room <span className="text-slate-500 font-sans font-medium text-sm ml-2">Hedera Mainnet</span></h2>
<div className="flex items-center gap-2">
<div className="size-2 bg-primary rounded-full animate-pulse"></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">Live Feed</span>
</div>
</div>
<div className="p-0">
<div className="grid grid-cols-2 divide-x divide-border-dark border-b border-border-dark">
<div className="p-4 flex items-center justify-between">
<div>
<p className="text-[10px] text-slate-500 font-bold uppercase">Mirror Node</p>
<p className="text-xs font-mono text-primary">Connected &amp; Syncing</p>
</div>
<span className="material-symbols-outlined text-slate-700">dns</span>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<p className="text-[10px] text-slate-500 font-bold uppercase">Chainlink Feeds</p>
<p className="text-xs font-mono text-accent-sky">99.98% Reliable</p>
</div>
<span className="material-symbols-outlined text-slate-700">link</span>
</div>
</div>
<div className="p-6">
<h4 className="text-xs font-bold text-slate-400 mb-4 tracking-widest uppercase">Real-time Network Consensus</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-2 bg-primary rounded-full"></div>
<span className="text-xs font-mono text-slate-300">0.0.198322... Minted (HTS)</span>
</div>
<span className="text-[10px] font-mono text-slate-600">0.3s ago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-2 bg-primary rounded-full"></div>
<span className="text-xs font-mono text-slate-300">Compliance Check Logged (HCS)</span>
</div>
<span className="text-[10px] font-mono text-slate-600">1.2s ago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-2 bg-accent-sky rounded-full"></div>
<span className="text-xs font-mono text-slate-300">Chainlink COP/USD Update</span>
</div>
<span className="text-[10px] font-mono text-slate-600">5.8s ago</span>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="size-2 bg-primary rounded-full"></div>
<span className="text-xs font-mono text-slate-300">Batch Sig 1/3 Verified</span>
</div>
<span className="text-[10px] font-mono text-slate-600">12.4s ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}
