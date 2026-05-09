import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Page Header  */}
<div className="mb-10">
<h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Automatic Withdrawals
                    </h2>
<p className="text-slate-400 text-lg">Define how your real-world asset earnings are distributed to your accounts.</p>
</div>
<div className="grid gap-6">
{/*  Auto-Withdraw Toggle Card  */}
<div className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 neon-glow">
<div className="flex gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">auto_mode</span>
</div>
<div>
<h3 className="text-lg font-bold">Enable Auto-Withdraw</h3>
<p className="text-slate-400 text-sm">Funds are moved automatically when thresholds are met.</p>
</div>
</div>
<label className="relative flex h-[34px] w-[60px] cursor-pointer items-center rounded-full bg-white/10 p-1 transition-colors has-[:checked]:bg-primary">
<input checked className="sr-only peer" type="checkbox"/>
<div className="h-full aspect-square rounded-full bg-white shadow-lg transition-transform peer-checked:translate-x-[26px]"></div>
</label>
</div>
{/*  Destination Selection  */}
<div className="glass-card rounded-xl p-6">
<h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                            Destination Selection
                        </h3>
<div className="grid md:grid-cols-2 gap-4">
{/*  Bank Account  */}
<label className="relative flex cursor-pointer group">
<input checked className="sr-only peer" name="destination" type="radio"/>
<div className="w-full p-4 rounded-lg border-2 border-white/5 bg-white/5 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-10 rounded-md bg-white p-1.5 flex items-center justify-center overflow-visible">
<img className="object-contain" data-alt="Bancolombia bank logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBji5Gr3gQiQRus84a4nOv-WK_MUX3hYlq3N4R18J2Yi2PbxBTdUMH-T0FCId86NmyuPOzWzyf1vB1YWfo5uyRO59QJTbjYvrqVZvPXZ1iRF6lnNLYZmF7h9YbZS_pNW3ZvZtu1zWjEevKxMrPE1vf8l8gdf8NMT9w5VAC_4tbRHjBTOnFcDstfNlmUOnwISwQeddOyAmqJ_Dy1tZXNG1fdgtiCMx5LzrvQE1FBdaRwFRvQMsXzeQBu2W6psg7mcxvwwF54hX9jvQ4j"/>
</div>
<span className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100">check_circle</span>
</div>
<p className="font-bold">Linked Bank Account</p>
<p className="text-xs text-slate-400 mt-1">Bancolombia •••• 4567 (PSE)</p>
<div className="mt-3 flex items-center gap-2 text-[10px] text-accent-cyan font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">speed</span>
                                        Est: 24-48h
                                    </div>
</div>
</label>
{/*  Crypto Wallet  */}
<label className="relative flex cursor-pointer group">
<input checked className="sr-only peer" name="destination" type="radio"/>
<div className="w-full p-4 rounded-lg border-2 border-white/5 bg-white/5 peer-checked:border-primary peer-checked:bg-primary/5 transition-all border-primary bg-primary/5">
<div className="flex justify-between items-start mb-3">
<div className="size-10 rounded-md bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
<span className="material-symbols-outlined">currency_bitcoin</span>
</div>
<span className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100">check_circle</span>
</div>
<p className="font-bold">External USDC Wallet</p>
<p className="text-xs text-slate-400 mt-1 truncate">Hedera: 0.0.1234567</p>
<div className="mt-3 flex items-center gap-2 text-[10px] text-primary font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">bolt</span>
                                        Est: &lt; 5 min
                                    </div>
</div>
</label>
</div>
</div>
{/*  Threshold & Frequency Settings  */}
<div className="grid md:grid-cols-2 gap-6">
{/*  Threshold Setting  */}
<div className="glass-card rounded-xl p-6">
<h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">payments</span>
                                Withdrawal Threshold
                            </h3>
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span className="text-slate-400">Minimum Balance</span>
<span className="text-primary font-bold">$500,000 COP</span>
</div>
<input className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" max="5000000" min="100000" step="50000" type="range" value="500000"/>
<p className="text-[11px] text-slate-500 italic">Withdrawals will trigger once your earnings balance exceeds this amount.</p>
</div>
</div>
{/*  Frequency Options  */}
<div className="glass-card rounded-xl p-6">
<h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_today</span>
                                Frequency
                            </h3>
<div className="flex gap-2">
<button className="flex-1 py-2 px-3 rounded-lg border border-white/10 bg-primary/20 text-primary font-bold text-sm">
                                    Immediate
                                </button>
<button className="flex-1 py-2 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 text-sm transition-colors">
                                    Weekly
                                </button>
<button className="flex-1 py-2 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 text-sm transition-colors">
                                    Monthly
                                </button>
</div>
<p className="mt-4 text-[11px] text-slate-500">Immediate: Transfer occurs as soon as threshold is reached.</p>
</div>
</div>
{/*  Estimated Fees Summary  */}
<div className="glass-card rounded-xl p-6 border-l-4 border-l-accent-cyan">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="size-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
<span className="material-symbols-outlined">info</span>
</div>
<div>
<p className="text-sm font-bold">Estimated Processing</p>
<p className="text-xs text-slate-400">Processing via Hedera Network + Network Gas</p>
</div>
</div>
<div className="flex flex-col md:items-end">
<p className="text-lg font-bold text-white">$500 COP <span className="text-xs text-slate-500 font-normal">est. fee</span></p>
<p className="text-xs text-accent-cyan">Est. arrival: &lt; 5 min</p>
</div>
</div>
</div>
{/*  Action Footer  */}
<div className="flex flex-col md:flex-row items-center justify-end gap-4 mt-4">
<div className="flex items-center gap-2 text-slate-500 text-xs font-medium mr-auto md:mr-4">
<span className="material-symbols-outlined text-sm">update</span>
    Last updated: Today
</div><button className="w-full md:w-auto px-8 py-3 rounded-lg text-slate-300 hover:text-white font-bold transition-colors">
                            Discard Changes
                        </button>
<button className="w-full md:w-auto px-10 py-3 rounded-lg bg-emerald-500 text-black font-extrabold cursor-default transition-all shadow-lg opacity-90" disabled>
<span className="flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">verified</span>
        Configuration Active
    </span>
</button>
</div>
</div>
    </div>
  );
}
