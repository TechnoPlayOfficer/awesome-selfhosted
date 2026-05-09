import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
<div className="flex items-center gap-6">
<div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/40 shadow-[0_0_30px_rgba(30,210,120,0.3)]">
<span className="material-symbols-outlined text-4xl text-primary font-bold">check_circle</span>
</div>
<div>
<div className="flex items-center gap-2 text-primary mb-1">
<span className="text-xs font-mono uppercase tracking-widest font-bold">Minting Successful</span>
</div>
<h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">Skyline Tower A <span className="text-primary/50 text-2xl font-light">#9283-RE-22</span></h1>
<p className="text-slate-400 mt-1 flex items-center gap-3 text-sm">
<span className="flex items-center gap-1"><span className="text-slate-500 font-mono text-xs uppercase">Token ID:</span> <span className="font-mono text-primary font-bold">0.0.9283456</span></span>
<span className="h-3 w-[1px] bg-slate-700"></span>
<span className="flex items-center gap-1"><span className="text-slate-500 font-mono text-xs uppercase">TX Hash:</span> <span className="font-mono text-slate-300">0x4f...882e</span></span>
</p>
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-lg border border-border-dark bg-surface-dark text-slate-300 font-bold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Console
                        </button>
<button className="px-6 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_25px_rgba(30,210,120,0.4)]">
<span className="material-symbols-outlined text-lg">open_in_new</span>
                            View on Hashscan
                        </button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
{/*  Left Column: Form  */}
<div className="xl:col-span-2 space-y-8">
<section className="bg-surface-dark/50 border border-primary/30 rounded-xl p-8 backdrop-blur-sm success-glow relative overflow-visible">
<div className="absolute top-0 right-0 p-3">
<div className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">On-Chain Asset</div>
</div>
<div className="flex items-center gap-2 mb-8 pb-4 border-b border-border-dark">
<span className="material-symbols-outlined text-primary">verified_user</span>
<h3 className="text-xl font-bold text-slate-100 tracking-tight">Finalized Asset Profile</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Asset Name</label>
<input className="w-full bg-background-dark/50 border border-border-dark rounded-lg p-3 text-slate-300 cursor-default" disabled value="Skyline Tower A"/>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Geographic Location</label>
<div className="relative">
<input className="w-full bg-background-dark/50 border border-border-dark rounded-lg p-3 pl-10 text-slate-300 cursor-default" disabled value="40.7128° N, 74.0060° W"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">location_on</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">Appraisal Value (USD)</label>
<div className="relative">
<input className="w-full bg-background-dark/50 border border-border-dark rounded-lg p-3 pl-10 text-slate-300 cursor-default" disabled value="125,000,000.00"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">attach_money</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono uppercase text-slate-500 tracking-widest font-bold">LTV Threshold (%)</label>
<div className="flex items-center gap-4">
<input className="flex-1 accent-primary opacity-50 cursor-default" disabled max="100" min="0" type="range" value="65"/>
<span className="bg-slate-800 text-slate-300 border border-border-dark px-3 py-1 rounded text-sm font-mono font-bold">65%</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-border-dark">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">verified</span>
<h4 className="text-sm font-bold text-primary">Live Chainlink Oracle Feed</h4>
</div>
<span className="text-[10px] font-mono text-primary px-2 py-0.5 border border-primary/30 bg-primary/5 rounded">SYNCED</span>
</div>
<div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between border border-primary/20">
<div className="flex items-center gap-4">
<div className="size-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary">lan</span>
</div>
<div>
<p className="text-sm font-bold text-slate-100">Skyline Tower A Aggregated Feed</p>
<p className="text-[10px] text-slate-500 font-mono">ID: 0xSKY...817A</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-mono text-primary font-bold tracking-tight">$125,412,890.45</p>
<p className="text-[10px] text-primary/60">Status: Operational</p>
</div>
</div>
</div>
</section>
{/*  Minting Console  */}
<section className="bg-surface-dark border border-border-dark rounded-xl overflow-visible shadow-[0_0_50px_rgba(30,210,120,0.05)]">
<div className="bg-background-dark/80 px-6 py-4 border-b border-border-dark flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">terminal</span>
<h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Minting Console History</h3>
</div>
<div className="flex items-center gap-2">
<div className="size-2 bg-primary rounded-full shadow-[0_0_8px_#1ed278]"></div>
<span className="text-[10px] font-mono text-primary font-bold uppercase">Transaction Confirmed</span>
</div>
</div>
<div className="p-6 font-mono text-sm space-y-3 bg-[#050807]">
<p className="text-slate-500"><span className="text-primary mr-2">[14:32:01]</span> System initialized on Hedera Service Node #8172</p>
<p className="text-slate-400"><span className="text-primary mr-2">[14:32:02]</span> Checking wallet balance... <span className="text-secondary">1,240.50 HBAR available</span></p>
<p className="text-slate-400"><span className="text-primary mr-2">[14:32:04]</span> Smart contract byte-code verified: RWA_Token_v2.sol</p>
<p className="text-slate-400"><span className="text-primary mr-2">[14:32:06]</span> Transaction hash: 0x4f...882e generated</p>
<p className="text-slate-400"><span className="text-primary mr-2">[14:34:55]</span> Multi-sig authorization received: 3 of 3 signatures confirmed</p>
<p className="text-primary font-bold"><span className="text-primary mr-2">[14:35:01]</span> Minting completed successfully. Skyline Tower A is now live on Hedera Mainnet.</p>
<div className="h-2 w-full bg-slate-900 rounded-full mt-4">
<div className="h-full bg-primary w-full rounded-full relative transition-all duration-1000">
</div>
</div>
<div className="flex justify-between text-[10px] text-primary mt-2 uppercase font-bold tracking-tighter">
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
<span className="bg-slate-800 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold border border-border-dark">0 ACTIVE</span>
</div>
<div className="space-y-4">
{/*  Active Task marked as COMPLETED  */}
<div className="p-4 bg-primary/5 border border-primary/50 rounded-lg cursor-default relative overflow-visible group">
<div className="absolute top-0 right-0 p-1">
<span className="text-[8px] bg-primary text-background-dark font-black px-1.5 py-0.5 rounded-bl">COMPLETED</span>
</div>
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-bold text-primary">Skyline Tower A</p>
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
</div>
<p className="text-xs text-primary/60 font-mono mb-3">ID: 9283-RE-22</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="size-6 rounded-full bg-primary/40 border border-primary/60 flex items-center justify-center text-[10px] text-white font-bold">✓</div>
<div className="size-6 rounded-full bg-primary/40 border border-primary/60 flex items-center justify-center text-[10px] text-white font-bold">✓</div>
<div className="size-6 rounded-full bg-primary/40 border border-primary/60 flex items-center justify-center text-[10px] text-white font-bold">✓</div>
</div>
<span className="text-[10px] font-mono text-primary">3/3 Approvals</span>
</div>
</div>
<div className="p-4 bg-background-dark/50 border border-border-dark rounded-lg group hover:border-primary/50 transition-colors opacity-60">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-bold text-slate-400">Oakwood Logistics Hub</p>
<span className="material-symbols-outlined text-slate-600 text-lg">lock</span>
</div>
<p className="text-xs text-slate-600 font-mono mb-3">ID: 1104-IN-09</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="size-6 rounded-full bg-slate-700 border border-border-dark"></div>
<div className="size-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] text-slate-500 font-bold">JD</div>
</div>
<span className="text-[10px] font-mono text-slate-600">1/3 Approvals</span>
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
<p className="text-xs font-mono text-primary">+2.14%</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 bg-secondary/10 rounded-lg flex items-center justify-center border border-secondary/20">
<span className="material-symbols-outlined text-secondary text-sm">precision_manufacturing</span>
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
<p className="text-xs font-mono text-primary">+1.08%</p>
</div>
</div>
</section>
{/*  Network Status Card  */}
<div className="p-6 bg-primary/10 border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(30,210,120,0.1)]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">sensors</span>
<div>
<p className="text-sm font-bold text-primary uppercase tracking-tight">System Operational</p>
<p className="text-xs text-slate-400">Finality: 2.1s // TPS: 4,500+</p>
</div>
<div className="ml-auto flex gap-0.5">
<div className="h-4 w-1 bg-primary rounded-full"></div>
<div className="h-6 w-1 bg-primary rounded-full"></div>
<div className="h-5 w-1 bg-primary rounded-full"></div>
<div className="h-8 w-1 bg-primary rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
    </div>
  );
}
