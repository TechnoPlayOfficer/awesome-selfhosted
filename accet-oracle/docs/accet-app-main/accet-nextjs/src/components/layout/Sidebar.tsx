"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserRole } from "@/hooks/useUserRole";

interface SidebarProps {
  onClose?: () => void;
}

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/owner/portfolio", roles: ['owner'] },
  { label: "Onboarding", icon: "app_registration", href: "/owner/onboarding", roles: ['owner'] },
  { label: "Simulador", icon: "calculate", href: "/owner/simulator", roles: ['owner', 'investor'] },
  { label: "Marketplace", icon: "storefront", href: "/investor/marketplace", roles: ['investor'] },
  { label: "Wallet", icon: "account_balance_wallet", href: "/investor/wallet", roles: ['investor'] },
  { label: "Consola Admin", icon: "terminal", href: "/admin/dashboard", roles: ['admin'] },
];

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { role, switchRole } = useUserRole();

  const filteredItems = navItems.filter(item => item.roles.includes(role));

  return (
    <aside className="w-64 h-full border-r border-white/5 bg-[#090E17]/80 backdrop-blur-xl flex flex-col p-4 gap-6 overflow-y-auto shadow-2xl z-50 relative">
      <div className="flex items-center justify-between lg:hidden mb-2">
        <p className="text-[10px] font-bold text-primary uppercase tracking-[3px] font-mono">Menú de Usuario</p>
        <button onClick={onClose} className="p-1 text-slate-500 hover:text-white">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[3px] mb-4 px-3 font-mono hidden lg:block">Navegación</p>
        <nav className="space-y-1">
          {filteredItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-slate-400 hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? "" : "group-hover:scale-110"} transition-transform`}>
                  {item.icon}
                </span>
                <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto space-y-4">
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[3px] mb-2 px-1 font-mono">Ambiente de Pruebas</p>
          <select 
            value={role} 
            onChange={(e) => switchRole(e.target.value as any)}
            className="w-full bg-background-dark text-xs border border-white/10 rounded-md p-1.5 focus:ring-primary text-slate-300 font-sans"
          >
            <option value="owner">Modo Propietario</option>
            <option value="investor">Modo Inversor</option>
            <option value="admin">Modo Admin</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
          <p className="text-xs font-bold text-slate-300 font-syne">Seguridad</p>
        </div>
        <p className="text-[10px] text-slate-500 font-sans">Sesión protegida mediante Clerk & SSL.</p>
      </div>
    </aside>
  );
}
