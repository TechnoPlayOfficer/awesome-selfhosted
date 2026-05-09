import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Top Navigation Bar  */}
<header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-glass-border sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<h1 className="text-lg font-display font-semibold">Admin Panel</h1>
<span className="text-slate-400">/</span>
<span className="text-sm text-slate-500 dark:text-slate-400">Mitigation Logs</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="bg-slate-100 dark:bg-glass border-none rounded-lg pl-9 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary w-64" placeholder="Search transactions..." type="text"/>
</div>
<button className="size-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-glass hover:bg-slate-200 dark:hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-lg">notifications</span>
</button>
</div>
</header>
<div className="p-8 space-y-8">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h2 className="text-3xl font-display font-bold text-slate-900 dark:text-slate-50 tracking-tight">Mitigation History: Torre Empresarial Chicó</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Real-time reconciliation and audit trail for LTV remediation events.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm">download</span>
                            Export Ledger
                        </button>
</div>
</div>
{/*  Stats and Reconciliation Status  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="glassmorphism rounded-xl p-5">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current LTV</p>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-2xl font-bold">58.2%</span>
<span className="text-primary text-xs font-medium flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 13.8%</span>
</div>
</div>
<div className="glassmorphism rounded-xl p-5 border-l-4 border-l-primary">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mitigation Status</p>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-2xl font-bold text-primary">Resolved</span>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
</div>
{/*  Dual-Ledger Reconciliation  */}
<div className="glassmorphism rounded-xl p-5 col-span-1 md:col-span-2 flex items-center justify-between">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dual-Ledger Reconciliation</p>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="size-2 bg-primary rounded-full animate-pulse"></div>
<span className="text-sm font-medium">Formance Ledger</span>
</div>
<div className="flex items-center gap-2">
<div className="size-2 bg-primary rounded-full animate-pulse"></div>
<span className="text-sm font-medium">Hedera Mainnet</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-[10px] text-slate-500 block">SYNC HASH</span>
<span className="text-xs font-mono text-primary">0x88e...f21</span>
</div>
</div>
</div>
{/*  Main Transaction Feed Table  */}
<div className="glassmorphism rounded-xl overflow-visible">
<div className="px-6 py-4 border-b border-glass-border flex justify-between items-center bg-white/5">
<h3 className="font-display font-bold">Transaction Ledger</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="material-symbols-outlined text-sm">history</span>
                            Real-time Syncing
                        </div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">
<th className="px-6 py-4">Event &amp; ISO Marker</th>
<th className="px-6 py-4">Hedera Transaction ID</th>
<th className="px-6 py-4">HCS Message Hash</th>
<th className="px-6 py-4 text-center">Status</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-glass-border">
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4">
<div className="font-bold text-sm">Risk Resolved Status</div>
<div className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded inline-block mt-1">ISO-9001:D1</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0.0.48273@1712345725.000000088</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0x3b2...6c9</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Resolved</span>
</td>
<td className="px-6 py-4 text-right">
<Link className="text-primary hover:underline text-xs flex items-center justify-end gap-1" href="#">
                                            Hashscan <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4">
<div className="font-bold text-sm">LTV Re-valuation (58.2%)</div>
<div className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded inline-block mt-1">ISO-9001:C1</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0.0.48273@1712345710.000000045</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0x9a8...ef0</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Verified</span>
</td>
<td className="px-6 py-4 text-right">
<Link className="text-primary hover:underline text-xs flex items-center justify-end gap-1" href="#">
                                            Hashscan <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4">
<div className="font-bold text-sm">Collateral Injection Received ($150k USDC)</div>
<div className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded inline-block mt-1">ISO-9001:B1</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0.0.48273@1712345695.000000012</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0x5c1...1b4</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Confirmed</span>
</td>
<td className="px-6 py-4 text-right">
<Link className="text-primary hover:underline text-xs flex items-center justify-end gap-1" href="#">
                                            Hashscan <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4">
<div className="font-bold text-sm">Margin Call Issued</div>
<div className="text-[10px] bg-orange-500/20 text-orange-500 px-1.5 py-0.5 rounded inline-block mt-1">ISO-9001:A2</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0.0.48273@1712345680.000000005</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0x2d4...9e2</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded uppercase">Acknowledged</span>
</td>
<td className="px-6 py-4 text-right">
<Link className="text-primary hover:underline text-xs flex items-center justify-end gap-1" href="#">
                                            Hashscan <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4">
<div className="font-bold text-sm text-red-400">LTV Alert Triggered (72%)</div>
<div className="text-[10px] bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded inline-block mt-1">ISO-9001:A1</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0.0.48273@1712345678.000000001</td>
<td className="px-6 py-4 font-mono text-xs text-slate-400">0x8f2...3a1</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold rounded uppercase">Alert</span>
</td>
<td className="px-6 py-4 text-right">
<Link className="text-primary hover:underline text-xs flex items-center justify-end gap-1" href="#">
                                            Hashscan <span className="material-symbols-outlined text-sm">open_in_new</span>
</Link>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Oracle Proofs and Audit Section  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Oracle Proofs  */}
<div className="lg:col-span-2 glassmorphism rounded-xl p-6">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary">hub</span>
<h3 className="font-display font-bold text-xl">Chainlink Oracle Proofs</h3>
</div>
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-white/5 border border-glass-border">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Asset Valuation Proof</p>
<p className="text-sm mt-1">Valuation: $2,850,000.00 USD</p>
</div>
<div className="mt-2 md:mt-0 flex items-center gap-3">
<div className="text-right">
<p className="text-[10px] text-slate-500">SIGNATURE HASH</p>
<p className="text-xs font-mono text-primary">0x44c...91a</p>
</div>
<div className="size-8 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
<span className="material-symbols-outlined text-primary text-sm">verified_user</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-white/5 border border-glass-border">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">LTV Ratio Validation</p>
<p className="text-sm mt-1">Certified Ratio: 58.21%</p>
</div>
<div className="mt-2 md:mt-0 flex items-center gap-3">
<div className="text-right">
<p className="text-[10px] text-slate-500">SIGNATURE HASH</p>
<p className="text-xs font-mono text-primary">0x77d...22b</p>
</div>
<div className="size-8 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
<span className="material-symbols-outlined text-primary text-sm">verified_user</span>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-glass-border flex justify-between items-center">
<p className="text-[10px] text-slate-500">Timestamp: 2024-05-20 14:32:01 UTC</p>
<button className="text-[10px] text-primary font-bold uppercase hover:underline">View Oracle Contract</button>
</div>
</div>
{/*  Audit Trail / Compliance Markers  */}
<div className="glassmorphism rounded-xl p-6">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary">assignment_turned_in</span>
<h3 className="font-display font-bold text-xl">Audit Compliance</h3>
</div>
<div className="space-y-6">
<div className="relative pl-6 border-l-2 border-primary/30 space-y-4">
<div className="relative">
<div className="absolute -left-[31px] top-1 size-4 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-background-dark font-bold">check</span>
</div>
<p className="text-xs font-bold">Phase 1: Detection</p>
<p className="text-[10px] text-slate-400 mt-1">ISO 9001:A1/A2 protocols followed for automated threshold alerting.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] top-1 size-4 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-background-dark font-bold">check</span>
</div>
<p className="text-xs font-bold">Phase 2: Remediation</p>
<p className="text-[10px] text-slate-400 mt-1">ISO 9001:B1 compliance verified for external collateral ingestion.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] top-1 size-4 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-background-dark font-bold">check</span>
</div>
<p className="text-xs font-bold">Phase 3: Certification</p>
<p className="text-[10px] text-slate-400 mt-1">Final re-valuation certified via multi-sig oracle proofs (ISO 9001:C1/D1).</p>
</div>
</div>
<button className="w-full py-2 rounded-lg border border-primary/40 text-primary text-xs font-bold hover:bg-primary/10 transition-colors uppercase tracking-widest">
                                Download Full Audit PDF
                            </button>
</div>
</div>
</div>
</div>
{/*  Footer Section  */}
<footer className="mt-auto p-8 border-t border-slate-200 dark:border-glass-border flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
<div>© 2024 ACCET RWA Platfom | Hedera Guardian Integrated</div>
<div className="flex gap-4">
<span className="text-primary/60">Network Status: Operational</span>
<span>HBAR Price: $0.1142</span>
</div>
</footer>
    </div>
  );
}
