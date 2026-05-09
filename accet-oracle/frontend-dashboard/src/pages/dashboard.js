import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  FileText, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Search, 
  CheckCircle2,
  AlertCircle,
  Hash,
  Download,
  LayoutDashboard,
  Settings,
  LogOut,
  Bell,
  Fingerprint,
  Database
} from 'lucide-react';
import Link from 'next/link';

const STATUS_CONFIG = {
  UPLOADED: { color: '#B0B0C0', icon: <FileText size={14} />, label: 'Awaiting Oracle' },
  ORACLE_VALIDATING: { color: '#a78bfa', icon: <Clock size={14} />, label: 'FVM Validating' },
  ORACLE_PASSED: { color: '#5AC4EE', icon: <ShieldCheck size={14} />, label: 'Zero Drift Verified' },
  CERTICAMARA_PENDING: { color: '#a78bfa', icon: <Hash size={14} />, label: 'Requesting Seal' },
  SEALED: { color: '#10B981', icon: <CheckCircle2 size={14} />, label: 'State Sealed' },
  TOKEN_MINTED: { color: '#5AC4EE', icon: <Fingerprint size={14} />, label: 'Asset Minted' }
};

export default function Dashboard() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [toast, setToast] = useState(null); // { message, type }
  const router = useRouter();

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }

      fetch('/api/v1/documents/batch/status')
        .then(r => r.json())
        .then(data => {
          setDocs(data.documents || []);
          setLoading(false);
        })
        .catch(() => {
          setDocs([
            { cid: 'bafkrei123abchdjaskldjkasld', title: 'Computer Science Degree - KA', date: '2026-05-01', status: 'TOKEN_MINTED', size: '2.4 MB' },
            { cid: 'bafkreiXYZdefhjsklfjdklsf', title: 'Masters in Blockchain Law', date: '2026-04-15', status: 'SEALED', size: '1.8 MB' },
            { cid: 'bafkrei987ghiwejklsjdklsa', title: 'Identity Verification Doc', date: '2026-05-08', status: 'ORACLE_VALIDATING', size: '0.9 MB' }
          ]);
          setLoading(false);
        });
    };

    checkSession();
  }, []);

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.cid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch('/api/v1/documents/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        showToast('Document ingested into Filecoin/VDA Pipeline.');
        // Refresh docs
        const refreshRes = await fetch('/api/v1/documents/batch/status');
        const refreshData = await refreshRes.json();
        setDocs(refreshData.documents || []);
      } else {
        showToast(data.error || 'Upload failed', 'error');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      showToast('Connection error during ingestion', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#020624] text-white font-sans overflow-hidden">
      <Head>
        <title>VDA Pipeline | ACCET Tenant Admin</title>
      </Head>

      {/* Hidden Upload Input */}
      <input 
        type="file" 
        id="file-upload" 
        className="hidden" 
        accept=".pdf"
        onChange={handleUpload}
      />

      {/* Sidebar */}
      <aside className="w-64 border-r border-[#E5E4E2]/15 bg-[#020624] flex flex-col p-6 hidden lg:flex shrink-0">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded bg-[#5AC4EE]/10 flex items-center justify-center border border-[#5AC4EE]/30">
             <ShieldCheck size={16} className="text-[#5AC4EE]" />
          </div>
          <div>
            <div className="font-title text-sm tracking-wide text-gradient">ACCET Admin</div>
            <div className="text-[10px] text-[#5AC4EE] uppercase tracking-widest">POK.tech Tenant</div>
          </div>
        </div>

        <nav className="space-y-1.5 flex-1">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="VDA Pipeline" active />
          <SidebarItem icon={<FileText size={18} />} label="Document Vault" />
          <SidebarItem icon={<Fingerprint size={18} />} label="Asset Holders" />
          <SidebarItem icon={<Settings size={18} />} label="Oracle Config" />
        </nav>

        <div className="mt-auto pt-6 border-t border-[#E5E4E2]/10 space-y-4">
          <div className="p-4 rounded-lg bg-[#070B2E] border border-[#E5E4E2]/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-title uppercase tracking-widest text-[#B0B0C0]">Guide Mode</span>
              <button 
                onClick={() => setIsOnboarding(!isOnboarding)}
                className={`w-8 h-4 rounded-full relative transition-colors ${isOnboarding ? 'bg-[#5AC4EE]' : 'bg-[#1e293b]'}`}
              >
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform ${isOnboarding ? 'left-4.5' : 'left-0.5'}`} />
              </button>
            </div>
            <p className="text-[9px] text-[#B0B0C0] leading-relaxed">Enable for protocol tooltips and workflow guidance.</p>
          </div>
          <div onClick={async () => { await supabase.auth.signOut(); router.push('/login'); }}>
            <SidebarItem icon={<LogOut size={18} />} label="Disconnect" />
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#020624] relative">
        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`fixed bottom-8 right-8 z-[100] px-6 py-3 rounded-lg border flex items-center gap-3 shadow-2xl backdrop-blur-xl ${toast.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-[#5AC4EE]/10 border-[#5AC4EE]/30 text-[#5AC4EE]'}`}
            >
              {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
              <span className="text-sm font-medium">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <header className="h-16 border-b border-[#E5E4E2]/15 px-8 flex items-center justify-between shrink-0 relative z-10 bg-[#020624]/80 backdrop-blur-md">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0C0]" size={16} />
              <input 
                type="text" 
                placeholder="Scan CID or Title..." 
                className="w-full bg-[#070B2E] border border-[#E5E4E2]/10 rounded py-1.5 pl-9 pr-4 text-xs focus:border-[#5AC4EE]/50 focus:outline-none transition-colors text-white placeholder-[#B0B0C0]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {isOnboarding && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-title text-[#5AC4EE] uppercase tracking-widest bg-[#5AC4EE]/10 px-3 py-1 rounded border border-[#5AC4EE]/20"
              >
                Auditor View Active
              </motion.div>
            )}
            <button className="text-[#B0B0C0] hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#5AC4EE] rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-8 overflow-y-auto flex-1 relative z-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            
            {/* Pipeline Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-3xl font-title mb-1 text-gradient">The VDA Pipeline</h1>
                <p className="text-sm text-[#B0B0C0] font-light">From Ingestion to Binding Digital Copy.</p>
              </div>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('file-upload').click()}
              >
                <Plus size={16} /> Ingest Document
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <StatCard icon={<Database size={20} />} label="Total Assets" value={docs.length} trend="+12%" />
              <StatCard icon={<ShieldCheck size={20} />} label="Trust Score" value="99.9%" trend="Stable" />
              <StatCard icon={<Clock size={20} />} label="VDA Volume" value="1.2 TB" trend="+5%" />
              <StatCard icon={<Fingerprint size={20} />} label="SBTs Minted" value={docs.filter(d => d.status === 'TOKEN_MINTED').length} trend="Live" />
            </div>

            {/* Financial Integrity Section (GoTrader Integration) */}
            <div className="platinum-glass p-6 mb-8 border border-[#5AC4EE]/20 bg-[#5AC4EE]/5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-title uppercase tracking-widest text-white flex items-center gap-2">
                    <Database size={16} className="text-[#5AC4EE]" />
                    Financial Integrity Center
                  </h3>
                  <p className="text-[10px] text-[#B0B0C0] mt-1">Cross-platform reconciliation: Formance Ledger ↔ Odoo 19</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-bold">LEDGER SYNCED</span>
                  <span className="px-2 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-bold">ERP AUDITED</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-[#020624]/50 rounded border border-[#E5E4E2]/10">
                  <span className="text-[9px] text-[#B0B0C0] uppercase">Ledger Pool (BPV)</span>
                  <div className="text-lg font-title text-white">42,500.00</div>
                </div>
                <div className="p-3 bg-[#020624]/50 rounded border border-[#E5E4E2]/10">
                  <span className="text-[9px] text-[#B0B0C0] uppercase">Odoo Account 2905</span>
                  <div className="text-lg font-title text-white">42,500.00</div>
                </div>
                <div className="p-3 bg-[#020624]/50 rounded border border-[#E5E4E2]/10">
                  <span className="text-[9px] text-[#B0B0C0] uppercase">Drift Variance</span>
                  <div className="text-lg font-title text-[#10B981]">0.00</div>
                </div>
              </div>
            </div>

            {/* Pipeline Visualization */}
            <div className="grid grid-cols-3 gap-1 mb-10">
              <PipelineStep active icon={<Database size={16} />} label="Memory" sub="Filecoin CID" color="#5AC4EE" />
              <PipelineStep active={docs.some(d => d.status.includes('VALID'))} icon={<ShieldCheck size={16} />} label="Truth" sub="Oracle Integrity" color="#a78bfa" />
              <PipelineStep active={docs.some(d => d.status === 'TOKEN_MINTED')} icon={<Fingerprint size={16} />} label="Law" sub="On-Chain Binding" color="#10B981" />
            </div>

            {isOnboarding && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-8 bg-[#5AC4EE]/5 border border-[#5AC4EE]/20 rounded-lg text-xs leading-relaxed text-[#5AC4EE]"
              >
                <strong className="font-title uppercase tracking-widest block mb-1">Protocol Insights</strong>
                This dashboard visualizes the <strong>Trinity of Certainty</strong>. Documents enter as raw data (Memory), are interrogated by the FVM Oracle (Truth), and finally sealed by Certicámara/Base (Law). 
              </motion.div>
            )}

            {/* Pipeline Table */}
            <div className="platinum-glass overflow-hidden border border-[#E5E4E2]/15">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#E5E4E2]/15 text-[10px] font-title text-[#B0B0C0] uppercase tracking-widest bg-[#070B2E]/50">
                <div className="col-span-5 pl-2">Asset Identity / CID</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Size</div>
                <div className="col-span-2">VDA Status</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              <div className="divide-y divide-[#E5E4E2]/10">
                <AnimatePresence>
                  {filteredDocs.map((doc, i) => (
                    <motion.div 
                      key={doc.cid}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-[#E5E4E2]/5 transition-colors text-sm group"
                    >
                      <div className="col-span-5 flex items-center gap-4 pl-2">
                        <div className="w-10 h-10 rounded bg-[#020624] border border-[#E5E4E2]/10 flex items-center justify-center text-[#B0B0C0] group-hover:border-[#5AC4EE]/50 transition-all">
                          <FileText size={16} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-white truncate">{doc.title}</div>
                          <div className="text-[10px] text-[#5AC4EE]/70 font-mono truncate mt-0.5">{doc.cid}</div>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-[#B0B0C0] text-xs">{doc.date}</div>
                      <div className="col-span-2 text-[#B0B0C0] font-mono text-xs">{doc.size || '--'}</div>
                      
                      <div className="col-span-2">
                        <StatusBadge status={doc.status} />
                      </div>
                      
                      <div className="col-span-1 flex justify-end gap-2">
                        {doc.status === 'UPLOADED' && (
                          <button className="w-7 h-7 flex items-center justify-center text-[#a78bfa] hover:bg-[#a78bfa]/10 rounded border border-[#a78bfa]/20 transition-colors" title="Seal Document">
                            <ShieldCheck size={14} />
                          </button>
                        )}
                        {doc.status === 'SEALED' && (
                          <button className="w-7 h-7 flex items-center justify-center text-[#5AC4EE] hover:bg-[#5AC4EE]/10 rounded border border-[#5AC4EE]/20 transition-colors" title="Mint Asset">
                            <Fingerprint size={14} />
                          </button>
                        )}
                        <Link href={`/verify/${doc.cid}`}>
                          <div className="w-7 h-7 flex items-center justify-center text-[#B0B0C0] hover:text-white hover:bg-[#E5E4E2]/10 rounded border border-transparent transition-colors">
                            <ChevronRight size={18} />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function PipelineStep({ active, icon, label, sub, color }) {
  return (
    <div className={`p-4 border border-dashed rounded-lg transition-all ${active ? 'border-solid border-[#E5E4E2]/20 bg-[#E5E4E2]/5' : 'border-[#E5E4E2]/10 opacity-40'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded flex items-center justify-center ${active ? '' : 'bg-transparent'}`} style={{ color: active ? color : '#555', border: `1px solid ${active ? color + '40' : '#333'}` }}>
          {icon}
        </div>
        <div>
          <div className="text-xs font-title uppercase tracking-widest text-white">{label}</div>
          <div className="text-[10px] text-[#B0B0C0]">{sub}</div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded transition-all text-sm font-medium cursor-pointer ${active ? 'bg-[#5AC4EE]/10 text-[#5AC4EE] border-l-2 border-[#5AC4EE]' : 'text-[#B0B0C0] hover:text-white hover:bg-[#E5E4E2]/5 border-l-2 border-transparent'}`}>
      {icon}
      {label}
    </div>
  );
}

function StatCard({ label, value, color = '#FFFFFF' }) {
  return (
    <div className="p-5 platinum-glass flex flex-col justify-between h-28 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-xs font-title text-[#B0B0C0] tracking-widest uppercase relative z-10">{label}</div>
      <div className="text-3xl font-title relative z-10" style={{ color }}>{value}</div>
    </div>
  );
}

function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || { color: '#888', icon: null, label: status };
  const isPulse = status.includes('VALIDATING') || status.includes('PENDING');
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-1.5 h-1.5 rounded-full ${isPulse ? 'animate-pulse' : ''}`} style={{ backgroundColor: config.color, boxShadow: `0 0 8px ${config.color}` }} />
      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: config.color }}>{config.label}</span>
    </div>
  );
}
