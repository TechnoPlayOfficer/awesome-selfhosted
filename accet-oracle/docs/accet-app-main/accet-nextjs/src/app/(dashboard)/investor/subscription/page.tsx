import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Left Column: Asset Identity & Transparency  */}
<div className="lg:col-span-7 space-y-8">
{/*  Asset Header  */}
<section className="space-y-4">
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold tracking-widest uppercase">Activo Verificado</span>
<span className="text-slate-400 text-sm font-mono">ID: 0.0.9283456</span>
</div>
<h1 className="text-5xl font-black text-slate-900 tracking-tight">Skyline Tower A</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Participación fraccionada en desarrollo comercial premium de alta demanda. Ubicación estratégica con contratos de arrendamiento corporativos a largo plazo.
                </p>
</section>
{/*  Main Visual Bento  */}
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 h-80 rounded-2xl overflow-visible relative shadow-xl">
<img alt="Skyline Tower A Architecture" className="w-full h-full object-cover" data-alt="Modern glass skyscraper architecture at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz2JQQ8_kSsy1cGsyr5XRKPTSfbrDek1HGfrmmJWmlUoVd5yvD-5jvYeacXgejX1T_XI2on32UZ1u_LHuCWBoCYFleGpv6mxV1ts2t_T0OzKRTu92NSE1eCt4zr6yCot92E1eJRKcbMKENTz8fo2Dm107uzD5M5myjTNIv1k9QtNVkcdIXJCbduI3O9Qf-9zUB8DoOshkCdeVQvsLX76I4i08JxhRRlB4k7MMEugbmxly0AULsJPHOfy8pSuNFkvG0pqi2L9vrG3YF"/>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm">location_on</span> Dubai, UAE
                        </span>
</div>
</div>
<div className="h-40 rounded-2xl overflow-visible shadow-lg">
<img alt="Interior Office" className="w-full h-full object-cover" data-alt="Modern luxury office interior design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWEQ3ReR4LnK9uJr1-0uL8EG0bZJeGF3k_M79cYfdbiVUfzsRbMl2i1Md7qMUN3NBEMIUlNCD3MA-rpRW1Nkwltqnpcfk6nTD1x71ouHxwPgZo6KaHdxA0GtO-kDZ0RmPVFcq5jfujDB5egCtkdIIvxryTPFdTI21i_e3QGSQ4_v7157h1gEJbWH4fPCicJqoUiZRSMU2JnUrHr_2wC_IrS3sjcXUqa08nbgroYjy-RkkzqXlujDNYpQppno34NrE9THI-mbeuexbQ"/>
</div>
<div className="h-40 rounded-2xl overflow-visible shadow-lg relative">
<img alt="Asset Map" className="w-full h-full object-cover" data-alt="City map layout of business district" data-location="Dubai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoq3ZTiPMuW1bG6FRLQmwHqJM8xtl1L0ULsVODwlR-6eZdIgZ0dsiRdKgeevvlL8AX2-W6xXzQF9_H5mmMXclvtpclpQJE-kdCnOpI4uagxNktApSSgNFk7AaxM4XTlG1_jpxcC43PBcgoGNCHXNDl4nP_M7pmIM2c0JY1JUML2pU4asEAlJuI_f1v2LLPTXHascZARA2FVTe7H2mxbOdyawFFAABo5BbYMypuiTEl_JjrH6BaGoY1sJVsqH2We0i3LAUGeks2FEGj"/>
<div className="absolute inset-0 bg-cyan-600/20 mix-blend-multiply"></div>
</div>
</div>
{/*  Transparency & Smart Contract  */}
<section className="glass-card rounded-2xl p-6 border-emerald-500/20 border neon-border-emerald">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-xl bg-emerald-500 text-white">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Transparencia de Smart Contract</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Hedera Token Service (HTS)</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-4">
<div className="bg-slate-100/50 p-4 rounded-xl border border-slate-200">
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Hash de Contrato (HTS)</p>
<div className="flex items-center justify-between">
<code className="text-xs text-emerald-600 font-mono truncate mr-4">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
<button className="text-slate-400 hover:text-emerald-500 transition-colors">
<span className="material-symbols-outlined text-lg">content_copy</span>
</button>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<span className="material-symbols-outlined text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
<span>Auditado por CertiK Labs (Q3 2023)</span>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-100/50 p-4 rounded-xl border border-slate-200">
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Términos Legales Firmados</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">SPV_Skyline_A_Deed.pdf</span>
<button className="text-cyan-600 flex items-center gap-1 text-xs font-bold">
                                    VER <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
<p className="text-[10px] text-slate-400 italic">
                            Esta inversión representa una participación en el fideicomiso que posee el activo inmobiliario.
                        </p>
</div>
</div>
</section>
</div>
{/*  Right Column: Investment Simulator & CTA  */}
<aside className="lg:col-span-5 mt-10 lg:mt-0">
<div className="sticky top-24 space-y-6">
{/*  Investment Simulator Card  */}
<div className="glass-card rounded-3xl p-8 shadow-2xl border-white relative overflow-visible">
{/*  Accent Decoration  */}
<div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full"></div>
<div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-400/20 blur-3xl rounded-full"></div>
<h2 className="text-2xl font-bold text-slate-900 mb-8">Suscribir a Skyline Tower</h2>
<div className="space-y-6 relative">
{/*  Input Field  */}
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Monto de Inversión (USD)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-300">$</span>
<input className="w-full bg-white border-2 border-slate-100 focus:border-cyan-400 focus:ring-0 rounded-2xl py-4 pl-10 pr-4 text-3xl font-black text-slate-900 transition-all" type="number" value="1000"/>
</div>
</div>
{/*  Projections Grid  */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
<p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mb-1">Retorno (E.A.)</p>
<p className="text-2xl font-black text-emerald-600">18.5%</p>
</div>
<div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-100">
<p className="text-[10px] text-cyan-700 font-bold uppercase tracking-wider mb-1">Dividendos Mens.</p>
<p className="text-2xl font-black text-cyan-600">$15.42</p>
</div>
</div>
{/*  Divider  */}
<div className="h-px bg-slate-200 w-full"></div>
{/*  Payment Methods  */}
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Método de Pago</label>
<div className="grid grid-cols-3 gap-3">
<button className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-cyan-500 bg-cyan-50 text-cyan-600 transition-all">
<span className="material-symbols-outlined mb-1">payments</span>
<span className="text-[10px] font-bold">PSE</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-100 hover:border-cyan-200 transition-all">
<span className="material-symbols-outlined mb-1">currency_exchange</span>
<span className="text-[10px] font-bold">USDC</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-slate-100 hover:border-cyan-200 transition-all">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
<span className="text-[10px] font-bold">WALLET</span>
</button>
</div>
</div>
{/*  Summary  */}
<div className="space-y-3 pt-2">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Comisión de Gestión (0.5%)</span>
<span className="text-slate-900 font-medium">$5.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Gas Fee (HTS Network)</span>
<span className="text-emerald-600 font-medium">~$0.001</span>
</div>
<div className="flex justify-between text-lg font-bold border-t border-slate-100 pt-3">
<span className="text-slate-900">Total a Pagar</span>
<span className="text-cyan-600">$1,005.00</span>
</div>
</div>
{/*  Primary CTA  */}
<button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-cyan-500/20 transition-all active:scale-[0.98] uppercase tracking-wider flex items-center justify-center gap-3">
                            Confirmar Suscripción On-Chain
                            <span className="material-symbols-outlined">bolt</span>
</button>
</div>
</div>
{/*  Secondary Info  */}
<div className="px-4 py-2 flex items-center gap-3 text-slate-400">
<span className="material-symbols-outlined text-sm">info</span>
<p className="text-xs leading-tight">Tu inversión quedará bloqueada por un periodo mínimo de 12 meses según el smart contract.</p>
</div>
</div>
</aside>
    </div>
  );
}
