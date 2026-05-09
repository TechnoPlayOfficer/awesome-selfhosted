import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center text-center mb-12">
<div className="relative mb-8">
{/*  Subtle Animated Loader  */}
<div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center">
<div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-slow-spin"></div>
<span className="material-symbols-outlined text-4xl text-blue-400" data-icon="hourglass_empty">hourglass_empty</span>
</div>
</div>
<h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Verification in Progress</h1>
<p className="text-slate-400 max-w-lg text-lg">
                    We're currently analyzing your biometric data and cross-referencing your documents. This usually takes less than 3 minutes.
                </p>
</div>
{/*  Bento Grid Summary  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/*  Status Card  */}
<div className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-blue-400 mb-6">
<span className="material-symbols-outlined text-xl" data-icon="info">info</span>
<span className="text-sm font-bold tracking-widest uppercase">System Status</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-emerald-400" data-icon="check_circle">check_circle</span>
<span className="text-sm">Document OCR Extraction</span>
</div>
<span className="text-xs text-emerald-400 font-medium">Completed</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-400 animate-pulse" data-icon="sync">sync</span>
<span className="text-sm">Biometric Liveness Match</span>
</div>
<span className="text-xs text-blue-400 font-medium">Processing...</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="pending">pending</span>
<span className="text-sm">AML/Sanctions Screening</span>
</div>
<span className="text-xs text-slate-500 font-medium">Pending</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<p className="text-xs text-slate-500">Your data is encrypted with AES-256 and processed in a secure enclave.</p>
<span className="material-symbols-outlined text-slate-500 text-sm" data-icon="lock">lock</span>
</div>
</div>
{/*  Info Summary Card  */}
<div className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-500">
<h2 className="text-lg font-bold text-white mb-6">Submitted Info</h2>
<ul className="space-y-6">
<li className="flex flex-col gap-1">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Full Name</span>
<span className="text-sm font-medium text-slate-200">Alexander Thorne</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Document Type</span>
<span className="text-sm font-medium text-slate-200">Passport (USA)</span>
</li>
<li className="flex flex-col gap-1">
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Document Number</span>
<span className="text-sm font-medium text-slate-200">•••• •••• 9210</span>
</li>
</ul>
<div className="mt-10">
<div className="w-full h-32 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-4xl text-slate-700" data-icon="image">image</span>
</div>
<p className="text-[10px] text-center text-slate-500 mt-2 italic">Scanned document preview</p>
</div>
</div>
</div>
{/*  Footer Action Area  */}
<div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-400" data-icon="mail">mail</span>
</div>
<div>
<h4 className="text-sm font-bold text-white">Get notified</h4>
<p className="text-xs text-slate-400">We'll send an email once your status is updated.</p>
</div>
</div>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-all active:scale-95">
                        View Log
                    </button>
<button className="flex-1 md:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2">
                        Back to Dashboard
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<p className="text-center text-slate-600 text-[10px] mt-12 tracking-widest uppercase">
                Compliance ID: RWA-KYC-99120-XF
            </p>
    </div>
  );
}
