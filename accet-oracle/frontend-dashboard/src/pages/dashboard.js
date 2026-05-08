import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  FileText, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Search, 
  Filter,
  CheckCircle2,
  AlertCircle,
  Hash,
  Download,
  LayoutDashboard,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import Link from 'next/link';

const STATUS_CONFIG = {
  UPLOADED: { color: '#94a3b8', icon: <FileText size={14} />, label: 'Uploaded' },
  ORACLE_VALIDATING: { color: '#f59e0b', icon: <Clock size={14} />, label: 'Validating' },
  ORACLE_PASSED: { color: '#a78bfa', icon: <ShieldCheck size={14} />, label: 'Validated' },
  CERTICAMARA_PENDING: { color: '#3b82f6', icon: <Hash size={14} />, label: 'Seal Pending' },
  SEALED: { color: '#5AC4EE', icon: <CheckCircle2 size={14} />, label: 'State Sealed' },
  TOKEN_MINTED: { color: '#10b981', icon: <ShieldCheck size={14} />, label: 'Minted' }
};

export default function Dashboard() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Attempt to fetch from our real API
    fetch('/api/v1/documents/batch/status')
      .then(r => r.json())
      .then(data => {
        setDocs(data.documents || []);
        setLoading(false);
      })
      .catch(() => {
        // Fallback to mock data if API is down
        setTimeout(() => {
          setDocs([
            { cid: 'bafkrei123abc', title: 'Computer Science Degree - Kennedy A.', date: '2026-05-01', status: 'TOKEN_MINTED', tenant: 'POK Univ' },
            { cid: 'bafkreiXYZdef', title: 'Masters in Blockchain Law', date: '2026-04-15', status: 'SEALED', tenant: 'POK Univ' },
            { cid: 'bafkrei987ghi', title: 'Identity Verification Doc', date: '2026-05-08', status: 'ORACLE_VALIDATING', tenant: 'ACCET Protocol' }
          ]);
          setLoading(false);
        }, 1000);
      });
  }, []);

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.cid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#020624] text-white">
      <Head>
        <title>Dashboard | ACCET Oracle</title>
      </Head>

      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6 hidden lg:flex">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#5AC4EE] rounded flex items-center justify-center">
            <ShieldCheck size={20} color="#020624" />
          </div>
          <span className="font-bold text-lg">ACCET</span>
        </div>

        <nav className="space-y-2 flex-1">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Overview" active />
          <SidebarItem icon={<FileText size={18} />} label="Documents" />
          <SidebarItem icon={<ShieldCheck size={18} />} label="Identity" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <SidebarItem icon={<LogOut size={18} />} label="Log Out" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                type="text" 
                placeholder="Search credentials..." 
                className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-[#5AC4EE]/30 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative opacity-60 hover:opacity-100 transition-opacity">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#5AC4EE] rounded-full glow" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">Kennedy Arellano</div>
                <div className="text-[10px] opacity-40 uppercase tracking-widest">Admin Tenant</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5AC4EE] to-[#a78bfa] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#020624] flex items-center justify-center text-xs font-bold">KA</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold">Credentials Dashboard</h2>
              <p className="text-sm opacity-50 mt-1">Manage and track your legally-tokenized documents.</p>
            </div>
            <button className="btn-primary">
              <Plus size={18} /> Issue New Batch
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard label="Total Issued" value={docs.length} change="+12%" color="#5AC4EE" />
            <StatCard label="Validating" value={docs.filter(d => d.status.includes('VALIDATING')).length} change="Live" color="#f59e0b" />
            <StatCard label="State Sealed" value={docs.filter(d => d.status === 'TOKEN_MINTED' || d.status === 'SEALED').length} change="99.9% Integrity" color="#10b981" />
          </div>

          {/* Table */}
          <div className="glass overflow-hidden">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="text-xs font-bold uppercase tracking-widest opacity-40">Document Name</div>
              <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-40">
                <div className="w-32">Status</div>
                <div className="w-24 text-right">Actions</div>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              <AnimatePresence>
                {filteredDocs.map((doc, i) => (
                  <motion.div 
                    key={doc.cid}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#5AC4EE]">
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{doc.title}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] opacity-30 font-mono">{doc.cid.substring(0, 16)}...</span>
                          <span className="w-1 h-1 rounded-full bg-white/10" />
                          <span className="text-[10px] opacity-30">{doc.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                      <div className="w-32">
                        <StatusBadge status={doc.status} />
                      </div>
                      <div className="w-24 flex justify-end gap-2">
                        <button className="p-2 hover:bg-white/5 rounded-lg opacity-40 hover:opacity-100 transition-all">
                          <Download size={16} />
                        </button>
                        <Link href={`/verify/${doc.cid}`} className="p-2 hover:bg-[#5AC4EE]/10 rounded-lg text-[#5AC4EE] opacity-60 hover:opacity-100 transition-all">
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredDocs.length === 0 && !loading && (
                <div className="p-12 text-center opacity-30">
                  <AlertCircle size={40} className="mx-auto mb-4" />
                  <p>No documents found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        ::-webkit-scrollbar { width: 4px; }
      `}</style>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-[#5AC4EE]/10 text-[#5AC4EE] font-medium' : 'opacity-50 hover:opacity-100 hover:bg-white/5'}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({ label, value, change, color }) {
  return (
    <div className="glass p-6">
      <div className="text-xs uppercase tracking-widest opacity-40 mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold" style={{ color }}>{value}</div>
        <div className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-secondary">{change}</div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || { color: '#fff', icon: null, label: status };
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${status === 'ORACLE_VALIDATING' ? 'animate-pulse' : ''}`} style={{ backgroundColor: config.color, boxShadow: `0 0 8px ${config.color}66` }} />
      <span className="text-[10px] font-bold uppercase tracking-tight" style={{ color: config.color }}>{config.label}</span>
    </div>
  );
}
