"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-surface-dark/50 border border-primary/10 rounded-3xl m-6">
      <div className="size-20 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-500 mb-6">
        <span className="material-symbols-outlined text-4xl">error</span>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Algo salió mal</h2>
      <p className="text-slate-400 mb-8 max-w-sm">
        Ocurrió un error inesperado al procesar la información del dashboard.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-background-dark rounded-xl font-bold hover:brightness-110 transition-all"
        >
          Reintentar
        </button>
        <Link 
          href="/" 
          className="px-6 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
