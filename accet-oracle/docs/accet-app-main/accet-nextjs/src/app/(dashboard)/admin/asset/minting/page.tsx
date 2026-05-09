import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
<div>
<div className="flex items-center gap-2 text-primary mb-2">
<span className="material-symbols-outlined text-sm">arrow_right_alt</span>
<span className="text-xs font-mono uppercase tracking-widest">Process Initialized</span>
</div>
<h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">Initialize Tokenization</h1>
<p className="text-slate-500 mt-2 max-w-xl">Configure new real-world assets for on-chain representation. Ensure all legal compliance documents are indexed before final minting.</p>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-lg border border-border-dark bg-surface-dark text-slate-300 font-bold text-sm hover:bg-border-dark transition-colors">Discard Draft</button>
<button className="px-6 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_rgba(30,210,120,0.3)]">
<span className="material-symbols-outlined text-lg">rocket_launch</span>
                            Start Minting Sequence
                        </button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
{/*  Left Column: Form  */}
<div className="xl:col-span-2 space-y-8">
<section className="bg-surface-dark/50 border border-border-dark rounded-xl p-8 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-8 pb-4 border-b border-border-dark">
<span className="material-symbols-outlined text-primary">edit_note</span>
<h3 className="text-xl font-bold text-slate-100 tracking-tight">Asset Core Parameters</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Asset Name</label>
<input className="w-full bg-background-dark border border-border-dark rounded-lg p-3 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Apex Industrial Center B-4"/>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Geographic Location</label>
<div className="relative">
<input className="w-full bg-background-dark border border-border-dark rounded-lg p-3 pl-10 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-700" placeholder="Latitude, Longitude or City"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">location_on</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Appraisal Value (USD)</label>
<div className="relative">
<input className="w-full bg-background-dark border border-border-dark rounded-lg p-3 pl-10 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value="4,500,000.00"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">attach_money</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">LTV Threshold (%)</label>
<div className="flex items-center gap-4">
<input className="flex-1 accent-primary" max="100" min="0" type="range" value="65"/>
<span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded text-sm font-mono font-bold">65%</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-border-dark">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">verified</span>
<h4 className="text-sm font-bold text-slate-300">Chainlink Price Feed Integration</h4>
</div>
<span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 border border-border-dark rounded">LINK/USD Pair</span>
</div>
<div className="bg-background-dark/80 rounded-lg p-4 flex items-center justify-between border border-border-dark">
<div className="flex items-center gap-4">
<div className="size-10 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<span className="material-symbols-outlined text-blue-400">lan</span>
</div>
<div>
<p className="text-sm font-bold text-slate-100">Aggregated Market Feed</p>
<p className="text-[10px] text-slate-500 font-mono">ID: 0x47e1...f89a</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-mono text-primary font-bold tracking-tight">$42,912,455.12</p>
<p className="text-[10px] text-slate-500">Last updated: 2s ago</p>
</div>
</div>
</div>
</section>
{/*  Minting Console  */}
<section className="bg-surface-dark border border-border-dark rounded-xl overflow-visible">
<div className="bg-background-dark/80 px-6 py-4 border-b border-border-dark flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">terminal</span>
<h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Minting Console &amp; Deployment</h3>
</div>
<div className="flex items-center gap-2">
<div className="size-2 bg-yellow-500 rounded-full"></div>
<span className="text-[10px] font-mono text-yellow-500 font-bold">READY TO DEPLOY</span>
</div>
</div>
<div className="p-6 font-mono text-sm space-y-3 bg-[#050807]">
<p className="text-slate-500"><span className="text-primary mr-2">[14:32:01]</span> System initialized on Hedera Service Node #8172</p>
<p className="text-slate-500"><span className="text-primary mr-2">[14:32:02]</span> Checking wallet balance... <span className="text-blue-400">540.23 HBAR available</span></p>
<p className="text-slate-500"><span className="text-primary mr-2">[14:32:04]</span> Smart contract byte-code verified: RWA_Token_v2.sol</p>
<p className="text-slate-300 animate-pulse"><span className="text-primary mr-2">[14:32:05]</span> Awaiting final authorization from multi-sig...</p>
<div className="h-2 w-full bg-slate-900 rounded-full mt-4">
<div className="h-full bg-primary/40 w-3/4 rounded-full relative">
<div className="absolute right-0 top-0 size-2 bg-primary rounded-full blur-[2px]"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-slate-600 mt-2 uppercase font-bold tracking-tighter">
<span>Validation</span>
<span>Deployment</span>
<span>Minting</span>
<span>Distribution</span>
</div>
</div>
</section>
</div>
{/*  Right Column: Queue & Stats  */}
<div className="space-y-8">
{/*  Pending Approvals  */}
<section className="bg-surface-dark/50 border border-border-dark rounded-xl p-6 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Approval Queue</h3>
<span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold">4 PENDING</span>
</div>
<div className="space-y-4">
<div className="p-4 bg-background-dark/50 border border-border-dark rounded-lg group hover:border-primary/50 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-bold text-slate-200">Skyline Tower A</p>
<span className="material-symbols-outlined text-slate-600 text-lg group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<p className="text-xs text-slate-500 font-mono mb-3">ID: 9283-RE-22</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="size-6 rounded-full bg-slate-700 border border-border-dark" data-alt="Reviewer avatar 1"></div>
<div className="size-6 rounded-full bg-slate-600 border border-border-dark" data-alt="Reviewer avatar 2"></div>
<div className="size-6 rounded-full bg-slate-800 border border-border-dark flex items-center justify-center text-[10px] text-slate-400 font-bold">+1</div>
</div>
<span className="text-[10px] font-mono text-slate-400">2/3 Approvals</span>
</div>
</div>
<div className="p-4 bg-background-dark/50 border border-border-dark rounded-lg group hover:border-primary/50 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-bold text-slate-200">Oakwood Logistics Hub</p>
<span className="material-symbols-outlined text-slate-600 text-lg group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<p className="text-xs text-slate-500 font-mono mb-3">ID: 1104-IN-09</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="size-6 rounded-full bg-slate-700 border border-border-dark" data-alt="Reviewer avatar 1"></div>
<div className="size-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] text-primary font-bold">JD</div>
</div>
<span className="text-[10px] font-mono text-slate-400">1/3 Approvals</span>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border border-dashed border-border-dark rounded">View All Assets</button>
</section>
{/*  Market Oracle Feeds  */}
<section className="bg-surface-dark/50 border border-border-dark rounded-xl p-6 backdrop-blur-sm">
<h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest mb-6">Active Price Oracles</h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary text-sm">home</span>
</div>
<div>
<p className="text-xs font-bold text-slate-300">Res. Real Estate Index</p>
<p className="text-[10px] text-slate-500">Chainlink Aggregated</p>
</div>
</div>
<p className="text-xs font-mono text-slate-300">+2.14%</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
<span className="material-symbols-outlined text-blue-400 text-sm">precision_manufacturing</span>
</div>
<div>
<p className="text-xs font-bold text-slate-300">Industrial Cap Rate</p>
<p className="text-[10px] text-slate-500">Multisig Weighted</p>
</div>
</div>
<p className="text-xs font-mono text-slate-300">-0.45%</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 bg-yellow-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
<span className="material-symbols-outlined text-yellow-500 text-sm">grid_goldenratio</span>
</div>
<div>
<p className="text-xs font-bold text-slate-300">Precious Metals Spot</p>
<p className="text-[10px] text-slate-500">COMEX/LME Feed</p>
</div>
</div>
<p className="text-xs font-mono text-slate-300">+1.08%</p>
</div>
</div>
</section>
{/*  Network Status Card  */}
<div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">sensors</span>
<div>
<p className="text-sm font-bold text-slate-100">Hedera Network Healthy</p>
<p className="text-xs text-slate-500">Average Finality: 3.2s</p>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}
