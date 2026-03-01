'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, 
  Search, 
  Eye, 
  Terminal, 
  Activity, 
  Users, 
  MapPin, 
  Biohazard, 
  Lock, 
  Unlock,
  AlertTriangle,
  Database,
  Camera,
  Layers,
  ChevronRight
} from 'lucide-react';

// --- Shared Components ---

const Card = ({ children, title, icon: Icon, themeColor = "blue", className = "" }) => (
  <div className={`bg-gray-900/80 border border-${themeColor}-500/30 rounded-lg overflow-hidden backdrop-blur-md shadow-lg shadow-${themeColor}-500/5 ${className}`}>
    {title && (
      <div className={`border-b border-${themeColor}-500/30 bg-${themeColor}-500/10 px-4 py-2 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className={`text-${themeColor}-400`} />}
          <h3 className={`text-sm font-bold uppercase tracking-wider text-${themeColor}-100`}>{title}</h3>
        </div>
        <div className={`h-2 w-2 rounded-full bg-${themeColor}-500 animate-pulse`} />
      </div>
    )}
    <div className="p-4">
      {children}
    </div>
  </div>
);

const Stat = ({ label, value, trend, themeColor = "blue" }) => (
  <div className="flex flex-col">
    <span className="text-xs text-gray-400 uppercase tracking-tighter">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-black text-${themeColor}-400`}>{value}</span>
      {trend && <span className="text-[10px] text-green-400 font-mono">{trend}</span>}
    </div>
  </div>
);

// --- Branch 1: Journalist (The Investigator) ---
const JournalistView = () => {
  const municipalities = [
    { name: "Sector A-1", risk: "Critical", count: 1240 },
    { name: "Haven Creek", risk: "Moderate", count: 450 },
    { name: "Old Port", risk: "High", count: 890 },
    { name: "The Spire", risk: "Stable", count: 12 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Total Infected" value="2,592" trend="+12% today" themeColor="amber" />
        <Stat label="Unverified Reports" value="142" themeColor="amber" />
        <Stat label="Active Leads" value="18" themeColor="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Zero Network Visualization */}
        <Card title="Patient Zero Contact Trace" icon={Users} themeColor="amber">
          <div className="relative h-64 bg-black/40 rounded border border-amber-900/20 overflow-hidden flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 400 240">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Connection Lines */}
              <line x1="200" y1="120" x2="100" y2="60" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="200" y1="120" x2="300" y2="60" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="200" y1="120" x2="200" y2="200" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              
              {/* Nodes */}
              <circle cx="200" cy="120" r="12" fill="#f59e0b" filter="url(#glow)" className="animate-pulse" />
              <text x="200" y="145" textAnchor="middle" fill="#fef3c7" fontSize="10" className="font-mono">PATIENT ZERO</text>
              
              <circle cx="100" cy="60" r="8" fill="#d97706" />
              <circle cx="300" cy="60" r="8" fill="#d97706" />
              <circle cx="200" cy="200" r="8" fill="#d97706" />
            </svg>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-500/50">RELATIONAL_MAP_V2.0</div>
          </div>
        </Card>

        {/* Originating Municipalities */}
        <Card title="Municipality Risk Map" icon={MapPin} themeColor="amber">
          <div className="space-y-3">
            {municipalities.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-amber-500/5 border border-amber-500/10">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-amber-100">{m.name}</span>
                  <span className={`text-[10px] uppercase ${m.risk === 'Critical' ? 'text-red-400' : 'text-amber-400'}`}>{m.risk}</span>
                </div>
                <div className="text-right font-mono text-amber-400">
                  {m.count.toLocaleString()} <span className="text-[10px] text-amber-600 italic">cases</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Branch 2: Whistleblower (The Shadow) ---
const WhistleblowerView = () => {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const cipherText = "Dagcpi, iggknm awgvavsde wc Talev znc. Avlpjv-302 Gezrhdwevs eyckoxnsegb qbnptybzgtd jux bc votgbc esvlogxvqr. Vneyckfdlrew uigbtkyc ecl oatlqrr madygrhdre, phbsauicv iyftaz ifuwafnv. Zgfqtej th aspvrg kcu gpnotbhs nml toavjpnz igncenavsde, scsarbvu ap ttkrv cu oar hxsebtkycj ftmgiga. Opu sysukzn, pxihzwgjzg mdehpitmxvh nod kxuffbazihv ghqptohjwdn. Jeitcl oeeohjogy xelwiedeu dd dwiimamm tnmlqei. Iseoxt izctseuc per uuxtamf qfvgvdgatnzs buareicdtcm. Txkrvqgr fxvbtds raatbwb, nod tobvaqex tam ggbkgc. Iiiht to hvs. Ijggxtis.";
  const plainText = "Caesar, urgent situation in Tulln lab. Atbash-302 Retrovirus containment compromised due to intern negligence. Uncontrolled mutation now outside laboratory, potential threat imminent. Proceed to secure and sanitize all relevant information, ensuring no trace of our operations remains. Act swiftly, prioritize containment and information suppression. Deploy necessary resources to mitigate fallout. Report progress and further developments immediately. Exercise extreme caution, and remember the stakes. Trust no one. Vigenere.";
  
  const [displayMsg, setDisplayMsg] = useState(cipherText);

  const startDecryption = () => {
    setIsDecrypting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsDecrypting(false);
          setDisplayMsg(plainText);
          return 100;
        }
        return p + 1;
      });
    }, 40);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Card title="Decryption Module" icon={Lock} themeColor="red">
          <div className="flex flex-col h-full gap-6">
            <div className="p-6 bg-red-900/10 border border-red-500/20 rounded min-h-[200px] flex flex-col items-center justify-center relative">
              <div className="absolute top-2 left-2 text-[10px] font-mono text-red-500/50">VIGENERE_BUFFER: "Backpropagation"</div>
              <p className={`font-mono text-sm leading-relaxed ${isDecrypting ? 'animate-pulse opacity-50' : ''} text-red-200`}>
                {displayMsg}
              </p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto w-full">
              <div className="flex justify-between text-[10px] font-mono text-red-500">
                <span>KEY_IDENTIFIED: BACKPROPAGATION</span>
                <span>{progress}% DECRYPTED</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-600 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.5)]" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button 
                onClick={startDecryption}
                disabled={isDecrypting}
                className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-800 text-white text-sm font-bold uppercase tracking-widest rounded transition-all transform active:scale-95"
              >
                {isDecrypting ? "DECODING_LAYER..." : "DECRYPT VIGENERE"}
              </button>
            </div>
          </div>
        </Card>

        <Card title="Intercepted Data Stream" icon={Terminal} themeColor="red">
          <div className="bg-black p-4 rounded font-mono text-xs overflow-hidden h-32 relative">
             <div className="text-red-500/80 mb-2">{`>> [INCOMING SECURE TRANSMISSION]`}</div>
             <div className="text-gray-500 space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="whitespace-nowrap overflow-hidden">
                    {Math.random().toString(36).substring(2, 15)} {Math.random().toString(36).substring(2, 15)}
                  </div>
                ))}
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Branch 3: Gov Officials (The Authority) ---
const GovView = () => {
  return (
    <div className="space-y-6 animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat label="Total Population" value="8.4M" themeColor="cyan" />
        <Stat label="Quarantine Zones" value="12" themeColor="cyan" />
        <Stat label="Deployment Alpha" value="78%" themeColor="cyan" />
        <Stat label="Alert Level" value="BRAVO" themeColor="cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Computer Vision / People Counting */}
        <Card title="Live Surveillance Analytics" icon={Camera} themeColor="cyan" className="lg:col-span-2">
          <div className="relative aspect-video bg-gray-800 rounded overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent" />
            
            {/* Mock Surveillance Grid */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20 pointer-events-none">
              {[...Array(12)].map((_, i) => <div key={i} className="border border-cyan-400/30" />)}
            </div>

            {/* Mock Bounding Boxes */}
            <div className="absolute top-1/4 left-1/3 w-12 h-20 border-2 border-green-500 rounded flex flex-col justify-end p-1">
              <span className="text-[8px] bg-green-500 text-black px-1 font-bold">HUMAN_99%</span>
            </div>
            <div className="absolute top-1/2 left-1/2 w-14 h-24 border-2 border-red-500 rounded flex flex-col justify-end p-1">
              <span className="text-[8px] bg-red-500 text-black px-1 font-bold">INFECTED_87%</span>
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-16 border-2 border-green-500 rounded flex flex-col justify-end p-1">
              <span className="text-[8px] bg-green-500 text-black px-1 font-bold">HUMAN_94%</span>
            </div>

            {/* HUD Overlay */}
            <div className="absolute top-4 left-4 flex gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest">REC ● CAM_042</span>
                <span className="text-[10px] text-gray-400 font-mono">LOCATION: SECTOR_7_GATE</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full border border-cyan-500/30">
               <span className="text-[10px] font-mono text-cyan-400">PEOPLE_COUNT: 003</span>
            </div>
          </div>
        </Card>

        <Card title="Strategy Protocol" icon={Layers} themeColor="cyan">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-cyan-500/5 rounded border border-cyan-500/20">
               <div className="h-2 w-2 rounded-full bg-cyan-500 mt-1" />
               <div>
                  <h4 className="text-xs font-bold text-cyan-100">CONTAINMENT</h4>
                  <p className="text-[10px] text-cyan-400/70 leading-relaxed mt-1">Activate barricades at sectors 1, 4, and 9. Deploy neutralization squad at dawn.</p>
               </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-cyan-500/5 rounded border border-cyan-500/20">
               <div className="h-2 w-2 rounded-full bg-gray-500 mt-1" />
               <div>
                  <h4 className="text-xs font-bold text-gray-400">VACCINE TRANSPORT</h4>
                  <p className="text-[10px] text-gray-500/70 leading-relaxed mt-1">Pending logistical clearance from high command. Escort required.</p>
               </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Medical/Cure Lab (Modular Utility) ---
const CureLab = ({ themeColor }) => {
  const samples = [
    { id: "S-101", purity: "88%", state: "Stable", type: "Viral" },
    { id: "S-205", purity: "42%", state: "Mutating", type: "Bacterial" },
    { id: "S-402", purity: "99%", state: "Cure Candidate", type: "Synthetic" },
  ];

  return (
    <Card title="Cure Sample Analysis" icon={Biohazard} themeColor={themeColor}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className={`text-${themeColor}-500 border-b border-${themeColor}-500/20`}>
              <th className="pb-2">SAMPLE_ID</th>
              <th className="pb-2">PURITY</th>
              <th className="pb-2">STATE</th>
              <th className="pb-2 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {samples.map((s, i) => (
              <tr key={i} className="border-b border-gray-800/50">
                <td className="py-3 font-bold">{s.id}</td>
                <td className="py-3 text-cyan-400">{s.purity}</td>
                <td className={`py-3 ${s.state === 'Mutating' ? 'text-red-400' : 'text-green-400'}`}>{s.state}</td>
                <td className="py-3 text-right">
                  <button className={`text-[10px] px-2 py-1 rounded bg-${themeColor}-500/10 border border-${themeColor}-500/30 hover:bg-${themeColor}-500/20 transition-all`}>
                    ANALYZE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeBranch, setActiveBranch] = useState('journalist');
  
  // Dynamic theme mapping
  const themes = {
    journalist: {
      color: 'amber',
      label: 'The Investigator',
      icon: Search,
      accent: 'text-amber-400',
      bg: 'bg-amber-950/10'
    },
    whistleblower: {
      color: 'red',
      label: 'The Shadow',
      icon: Eye,
      accent: 'text-red-400',
      bg: 'bg-red-950/10'
    },
    gov: {
      color: 'cyan',
      label: 'The Authority',
      icon: Shield,
      accent: 'text-cyan-400',
      bg: 'bg-cyan-950/10'
    }
  };

  const currentTheme = themes[activeBranch];

  return (
    <div className={`min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-${currentTheme.color}-500/30`}>
      {/* Background Overlay */}
      <div className={`fixed inset-0 pointer-events-none opacity-30 ${currentTheme.bg} transition-colors duration-1000`} />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Sidebar / Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-64 bg-black border-r border-gray-800 z-50 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className={`p-2 rounded bg-${currentTheme.color}-500/20 border border-${currentTheme.color}-500/40`}>
             <Biohazard className={`text-${currentTheme.color}-400 animate-pulse`} />
          </div>
          <span className="hidden md:block font-black text-xl tracking-tighter italic">V-TERMINAL</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-6">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-2 mb-4">Missions / Branches</p>
          
          {Object.entries(themes).map(([key, theme]) => {
            const Icon = theme.icon;
            const isActive = activeBranch === key;
            return (
              <button
                key={key}
                onClick={() => setActiveBranch(key)}
                className={`w-full flex items-center gap-3 p-3 rounded transition-all group ${
                  isActive 
                    ? `bg-${theme.color}-500/10 border border-${theme.color}-500/30 text-${theme.color}-400` 
                    : 'hover:bg-white/5 text-gray-500'
                }`}
              >
                <Icon size={20} className={isActive ? `text-${theme.color}-400` : 'group-hover:text-gray-300'} />
                <span className="hidden md:block text-sm font-bold uppercase tracking-wide">{theme.label}</span>
                {isActive && <ChevronRight size={14} className="ml-auto hidden md:block" />}
              </button>
            );
          })}
        </nav>

        <div className="p-6 mt-auto">
          <div className="p-4 rounded bg-red-950/20 border border-red-500/20 text-center space-y-2">
            <AlertTriangle className="mx-auto text-red-500" size={20} />
            <p className="text-[10px] text-red-500 font-mono font-bold leading-tight">CRITICAL_SYSTEM_ALERT_04</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-20 md:ml-64 p-6 lg:p-12">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${currentTheme.color}-500/20 text-${currentTheme.color}-400 uppercase`}>
                Phase 02 / Mission Active
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white uppercase italic">
              {activeBranch === 'journalist' && "The Outbreak Investigation"}
              {activeBranch === 'whistleblower' && "The Corporate Leak"}
              {activeBranch === 'gov' && "Containment Protocols"}
            </h1>
            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Accessing encrypted databanks... verifying source authenticity...
              {activeBranch === 'journalist' && " Tracking the spread through municipalities and finding patient zero."}
              {activeBranch === 'whistleblower' && " Decrypting secure messages to reveal the truth behind the origin."}
              {activeBranch === 'gov' && " Monitoring populations and coordinating deployment of field units."}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
             <div className="flex items-center gap-2 text-green-400">
               <Activity size={14} className="animate-bounce" />
               SYSTEM_STABLE
             </div>
             <div className="text-gray-500">Uptime: 1,492h</div>
          </div>
        </header>

        {/* Dynamic Branch Views */}
        <div className="grid grid-cols-1 gap-6">
          {activeBranch === 'journalist' && <JournalistView />}
          {activeBranch === 'whistleblower' && <WhistleblowerView />}
          {activeBranch === 'gov' && <GovView />}
          
          {/* Universal Lab Section */}
          <div className="mt-6">
            <CureLab themeColor={currentTheme.color} />
          </div>
        </div>

        {/* Quick Database Toggle */}
        <div className="mt-12 flex flex-wrap gap-4 opacity-50 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2 text-[10px] font-mono border border-gray-800 rounded px-2 py-1">
             <Database size={12} />
             MUN_DB_v4.2
           </div>
           <div className="flex items-center gap-2 text-[10px] font-mono border border-gray-800 rounded px-2 py-1">
             <Unlock size={12} />
             GHOST_PORT_OPEN
           </div>
           <div className="flex items-center gap-2 text-[10px] font-mono border border-gray-800 rounded px-2 py-1">
             <Activity size={12} />
             CPU_82%
           </div>
        </div>
      </main>

      {/* Scanline Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 w-full animate-scanline" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { top: -100px; }
          100% { top: 100vh; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}} />
    </div>
  );
}