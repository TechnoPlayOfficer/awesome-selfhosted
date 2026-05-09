import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Header Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-financial text-4xl md:text-5xl font-black text-slate-100 mb-2">Wallet Center</h1>
<p className="text-slate-400 max-w-lg">Institutional-grade management for Real World Assets on Hedera Hashgraph.</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-all neon-glow">
<span className="material-symbols-outlined text-sm">add_circle</span>
                        Deposit
                    </button>
<button className="flex items-center gap-2 px-6 py-3 bg-surface-dark border border-primary/20 text-slate-100 font-bold rounded-xl hover:bg-primary/10 transition-all">
<span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                        Withdraw
                    </button>
<button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all">
<span className="material-symbols-outlined text-sm">swap_horiz</span>
                        Bridge USDC (CCTP)
                    </button>
</div>
</div>
{/*  Main Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Balance & Tokens  */}
<div className="lg:col-span-2 space-y-8">
{/*  Balances Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass p-8 rounded-2xl relative overflow-visible group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">USDC Balance</span>
<span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">STABLE</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-financial text-4xl font-black text-slate-100">$12,450</span>
<span className="font-financial text-xl text-slate-400">.00</span>
</div>
<p className="mt-2 text-primary font-medium flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-sm">trending_up</span> +2.4% this month
                            </p>
</div>
<div className="glass p-8 rounded-2xl relative overflow-visible group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">COP Balance</span>
<span className="bg-slate-700 text-slate-300 text-xs font-bold px-2 py-1 rounded">FIAT EQUIV.</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-financial text-4xl font-black text-slate-100">48,550,000</span>
<span className="font-financial text-xl text-slate-400">.00</span>
</div>
<p className="mt-2 text-slate-400 font-medium text-sm">≈ $12,448.72 USD</p>
</div>
</div>
{/*  Dividend Chart (Visual Representation)  */}
<div className="glass p-8 rounded-2xl">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-financial text-xl font-bold text-slate-100">Monthly Dividends</h3>
<p className="text-slate-400 text-sm">Cumulative RWA returns</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-500 uppercase font-bold">Total Received</p>
<p className="font-financial text-xl text-primary font-black">$1,842.15</p>
</div>
</div>
<div className="flex items-end justify-between h-48 gap-2 md:gap-4 px-2">
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary/10 rounded-t-lg chart-bar hover:bg-primary/30" style={{ height: "40%" }}></div>
<span className="text-[10px] text-slate-500 font-bold">JAN</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary/20 rounded-t-lg chart-bar hover:bg-primary/30" style={{ height: "55%" }}></div>
<span className="text-[10px] text-slate-500 font-bold">FEB</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary/30 rounded-t-lg chart-bar hover:bg-primary/50" style={{ height: "45%" }}></div>
<span className="text-[10px] text-slate-500 font-bold">MAR</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary/50 rounded-t-lg chart-bar hover:bg-primary/70" style={{ height: "75%" }}></div>
<span className="text-[10px] text-slate-500 font-bold">APR</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary/70 rounded-t-lg chart-bar hover:bg-primary/80" style={{ height: "60%" }}></div>
<span className="text-[10px] text-slate-500 font-bold">MAY</span>
</div>
<div className="flex flex-col items-center flex-1 gap-2">
<div className="w-full bg-primary rounded-t-lg chart-bar neon-glow" style={{ height: "95%" }}></div>
<span className="text-[10px] text-slate-100 font-bold">JUN</span>
</div>
</div>
</div>
{/*  HTS Token List  */}
<div className="glass rounded-2xl overflow-visible">
<div className="px-8 py-6 border-b border-primary/10 flex items-center justify-between">
<h3 className="font-financial text-xl font-bold text-slate-100 uppercase tracking-tighter italic">Hedera HTS Token List</h3>
<span className="text-xs font-bold text-slate-400 bg-surface-dark px-3 py-1 rounded-full">3 ASSETS</span>
</div>
<div className="divide-y divide-primary/5">
{/*  Token USDC  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors group">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">U</div>
<div>
<h4 className="text-slate-100 font-bold">USDC (Bridged)</h4>
<p className="text-slate-500 text-xs">0.0.456882</p>
</div>
</div>
<div className="text-right">
<p className="font-financial text-lg font-bold text-slate-100">12,450.00</p>
<p className="text-slate-500 text-xs">≈ $12,450.00</p>
</div>
</div>
{/*  Token CHICO  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors group">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-background-dark font-black text-xs shadow-lg">CHICO</div>
<div>
<h4 className="text-slate-100 font-bold">CHICO Apartments</h4>
<p className="text-slate-500 text-xs">0.0.729114</p>
</div>
</div>
<div className="text-right">
<p className="font-financial text-lg font-bold text-slate-100">45.00</p>
<p className="text-slate-500 text-xs">≈ $4,500.00</p>
</div>
</div>
{/*  Token POBL  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors group">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center text-white font-black text-xs shadow-lg">POBL</div>
<div>
<h4 className="text-slate-100 font-bold">POBLADO Heights</h4>
<p className="text-slate-500 text-xs">0.0.812330</p>
</div>
</div>
<div className="text-right">
<p className="font-financial text-lg font-bold text-slate-100">12.50</p>
<p className="text-slate-500 text-xs">≈ $1,250.00</p>
</div>
</div>
</div>
</div>
</div>
{/*  Transaction History  */}
<div className="lg:col-span-1 space-y-6">
<div className="glass rounded-2xl flex flex-col h-full overflow-visible">
<div className="px-6 py-6 border-b border-primary/10">
<h3 className="font-financial text-xl font-bold text-slate-100">Activity</h3>
</div>
<div className="flex-1 overflow-y-auto max-h-[800px] divide-y divide-primary/5">
{/*  Tx 1  */}
<div className="px-6 py-4 hover:bg-primary/5 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">call_received</span>
<span className="text-sm font-bold text-slate-100">Dividend</span>
</div>
<span className="text-[10px] text-slate-500">2H AGO</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-400">CHICO Property #1</p>
<p className="text-primary font-bold text-sm">+$142.50</p>
</div>
</div>
{/*  Tx 2  */}
<div className="px-6 py-4 hover:bg-primary/5 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-indigo-400 text-lg">swap_horiz</span>
<span className="text-sm font-bold text-slate-100">Bridge Out</span>
</div>
<span className="text-[10px] text-slate-500">1D AGO</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-400">USDC to Base</p>
<p className="text-slate-100 font-bold text-sm">-$500.00</p>
</div>
</div>
{/*  Tx 3  */}
<div className="px-6 py-4 hover:bg-primary/5 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-400 text-lg">account_balance</span>
<span className="text-sm font-bold text-slate-100">On-ramp</span>
</div>
<span className="text-[10px] text-slate-500">3D AGO</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-400">Bank Transfer</p>
<p className="text-primary font-bold text-sm">+$2,000.00</p>
</div>
</div>
{/*  Tx 4  */}
<div className="px-6 py-4 hover:bg-primary/5 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400 text-lg">shopping_cart</span>
<span className="text-sm font-bold text-slate-100">Asset Buy</span>
</div>
<span className="text-[10px] text-slate-500">5D AGO</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-400">POBLADO Token</p>
<p className="text-slate-100 font-bold text-sm">-$1,250.00</p>
</div>
</div>
{/*  Tx 5  */}
<div className="px-6 py-4 hover:bg-primary/5 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">call_received</span>
<span className="text-sm font-bold text-slate-100">Dividend</span>
</div>
<span className="text-[10px] text-slate-500">1W AGO</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-400">POBL Property #2</p>
<p className="text-primary font-bold text-sm">+$88.20</p>
</div>
</div>
</div>
<div className="p-6 bg-surface-dark/50">
<button className="w-full py-3 text-sm font-bold text-primary hover:text-primary/80 transition-all uppercase tracking-widest">View All History</button>
</div>
</div>
</div>
</div>
    </div>
  );
}
