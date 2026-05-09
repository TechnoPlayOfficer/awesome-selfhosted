"use client";
import Link from "next/link";
import SuccessState from "@/components/ux/SuccessState";

export default function Page() {
  return (
    <SuccessState title="Investment Successful!" subtitle="Your transaction has been processed on the Hedera network.">
      <div className="p-6">
        {/*  Success Animation/Icon Area  */}
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-accent-teal/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-accent-teal/10 border-2 border-accent-teal text-accent-teal success-glow">
              <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl md:text-4xl font-bold leading-tight px-4 mb-2">Investment Successful!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Your transaction has been processed on the Hedera network.</p>
        </div>

        {/*  Glassmorphism Success Card  */}
        <div className="p-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-stretch justify-start rounded-xl glass-card overflow-visible shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-center bg-no-repeat aspect-video md:aspect-square bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLtIZyVVr7xv76peznhQ5tpllx_3XlL1RbfRQ8FbKmxtgIcHyzOPCbwt5ZlNeul-gUnbv1B1nvA4VXUFaqKtKyB5pyzMIRuZyohxQjPjW5lJggvWD4G3FgzeOBQ4tVas3EEHBkomuvXCQIZGQtIqh-ETwQMmdaYoxIBiSCAImSj-vrL6JPowxHeAIsMgnarC3g-YlRa8gmHGawu7Bi0GhkbzZMG2R_YEDa77duXPIxEpWw4ykzAy4XVAfwJ-i82VDuTzcK-7Z5HtTT')" }}></div>
              <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-accent-cyan text-sm">location_on</span>
                  <p className="text-accent-cyan text-xs font-bold uppercase tracking-widest">Verified Asset</p>
                </div>
                <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Skyline Tower A</p>
                <div className="flex items-end gap-3 justify-between mt-2">
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">You are now an officially registered on-chain stakeholder.</p>
                </div>
              </div>
            </div>
            {/*  Transaction Details  */}
            <div className="p-6 border-t border-primary/10 bg-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Transaction Hash (Hedera)</p>
                  <p className="text-accent-cyan text-sm font-mono truncate max-w-[120px]">0x7f...3a2b</p>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Token ID</p>
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-mono">0.0.9283456</p>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Amount Invested</p>
                  <p className="text-primary text-lg font-bold">$1,005.00 USD</p>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/5">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Est. Monthly Dividend</p>
                  <p className="text-accent-teal text-lg font-bold">$15.42</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Actions  */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="flex flex-1 gap-4 max-w-[540px] flex-col sm:flex-row items-stretch px-4 py-3">
            <Link href="/investor/wallet" className="flex-1 flex min-w-[160px] cursor-pointer items-center justify-center overflow-visible rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined mr-2">account_balance_wallet</span>
              <span className="truncate">View Portfolio</span>
            </Link>
            <Link href="/investor/marketplace" className="flex-1 flex min-w-[160px] cursor-pointer items-center justify-center overflow-visible rounded-xl h-14 px-5 bg-slate-200 dark:bg-primary/10 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-primary/20 text-base font-bold leading-normal tracking-wide hover:bg-slate-300 dark:hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined mr-2">storefront</span>
              <span className="truncate">Back to Marketplace</span>
            </Link>
          </div>
        </div>
      </div>
    </SuccessState>
  );
}
