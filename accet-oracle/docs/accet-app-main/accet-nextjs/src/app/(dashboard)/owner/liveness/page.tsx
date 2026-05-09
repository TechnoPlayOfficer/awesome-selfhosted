import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Left Column: Instructions & Status  */}
<div className="lg:col-span-5 space-y-8">
<div className="space-y-4">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Biometric Check
                        </span>
<h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
                            Position your face within the frame
                        </h1>
<p className="text-slate-400 text-lg leading-relaxed">
                            We need to verify your identity using a quick 3D facial scan. Please ensure you are in a well-lit area.
                        </p>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-primary/30">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
</div>
<div>
<p className="text-white font-semibold">Lighting OK</p>
<p className="text-slate-500 text-sm">Perfect environment detected</p>
</div>
<span className="ml-auto material-symbols-outlined text-primary">check_circle</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<span className="material-symbols-outlined">face</span>
</div>
<div>
<p className="text-white font-semibold">Position OK</p>
<p className="text-slate-500 text-sm">Center your face in the circle</p>
</div>
<span className="ml-auto material-symbols-outlined text-primary">check_circle</span>
</div>
</div>
<button className="w-full py-4 px-8 bg-primary hover:bg-primary-dark text-slate-950 font-bold rounded-xl text-lg transition-all transform active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        Start Scan
                    </button>
</div>
{/*  Right Column: Camera View  */}
<div className="lg:col-span-7 flex flex-col items-center">
<div className="relative w-full aspect-square max-w-[480px]">
{/*  Progress Ring SVG  */}
<svg className="absolute inset-0 w-full h-full -rotate-90 z-10 pointer-events-none" viewBox="0 0 100 100">
<circle className="text-slate-800 stroke-current" cx="50" cy="50" fill="transparent" r="46" strokeWidth="2"></circle>
<circle className="text-primary stroke-current progress-ring" cx="50" cy="50" fill="transparent" r="46" strokeLinecap="round" strokeWidth="2" style={{ strokeDasharray: "289", strokeDashoffset: "70" }}></circle>
</svg>
{/*  Camera Container  */}
<div className="absolute inset-4 rounded-full overflow-visible border-4 border-slate-900 bg-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
{/*  Background Image representing camera feed  */}
<div className="w-full h-full relative">
<img alt="Camera Feed" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" data-alt="Close up portrait for facial recognition scan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3D0MWs2iqX8YHOaym8Aci8N2vRRCrRLnrI4YXFi7AcW5pGNhy7IcmH8XFg-pnoml8VADChNjL_TW17td7Gjz-Y4U_JPfAEO2A5xNHRnseA73g5_35OuJaBppwwFI_nFEq-UVfuI94D28o25M5eViq6qIKrqu1pxru6MpKgDQLD287_cmXUSnMVc5N5SG2ffcYyJSCHbZZfRJWNJlNvu1EqItvmvpfc_6cth-pHrY8fKiFteo0FP7oWixM6fFc7hBnOLf_Cdfd8MDy"/>
{/*  Scanning Overlay Effect  */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1/2 w-full animate-pulse top-1/4"></div>
{/*  Guide Oval  */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[70%] h-[80%] rounded-[50%/45%] border-2 border-dashed border-primary/50"></div>
</div>
</div>
</div>
{/*  Feedback HUD  */}
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-20 whitespace-nowrap">
<div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
<span className="text-sm font-medium text-white">Live Feedback: <span className="text-primary">Ready to scan</span></span>
</div>
</div>
{/*  Tips Section  */}
<div className="mt-16 grid grid-cols-3 gap-8 w-full">
<div className="flex flex-col items-center text-center gap-2">
<span className="material-symbols-outlined text-slate-500">no_photography</span>
<span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">No Glasses</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<span className="material-symbols-outlined text-slate-500">wb_sunny</span>
<span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Good Light</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<span className="material-symbols-outlined text-slate-500">face_retouching_natural</span>
<span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Be Natural</span>
</div>
</div>
</div>
</div>
    </div>
  );
}
