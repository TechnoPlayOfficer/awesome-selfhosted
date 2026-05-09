import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Stamp, Code2, ArrowRight, Menu, X, ArrowUpRight, Link2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020624] text-white font-sans netflix-gradient selection:bg-[#5AC4EE]/30">
      <Head>
        <title>ACCET Oracle | The Gateway of Light</title>
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'platinum-glass border-[#E5E4E2]/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-[#5AC4EE]/10 flex items-center justify-center border border-[#5AC4EE]/30 group-hover:border-[#5AC4EE] transition-colors">
              <Shield size={16} className="text-[#5AC4EE]" />
            </div>
            <span className="font-title text-lg tracking-wide text-gradient">ACCET Oracle</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B0B0C0]">
            <Link href="#architecture" className="hover:text-white transition-colors">The Trinity</Link>
            <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
            <Link href="/verify/demo" className="hover:text-white transition-colors">Public Portal</Link>
            <Link href="/login" className="btn-primary flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(90,196,238,0.4)]">
              Enter The Gateway <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button className="md:hidden text-[#B0B0C0]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero: The Gateway of Light */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-40 flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full platinum-glass border-[#5AC4EE]/30 text-[#5AC4EE] text-xs font-title tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#5AC4EE] animate-pulse" />
            Active Pilot: POK.tech Network
          </div>
          
          <h1 className="text-5xl md:text-7xl font-title mb-6 leading-[1.1]">
            The Legal Connectivity Layer. <br/>
            <span className="accent-gradient">Binding Digital Copies.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-[#B0B0C0] mb-12 leading-relaxed font-light">
            We connect the documentary world (Filecoin), the judicial truth (Certicámara), and institutional finance (Base L2). Seamless Verifiability of Assets (VDA) at the speed of light.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/dashboard" className="btn-primary text-base px-8 py-4">
              Enter The VDA Pipeline
            </Link>
            <Link href="/verify/demo" className="px-8 py-4 platinum-glass text-white font-title font-medium text-sm hover:border-[#5AC4EE]/50 transition-colors flex items-center gap-2">
              Scan QR / Verify <Link2 size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* The Trinity of Certainty */}
      <section id="architecture" className="py-24 bg-[#070B2E]/50 border-y border-[#E5E4E2]/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-title mb-4 text-gradient">The Trinity of Certainty</h2>
            <p className="text-[#B0B0C0] max-w-2xl mx-auto">Three immutable pillars that guarantee a zero-drift transition from a physical certificate to a sovereign digital asset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TrinityCard 
              num="01"
              icon={<Database size={24} className="text-[#5AC4EE]" />}
              title="Memory"
              desc="Filecoin pinning ensures cryptographic immutability, creating a perpetual Content Identifier (CID) for the raw PDF."
            />
            <TrinityCard 
              num="02"
              icon={<Code2 size={24} className="text-[#a78bfa]" />}
              title="Truth"
              desc="The Oracle FVM Smart Contract constantly interrogates the CID, enforcing zero data drift before legal sealing."
            />
            <TrinityCard 
              num="03"
              icon={<Stamp size={24} className="text-[#10B981]" />}
              title="Law"
              desc="Certicámara bridge injects a state-certified electronic signature, binding the digital twin to physical jurisdiction."
            />
          </div>
        </div>
      </section>

      {/* Interactive Roadmap */}
      <section id="roadmap" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
           <h2 className="text-3xl font-title mb-16 text-center text-gradient">Institutional Roadmap</h2>
           
           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#5AC4EE] before:via-[#a78bfa] before:to-transparent">
             <RoadmapItem phase="Pre-Seed (Active)" title="Academic Notary MVP" active>
               Deploying the VDA pipeline for POK.tech. 1,200 universities tokenizing diplomas via Filecoin and Base L2 EIP-5192.
             </RoadmapItem>
             <RoadmapItem phase="Seed (Q3 2026)" title="Financial Brokerage Integration">
               Expanding to Casas de Bolsa. Enforcing ERC-3643 compliance for real-world debt and asset tokenization.
             </RoadmapItem>
             <RoadmapItem phase="Series A (2027)" title="Global P2P Marketplace">
               Connecting the notarized assets to institutional liquidity layers on Avalanche Subnets with atomic settlement.
             </RoadmapItem>
           </div>
        </div>
      </section>

      <footer className="py-8 border-t border-[#E5E4E2]/10 text-center">
        <p className="text-xs text-[#B0B0C0] font-title tracking-widest uppercase">© 2026 ACCET Protocol. The Digital Notary Infrastructure.</p>
      </footer>
    </div>
  );
}

function TrinityCard({ num, icon, title, desc }) {
  return (
    <div className="p-8 platinum-glass platinum-glass-hover text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 text-[100px] font-title font-bold text-white/5 leading-none group-hover:text-[#5AC4EE]/10 transition-colors">{num}</div>
      <div className="w-16 h-16 rounded-full bg-[#020624] border border-[#5AC4EE]/30 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_15px_rgba(90,196,238,0.2)]">
        {icon}
      </div>
      <h3 className="text-xl font-title text-white mb-3 relative z-10">{title}</h3>
      <p className="text-[#B0B0C0] leading-relaxed text-sm relative z-10">{desc}</p>
    </div>
  );
}

function RoadmapItem({ phase, title, children, active = false }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#020624] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_2px_rgba(90,196,238,0.3)] ${active ? 'bg-[#5AC4EE] animate-pulse' : 'bg-[#a78bfa]'}`}>
        <div className="w-3 h-3 bg-[#020624] rounded-full" />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 platinum-glass">
        <div className="text-xs font-title text-[#5AC4EE] uppercase tracking-widest mb-1">{phase}</div>
        <h4 className="text-lg font-title text-white mb-2">{title}</h4>
        <p className="text-sm text-[#B0B0C0]">{children}</p>
      </div>
    </div>
  );
}
