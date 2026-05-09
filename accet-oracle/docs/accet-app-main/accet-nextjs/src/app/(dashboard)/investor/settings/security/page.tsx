import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Sidebar Navigation  */}
<nav className="lg:col-span-3 space-y-2">
<Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold" href="#">
<span className="material-symbols-outlined">person</span>
                    Profile Info
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-dark text-slate-400 hover:text-slate-100 transition-all" href="#verification">
<span className="material-symbols-outlined">verified_user</span>
                    Verification
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-dark text-slate-400 hover:text-slate-100 transition-all" href="#security">
<span className="material-symbols-outlined">security</span>
                    Security
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-dark text-slate-400 hover:text-slate-100 transition-all" href="#notifications">
<span className="material-symbols-outlined">notifications_active</span>
                    Notifications
                </Link>
<Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-dark text-slate-400 hover:text-slate-100 transition-all" href="#api">
<span className="material-symbols-outlined">terminal</span>
                    API Keys
                </Link>
<div className="pt-6 mt-6 border-t border-primary/10">
<button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition-all">
<span className="material-symbols-outlined">logout</span>
                        Sign Out
                    </button>
</div>
</nav>
{/*  Main Content Area  */}
<div className="lg:col-span-9 space-y-12">
{/*  Profile Section  */}
<section id="profile">
<h1 className="section-header text-3xl font-bold mb-6 text-slate-100">Account Settings</h1>
<div className="bg-surface-dark rounded-2xl p-8 border border-primary/5">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
<div className="relative group">
<div className="size-24 rounded-full border-4 border-primary/20 bg-cover bg-center overflow-visible" data-alt="User profile photo closeup" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApWGpc2t3DS8doamE9dPSWK0UmIwApZey-i4dp_VzvzIyiEGAhQ3GH4uNEXSoiWujB2X9Qa-vJPMfNHpDBffcP7HjW4uaUnYrKvr1JCWNC3LjjlewPlaAE9hPBmDKfGYAY2quREm6siIBNvorovBZn1dB14Wo-D_yEGaoqMrgbMLIr9IopKOOUERqseyqifqsvaMCnvep6YQSaIDvTafpK7ZLjFplvDRd9UO424l8KuzdtLhEoPdDg8q332_AcfcCYPSWfHElTQbkZ')" }}>
</div>
<button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full text-background-dark shadow-xl hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
<div>
<h3 className="text-xl font-bold text-slate-100">Alex Rivers</h3>
<p className="text-slate-400">Institutional Account • <span className="text-accent-sky">ID: 88291-ACC</span></p>
<div className="mt-2 flex gap-2">
<span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">Premium Member</span>
<span className="px-2 py-1 rounded bg-accent-sky/20 text-accent-sky text-xs font-bold uppercase tracking-wider">Whitelist: Tier 3</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400 ml-1">Legal Name</label>
<input className="w-full bg-background-dark border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-100" type="text" value="Alexander Rivers"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
<input className="w-full bg-background-dark border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-slate-100" type="email" value="alex.r@metacorp.io"/>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-8 py-3 rounded-xl transition-all">Save Changes</button>
</div>
</div>
</section>
{/*  Verification Section  */}
<section id="verification">
<h2 className="section-header text-2xl font-bold mb-6 text-slate-100">Identity Verification</h2>
<div className="bg-surface-dark rounded-2xl p-8 border border-primary/5">
<div className="flex items-center justify-between p-6 rounded-xl bg-background-dark/50 border border-primary/10">
<div className="flex items-center gap-5">
<div className="size-14 rounded-full bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">verified</span>
</div>
<div>
<h4 className="text-lg font-bold text-slate-100 leading-tight">Jumio KYC/KYB Status</h4>
<p className="text-slate-400 text-sm">Last verified on Oct 24, 2023</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="flex items-center gap-2 text-primary font-bold">
<span className="size-2 rounded-full bg-primary shadow-[0_0_10px_#1ed278]"></span>
                                    Verified
                                </span>
<button className="text-accent-sky text-xs hover:underline mt-1 font-medium">Refresh Verification</button>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-primary/10 bg-background-dark/30">
<p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">ID Document</p>
<p className="text-slate-100 font-medium flex items-center gap-2">Passport • ****8821 <span className="material-symbols-outlined text-sm text-primary">check_circle</span></p>
</div>
<div className="p-4 rounded-xl border border-primary/10 bg-background-dark/30">
<p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Proof of Funds</p>
<p className="text-slate-100 font-medium flex items-center gap-2">Financial Statement <span className="material-symbols-outlined text-sm text-primary">check_circle</span></p>
</div>
<div className="p-4 rounded-xl border border-primary/10 bg-background-dark/30">
<p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Entity Verification</p>
<p className="text-slate-100 font-medium flex items-center gap-2">Metacorp LLC <span className="material-symbols-outlined text-sm text-primary">check_circle</span></p>
</div>
</div>
</div>
</section>
{/*  Security Section  */}
<section id="security">
<h2 className="section-header text-2xl font-bold mb-6 text-slate-100">Security &amp; Privacy</h2>
<div className="bg-surface-dark rounded-2xl divide-y divide-primary/5 border border-primary/5">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary">phonelink_lock</span>
<div>
<p className="font-bold text-slate-100">Two-Factor Authentication (2FA)</p>
<p className="text-slate-400 text-sm">Protect your account with an extra layer of security.</p>
</div>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-primary p-1 cursor-pointer">
<div className="w-4 h-4 bg-background-dark rounded-full translate-x-6"></div>
</div>
</div>
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-accent-sky">fingerprint</span>
<div>
<p className="font-bold text-slate-100">Biometric Login</p>
<p className="text-slate-400 text-sm">Use FaceID or TouchID on supported devices.</p>
</div>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-primary/20 p-1 cursor-pointer">
<div className="w-4 h-4 bg-slate-500 rounded-full"></div>
</div>
</div>
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400">password</span>
<div>
<p className="font-bold text-slate-100">Password</p>
<p className="text-slate-400 text-sm">Last changed 4 months ago.</p>
</div>
</div>
<button className="px-4 py-2 border border-primary/30 rounded-lg text-sm text-primary font-bold hover:bg-primary/10">Change</button>
</div>
</div>
</section>
{/*  Notifications Section  */}
<section id="notifications">
<h2 className="section-header text-2xl font-bold mb-6 text-slate-100">Notification Preferences</h2>
<div className="bg-surface-dark rounded-2xl p-8 border border-primary/5 space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-slate-100">LTV Alerts</p>
<p className="text-slate-400 text-sm">Get notified when your Loan-to-Value ratio exceeds 70%.</p>
</div>
<select className="bg-background-dark border-primary/20 rounded-lg text-slate-100 text-sm">
<option>Push + Email</option>
<option>Push Only</option>
<option>Email Only</option>
<option>Disabled</option>
</select>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-slate-100">Dividend Distribution</p>
<p className="text-slate-400 text-sm">Weekly report on portfolio yield and asset dividends.</p>
</div>
<select className="bg-background-dark border-primary/20 rounded-lg text-slate-100 text-sm">
<option>Email Only</option>
<option>Push Only</option>
<option>Disabled</option>
</select>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-slate-100">Security Alerts</p>
<p className="text-slate-400 text-sm">New logins or withdrawal attempts (Recommended).</p>
</div>
<span className="text-primary font-bold text-sm uppercase">Always On</span>
</div>
</div>
</section>
{/*  Developer API Keys  */}
<section className="pb-20" id="api">
<div className="flex items-center justify-between mb-6">
<h2 className="section-header text-2xl font-bold text-slate-100">Developer API Keys</h2>
<span className="text-xs bg-accent-sky/20 text-accent-sky px-2 py-1 rounded font-bold uppercase">Institutional</span>
</div>
<div className="bg-surface-dark rounded-2xl p-8 border border-primary/5">
<p className="text-slate-400 mb-6 text-sm">Integrate ACCET liquidity directly into your institutional dashboard.</p>
<div className="space-y-4">
<div className="p-4 bg-background-dark rounded-xl border border-primary/10 flex items-center justify-between group">
<div className="flex flex-col">
<span className="text-xs font-bold text-primary mb-1">PROD_KEY_01</span>
<code className="text-slate-100 font-mono text-sm tracking-wider">ak_live_51Mh9VfLhA7m...</code>
</div>
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">content_copy</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
<button className="w-full py-4 border-2 border-dashed border-primary/20 rounded-xl text-primary font-bold flex items-center justify-center gap-2 hover:bg-primary/5 hover:border-primary/40 transition-all">
<span className="material-symbols-outlined">add_circle</span>
                                Generate New API Key
                            </button>
</div>
<div className="mt-8 p-4 rounded-lg bg-accent-sky/10 border border-accent-sky/20 flex gap-4 items-start">
<span className="material-symbols-outlined text-accent-sky mt-0.5">info</span>
<p className="text-xs text-accent-sky/80 leading-relaxed">
                                API keys grant broad access to account operations including trading and withdrawals. 
                                Never share your keys or store them in client-side code. Use IP whitelisting for additional security.
                            </p>
</div>
</div>
</section>
</div>
    </div>
  );
}
