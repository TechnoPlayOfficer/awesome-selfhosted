import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="relative h-[450px] w-full rounded-2xl overflow-visible group">
<img alt="Torre Empresarial Chicó facade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern glass skyscraper architecture in Bogota" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE9yxpbCpovgBceOdiwL1zEt_sjxnXPjVLrrGUTXxXJ68U1loPs3Sjc0zC23ZOrXPGHR2TBwlY1fZsMkGY0T9FyhhNY359TBsS52U6jFHHWuf4kyAm2oa1ESJhjTYcQwG25tDVyI1IhDtw3lkqMu54U97wVfD5JXpgCv4m3REJfPD2kzjyGHv46g0vwVmljbu3Y7bKYTdmnnzpgTFxE_gN7HlSa02BRmF9acc5vy5BRq85sqo7sP4cfNG4oxmHEeBYbSkRyx31_UrY"/>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-between items-end gap-4">
<div>
<div className="flex items-center gap-2 text-sky-neon mb-2">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm font-medium tracking-wide uppercase" data-location="Bogotá, Colombia">Bogotá, Colombia • Chicó Norte</span>
</div>
<h2 className="font-financial text-4xl md:text-5xl font-bold text-white leading-tight">Torre Empresarial Chicó</h2>
</div>
<div className="flex gap-4">
<div className="glass-panel px-6 py-3 rounded-xl border-primary/20">
<p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Expected APY</p>
<p className="text-2xl font-bold text-primary">18.4% EA</p>
</div>
<div className="glass-panel px-6 py-3 rounded-xl border-sky-neon/20">
<p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Market Cap</p>
<p className="text-2xl font-bold text-sky-neon">$2.1B</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel p-5 rounded-xl border-primary/10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Real-time LTV</span>
<span className="material-symbols-outlined text-primary text-xl">monitoring</span>
</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-financial font-bold text-slate-100">58.2%</span>
<span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded mb-1">HEALTHY</span>
</div>
<div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-visible">
<div className="h-full bg-gradient-to-r from-primary to-sky-neon" style={{ width: "58.2%" }}></div>
</div>
<p className="mt-3 text-[10px] text-slate-500 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">security</span> Powered by Chainlink Oracle
                            </p>
</div>
<div className="glass-panel p-5 rounded-xl border-sky-neon/10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Total Holders</span>
<span className="material-symbols-outlined text-sky-neon text-xl">group</span>
</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-financial font-bold text-slate-100">1,248</span>
<span className="text-xs text-sky-neon bg-sky-neon/10 px-2 py-0.5 rounded mb-1">+12%</span>
</div>
<p className="mt-6 text-[10px] text-slate-500">Global institutional verified participants</p>
</div>
<div className="glass-panel p-5 rounded-xl border-white/5">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Asset Type</span>
<span className="material-symbols-outlined text-slate-400 text-xl">domain</span>
</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-financial font-bold text-slate-100">Grade A</span>
</div>
<p className="mt-6 text-[10px] text-slate-500">Commercial Office • Fully Leased</p>
</div>
</div>
</div>
<aside className="space-y-6">
<div className="glass-panel p-8 rounded-2xl border-primary/30 neon-glow-primary">
<h3 className="font-financial text-2xl font-bold mb-6">Investment Portal</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">Funding Progress</span>
<span className="text-xl font-bold text-primary">73%</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-visible">
<div className="h-full bg-primary" style={{ width: "73%" }}></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>$1.53B Funded</span>
<span>Target: $2.10B</span>
</div>
</div>
<div className="space-y-4">
<div className="relative">
<label className="text-[10px] uppercase font-bold text-slate-500 absolute top-2 left-4">Amount to Invest (USD)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl pt-7 pb-3 px-4 text-xl font-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="5,000" type="number"/>
</div>
<button className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">bolt</span>
                                Invest Now
                            </button>
<p className="text-[10px] text-center text-slate-500">
                                By investing, you agree to the <Link className="text-primary hover:underline" href="#">Smart Contract Terms</Link>
</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">verified_user</span> Legal Documents
                        </h4>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 group cursor-pointer hover:border-primary/40 transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">description</span>
<div>
<p className="text-xs font-medium text-slate-200">Fideicomiso Mercantil</p>
<p className="text-[10px] font-mono text-slate-500">HCS: 0x8a...e219</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">download</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 group cursor-pointer hover:border-primary/40 transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">gavel</span>
<div>
<p className="text-xs font-medium text-slate-200">Escritura Pública</p>
<p className="text-[10px] font-mono text-slate-500">HCS: 0x3b...f91a</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">download</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 group cursor-pointer hover:border-primary/40 transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">analytics</span>
<div>
<p className="text-xs font-medium text-slate-200">Avalúo Técnico 2024</p>
<p className="text-[10px] font-mono text-slate-500">HCS: 0xef...d442</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">download</span>
</div>
</div>
</div>
</aside>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="glass-panel rounded-2xl overflow-visible">
<div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/5">
<h3 className="font-financial text-lg font-bold">Projected Distributions</h3>
<span className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">MONTHLY CYCLE</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="text-[10px] uppercase text-slate-500 border-b border-white/5">
<tr>
<th className="px-6 py-4 font-bold">Expected Date</th>
<th className="px-6 py-4 font-bold text-right">Interest (Est.)</th>
<th className="px-6 py-4 font-bold text-right">Principal</th>
<th className="px-6 py-4 font-bold text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-slate-300">Oct 15, 2024</td>
<td className="px-6 py-4 text-right text-primary font-mono">$1.2M</td>
<td className="px-6 py-4 text-right text-slate-400 font-mono">$0.00</td>
<td className="px-6 py-4 text-right"><span className="text-[10px] text-sky-neon uppercase tracking-wider font-bold">Projected</span></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-slate-300">Nov 15, 2024</td>
<td className="px-6 py-4 text-right text-primary font-mono">$1.2M</td>
<td className="px-6 py-4 text-right text-slate-400 font-mono">$0.00</td>
<td className="px-6 py-4 text-right"><span className="text-[10px] text-sky-neon uppercase tracking-wider font-bold">Projected</span></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-slate-300">Dec 15, 2024</td>
<td className="px-6 py-4 text-right text-primary font-mono">$1.4M</td>
<td className="px-6 py-4 text-right text-slate-400 font-mono">$0.00</td>
<td className="px-6 py-4 text-right"><span className="text-[10px] text-sky-neon uppercase tracking-wider font-bold">Projected</span></td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-slate-300">Jan 15, 2025</td>
<td className="px-6 py-4 text-right text-primary font-mono">$1.2M</td>
<td className="px-6 py-4 text-right text-slate-400 font-mono">$0.00</td>
<td className="px-6 py-4 text-right"><span className="text-[10px] text-sky-neon uppercase tracking-wider font-bold">Projected</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="glass-panel rounded-2xl flex flex-col">
<div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/5">
<h3 className="font-financial text-lg font-bold">On-chain Activity Feed</h3>
<div className="flex items-center gap-2">
<span className="size-2 bg-primary rounded-full animate-pulse"></span>
<span className="text-[10px] font-bold text-primary">LIVE SCAN</span>
</div>
</div>
<div className="flex-1 p-6 space-y-6">
<div className="flex gap-4 relative">
<div className="absolute left-3 top-8 bottom-[-24px] w-[1px] bg-white/10"></div>
<div className="size-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 z-10">
<span className="material-symbols-outlined text-primary text-[14px]">add_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-xs text-slate-200"><span className="font-bold text-white">0x4a...d91</span> minted 12,500 ACCET-CHICÓ</p>
<span className="text-[10px] text-slate-500 font-mono">2m ago</span>
</div>
<p className="text-[10px] text-slate-500 mt-1 font-mono">Hash: 0x9312...f192</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="absolute left-3 top-8 bottom-[-24px] w-[1px] bg-white/10"></div>
<div className="size-6 rounded-full bg-sky-neon/20 flex items-center justify-center border border-sky-neon/30 z-10">
<span className="material-symbols-outlined text-sky-neon text-[14px]">swap_horiz</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-xs text-slate-200"><span className="font-bold text-white">Oracle Update</span> LTV verified at 58.2%</p>
<span className="text-[10px] text-slate-500 font-mono">15m ago</span>
</div>
<p className="text-[10px] text-slate-500 mt-1 font-mono">Chainlink Node ID: #7419</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="size-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 z-10">
<span className="material-symbols-outlined text-primary text-[14px]">verified</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="text-xs text-slate-200"><span className="font-bold text-white">New Document Hash</span> Avalúo 2024 anchored</p>
<span className="text-[10px] text-slate-500 font-mono">1h ago</span>
</div>
<p className="text-[10px] text-slate-500 mt-1 font-mono">HCS Consensus Reached</p>
</div>
</div>
<button className="w-full py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                            View all transactions on Block Explorer
                        </button>
</div>
</div>
</section>
    </div>
  );
}
