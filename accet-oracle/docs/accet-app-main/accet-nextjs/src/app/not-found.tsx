"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-dark text-white p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
        <h1 className="relative text-9xl font-black text-primary animate-pulse">404</h1>
      </div>
      <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-slate-400 max-w-md mb-10 leading-relaxed">
        Lo sentimos, la sección que buscas no existe o ha sido movida a otro bloque de la red.
      </p>
      <Link 
        href="/" 
        className="px-8 py-4 bg-primary text-background-dark rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
