import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Header  */}
<header className="h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md z-10">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
<input className="w-full bg-primary/5 border-primary/10 rounded-lg pl-10 py-2 text-sm focus:ring-primary focus:border-primary" placeholder="Buscar transacciones o activos..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-accent-sky rounded-full"></span>
</button>
<div className="h-8 w-[1px] bg-primary/10 mx-2"></div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-400">Hedera Network</span>
<div className="size-2 rounded-full bg-primary animate-pulse"></div>
</div>
</div>
</header>
{/*  Content Scroll Area  */}
<div className="flex-1 overflow-y-auto p-8 space-y-8">
{/*  Summary Section  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-xl flex flex-col justify-between neon-glow-emerald">
<div>
<p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Invertido</p>
<h3 className="font-financial text-3xl text-slate-100">$24,850.00</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-accent-emerald text-sm">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>+8.4% este mes</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex flex-col justify-between neon-glow-sky">
<div>
<p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Dividendos Recibidos</p>
<h3 className="font-financial text-3xl text-accent-sky">+$1,240.15</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
<span className="material-symbols-outlined text-sm">history</span>
<span>Acumulado histórico</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Saldo Disponible</p>
<h3 className="font-financial text-3xl text-primary">$3,420.50</h3>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-1.5 px-4 rounded-lg text-xs transition-colors">Depositar</button>
<button className="border border-primary/20 hover:bg-primary/10 text-primary font-bold py-1.5 px-4 rounded-lg text-xs transition-colors">Retirar</button>
</div>
</div>
</div>
{/*  Main Transaction History Section  */}
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-xl font-bold flex items-center gap-2">
                            Historial de Transacciones
                            <span className="text-xs font-normal text-slate-500 bg-primary/5 px-2 py-0.5 rounded-full">48 Registros</span>
</h2>
<div className="flex flex-wrap items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm">filter_alt</span>
                                    Tipo: Todos
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                                    Últimos 30 días
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<button className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm">download</span>
                                Exportar
                            </button>
</div>
</div>
{/*  Transactions Table/List  */}
<div className="glass-card rounded-xl overflow-visible">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary/5 text-xs uppercase tracking-wider text-slate-500 border-b border-primary/10">
<th className="px-6 py-4 font-semibold">Fecha</th>
<th className="px-6 py-4 font-semibold">Transacción</th>
<th className="px-6 py-4 font-semibold">Activo / Concepto</th>
<th className="px-6 py-4 font-semibold text-right">Monto</th>
<th className="px-6 py-4 font-semibold">Estado</th>
<th className="px-6 py-4 font-semibold">Hedera Hash</th>
</tr>
</thead>
<tbody className="divide-y divide-primary/5">
{/*  Transaction Item  */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium">12 Oct, 2023</div>
<div className="text-[10px] text-slate-500">14:25 PM</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-accent-sky/20 flex items-center justify-center text-accent-sky">
<span className="material-symbols-outlined text-sm">shopping_cart</span>
</div>
<span className="text-sm font-semibold">Inversión</span>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm font-medium">Skyline Tower A</div>
<div className="text-[10px] text-slate-500">Edificio Residencial • Bogotá</div>
</td>
<td className="px-6 py-4 text-right">
<div className="text-sm font-financial font-bold">$5,000.00</div>
<div className="text-[10px] text-slate-500">20,500,000 COP</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
<span className="size-1 rounded-full bg-primary"></span> COMPLETADO
                                        </span>
</td>
<td className="px-6 py-4">
<Link className="flex items-center gap-1 text-accent-sky hover:underline text-[11px] font-mono" href="#">
                                            0.0.9283@1712...
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</Link>
</td>
</tr>
{/*  Transaction Item  */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium">08 Oct, 2023</div>
<div className="text-[10px] text-slate-500">09:12 AM</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-accent-teal/20 flex items-center justify-center text-accent-teal">
<span className="material-symbols-outlined text-sm">payments</span>
</div>
<span className="text-sm font-semibold">Dividendo</span>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm font-medium">Torre Chicó</div>
<div className="text-[10px] text-slate-500">Renta Mensual • Fase 1</div>
</td>
<td className="px-6 py-4 text-right">
<div className="text-sm font-financial font-bold text-accent-teal">+$45.20</div>
<div className="text-[10px] text-slate-500">185,320 COP</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
<span className="size-1 rounded-full bg-primary"></span> COMPLETADO
                                        </span>
</td>
<td className="px-6 py-4">
<Link className="flex items-center gap-1 text-accent-sky hover:underline text-[11px] font-mono" href="#">
                                            0.0.4521@1698...
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</Link>
</td>
</tr>
{/*  Transaction Item  */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium">05 Oct, 2023</div>
<div className="text-[10px] text-slate-500">11:05 AM</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">add_circle</span>
</div>
<span className="text-sm font-semibold">Depósito</span>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm font-medium">Fondeo de Cuenta</div>
<div className="text-[10px] text-slate-500">Vía Transferencia Bancaria</div>
</td>
<td className="px-6 py-4 text-right">
<div className="text-sm font-financial font-bold">+$1,500.00</div>
<div className="text-[10px] text-slate-500">6,150,000 COP</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
<span className="size-1 rounded-full bg-primary"></span> COMPLETADO
                                        </span>
</td>
<td className="px-6 py-4">
<Link className="flex items-center gap-1 text-accent-sky hover:underline text-[11px] font-mono" href="#">
                                            0.0.8441@1701...
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</Link>
</td>
</tr>
{/*  Transaction Item  */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium">01 Oct, 2023</div>
<div className="text-[10px] text-slate-500">16:45 PM</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-slate-500/20 flex items-center justify-center text-slate-400">
<span className="material-symbols-outlined text-sm">remove_circle</span>
</div>
<span className="text-sm font-semibold">Retiro</span>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm font-medium">Retiro a Banco</div>
<div className="text-[10px] text-slate-500">Bancolombia • **** 8821</div>
</td>
<td className="px-6 py-4 text-right">
<div className="text-sm font-financial font-bold text-slate-300">-$250.00</div>
<div className="text-[10px] text-slate-500">1,025,000 COP</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-bold">
<span className="size-1 rounded-full bg-amber-500"></span> PENDIENTE
                                        </span>
</td>
<td className="px-6 py-4">
<div className="text-[11px] font-mono text-slate-600">Procesando...</div>
</td>
</tr>
{/*  Repeated items for scroll depth  */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium">28 Sep, 2023</div>
<div className="text-[10px] text-slate-500">10:00 AM</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-accent-teal/20 flex items-center justify-center text-accent-teal">
<span className="material-symbols-outlined text-sm">payments</span>
</div>
<span className="text-sm font-semibold">Dividendo</span>
</div>
</td>
<td className="px-6 py-4">
<div className="text-sm font-medium">Skyline Tower A</div>
<div className="text-[10px] text-slate-500">Renta Mensual</div>
</td>
<td className="px-6 py-4 text-right">
<div className="text-sm font-financial font-bold text-accent-teal">+$32.10</div>
<div className="text-[10px] text-slate-500">131,610 COP</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
<span className="size-1 rounded-full bg-primary"></span> COMPLETADO
                                        </span>
</td>
<td className="px-6 py-4">
<Link className="flex items-center gap-1 text-accent-sky hover:underline text-[11px] font-mono" href="#">
                                            0.0.3321@1685...
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</Link>
</td>
</tr>
</tbody>
</table>
{/*  Pagination  */}
<div className="px-6 py-4 flex items-center justify-between border-t border-primary/10">
<span className="text-xs text-slate-500">Mostrando 1-10 de 48 transacciones</span>
<div className="flex items-center gap-2">
<button className="p-1 rounded bg-primary/5 border border-primary/10 text-slate-500 hover:text-primary disabled:opacity-50">
<span className="material-symbols-outlined text-base">chevron_left</span>
</button>
<div className="flex items-center gap-1">
<button className="size-6 rounded bg-primary text-background-dark text-xs font-bold">1</button>
<button className="size-6 rounded hover:bg-primary/10 text-xs font-bold transition-colors">2</button>
<button className="size-6 rounded hover:bg-primary/10 text-xs font-bold transition-colors">3</button>
<span className="text-xs px-1">...</span>
<button className="size-6 rounded hover:bg-primary/10 text-xs font-bold transition-colors">5</button>
</div>
<button className="p-1 rounded bg-primary/5 border border-primary/10 text-slate-500 hover:text-primary">
<span className="material-symbols-outlined text-base">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/*  Help/Support Banner  */}
<div className="bg-gradient-to-r from-accent-sky/10 via-accent-teal/10 to-transparent p-6 rounded-xl border border-accent-sky/20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-accent-sky/20 flex items-center justify-center text-accent-sky">
<span className="material-symbols-outlined text-2xl">help</span>
</div>
<div>
<h4 className="font-bold text-slate-100">¿Tienes dudas sobre tus transacciones?</h4>
<p className="text-sm text-slate-400">Consulta nuestra base de conocimientos sobre la red Hedera Hashgraph.</p>
</div>
</div>
<button className="bg-accent-sky text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-accent-sky/80 transition-colors">Ver Guía</button>
</div>
</div>
    </div>
  );
}
