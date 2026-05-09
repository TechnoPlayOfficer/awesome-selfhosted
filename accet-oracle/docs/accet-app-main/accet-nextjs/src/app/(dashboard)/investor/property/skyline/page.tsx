import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      {/*  Hero & Title Section  */}
<div className="mb-12">
<h1 className="text-4xl font-bold mb-4 tracking-tight">Institutional RWA Marketplace</h1>
<p className="text-slate-400 max-w-2xl text-lg">Access tokenized commercial real estate and infrastructure with on-chain compliance and institutional-grade security.</p>
</div>
{/*  Filters & Search  */}
<div className="flex flex-col gap-6 mb-12">
<div className="flex flex-col lg:flex-row gap-4 items-center">
<div className="relative w-full lg:max-w-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full h-12 pl-12 pr-4 bg-neutral-800 border-neutral-700 rounded-xl focus:ring-primary focus:border-primary text-slate-100 placeholder:text-slate-500" placeholder="Search by asset name or city..." type="text"/>
</div>
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
<span className="material-symbols-outlined text-sm">location_on</span>
                        City: London
                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
<span className="material-symbols-outlined text-sm">category</span>
                        Type: Commercial
                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary">
<span className="material-symbols-outlined text-sm">trending_up</span>
                        Returns &gt;18% EA
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
<span className="material-symbols-outlined text-sm">account_balance</span>
                        LTV &lt;60%
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                        More Filters
                    </button>
</div>
</div>
</div>
{/*  Asset Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
{/*  Card 0: NEW ASSET Skyline Tower A  */}
<div className="group bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-visible glow-hover transition-all duration-300">
<div className="relative h-64 overflow-visible">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern Miami skyscraper reflecting the sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoeUD2x7aN9KG_LZP0gG95leB7tCf7-b7VuWRtglteGGGiBlvc5VgIKsF6BG_XGzTG-6Ike6fIp7aAmcewiWDfqVaHTu161oGZuVhyh_eKbpK7obwXoCw8ubZT4LHgKisdwLZyhx4j1QSmXZ424s-0AoI1Uu14LswOKlBt55msw92TOnSq8ppXXEuzNrt5YAMAmYShS2G64LXg9hpDhniC6TF1AmUUpI8x09zABr6AV1zFFR1t0xVBR7bqp4qShvQZYFJQooXpHikQ"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 bg-primary text-background-dark text-xs font-black rounded-full shadow-[0_0_15px_rgba(30,210,120,0.5)]">OPEN FOR SUBSCRIPTION</span>
<span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full">COMMERCIAL</span>
</div>
<div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2 rounded-lg border border-neutral-700 flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400 text-sm">link</span>
<span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Oracle Verified</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-1">
<h3 className="text-xl font-bold text-slate-100">Skyline Tower A</h3>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">bookmark</span>
</div>
<div className="text-[10px] text-slate-500 font-bold mb-3">Asset ID: 0.0.9283456</div>
<div className="flex items-center gap-1 text-slate-400 text-sm mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Miami, FL
                    </div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Target Return</p>
<p className="text-lg font-bold text-primary">18.5% E.A.</p>
</div>
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">LTV (Oracle)</p>
<p className="text-lg font-bold text-slate-100">65.0%</p>
</div>
</div>
<div className="mb-6">
<div className="flex justify-between text-xs font-bold mb-2">
<span className="text-slate-400 uppercase">Funding Progress</span>
<span className="text-primary">2.4% — 3.0M / 125M</span>
</div>
<div className="w-full h-2 bg-neutral-700 rounded-full overflow-visible">
<div className="h-full bg-primary" style={{ width: "2.4%" }}></div>
</div>
</div>
<button className="w-full py-3 bg-primary hover:brightness-110 text-background-dark font-bold rounded-xl transition-all">
                        Subscribe Now
                    </button>
</div>
</div>
{/*  Card 1  */}
<div className="group bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-visible glow-hover transition-all duration-300">
<div className="relative h-64 overflow-visible">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern glass skyscraper in business district" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16pSZHKPadCLV7zse9VtBxLSNhbCjrlqUgb3bhQQBnFJSCO4Brb2iQwFJwFb1-9ECYZUfNWzgOgFVAaUYPJd1v0cNI96qzsh1dtFDKZN2S4ZUNyywhbyKveDkhf58Yh8MAJfvK7sVBmivzO-Vyg-9Or23LtLpDbA_cF3COMzYr2ofqHlBeBp1_I_cSVqy9z6QpWhDv3ng22T1BzGDp4-k3BubYfr3U_7bVzN95nGJlrDU-smC2mJ588hD1DXGEyOuqXolskacDC25"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 bg-primary text-background-dark text-xs font-bold rounded-full">PRE-SALE</span>
<span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full">COMMERCIAL</span>
</div>
<div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2 rounded-lg border border-neutral-700 flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400 text-sm">link</span>
<span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Oracle Verified</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-slate-100">London Zenith Tower</h3>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">bookmark</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Canary Wharf, London
                    </div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Projected IRR</p>
<p className="text-lg font-bold text-primary">21.4%</p>
</div>
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">LTV (Chainlink)</p>
<p className="text-lg font-bold text-slate-100">54.2%</p>
</div>
</div>
<div className="mb-6">
<div className="flex justify-between text-xs font-bold mb-2">
<span className="text-slate-400 uppercase">Funding Progress</span>
<span className="text-primary">72% — 1.8M USDC</span>
</div>
<div className="w-full h-2 bg-neutral-700 rounded-full overflow-visible">
<div className="h-full bg-primary" style={{ width: "72%" }}></div>
</div>
</div>
<button className="w-full py-3 bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 text-white font-bold rounded-xl transition-colors">
                        View Investment Details
                    </button>
</div>
</div>
{/*  Card 2  */}
<div className="group bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-visible glow-hover transition-all duration-300">
<div className="relative h-64 overflow-visible">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-end luxury apartment complex exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdCRjowH_J_2zRyBxzKvXdJhgNHFqFNgEPaD_4MQHIFOTkcXwExzmXPdgb5khP20CByd10yVGapbaBt46DP8AVUyXeGp2n41Xphy_jTBrxn_ER9zDB06FXtkx9N1f5vQfwzM6w2eZxa5RK5mRYVmrenEnMzGLbc1dIaW3U7YPmPFdwkVQdpaa3OIxyWt47swqCMDEymhmaxMC9mvuvtVh9huxmzWxypnZEt6G9l9RICzCfbbroknWaiex3dojeuTwlC6MIyp3JJ2EX"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 bg-slate-500 text-white text-xs font-bold rounded-full">RENTING</span>
<span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full">RESIDENTIAL</span>
</div>
<div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2 rounded-lg border border-neutral-700 flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400 text-sm">link</span>
<span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Oracle Verified</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-slate-100">The Helix Residences</h3>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">bookmark</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Berlin, Germany
                    </div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Projected IRR</p>
<p className="text-lg font-bold text-primary">19.8%</p>
</div>
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">LTV (Chainlink)</p>
<p className="text-lg font-bold text-slate-100">48.5%</p>
</div>
</div>
<div className="mb-6">
<div className="flex justify-between text-xs font-bold mb-2">
<span className="text-slate-400 uppercase">Funding Progress</span>
<span className="text-primary">100% — Sold Out</span>
</div>
<div className="w-full h-2 bg-neutral-700 rounded-full overflow-visible">
<div className="h-full bg-primary" style={{ width: "100%" }}></div>
</div>
</div>
<button className="w-full py-3 bg-neutral-700/50 border border-neutral-600 text-slate-400 font-bold rounded-xl cursor-not-allowed">
                        Trading on Secondary Market
                    </button>
</div>
</div>
{/*  Card 3  */}
<div className="group bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-visible glow-hover transition-all duration-300">
<div className="relative h-64 overflow-visible">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Solar panel farm in open field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-sUKmiryn8mYzth5Vo4EfRnZTiM1FI1iSqEb_V3l8JgYn9lXYKx_YllFID86Pymrt0-czj-5xTfWiqwDyuDpqMMnKnYNdtupjOkYg2N6GRVb4v8Z1ik4GuUT4KQMxaLIauoLlcfK73FciETrrH8ABD2waejASkFVc2ViDb_PFg-XwsVZWshqWQqxFEoiDF56yIs0uh6SJPE84WioW-v7m4BlTWCZsqfS5wuTcEoNUAoyAyDKyYarZYu_HtB5JQ73H5TUUdgA_x4Uo"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 bg-primary text-background-dark text-xs font-bold rounded-full">PRE-SALE</span>
<span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full">INFRASTRUCTURE</span>
</div>
<div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2 rounded-lg border border-neutral-700 flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400 text-sm">link</span>
<span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Oracle Verified</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-slate-100">Andalusia Solar Park</h3>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary">bookmark</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Seville, Spain
                    </div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Projected IRR</p>
<p className="text-lg font-bold text-primary">24.1%</p>
</div>
<div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700">
<p className="text-[10px] text-slate-500 font-bold uppercase mb-1">LTV (Chainlink)</p>
<p className="text-lg font-bold text-slate-100">32.0%</p>
</div>
</div>
<div className="mb-6">
<div className="flex justify-between text-xs font-bold mb-2">
<span className="text-slate-400 uppercase">Funding Progress</span>
<span className="text-primary">35% — 850k USDC</span>
</div>
<div className="w-full h-2 bg-neutral-700 rounded-full overflow-visible">
<div className="h-full bg-primary" style={{ width: "35%" }}></div>
</div>
</div>
<button className="w-full py-3 bg-primary hover:brightness-110 text-background-dark font-bold rounded-xl transition-all">
                        Participate in Pre-sale
                    </button>
</div>
</div>
{/*  Additional Assets Row Placeholder  */}
<div className="group bg-neutral-800/40 border border-neutral-700 rounded-2xl overflow-visible glow-hover transition-all duration-300 opacity-90">
<div className="relative h-64 overflow-visible">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Futuristic architectural facade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB54MVAc3Ya47i1RnZJn8yoldoVUwT8DbPN9TAg2obxdrnM6F_myxU48uNBt6ueD2QYuTmpNJn9UPeqRpPIrLDSSIbWkNzkFra_YVuCLq6rhEZVFQs0xVcW6IYfQO2I2aGw54zXWVcOxDrNl07zfcoUAzijD0oTa8kP99jN_K5yVMsva1geW5hX_G0Uo3nQypBj9J7JquMGSpoi_jRzMBpHavBwj4QadLYW-7QYGC6u6_WjerK4f6qa8aK8OU6ZXLEvtdg6rLU4wFxT"/>
<div className="absolute inset-0 bg-background-dark/40 flex items-center justify-center">
<span className="px-4 py-2 bg-neutral-900 border border-neutral-700 text-white rounded-lg font-bold">Coming Soon</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-500">Neo-Tokyo Data Hub</h3>
<p className="text-slate-600 text-sm mt-2">Whitelist opening in Q4 2024</p>
</div>
</div>
</div>
    </div>
  );
}
