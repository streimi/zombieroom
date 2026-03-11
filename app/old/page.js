'use client'
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Shield, 
  Search, 
  Eye, 
  Activity, 
  MapPin, 
  Biohazard, 
  Lock, 
  AlertTriangle,
  Database,
  Camera, 
  Info, 
  Play,
  Pause,
  Clock,
  CheckCircle2,
  Network,
  Map as MapIcon,
  Navigation,
  Code,
  FileText,
  BarChart3,
  Globe,
  Monitor,
  Fingerprint,
  Loader2,
  Upload,
  RefreshCw,
  ChevronRight,
  Target
} from 'lucide-react';

// --- Helper: Robust CSV Parser ---
const parseCSV = (text) => {
  if (!text) return [];
  const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");
  if (lines.length === 0) return [];

  const rawHeaders = lines[0].split(',');
  const headers = rawHeaders.map(h => h.trim().toLowerCase().replace(/"/g, ''));

  return lines.slice(1).map(line => {
    const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    const obj = {};
    headers.forEach((header, i) => {
      let val = values[i] ? values[i].replace(/"/g, '').trim() : null;
      if (val && !isNaN(val) && val !== "") {
        obj[header || `col_${i}`] = parseFloat(val);
      } else {
        obj[header || `col_${i}`] = val;
      }
    });
    return obj;
  });
};

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
      <span className={`text-2xl font-black text-${themeColor}-400 whitespace-nowrap`}>
        {value}
      </span>
      {trend && <span className="text-[10px] text-green-400 font-mono">{trend}</span>}
    </div>
  </div>
);

// --- Simulation Data Constants ---

const PATIENTS = [
  { name: "Abel Kellner", job: "Chicken farmer", home: "Farmhouse at Landstraße" },
  { name: "Annabell Kellner", job: "Chicken farmer", home: "Farmhouse at Landstraße" },
  { name: "Clemens Metternich", job: "Exotic Animal Importer", home: "House at Franz-Josef-Straße" },
  { name: "David Fanto", job: "Gas station employee", home: "Apartmentblock at Technopark" },
  { name: "Elisabeth Farkas", job: "Dogwalker", home: "Apartmentblock at Rochusgasse" },
  { name: "Ernst Geiger", job: "Security guard", home: "Apartmentblock at Jakob-Schefzik-Gasse" },
  { name: "Felix Schlögl", job: "Student", home: "Apartmentblock at Fuchsengasse" },
  { name: "Gabriele Possanner", job: "Student", home: "Apartmentblock at Fuchsengasse" },
  { name: "Jakob Adler", job: "Government employee", home: "House at Frauentorgasse" },
  { name: "Johann Burger", job: "Agricultural Researcher", home: "House at Vogelweidgasse" },
  { name: "Johann Mendel", job: "Biotech Startup Entrepeneur", home: "House at Gartenfeldstraße" },
  { name: "Joseph Ettenreich", job: "Slaughterhouse employee", home: "Apartmentblock at Siegfried-Ludwig-Straße" },
  { name: "Karl Wlaschek", job: "Supermarkt employee", home: "Apartmentblock at Ignaz-Josef-Pleyel-Straße" },
  { name: "Konrad Schwestermüller", job: "University Professor", home: "House at An der Wehr" },
  { name: "Mark Felt", job: "Government employee", home: "House at Freidlgasse" },
  { name: "Moritz Speckl", job: "Sewage plant employee", home: "Apartmentblock at Jakob-Schefzik-Gasse" },
  { name: "Natalie Glaser", job: "Doctors receptionist", home: "House at Gartenfeldstraße" },
  { name: "Stephanie Bechter", job: "Influencer", home: "Apartmentblock at Langenlebarner Straße" },
  { name: "Umberto Tavella", job: "Pizza delivery guy", home: "Apartmentblock at Bonvicinistraße" },
  { name: "Waltraud Wagner", job: "Nurse", home: "Apartmentblock at Bonvicinistraße" }
];

const VISIT_DATA = {
  1: [["Farmhouse at Landstraße", ["Mark Felt", "Abel Kellner"]]],
  2: [["House at Freidlgasse", ["Mark Felt", "Elisabeth Farkas", "Ernst Geiger", "Felix Schlögl", "Gabriele Possanner"]]],
  3: [["Farmers Market", ["Abel Kellner", "Annabell Kellner", "Clemens Metternich", "Johann Burger", "Johann Mendel"]]],
  4: [["Library", ["Felix Schlögl", "Gabriele Possanner", "Johann Mendel", "Joseph Ettenreich", "Karl Wlaschek"]]],
  5: [["Gov Office", ["Jakob Adler", "Konrad Schwestermüller", "Moritz Speckl", "David Fanto", "Johann Mendel"]]],
  6: [["Clinic", ["Johann Mendel", "Natalie Glaser", "Stephanie Bechter", "Umberto Tavella", "Waltraud Wagner"]]],
  7: [["Hospital", PATIENTS.map(p => p.name)]]
};

// --- Module: Geographic Visualization ---

const InfectionMap = ({ data }) => {
  const minLat = 46.4;
  const maxLat = 49.0;
  const minLng = 9.5;
  const maxLng = 17.2;

  const project = (lat, lng) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100;
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className="relative w-full h-96 bg-black/60 rounded border border-cyan-500/10 overflow-hidden group cursor-crosshair">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {data.map((point, i) => {
          if (!point.lat || !point.lng) return null;
          const { x, y } = project(point.lat, point.lng);
          const isHigh = point.rate > 0.3;
          return (
            <circle 
              key={i}
              cx={x}
              cy={y}
              r={isHigh ? 2.5 : 1.5}
              fill={isHigh ? "#ef4444" : "#06b6d4"}
              fillOpacity={isHigh ? 0.9 : 0.4}
              className={isHigh ? "animate-pulse" : ""}
            />
          );
        })}
      </svg>

      {data.filter(p => p.population > 50000 || p.rate > 0.38).map((point, i) => {
        const { x, y } = project(point.lat, point.lng);
        return (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 group/dot" style={{ left: x, top: y }}>
            <div className="hidden group-hover/dot:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/95 border border-cyan-500/40 p-2 rounded text-[9px] font-mono z-50 shadow-2xl">
              <div className="text-white font-black uppercase">{point.name}</div>
              <div className="text-cyan-400">RATE: {(point.rate * 100).toFixed(2)}%</div>
              <div className="text-gray-500">ZIP: {point.postalcodes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Module: Patient Zero Simulation ---

const PatientZeroModule = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hypothesisPZero, setHypothesisPZero] = useState("Mark Felt");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const simulation = useMemo(() => {
    let infectedOn = {}; 
    let transmissionLines = []; 
    infectedOn[hypothesisPZero] = -1;

    for (let day = 1; day <= 7; day++) {
      const infectiousToday = PATIENTS.filter(p => {
        const d = infectedOn[p.name];
        if (d === -1) return true;
        return d !== undefined && day >= d + 2;
      }).map(p => p.name);

      const todayVisits = VISIT_DATA[day] || [];
      todayVisits.forEach(([loc, people]) => {
        const carriers = people.filter(name => infectiousToday.includes(name));
        if (carriers.length > 0) {
          people.forEach(name => {
            if (infectedOn[name] === undefined) {
              infectedOn[name] = day;
              transmissionLines.push({ from: carriers[0], to: name, day });
            }
          });
        }
      });
    }
    return { infectedOn, transmissionLines };
  }, [hypothesisPZero]);

  const { infectedOn, transmissionLines } = simulation;

  const getStatus = (name, day) => {
    const d = infectedOn[name];
    if (d === undefined || day < d) return "Healthy";
    if (d === -1 || day >= d + 2) return "Infectious";
    return "Infected";
  };

  const yieldCount = PATIENTS.filter(p => getStatus(p.name, 7) === "Infectious").length;

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => setCurrentDay(d => (d < 7 ? d + 1 : 1)), 1200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nodes = useMemo(() => {
    return PATIENTS.map((p, i) => {
      const angle = (i / PATIENTS.length) * 2 * Math.PI;
      const isPZero = p.name === hypothesisPZero;
      const r = isPZero ? 0 : 135;
      return { ...p, x: 200 + r * Math.cos(angle - Math.PI/2), y: 180 + r * Math.sin(angle - Math.PI/2) };
    });
  }, [hypothesisPZero]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
      <Card title="Hypothesis Matrix" icon={Network} themeColor="amber" className="lg:col-span-2 relative">
        <div className="relative h-[420px] bg-black/40 rounded flex items-center justify-center overflow-hidden">
           <svg width="100%" height="100%" viewBox="0 0 400 360">
              <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              {transmissionLines.filter(t => t.day <= currentDay).map((t, i) => {
                const from = nodes.find(n => n.name === t.from);
                const to = nodes.find(n => n.name === t.to);
                return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={t.day === currentDay ? "#f59e0b" : "#4b5563"} strokeWidth={t.day === currentDay ? 2 : 1} opacity={0.3} />;
              })}
              {nodes.map((n, i) => {
                const status = getStatus(n.name, currentDay);
                const isPZero = n.name === hypothesisPZero;
                return (
                  <g key={i} className="cursor-pointer" onClick={() => { setHypothesisPZero(n.name); setSelectedPatient(n); }}>
                    <circle cx={n.x} cy={n.y} r={isPZero ? 12 : 8} fill={status === "Healthy" ? "#374151" : status === "Infectious" ? "#ef4444" : "#f59e0b"} filter={status !== "Healthy" ? "url(#glow)" : ""} />
                    {isPZero && <circle cx={n.x} cy={n.y} r={18} fill="none" stroke="#f59e0b" strokeWidth="1" className="animate-ping opacity-20" />}
                  </g>
                );
              })}
           </svg>
           <div className="absolute bottom-4 flex gap-4 bg-black/90 px-6 py-2 rounded-full border border-amber-500/30 backdrop-blur-xl">
              <button onClick={() => setIsPlaying(!isPlaying)} className="text-amber-500">{isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}</button>
              <input type="range" min="1" max="7" value={currentDay} onChange={e => setCurrentDay(parseInt(e.target.value))} className="w-24 accent-amber-500 cursor-pointer" />
           </div>
        </div>
      </Card>
      
      <div className="space-y-4">
        <Card title="Patient Intel" icon={Info} themeColor="amber">
          {selectedPatient ? (
            <div className="space-y-4">
              <div className="text-sm font-black text-white uppercase">{selectedPatient.name}</div>
              <div className="text-[10px] text-amber-500/70 font-mono italic">{selectedPatient.job}</div>
              <div className="text-[10px] font-mono border-t border-white/5 pt-3">
                <div className="flex justify-between py-1 text-gray-500"><span>Exposed</span><span className="text-amber-500">{infectedOn[selectedPatient.name] === -1 ? "Day 0" : (infectedOn[selectedPatient.name] || "Clear")}</span></div>
                <div className="flex justify-between py-1 text-gray-500"><span>State</span><span className="text-gray-200">{getStatus(selectedPatient.name, 7)}</span></div>
              </div>
            </div>
          ) : <div className="text-[10px] text-gray-500 italic">Select node for forensic data</div>}
        </Card>
        <Card title="Yield Analysis" themeColor={yieldCount === 20 ? "amber" : "gray"}>
           <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase">Yield</span>
              <span className={`text-xl font-black ${yieldCount === 20 ? 'text-green-500' : 'text-red-500'}`}>{yieldCount}/20</span>
           </div>
           <p className="text-[9px] text-gray-500 mt-4 italic uppercase">{yieldCount === 20 ? "Target Achieved." : "Hypothesis Failed."}</p>
        </Card>
      </div>
    </div>
  );
};

// --- Module: Authority Views ---

const GovOriginModule = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const fileInputRef = useRef(null);

  const processCSVFiles = (ratesText, overviewText) => {
    try {
      const ratesRaw = parseCSV(ratesText);
      const overviewRaw = parseCSV(overviewText);

      const merged = ratesRaw.map(rateItem => {
        const mName = rateItem.municipalityname || rateItem.municipality;
        if (!mName) return null;
        const geo = overviewRaw.find(o => 
          (o.location && o.location.toLowerCase() === mName.toLowerCase()) ||
          (o.municipality && o.municipality.toLowerCase() === mName.toLowerCase())
        );
        return {
          name: mName,
          rate: parseFloat(rateItem.infectionrate) || 0,
          population: geo ? (parseFloat(geo.inhabitants) || 0) : 0,
          lat: geo ? (parseFloat(geo.latitude) || 0) : 0,
          lng: geo ? (parseFloat(geo.longitude) || 0) : 0,
          postalcodes: geo ? (geo.postalcodes || geo.zip) : "N/A"
        };
      }).filter(item => item !== null && item.name);

      setData(merged.sort((a, b) => b.population - a.population));
      setLoading(false);
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg("Processing failed.");
      setLoading(false);
    }
  };

  const handleManualUpload = (e) => {
    const files = e.target.files;
    if (files.length < 2) return;
    setLoading(true);
    let rates = "", overview = "", count = 0;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (file.name.includes("grouped") || file.name.includes("infection")) rates = ev.target.result;
        else overview = ev.target.result;
        if (++count === files.length) processCSVFiles(rates, overview);
      };
      reader.readAsText(file);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [r, o] = await Promise.all([fetch('./bigHealthRecord_estimated_grouped.csv'), fetch('./municipalityOverview.csv')]);
        if (!r.ok || !o.ok) throw new Error();
        processCSVFiles(await r.text(), await o.text());
      } catch (error) {
        setErrorMsg("Local sync restricted. Manual sync required.");
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const stats = useMemo(() => {
    if (data.length === 0) return { totalEst: "0", topOutlier: "N/A", avgRate: "0.00" };
    return {
      totalEst: Math.round(data.reduce((acc, curr) => acc + (curr.population * curr.rate), 0)).toLocaleString(),
      topOutlier: data.reduce((prev, current) => (prev.rate > current.rate) ? prev : current, data[0]).name,
      avgRate: (data.reduce((acc, curr) => acc + curr.rate, 0) / data.length * 100).toFixed(2)
    };
  }, [data]);

  if (loading) return <div className="h-96 flex flex-col items-center justify-center border border-cyan-500/20 rounded"><Loader2 className="animate-spin text-cyan-500 mb-4" /><span>SYNCING...</span></div>;

  return (
    <div className="space-y-6">
      {errorMsg && data.length === 0 && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-between">
          <span className="text-[10px] text-red-400 font-black uppercase">{errorMsg}</span>
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black rounded uppercase">Manual Sync</button>
          <input type="file" multiple accept=".csv" ref={fileInputRef} className="hidden" onChange={handleManualUpload} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Stat label="Total Estimated Cases" value={stats.totalEst} themeColor="cyan" />
        <Stat label="Mapped Sectors" value={data.length} themeColor="cyan" />
        <Stat label="Primary Outlier" value={stats.topOutlier} themeColor="cyan" />
        <Stat label="Avg Rate" value={`${stats.avgRate}%`} themeColor="cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Municipality metrics (Top 30)" icon={BarChart3} themeColor="cyan">
            <div className="overflow-x-auto max-h-[300px]">
              <table className="w-full text-left text-[10px] font-mono">
                <thead><tr className="text-cyan-500 border-b border-cyan-500/20"><th>NAME</th><th>ZIP</th><th>POP</th><th>RATE</th><th className="text-right">EST</th></tr></thead>
                <tbody>
                  {data.slice(0, 30).map((city, i) => (
                    <tr key={i} className="border-b border-gray-800/50 hover:bg-cyan-500/5">
                      <td className="py-2 text-white font-bold">{city.name}</td>
                      <td className="py-2 text-gray-500">{city.postalcodes}</td>
                      <td className="py-2 text-gray-500">{city.population.toLocaleString()}</td>
                      <td className="py-2 text-cyan-400">{(city.rate * 100).toFixed(1)}%</td>
                      <td className="py-2 text-right font-black text-white">{Math.round(city.population * city.rate).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card title="Geo-Spatial Spread" icon={MapIcon} themeColor="cyan"><InfectionMap data={data} /></Card>
        </div>
        <div className="space-y-4">
          <Card title="System Connectivity" icon={Activity} themeColor="cyan">
             <div className="p-4 rounded bg-cyan-500/5 text-center">
                <Globe className={`mx-auto text-cyan-500 ${data.length > 0 ? 'animate-spin-slow' : 'opacity-20'}`} />
                <span className="text-[10px] text-cyan-500 font-black uppercase mt-2 block">{data.length > 0 ? "GRID_ACTIVE" : "OFFLINE"}</span>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- Module: Journalist Interface (Origin Sites) ---

const JournalistOriginView = () => {
  const municipalities = [
    { name: "Großhofen", status: "Origin Center", code: "2282" },
    { name: "Altlengbach", status: "Primary Hub", code: "3033" },
    { name: "Haugsdorf", status: "Confirmed Vector", code: "2054" },
    { name: "Furth an der Triesting", status: "Suspected Hub", code: "2564" },
    { name: "Stetteldorf am Wagram", status: "Suspected Hub", code: "3463" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-left-4">
      <Card title="Geographic Origin Forecast" icon={MapIcon} themeColor="amber" className="lg:col-span-2">
        <div className="space-y-3">
          {municipalities.map((m, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-amber-500/5 border border-amber-500/20 rounded">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-black text-amber-500 italic">#{i+1}</div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase">{m.name}</h4>
                  <span className="text-[10px] text-amber-500/60 font-mono tracking-widest uppercase">{m.status} | ZIP: {m.code}</span>
                </div>
              </div>
              <Navigation size={18} className="text-amber-500 opacity-20" />
            </div>
          ))}
        </div>
      </Card>
      <Card title="Methodology" themeColor="amber">
        <p className="text-[11px] text-gray-400 leading-relaxed italic uppercase font-mono">
          Filtered for 100% presence in Infected tests vs 0% in Control groups. These 5 points represent the highest spatial deviation from baseline.
        </p>
      </Card>
    </div>
  );
};

// --- Module: Shadow Decryption ---

const DecryptionModule = () => {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);
  const plainText = "Caesar, urgent situation in Tulln lab. Atbash-302 Retrovirus containment compromised due to intern negligence. Uncontrolled mutation now outside laboratory, potential threat imminent. Proceed to secure and sanitize all relevant information, ensuring no trace of our operations remains. Act swiftly, prioritize containment and information suppression. Deploy necessary resources to mitigate fallout. Report progress and further developments immediately. Exercise extreme caution, and remember the stakes. Trust no one. Vigenere.";
  const [displayMsg, setDisplayMsg] = useState("Dagcpi, iggknm awgvavsde wc Talev znc. Avlpjv-302 Gezrhdwevs eyckoxnsegb qbnptybzgtd jux bc votgbc esvlogxvqr...");

  const startDecryption = () => {
    setIsDecrypting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setIsDecrypting(false); setDisplayMsg(plainText); return 100; }
        return p + 2;
      });
    }, 40);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <Card title="Secured Communication Decryption" icon={Lock} themeColor="red">
        <div className="flex flex-col gap-6">
          <div className="p-6 bg-red-900/10 border border-red-500/20 rounded min-h-[200px] flex items-center justify-center">
            <p className={`font-mono text-sm leading-relaxed ${isDecrypting ? 'animate-pulse opacity-50' : ''} text-red-200 text-center italic`}>
              {displayMsg}
            </p>
          </div>
          <div className="space-y-4 max-w-md mx-auto w-full">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <button onClick={startDecryption} disabled={isDecrypting} className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-widest rounded transition-all">
              {isDecrypting ? `DECRYPTING: ${progress}%` : "DECRYPT INTERCEPT"}
            </button>
          </div>
        </div>
      </Card>
      <div className="p-4 rounded bg-red-500/5 border border-red-500/20 flex flex-col items-center text-center">
         <AlertTriangle className="text-red-500 mb-2" size={24} />
         <span className="text-[10px] text-red-500 font-black uppercase italic tracking-widest">Operation Nephalem Compromised. Trust No One.</span>
      </div>
    </div>
  );
};

// --- Main App Shell ---

export default function App() {
  const [activeView, setActiveView] = useState('j-origin');
  // Stabilize random node ID to prevent hydration mismatch
  const [terminalNodeId, setTerminalNodeId] = useState(null);

  useEffect(() => {
    setTerminalNodeId(Math.floor(Math.random() * 1000));
  }, []);

  const themeMap = {
    'j': { color: 'amber', label: 'Investigator', icon: Search, bg: 'bg-amber-950/10' },
    'w': { color: 'red', label: 'Shadow', icon: Eye, bg: 'bg-red-950/10' },
    'g': { color: 'cyan', label: 'Authority', icon: Shield, bg: 'bg-cyan-950/10' }
  };

  const currentTheme = themeMap[activeView.split('-')[0]];

  const navGroups = [
    {
      id: 'j',
      label: 'Investigator',
      icon: Search,
      items: [
        { id: 'j-origin', label: 'Origin Sites', icon: MapIcon },
        { id: 'j-zero', label: 'Patient Zero', icon: Network }
      ]
    },
    {
      id: 'w',
      label: 'Shadow',
      icon: Eye,
      items: [
        { id: 'w-decrypt', label: 'Intercepts', icon: Lock }
      ]
    },
    {
      id: 'g',
      label: 'Authority',
      icon: Shield,
      items: [
        { id: 'g-seeding', label: 'Seeding Grounds', icon: Globe },
        { id: 'g-grid', label: 'Grid Control', icon: Camera }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'j-origin': return <JournalistOriginView />;
      case 'j-zero': return <PatientZeroModule />;
      case 'w-decrypt': return <DecryptionModule />;
      case 'g-seeding': return <GovOriginModule />;
      case 'g-grid': return (
        <Card title="Surveillance HUB" icon={Camera} themeColor="cyan">
          <div className="aspect-video bg-gray-800/40 rounded flex flex-col items-center justify-center grayscale opacity-30 gap-3">
            <Monitor size={48} />
            <span className="text-[10px] font-mono tracking-[0.2em]">CONNECTION_STALLED // NEXT MISSION PENDING</span>
          </div>
        </Card>
      );
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-${currentTheme.color}-500/30 overflow-x-hidden`}>
      <div className={`fixed inset-0 pointer-events-none opacity-30 ${currentTheme.bg} transition-colors duration-1000`} />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-72 bg-black border-r border-gray-800 z-50 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <Biohazard className={`text-${currentTheme.color}-400 animate-pulse`} size={24} />
          <span className="hidden md:block font-black text-xl italic uppercase text-white tracking-tighter">V-Terminal</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
          {navGroups.map(group => (
            <div key={group.id} className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-1 opacity-40">
                <group.icon size={12} />
                <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.2em]">{group.label}</span>
              </div>
              <div className="space-y-0.5">
                {group.items.map(item => {
                  const isActive = activeView === item.id;
                  const itemTheme = themeMap[item.id.split('-')[0]];
                  return (
                    <button 
                      key={item.id} 
                      onClick={() => setActiveView(item.id)} 
                      className={`w-full flex items-center gap-3 p-3 rounded text-left transition-all group ${
                        isActive 
                          ? `bg-${itemTheme.color}-500/10 border border-${itemTheme.color}-500/30 text-${itemTheme.color}-400 shadow-lg shadow-${itemTheme.color}-500/5` 
                          : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                      }`}
                    >
                      <item.icon size={18} className={isActive ? `text-${itemTheme.color}-400` : 'text-gray-600'} />
                      <span className="hidden md:block text-[11px] font-bold uppercase tracking-wider flex-1">{item.label}</span>
                      {isActive && <ChevronRight size={12} className="hidden md:block opacity-50" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-gray-900">
          <div className="p-4 rounded bg-red-950/20 border border-red-500/20 text-center">
            <AlertTriangle className="mx-auto text-red-500 animate-bounce" size={18} />
            <p className="hidden md:block text-[9px] text-red-500 font-mono font-bold mt-2 uppercase tracking-tight italic">Threat Level: High</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-20 md:ml-72 p-6 lg:p-12 min-h-screen">
        <header className="mb-10 animate-in slide-in-from-bottom-2">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${currentTheme.color}-500/20 text-${currentTheme.color}-400 uppercase tracking-tighter font-mono`}>
              ACCESS: {activeView.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white uppercase italic mt-2">
            {navGroups.flatMap(g => g.items).find(i => i.id === activeView)?.label || currentTheme.label}
          </h1>
          <div className="flex items-center gap-4 mt-2">
             <p className="text-gray-400 text-sm font-medium leading-relaxed uppercase tracking-tighter opacity-60">
              Forensic Outbreak Analysis // Terminal Node {terminalNodeId !== null ? terminalNodeId : '...'}
            </p>
            <div className={`h-[1px] flex-1 bg-gradient-to-r from-${currentTheme.color}-500/30 to-transparent`} />
          </div>
        </header>
        
        {renderContent()}
      </main>

      {/* Visual Glitch Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 w-full animate-scanline" />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline { 0% { top: -100px; } 100% { top: 100vh; } }
        .animate-scanline { animation: scanline 8s linear infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}