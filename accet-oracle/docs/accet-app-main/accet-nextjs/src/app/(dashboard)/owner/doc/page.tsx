import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Decorative Gradients  */}
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto space-y-8 relative z-10">
{/*  Header & Progress  */}
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h1 className="text-3xl font-bold tracking-tight text-white mb-2">Verify your Identity</h1>
<p className="text-slate-400">Please provide a valid government-issued document to proceed.</p>
</div>
<div className="hidden sm:block text-right">
<span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 1 of 3</span>
<div className="flex gap-1 mt-2">
<div className="h-1.5 w-8 rounded-full bg-primary"></div>
<div className="h-1.5 w-8 rounded-full bg-slate-800"></div>
<div className="h-1.5 w-8 rounded-full bg-slate-800"></div>
</div>
</div>
</div>
</div>
{/*  Bento Layout for Content  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Upload Area  */}
<div className="md:col-span-8 glass-panel rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] group cursor-pointer border-dashed border-2 border-slate-700 hover:border-primary transition-all duration-300">
<div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-4xl text-primary" data-icon="cloud_upload">cloud_upload</span>
</div>
<h3 className="text-xl font-semibold mb-2">Upload your document</h3>
<p className="text-slate-400 text-center max-w-sm mb-8">
                            Drag and drop your National ID, Passport, or Driver's License here, or <span className="text-primary font-medium">browse files</span>
</p>
<div className="flex gap-4">
<div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg text-xs text-slate-400 border border-slate-800">
<span className="material-symbols-outlined text-sm" data-icon="picture_as_pdf">picture_as_pdf</span>
                                PDF
                            </div>
<div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg text-xs text-slate-400 border border-slate-800">
<span className="material-symbols-outlined text-sm" data-icon="image">image</span>
                                JPG, PNG
                            </div>
</div>
</div>
{/*  Side Tips  */}
<div className="md:col-span-4 space-y-6">
<div className="glass-card rounded-2xl p-6">
<h4 className="font-bold text-sm text-slate-200 mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-accent" data-icon="tips_and_updates">tips_and_updates</span>
                                PHOTO TIPS
                            </h4>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-sm text-slate-400">Ensure the document is fully visible and not cropped.</span>
</li>
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-sm text-slate-400">Avoid reflections or glare from flash or overhead lights.</span>
</li>
<li className="flex gap-3 items-start">
<span className="material-symbols-outlined text-primary text-sm mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-sm text-slate-400">The text must be sharp and clearly readable.</span>
</li>
</ul>
</div>
<div className="glass-card rounded-2xl p-6 border-l-4 border-l-accent">
<h4 className="font-bold text-sm text-slate-200 mb-2">Accepted Documents</h4>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 p-2 rounded">
<span>Passport</span>
<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 p-2 rounded">
<span>National ID</span>
<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 p-2 rounded">
<span>Driver's License</span>
<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span>
</div>
</div>
</div>
</div>
{/*  Footer / Actions  */}
<div className="md:col-span-12 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-800">
<div className="flex items-center gap-3 text-slate-400 text-sm">
<span className="material-symbols-outlined" data-icon="lock">lock</span>
                            Your data is encrypted and secure
                        </div>
<div className="flex gap-4 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-8 py-3 rounded-xl border border-slate-700 font-semibold hover:bg-slate-800 transition-colors">
                                Cancel
                            </button>
<button className="flex-1 sm:flex-none px-12 py-3 rounded-xl bg-primary text-slate-950 font-bold hover:bg-teal-300 transition-all flex items-center justify-center gap-2">
                                Continue
                                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Visual Showcase (Asymmetric Glass Card)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
<div className="glass-card rounded-2xl p-6 flex items-center gap-6 overflow-visible relative">
<div className="relative z-10">
<h5 className="text-lg font-bold mb-1">Mobile Verification?</h5>
<p className="text-sm text-slate-400 mb-4">Continue on your phone to easily snap photos of your documents.</p>
<button className="text-accent text-sm font-semibold flex items-center gap-1 hover:underline">
                                Get QR Code
                                <span className="material-symbols-outlined text-sm" data-icon="qr_code_2">qr_code_2</span>
</button>
</div>
<div className="opacity-20 absolute -right-4 -bottom-4">
<span className="material-symbols-outlined text-[120px]" data-icon="smartphone">smartphone</span>
</div>
</div>
<div className="glass-card rounded-2xl p-6 border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-400" data-icon="security">security</span>
</div>
<h5 className="text-sm font-bold">Privacy Commitment</h5>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                            ACCET RWA uses bank-grade encryption and ISO 27001 certified protocols. Your biometric data and document images are never shared with third parties without your explicit consent.
                        </p>
</div>
</div>
</div>
    </div>
  );
}
