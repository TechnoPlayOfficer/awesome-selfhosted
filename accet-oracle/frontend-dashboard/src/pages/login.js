import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';
import { ShieldCheck, Mail, Lock, ArrowRight, Fingerprint } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#020624] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <Head>
        <title>Identity Gateway | ACCET Legal Oracle</title>
      </Head>

      {/* Atmospheric Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-[#5AC4EE]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[#a78bfa]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5AC4EE]/10 border border-[#5AC4EE]/30 mb-6 shadow-[0_0_30px_rgba(90,196,238,0.2)]">
            <ShieldCheck size={32} className="text-[#5AC4EE]" />
          </div>
          <h1 className="text-4xl font-title text-gradient mb-2">Identity Gateway</h1>
          <p className="text-[#B0B0C0] text-sm font-light tracking-wide uppercase">Oracle Authorization Protocol</p>
        </div>

        <form onSubmit={handleLogin} className="platinum-glass p-8 border border-[#E5E4E2]/15 space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-title uppercase tracking-widest text-[#B0B0C0] ml-1">Institute Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0C0]" size={16} />
              <input 
                type="email" 
                required
                className="w-full bg-[#070B2E] border border-[#E5E4E2]/10 rounded py-2.5 pl-10 pr-4 text-sm focus:border-[#5AC4EE]/50 focus:outline-none transition-colors"
                placeholder="admin@pok.tech"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-title uppercase tracking-widest text-[#B0B0C0] ml-1">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0C0]" size={16} />
              <input 
                type="password" 
                required
                className="w-full bg-[#070B2E] border border-[#E5E4E2]/10 rounded py-2.5 pl-10 pr-4 text-sm focus:border-[#5AC4EE]/50 focus:outline-none transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(90,196,238,0.3)] hover:shadow-[0_0_30px_rgba(90,196,238,0.5)] transition-all"
          >
            {loading ? 'Authenticating...' : 'Enter Pipeline'}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-between pt-4 border-t border-[#E5E4E2]/10">
            <span className="text-[10px] text-[#B0B0C0] uppercase tracking-widest">Biometric Backup</span>
            <button type="button" className="text-[#5AC4EE] hover:text-white transition-colors">
              <Fingerprint size={20} />
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-[10px] text-[#B0B0C0] uppercase tracking-[0.2em] font-light">
          Protected by ACCET Legal Oracle v0.2
        </p>
      </motion.div>
    </div>
  );
}
