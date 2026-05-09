import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Background Decorative Elements  */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20">
<div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 blur-[100px] rounded-full"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/30 blur-[100px] rounded-full"></div>
</div>
{/*  Success Card  */}
<div className="relative w-full max-w-2xl">
<div className="glass-panel rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-visible">
{/*  Celebratory Icon  */}
<div className="relative inline-flex mb-8">
<div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center neon-glow-green border border-secondary/30">
<span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
{/*  Decorative particles  */}
<div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full blur-[2px]"></div>
<div className="absolute bottom-0 -left-4 w-2 h-2 bg-secondary rounded-full blur-[1px]"></div>
</div>
{/*  Message  */}
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Identity Verified</h1>
<p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">Your account is now fully compliant and ready for the real-world asset ecosystem.</p>
{/*  Summary Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex flex-col gap-1">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Verified Holder</span>
<span className="text-slate-200 font-medium">Alexander J. Sterling</span>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex flex-col gap-1">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Document Hash</span>
<span className="text-slate-400 font-mono text-xs truncate">0x71C7...531f82D9a</span>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 md:col-span-2 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">verified</span>
<div>
<p className="text-sm font-semibold text-slate-200">On-chain Identity Minted</p>
<p className="text-xs text-slate-500">ERC-725 Identity Proxy Active</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-500 text-sm">open_in_new</span>
</div>
</div>
{/*  Call to Action  */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl transition-all scale-95 active:scale-90 flex items-center justify-center gap-2">
<span>Start Investing</span>
<span className="material-symbols-outlined text-sm">trending_up</span>
</button>
<button className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-4 px-10 rounded-xl transition-all scale-95 active:scale-90">
                            View Profile
                        </button>
</div>
{/*  Success Tag  */}
<div className="mt-12 flex items-center justify-center gap-2 text-slate-500 text-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Trust Score: 98/100</span>
</div>
</div>
</div>
    </div>
  );
}
