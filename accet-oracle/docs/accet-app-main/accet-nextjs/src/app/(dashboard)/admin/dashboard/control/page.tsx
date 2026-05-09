import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Header  */}
<header className="h-16 flex items-center justify-between px-8 border-b border-glass-border backdrop-blur-md z-10">
<div className="flex items-center gap-6">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent" placeholder="Search Assets, TxIDs, or Compliance IDs..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-accent-teal/10 border border-accent-teal/20 rounded-full text-accent-teal text-[10px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-accent-teal"></span>
                    HEDERA MAINNET: LIVE
                </div>
<button className="text-slate-400 hover:text-white p-2">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs" data-alt="User profile avatar circle">
                    AD
                </div>
</div>
</header>
{/*  Dashboard Body  */}
<div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
{/*  KPIs Section  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="glass-panel rounded-xl p-6 relative overflow-visible group">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 transition-all group-hover:scale-110"></div>
<p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Total AUM</p>
<h3 className="font-financial text-3xl font-bold tracking-tight text-white">$16.34<span className="text-primary">B</span></h3>
<div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span>
                        +1.24% <span className="text-slate-500 font-normal ml-1">vs last month</span>
</div>
</div>
<div className="glass-panel rounded-xl p-6 relative overflow-visible">
<p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Portfolio Health</p>
<h3 className="font-financial text-3xl font-bold tracking-tight text-white">98.42<span className="text-accent-teal">%</span></h3>
<div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-visible">
<div className="bg-accent-teal h-full rounded-full" style={{ width: "98%" }}></div>
</div>
</div>
<div className="glass-panel rounded-xl p-6 relative overflow-visible">
<p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">LTV Risk Alerts</p>
<h3 className="font-financial text-3xl font-bold tracking-tight text-rose-500">02 <span className="text-slate-500 text-lg">Critical</span></h3>
<div className="mt-4 flex items-center gap-2 text-rose-500 text-xs font-bold">
<span className="material-symbols-outlined text-sm">warning</span>
                        Manual Review Required
                    </div>
</div>
<div className="glass-panel rounded-xl p-6 relative overflow-visible border-accent-sky/20">
<p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Liquidity Bridge (USDC)</p>
<h3 className="font-financial text-3xl font-bold tracking-tight text-accent-sky">$4.21<span className="text-slate-500 text-lg">B</span></h3>
<div className="mt-4 flex items-center gap-2 text-accent-sky text-xs font-bold">
<span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                        Stable Depth
                    </div>
</div>
</div>
<div className="grid grid-cols-12 gap-8">
{/*  Operations Pipeline Drill-down  */}
<div className="col-span-12 lg:col-span-8 space-y-8">
<div className="glass-panel rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_tree</span>
                                Operations Pipeline
                            </h2>
<button className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-tighter border border-white/10 px-3 py-1.5 rounded-lg transition-all">Full View</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-slate-500 text-[10px] uppercase font-bold border-b border-white/5">
<th className="pb-3 px-2">Asset Name</th>
<th className="pb-3 px-2">Stage</th>
<th className="pb-3 px-2">Compliance Score</th>
<th className="pb-3 px-2">Value</th>
<th className="pb-3 px-2 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 border border-white/10" data-alt="Asset thumbnail placeholder"></div>
<span className="font-medium text-slate-200">Manhattan Prime I</span>
</div>
</td>
<td className="py-4 px-2">
<span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-[10px] font-bold border border-amber-500/20 uppercase">Legal Review</span>
</td>
<td className="py-4 px-2">
<div className="flex items-center gap-2">
<div className="w-24 h-1 bg-white/5 rounded-full">
<div className="bg-primary h-full rounded-full" style={{ width: "92%" }}></div>
</div>
<span className="text-xs font-bold text-slate-400">92%</span>
</div>
</td>
<td className="py-4 px-2 font-financial text-slate-300">$450.0M</td>
<td className="py-4 px-2 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-white">more_vert</button>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 border border-white/10" data-alt="Asset thumbnail placeholder"></div>
<span className="font-medium text-slate-200">Logistics Hub SE</span>
</div>
</td>
<td className="py-4 px-2">
<span className="px-2 py-1 rounded bg-accent-teal/10 text-accent-teal text-[10px] font-bold border border-accent-teal/20 uppercase">Minting</span>
</td>
<td className="py-4 px-2">
<div className="flex items-center gap-2">
<div className="w-24 h-1 bg-white/5 rounded-full">
<div className="bg-primary h-full rounded-full" style={{ width: "100%" }}></div>
</div>
<span className="text-xs font-bold text-slate-400">100%</span>
</div>
</td>
<td className="py-4 px-2 font-financial text-slate-300">$128.5M</td>
<td className="py-4 px-2 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-white">more_vert</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="py-4 px-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 border border-white/10" data-alt="Asset thumbnail placeholder"></div>
<span className="font-medium text-slate-200">Swiss Gold Vault G4</span>
</div>
</td>
<td className="py-4 px-2">
<span className="px-2 py-1 rounded bg-accent-sky/10 text-accent-sky text-[10px] font-bold border border-accent-sky/20 uppercase">Due Diligence</span>
</td>
<td className="py-4 px-2">
<div className="flex items-center gap-2">
<div className="w-24 h-1 bg-white/5 rounded-full">
<div className="bg-amber-500 h-full rounded-full" style={{ width: "64%" }}></div>
</div>
<span className="text-xs font-bold text-slate-400">64%</span>
</div>
</td>
<td className="py-4 px-2 font-financial text-slate-300">$890.2M</td>
<td className="py-4 px-2 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-white">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Dual-Ledger Reconciliation  */}
<div className="glass-panel rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-bold text-white flex items-center gap-2">
<span className="material-symbols-outlined text-accent-teal">balance</span>
                                Dual-Ledger Reconciliation
                            </h2>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 text-[10px] text-accent-teal uppercase font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span> Synchronized
                                </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<div className="p-4 bg-white/5 rounded-lg border border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Hedera HTS Total</span>
<span className="text-xs text-primary font-bold">LIVE</span>
</div>
<p className="font-financial text-xl text-white">16,342,100,501.20 <span className="text-slate-500 text-sm">ACCET-T</span></p>
</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Formance Internal</span>
<span className="text-xs text-accent-sky font-bold">AUTH</span>
</div>
<p className="font-financial text-xl text-white">16,342,100,501.20 <span className="text-slate-500 text-sm">USD_EQ</span></p>
</div>
</div>
<div className="relative flex flex-col items-center justify-center p-6 border-l border-white/10">
<div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
<div className="absolute inset-0 border-4 border-primary rounded-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}></div>
<span className="material-symbols-outlined text-4xl text-primary">task_alt</span>
</div>
<p className="mt-4 text-xs text-slate-500 uppercase tracking-widest font-bold">Variance: <span className="text-primary">0.00%</span></p>
<button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-all uppercase tracking-tighter">Initiate Audit</button>
</div>
</div>
</div>
</div>
{/*  Sidebar Content (On-chain & Compliance)  */}
<div className="col-span-12 lg:col-span-4 space-y-8">
{/*  On-chain Infrastructure  */}
<div className="glass-panel rounded-xl p-6">
<h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-accent-sky">settings_input_component</span>
                            Infrastructure Status
                        </h2>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-slate-400">hub</span>
</div>
<div>
<p className="text-sm font-bold text-slate-200">Hedera Nodes</p>
<p className="text-[10px] text-slate-500 uppercase font-bold">Mainnet Pool (v0.42)</p>
</div>
</div>
<span className="px-2 py-0.5 bg-accent-teal/10 text-accent-teal text-[10px] font-bold border border-accent-teal/20 rounded">HEALTHY</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-slate-400">sensors</span>
</div>
<div>
<p className="text-sm font-bold text-slate-200">Chainlink Oracles</p>
<p className="text-[10px] text-slate-500 uppercase font-bold">14 Active Feeds</p>
</div>
</div>
<span className="px-2 py-0.5 bg-accent-teal/10 text-accent-teal text-[10px] font-bold border border-accent-teal/20 rounded">SYNCED</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-slate-400">toll</span>
</div>
<div>
<p className="text-sm font-bold text-slate-200">USDC Bridge</p>
<p className="text-[10px] text-slate-500 uppercase font-bold">Circle Mint/Burn</p>
</div>
</div>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] font-bold border border-amber-500/20 rounded">LATENCY: 40ms</span>
</div>
</div>
</div>
{/*  Compliance & Audit  */}
<div className="glass-panel rounded-xl p-6 bg-gradient-to-br from-white/5 to-transparent">
<h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                            Compliance Scoring
                        </h2>
<div className="mb-8 flex justify-center">
<div className="relative w-40 h-40">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-white/5" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="44" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-financial font-bold text-white">96.8</span>
<span className="text-[10px] font-bold text-slate-500 uppercase">ISO 9001 SCORE</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">badge</span> Jumio KYC Status
                                </span>
<span className="text-white font-bold">99.2% Pass</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">assignment_turned_in</span> SFC Sandbox Rep.
                                </span>
<span className="text-white font-bold">COMPLIANT</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">gavel</span> AML/OFAC Batch
                                </span>
<span className="text-primary font-bold">SECURE</span>
</div>
</div>
</div>
{/*  Quick Actions  */}
<div className="glass-panel rounded-xl p-6 border-primary/10">
<h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Batch Distribution</h2>
<div className="space-y-3">
<button className="w-full bg-primary text-background-dark font-bold py-3 rounded-lg text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">play_circle</span>
                                Execute Dividend Batch
                            </button>
<p className="text-center text-[10px] text-slate-500 uppercase tracking-tighter">Requires 2/3 Signatures to Broadcast</p>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}
