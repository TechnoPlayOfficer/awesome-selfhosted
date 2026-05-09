import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Progress Stepper  */}
<div className="mb-12">
<div className="flex items-center justify-between mb-4">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-primary font-bold">Paso 2 de 3</span>
<h3 className="text-lg font-bold">Verificación KYC</h3>
</div>
<span className="text-sm font-medium text-slate-500">66% completado</span>
</div>
<div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-visible">
<div className="bg-primary h-full transition-all duration-500" style={{ width: "66%" }}></div>
</div>
<div className="flex justify-between mt-3 text-xs text-slate-500 font-medium">
<span className="text-success flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Info Personal</span>
<span className="text-primary underline underline-offset-4">KYC Verification</span>
<span>Wallet Setup</span>
</div>
</div>
{/*  Profile Selection Intro (Hidden in step 2 but shown for context of the user request)  */}
<section className="mb-12 hidden">
<div className="text-center mb-10">
<h1 className="text-4xl font-display font-bold mb-4">Bienvenido a ACCET</h1>
<p className="text-slate-500 text-lg">Selecciona tu perfil para comenzar tu viaje en activos digitales</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Profile Card: Investor  */}
<div className="glass p-8 rounded-xl border-2 border-primary group cursor-pointer hover:bg-primary/5 transition-all">
<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">trending_up</span>
</div>
<h3 className="text-2xl font-display font-bold mb-2">Soy Inversor</h3>
<p className="text-slate-400 mb-6">Busco diversificar mi portafolio con activos respaldados por propiedades reales.</p>
<div className="flex items-center text-primary font-bold gap-2">
                                Continuar <span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
{/*  Profile Card: Owner  */}
<div className="glass p-8 rounded-xl border-2 border-transparent hover:border-primary/50 group cursor-pointer transition-all">
<div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">real_estate_agent</span>
</div>
<h3 className="text-2xl font-display font-bold mb-2 text-slate-300">Soy Propietario</h3>
<p className="text-slate-500 mb-6">Quiero tokenizar mis activos inmobiliarios para acceder a liquidez global.</p>
<div className="flex items-center text-slate-500 font-bold gap-2">
                                Continuar <span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</section>
{/*  KYC Verification Screen  */}
<section className="max-w-2xl mx-auto">
<div className="glass rounded-2xl overflow-visible shadow-2xl border border-white/5">
<div className="bg-primary/10 p-6 border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h2 className="text-xl font-bold">Verificación de Identidad</h2>
<p className="text-sm text-slate-400">Cumplimiento institucional de seguridad</p>
</div>
</div>
</div>
<div className="p-8 space-y-8">
{/*  Facial Recognition Placeholder  */}
<div className="relative aspect-video rounded-xl overflow-visible bg-slate-900 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
<div className="relative z-20 flex flex-col items-center text-center px-6">
<div className="w-24 h-24 mb-4 relative">
<div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse"></div>
<div className="absolute inset-2 border-2 border-primary/40 rounded-full"></div>
<div className="flex items-center justify-center h-full">
<span className="material-symbols-outlined text-5xl text-primary">face</span>
</div>
</div>
<h4 className="text-lg font-bold mb-1">Reconocimiento Facial</h4>
<p className="text-xs text-slate-400 max-w-[280px]">Coloca tu rostro dentro del marco y asegúrate de tener buena iluminación.</p>
<button className="mt-6 px-6 py-2 bg-primary rounded-full text-white font-bold text-sm hover:bg-primary/90 transition-all">
                                        Iniciar Cámara
                                    </button>
</div>
<img alt="Futuristic scanner background" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" data-alt="Abstract cyber security blue light grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA29wbDr9cRCU_wCPb3Kxu9a-qA817sMhKiDN-TlHfA_X50XaDbqnPL1FpaohUOvZryWuM_hJmQI1FUqObDqTOL67hnhs_kSORqQM1N5pHGyHoU2fF_VTzdy-02pAHl3m2vc-Rw-mugajAPgaZSx0TgzyOLFFztK6zN3Wu6lpIj5Sb1zHM3LMkcIo2YKlNAJZ-_YSyQcoU1C5f33WXCqqDgtsNR2di-Gg9kDzJNXIPToaDLbFJKuNhkzrEeF_QNJ35p6nrjhyx8FU4O"/>
</div>
{/*  Document Upload  */}
<div className="space-y-4">
<label className="block text-sm font-bold text-slate-300">Documentación Requerida</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{/*  ID Document  */}
<div className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-primary/50 cursor-pointer transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">badge</span>
<span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">PDF, JPG</span>
</div>
<p className="text-sm font-bold">Documento de Identidad</p>
<p className="text-xs text-slate-500 mt-1">Frente y dorso</p>
<div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">upload</span> Subir archivo
                                        </div>
</div>
{/*  NIT/Tax ID  */}
<div className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-primary/50 cursor-pointer transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">description</span>
<span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">PDF</span>
</div>
<p className="text-sm font-bold">NIT / RUT</p>
<p className="text-xs text-slate-500 mt-1">Registro tributario actualizado</p>
<div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold">
<span className="material-symbols-outlined text-sm">upload</span> Subir archivo
                                        </div>
</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-slate-800/40 rounded-lg">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-xs text-slate-400 leading-relaxed">
                                    Tus datos están protegidos bajo estándares militares de cifrado AES-256. ACCET no almacena tus biométricos directamente, son procesados por proveedores certificados.
                                </p>
</div>
</div>
<div className="px-8 py-6 bg-slate-900/50 flex flex-col sm:flex-row gap-4 items-center justify-between">
<button className="text-slate-400 font-bold hover:text-white transition-colors flex items-center gap-2 order-2 sm:order-1">
<span className="material-symbols-outlined">arrow_back</span> Atrás
                            </button>
<button className="w-full sm:w-auto px-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all order-1 sm:order-2">
                                Continuar a Wallet Setup
                            </button>
</div>
</div>
{/*  Footer Help  */}
<div className="mt-10 flex flex-col items-center justify-center gap-4 text-slate-500 text-sm">
<p>¿Necesitas ayuda con tu verificación?</p>
<div className="flex gap-6">
<Link className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-lg">support_agent</span> Soporte en vivo
                            </Link>
<Link className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-lg">menu_book</span> Guía de KYC
                            </Link>
</div>
</div>
</section>
{/*  Success State Overlay (Hidden by default)  */}
<div className="relative inset-0 z-[100] bg-background-dark/95 backdrop-blur-xl flex items-center justify-center p-6 hidden">
<div className="max-w-md w-full glass p-10 rounded-3xl text-center border-t-4 border-success">
<div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center text-success mx-auto mb-6">
<span className="material-symbols-outlined text-5xl">check_circle</span>
</div>
<h2 className="text-3xl font-display font-bold mb-4">Verificación Exitosa</h2>
<p className="text-slate-400 mb-8">Tu identidad ha sido validada. Ahora procederemos a configurar tu billetera institucional segura.</p>
<button className="w-full py-4 bg-success text-white font-bold rounded-xl hover:bg-success/90 transition-all">
                            Configurar Wallet
                        </button>
</div>
</div>
    </div>
  );
}
