"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md px-4 lg:px-6 py-3 sticky top-0 z-50 h-16">
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Mobile Hamburger */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-400 hover:text-white"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="ACCET" 
            width={32} 
            height={32} 
            className="rounded-lg bg-primary/20 p-1"
          />
          <h2 className="text-slate-100 text-lg font-syne font-extrabold tracking-tight hidden sm:block">
            ACCET
          </h2>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
          <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-64 text-slate-100 font-sans" 
            placeholder="Buscar activos o transacciones..." 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
          <div className="size-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">Hedera RWA</span>
        </div>
        
        {user ? (
          <button 
            onClick={handleLogout}
            className="size-8 rounded-full border border-primary/50 overflow-hidden flex items-center justify-center bg-primary/20 hover:bg-primary/30 transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-primary">logout</span>
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-primary text-background-dark px-4 py-1.5 rounded-lg text-sm font-bold glow-primary font-syne">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
