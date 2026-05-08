import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, PenTool, Zap, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>ACCET Oracle | The Legal Oracle of Tokenization</title>
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5AC4EE] rounded-lg flex items-center justify-center glow">
              <Shield size={20} color="#020624" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-glow">ACCET <span className="font-light opacity-80">Oracle</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="opacity-70 hover:opacity-100 transition-opacity">Features</Link>
            <Link href="#workflow" className="opacity-70 hover:opacity-100 transition-opacity">Workflow</Link>
            <Link href="/dashboard" className="btn-primary">
              Launch App <ArrowRight size={16} />
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#5AC4EE] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#5AC4EE]/20 text-[#5AC4EE] text-xs font-bold tracking-widest mb-8 uppercase">
              <Zap size={14} className="animate-pulse" /> Pre-Seed Phase • POK.tech Pilot
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[0.95] tracking-tighter">
              The World's First <br />
              <span className="bg-gradient-to-br from-[#5AC4EE] to-[#a78bfa] bg-clip-text text-transparent">
                Computational Notary
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-secondary mb-12 leading-relaxed">
              Transforming institutional documents into legally-binding digital assets. 
              Immutable storage, state-certified signatures, and global compliance on-chain.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
                Enter Dashboard <ArrowRight size={20} />
              </Link>
              <Link href="/verify/demo" className="btn-secondary text-lg px-8 py-4">
                Verify Credential
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 glass border-[#5AC4EE]/10"
          >
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-[#5AC4EE] mb-1">1,200+</div>
              <div className="text-xs uppercase tracking-widest opacity-50">Universities (POK)</div>
            </div>
            <div className="text-center px-4 border-l border-white/5">
              <div className="text-3xl font-bold text-[#5AC4EE] mb-1">$16T</div>
              <div className="text-xs uppercase tracking-widest opacity-50">RWA Market Entry</div>
            </div>
            <div className="text-center px-4 border-l border-white/5">
              <div className="text-3xl font-bold text-[#5AC4EE] mb-1">0 Gas</div>
              <div className="text-xs uppercase tracking-widest opacity-50">Verifier Cost</div>
            </div>
            <div className="text-center px-4 border-l border-white/5">
              <div className="text-3xl font-bold text-[#5AC4EE] mb-1">MLETR</div>
              <div className="text-xs uppercase tracking-widest opacity-50">Compliant Bridge</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-32 bg-[#020624]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Ultimate Architecture</h2>
            <p className="text-secondary">A four-pillar system for perpetual legal truth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Database className="text-[#5AC4EE]" />}
              title="Permanent Memory"
              description="Filecoin & Lighthouse ensure your documents exist in perpetuity with immutable CIDs."
            />
            <FeatureCard 
              icon={<Zap className="text-[#a78bfa]" />}
              title="Oracle Logic"
              description="FVM interrogation engine detects data drift and validates integrity automatically."
            />
            <FeatureCard 
              icon={<PenTool className="text-[#34d399]" />}
              title="State Seal"
              description="Direct integration with Certicámara injects state-level legal validity into tokens."
            />
            <FeatureCard 
              icon={<Shield className="text-[#f59e0b]" />}
              title="Global Compliance"
              description="ERC-3643 and EIP-5192 standards ensure cross-border regulatory compliance."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#5AC4EE]/20 rounded flex items-center justify-center">
              <Shield size={14} color="#5AC4EE" />
            </div>
            <span className="font-bold">ACCET Oracle</span>
          </div>
          <p className="text-sm opacity-40">© 2026 ACCET Protocol. All rights reserved. Built for POK.tech Pilot.</p>
        </div>
      </footer>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass p-8 glass-hover transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
