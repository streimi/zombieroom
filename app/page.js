"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  ShieldAlert,
  Newspaper,
  Skull,
  Cpu,
  Activity,
  Clock,
  ChevronDown,
  Database,
  Zap,
  Wifi,
  Globe,
  Wind,
  Lock,
  Copy,
  FileText,
  Search,
  BarChart3,
  AlertTriangle,
  RefreshCw,
  Radio,
  MapPin,
  Code,
  UserSearch,
  Terminal,
  Thermometer,
  Shield,
  List,
  HeartPulse,
  Syringe,
  Truck,
  Package,
  Factory,
  Cog,
  Navigation,
  Compass,
  FastForward,
  Crosshair,
  MapIcon,
  TrendingDown,
  PackageMinus,
  Bomb,
  CarFront,
  Ruler,
} from "lucide-react";

/**
 * COMMAND CENTER - INTEGRATED MISSIONS
 * Government: Municipality Infection Rates (Mission 1.0)
 * Journalist: Origin Detection (Mission 1.1)
 * * FIXES:
 * - Added 'Code' to lucide-react imports.
 * - Removed duplicate 'use client' directive.
 * - Standardized fetch paths to root directory.
 */

const COLORS = {
  bg: "#000000",
  card: "#09090b",
  border: "rgba(255, 255, 255, 0.1)",
  red: "#dc2626",
  redGlow: "rgba(220, 38, 38, 0.5)",
  blue: "#2563eb",
  blueGlow: "rgba(37, 99, 235, 0.5)",
  emerald: "#10b981",
  emeraldGlow: "rgba(16, 185, 129, 0.5)",
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.5)",
  zinc: "#71717a",
  orange: "#f97316",
};

// --- Reusable Card Component ---
const Card = ({ title, icon: Icon, themeColor, children }) => {
  const themeHex = COLORS[themeColor];
  return (
    <div
      className="border rounded-3xl p-8 relative shadow-2xl overflow-hidden"
      style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
    >
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(90deg, ${themeHex}, transparent)`,
        }}
      />
      <div
        className="flex items-center gap-4 mb-8 border-b pb-6"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="p-3 rounded-xl border"
          style={{
            backgroundColor: `${themeHex}1a`,
            color: themeHex,
            borderColor: `${themeHex}33`,
          }}
        >
          <Icon size={24} />
        </div>
        <h2 className="text-xl font-black uppercase tracking-tight text-white leading-none">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

// --- Dashboard Component ---

const Dashboard = ({ stats }) => {
  const chartData = [
    35, 42, 38, 52, 65, 78, 92, 85, 110, 130, 165, 155, 190, 240, 280,
  ];

  return (
    <div
      className="space-y-8"
      style={{ animation: "fadeIn 0.8s ease-out forwards" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div
          className="lg:col-span-3 border p-8 rounded-2xl relative shadow-2xl overflow-hidden"
          style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{
              background: `linear-gradient(90deg, ${COLORS.red}, transparent)`,
            }}
          />

          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter flex items-center gap-3">
                <Activity style={{ color: COLORS.red }} /> INFECTION_TRAJECTORY
              </h2>
              <p
                className="text-[10px] font-mono mt-1 font-black tracking-widest uppercase"
                style={{ color: COLORS.zinc }}
              >
                Global Telemetry // Node_009_Active
              </p>
            </div>
            <div className="text-right">
              <span
                className="text-[10px] font-mono block uppercase font-black"
                style={{ color: COLORS.zinc }}
              >
                Status
              </span>
              <span
                className="text-2xl font-black"
                style={{
                  color: COLORS.red,
                  textShadow: `0 0 10px ${COLORS.redGlow}`,
                }}
              >
                CRITICAL_V
              </span>
            </div>
          </div>

          <div
            className="h-64 flex items-end gap-2 px-2 relative border-b border-l pb-2"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            {[20, 40, 60, 80].map((v) => (
              <div
                key={v}
                className="absolute left-0 w-full border-t pointer-events-none"
                style={{
                  bottom: `${v}%`,
                  borderColor: "rgba(255,255,255,0.03)",
                }}
              />
            ))}

            {chartData.map((h, i) => (
              <div
                key={i}
                className="flex-1 relative group"
                style={{
                  height: `${h / 3.5}%`,
                  minWidth: "10px",
                  backgroundColor: "rgba(220, 38, 38, 0.3)",
                  borderTop: `1px solid ${COLORS.red}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: COLORS.red }}
                />
              </div>
            ))}
          </div>
          <div
            className="flex justify-between mt-4 text-[9px] font-mono uppercase tracking-widest font-black"
            style={{ color: COLORS.zinc }}
          >
            <span>T-MINUS 15D</span>
            <span style={{ color: COLORS.red }}>Present Day [Peak]</span>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="border p-6 rounded-2xl relative shadow-xl overflow-hidden"
            style={{
              backgroundColor: COLORS.card,
              borderColor: "rgba(37, 99, 235, 0.3)",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className="font-black text-[10px] uppercase tracking-widest"
                style={{ color: COLORS.blue }}
              >
                Vaccine R&D
              </h3>
              <Zap size={14} style={{ color: COLORS.blue }} />
            </div>
            <div
              className="relative h-16 bg-black rounded-lg border overflow-hidden flex items-center px-4"
              style={{ borderColor: COLORS.border }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 transition-all duration-1000"
                style={{
                  width: "12.42%",
                  backgroundColor: "rgba(37, 99, 235, 0.4)",
                }}
              />
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{
                  left: "12.42%",
                  backgroundColor: COLORS.blue,
                  boxShadow: `0 0 15px ${COLORS.blue}`,
                }}
              />
              <span className="relative z-10 font-mono font-black text-white text-3xl tracking-tighter">
                12.42
                <span
                  className="text-xs ml-1"
                  style={{ color: "rgba(37,99,235,0.6)" }}
                >
                  %
                </span>
              </span>
            </div>
          </div>

          <div
            className="border p-6 rounded-2xl shadow-lg"
            style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu size={14} style={{ color: COLORS.zinc }} />
              <h3
                className="font-black text-[10px] uppercase tracking-widest"
                style={{ color: COLORS.zinc }}
              >
                Resource Monitoring
              </h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <div
                  className="flex justify-between text-[9px] font-black uppercase"
                  style={{ color: COLORS.zinc }}
                >
                  <span>CPU Load</span>
                  <span style={{ color: COLORS.emerald }}>{stats.cpu}</span>
                </div>
                <div
                  className="h-1.5 bg-black rounded-full overflow-hidden border"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="h-full transition-all duration-700"
                    style={{
                      width: stats.cpu,
                      backgroundColor: COLORS.emerald,
                      boxShadow: `0 0 8px ${COLORS.emeraldGlow}`,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="flex justify-between text-[9px] font-black uppercase"
                  style={{ color: COLORS.zinc }}
                >
                  <span>RAM Usage</span>
                  <span style={{ color: COLORS.blue }}>64%</span>
                </div>
                <div
                  className="h-1.5 bg-black rounded-full overflow-hidden border"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="h-full transition-all duration-700"
                    style={{
                      width: "64%",
                      backgroundColor: COLORS.blue,
                      boxShadow: `0 0 8px ${COLORS.blueGlow}`,
                    }}
                  />
                </div>
              </div>
              <div
                className="flex justify-between items-center pt-2 border-t"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-[9px] font-black uppercase"
                  style={{ color: COLORS.zinc }}
                >
                  Uptime
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {stats.uptime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Government Branch Logic (Mission 1.0) ---

const GovernmentMission = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Ingesting the team's final municipality_infections.csv
      const response = await fetch(
        "/data/solutions/WasWird/municipality_infections.csv",
      );

      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }

      const text = await response.text();
      const lines = text.split(/\r?\n/);

      // The CSV has an index column, municipalityname, infectionrate
      const parsedData = lines
        .slice(1)
        .map((line) => {
          const values = line.split(",");
          if (values.length < 3) return null;

          // CSV format: index, municipalityname, infectionrate
          const nameStr = values[1] ? values[1].trim() : "";
          const rateFloat = parseFloat(values[2]);

          if (!nameStr || isNaN(rateFloat)) return null;

          return {
            name: nameStr,
            rate: rateFloat,
          };
        })
        .filter((item) => item !== null);

      // Mission Evaluation Requirement: First 30 records (ordered by inhabitant size)
      const top30 = parsedData.slice(0, 30);

      // UX requirement: Sort those 30 alphabetically for the display list
      const sorted = top30.sort((a, b) => a.name.localeCompare(b.name));

      setData(sorted);
    } catch (err) {
      console.error("Data ingestion failed:", err);
      setError(
        "FILE_NOT_FOUND: 'municipality_infections.csv' must be in public directory.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const pythonCode = `# MISSION 1.0 SOLUTION

paste_code_here`;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="First 30 Municipalities"
            icon={BarChart3}
            themeColor="blue"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block"
                  style={{ color: COLORS.blue }}
                >
                  EVALUATION_SET: ALPHA_SORTED // SOURCE: SOLUTIONS_V1
                </span>
                <button
                  onClick={loadData}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-black text-zinc-400 hover:text-white hover:border-zinc-600 transition-all uppercase tracking-widest"
                >
                  <RefreshCw
                    size={12}
                    className={loading ? "animate-spin" : ""}
                  />
                  Reload Solution
                </button>
              </div>

              <div
                className="bg-black border rounded-2xl p-8 min-h-[500px] flex flex-col relative shadow-inner"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 font-mono">
                    <RefreshCw
                      size={48}
                      className="animate-spin mb-4 opacity-20"
                    />
                    <span className="animate-pulse tracking-widest uppercase text-[10px]">
                      Processing Evaluation Data...
                    </span>
                  </div>
                ) : error ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-red-500 font-mono text-center gap-4">
                    <AlertTriangle size={48} className="opacity-50" />
                    <div className="space-y-1">
                      <div className="font-black uppercase tracking-tighter text-xl">
                        {error}
                      </div>
                      <div className="text-[10px] text-zinc-500 italic max-w-xs uppercase">
                        Target: municipality_infections.csv
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div
                      className="grid grid-cols-12 text-[10px] font-black uppercase text-zinc-500 tracking-widest border-b pb-2 px-2"
                      style={{ borderColor: COLORS.border }}
                    >
                      <div className="col-span-6">
                        Municipality (Evaluation Set)
                      </div>
                      <div className="col-span-6 text-right">
                        Infection Rate (%)
                      </div>
                    </div>
                    <div className="space-y-2 pr-2 custom-scroll max-h-[500px] overflow-y-auto">
                      {data.length === 0 ? (
                        <div className="py-20 text-center text-zinc-700 font-mono text-xs uppercase tracking-widest">
                          Awaiting ingestion of solution file...
                        </div>
                      ) : (
                        data.map((item, idx) => (
                          <div
                            key={idx}
                            className="grid grid-cols-12 text-xs font-mono items-center py-2.5 px-3 rounded hover:bg-white/5 transition-colors"
                          >
                            <div className="col-span-6 text-zinc-300 font-bold uppercase tracking-tighter">
                              {item.name}
                            </div>
                            <div className="col-span-6 flex items-center justify-end gap-3">
                              <div className="w-40 h-1.5 bg-zinc-900 rounded-full overflow-hidden hidden sm:block shadow-inner">
                                <div
                                  className="h-full transition-all duration-1000"
                                  style={{
                                    width: `${item.rate * 100}%`,
                                    backgroundColor:
                                      item.rate > 0.6
                                        ? COLORS.red
                                        : item.rate > 0.3
                                          ? "#f59e0b"
                                          : COLORS.blue,
                                    boxShadow:
                                      item.rate > 0.6
                                        ? `0 0 10px ${COLORS.redGlow}`
                                        : "none",
                                  }}
                                />
                              </div>
                              <span
                                className="min-w-[60px] text-right font-black"
                                style={{
                                  color:
                                    item.rate > 0.6
                                      ? COLORS.red
                                      : item.rate > 0.3
                                        ? "#f59e0b"
                                        : "inherit",
                                }}
                              >
                                {(item.rate * 100).toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Metrics */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{ borderColor: COLORS.border, borderLeftColor: COLORS.blue }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-blue-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Spokesperson Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "We have gathered personal medical data from the last 30 days.
              Your goal is to provide an infection rate estimate for each
              municipality. Evaluation is based on the Top 30 records by
              inhabitants."
            </p>
          </div>

          <Card title="Sector Metrics" icon={Activity} themeColor="blue">
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Cities Processed
                </span>
                <span className="text-sm font-black text-blue-400">2354</span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Peak Detected
                </span>
                <span className="text-sm font-black text-red-500">80.0%+</span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Control Subjects
                </span>
                <span className="text-sm font-black text-emerald-500">
                  100 / Healthy
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Municipality_Infection_Rate.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Journalist Branch Logic (Mission 1.1) ---

// --- Journalist Branch Logic (Mission 1.1) ---

const JournalistMission = () => {
  const [origins, setOrigins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadOrigins = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/data/solutions/WasWird/Origin.txt");
      if (!response.ok) throw new Error("Origin File Missing");
      const text = await response.text();
      const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");
      setOrigins(lines.slice(0, 5)); // First 5 as per mission req
    } catch (err) {
      console.error("Origin data load error:", err);
      setError("FILE_NOT_FOUND: 'Origin.txt' not detected.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrigins();
  }, []);

  const pythonCode = `# MISSION 1.1 SOLUTION: ORIGIN DETECTION
paste_code_here`;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card title="Virus Origin Detection" icon={Radio} themeColor="amber">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.amber }}
                >
                  Public Informational Broadcast // Mission 1.1
                </span>
                <button
                  onClick={loadOrigins}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-black text-zinc-400 hover:text-white hover:border-zinc-600 transition-all uppercase tracking-widest"
                >
                  <RefreshCw
                    size={12}
                    className={loading ? "animate-spin" : ""}
                  />
                  Refresh Signal
                </button>
              </div>

              <div
                className="bg-black border rounded-2xl p-12 min-h-[400px] flex flex-col items-center justify-center relative shadow-inner overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #f59e0b 0%, transparent 70%)",
                  }}
                />

                {loading ? (
                  <div className="text-zinc-600 font-mono animate-pulse uppercase text-[10px]">
                    Scanning Geospatial Records...
                  </div>
                ) : error ? (
                  <div className="text-red-500 font-mono text-center">
                    <AlertTriangle
                      size={48}
                      className="mx-auto mb-4 opacity-30"
                    />
                    <div className="font-black uppercase">{error}</div>
                  </div>
                ) : (
                  <div className="w-full max-w-md space-y-6 relative z-10">
                    <div className="text-center mb-8">
                      <div className="text-[10px] font-black text-amber-500/80 uppercase tracking-[0.4em] mb-2 italic">
                        Breaking: Patient Zero Vectors Identified
                      </div>
                      <h3 className="text-white text-lg font-black uppercase border-y py-2 border-white/5 tracking-tighter">
                        Primary Origins
                      </h3>
                    </div>

                    <div className="grid gap-3">
                      {origins.length === 0 ? (
                        <div className="text-center text-zinc-600 font-mono text-xs uppercase tracking-widest py-8">
                          No vectors detected...
                        </div>
                      ) : (
                        origins.map((city, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 bg-zinc-900/50 p-4 border rounded-xl border-white/5 hover:border-amber-500/30 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-black border border-amber-500/20 flex items-center justify-center text-amber-500 font-black text-xs">
                              0{i + 1}
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-black text-zinc-100 uppercase tracking-widest group-hover:text-amber-400 transition-colors">
                                {city}
                              </div>
                              <div className="text-[9px] text-zinc-600 font-mono uppercase font-black">
                                Emergence Point Alpha
                              </div>
                            </div>
                            <MapPin
                              size={16}
                              className="text-zinc-700 group-hover:text-red-500 transition-colors"
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.amber,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-amber-500 flex items-center gap-2">
              <Newspaper size={16} /> Journalist Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Provide the public with the 5 most likely municipalities where
              the virus originated. They need to know where it started."
            </p>
          </div>

          <Card title="Signal Intercepts" icon={Activity} themeColor="amber">
            <div className="bg-black p-4 rounded-xl border border-white/5 font-mono text-[10px] overflow-hidden h-40 relative">
              <div className="text-amber-500 mb-3 border-b border-white/5 pb-2">{`>> [LOCAL NODE SCAN]`}</div>
              <div className="text-zinc-600 space-y-2 opacity-50">
                <div className="truncate">PING: NODE_1A_ACTIVE</div>
                <div className="truncate text-amber-900">
                  GEOLOCATING_ORIGIN_SIGNATURES
                </div>
                <div className="truncate">CROSS_REFERENCING_RECORDS</div>
                <div className="truncate">MATCH_CONFIDENCE: 94.2%</div>
                <div className="truncate">...</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Origin_Detection_Algorithm.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 2.0: Cure and Quarantine ---
const GovernmentMission2 = () => {
  const [threshold, setThreshold] = useState(null);
  const [quarantined, setQuarantined] = useState([]);

  const pythonCode = `# MISSION 2.0 SOLUTION

paste_code_here`;

  useEffect(() => {
    // Fetch Temperature Threshold
    fetch("/data/solutions/WasWird 1/temperaturethreshold.csv")
      .then((res) => res.text())
      .then((text) => {
        setThreshold(text.trim());
      })
      .catch((err) =>
        console.error("Failed to load temperature threshold", err),
      );

    // Fetch Quarantine List
    fetch("/data/solutions/WasWird 1/quarantine.csv")
      .then((res) => res.text())
      .then((text) => {
        // Split by newline, trim whitespace, and filter out any empty lines
        const lines = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0);
        setQuarantined(lines);
      })
      .catch((err) => console.error("Failed to load quarantine list", err));
  }, []);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console - Now only contains the Threshold */}
        <div className="lg:col-span-8">
          <Card title="Threshold Protocol" icon={ShieldAlert} themeColor="blue">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.blue }}
                >
                  EVALUATION_SET: ACTIVE // SOURCE: SOLUTIONS_V2
                </span>
              </div>

              {/* Temperature Threshold Internal Card */}
              <div
                className="rounded-lg border bg-black p-12 flex flex-col items-center justify-center space-y-6 shadow-inner relative overflow-hidden min-h-[350px]"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #2563eb 0%, transparent 70%)",
                  }}
                />
                <Thermometer className="w-16 h-16 text-red-500 relative z-10" />
                <h3 className="text-lg font-black text-white uppercase tracking-widest relative z-10 text-center">
                  Temperature Threshold
                </h3>
                <div className="text-7xl font-mono font-bold text-red-500 drop-shadow-md relative z-10 py-4">
                  {threshold ? `${threshold}°C` : "LOADING..."}
                </div>
                <p className="text-xs font-mono text-zinc-500 text-center mt-4 max-w-md uppercase relative z-10">
                  Individuals above this body temperature will be denied entry
                  to critical locations to mitigate viral spread.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Quarantine Table */}
        <div className="lg:col-span-4 space-y-6">
          {/* Intel Widget */}
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{ borderColor: COLORS.border, borderLeftColor: COLORS.blue }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-blue-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Government Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Establish a precise body temperature threshold to secure critical
              infrastructure without inciting public unrest. Additionally,
              identify up to 20 optimal municipalities for immediate military
              quarantine, balancing infection containment against our military's
              maximum operational capacity."
            </p>
          </div>

          {/* Quarantine Table Widget */}
          <Card title="Quarantine Targets" icon={List} themeColor="blue">
            <div className="flex-1 overflow-y-auto max-h-[300px] pr-2 mt-2 custom-scrollbar">
              {quarantined.length > 0 ? (
                <ul className="space-y-2">
                  {quarantined.map((municipality, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 font-mono text-xs bg-zinc-900 px-3 py-2.5 rounded border border-white/5 hover:border-emerald-500/30 transition-colors"
                    >
                      <span className="text-zinc-600 w-6 text-right font-black">
                        {idx + 1}.
                      </span>
                      <span className="text-emerald-400 font-bold uppercase tracking-tighter">
                        {municipality}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-zinc-500 font-mono text-xs text-center py-10 animate-pulse uppercase tracking-widest">
                  Awaiting Targeting Data...
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Quarantine_Protocol.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Vector Net Visualizer ---
const VectorNet = ({ visits, simulations, patientZero, onDayChange }) => {
  const [currentDay, setCurrentDay] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const people = useMemo(() => {
    if (!simulations || simulations.length === 0) return [];
    return [...new Set(simulations.map((v) => v.Person))].sort();
  }, [simulations]);

  const centerX = 200,
    centerY = 200,
    radius = 130;

  const nodePos = useMemo(() => {
    return people.reduce((acc, name, i) => {
      const angle = (i / people.length) * 2 * Math.PI;
      acc[name] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
      return acc;
    }, {});
  }, [people]);

  const scenarioData = useMemo(() => {
    if (!simulations) return [];
    return simulations.filter((s) => s.Scenario_PatientZero === patientZero);
  }, [simulations, patientZero]);

  useEffect(() => {
    setCurrentDay(1);
    setIsPlaying(true);
  }, [patientZero]);

  useEffect(() => {
    if (!isPlaying || currentDay >= 7) return;
    const timer = setTimeout(() => setCurrentDay((prev) => prev + 1), 1200);
    return () => clearTimeout(timer);
  }, [currentDay, isPlaying]);

  const currentState = useMemo(() => {
    const dayRows = scenarioData.filter((s) => s.Day === currentDay);

    const infected = new Map();
    const links = [];

    dayRows.forEach((row) => {
      if (row.Status !== "Healthy") {
        infected.set(row.Person, {
          status: row.Status,
        });
      }

      // Draw infection link only on the day infection happens
      if (row.Status === "Infected" && row.InfectedOnDay === currentDay) {
        // Find who was infectious that day
        const spreader = scenarioData.find(
          (s) =>
            s.Day === currentDay &&
            s.Status === "Infectious" &&
            s.Person !== row.Person,
        );

        if (spreader) {
          links.push({
            from: spreader.Person,
            to: row.Person,
          });
        }
      }
    });

    return { infected, links };
  }, [scenarioData, currentDay]);

  const contaminatedToday = useMemo(() => {
    return scenarioData.filter(
      (row) => row.Day === currentDay && row.Status !== "Healthy",
    ).length;
  }, [scenarioData, currentDay]);

  const infectiousToday = useMemo(() => {
    return scenarioData.filter(
      (row) => row.Day === currentDay && row.Status === "Infectious",
    ).length;
  }, [scenarioData, currentDay]);

  useEffect(() => {
    if (onDayChange) {
      onDayChange(currentDay, {
        contaminated: contaminatedToday,
        infectious: infectiousToday,
      });
    }
  }, [currentDay, contaminatedToday, infectiousToday, onDayChange]);

  if (people.length === 0) return null;

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto bg-zinc-950/20 rounded-full border border-white/5 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div
          className="absolute border border-amber-500 rounded-full"
          style={{ width: 80, height: 80 }}
        />
        <div
          className="absolute border border-amber-500 rounded-full"
          style={{ width: 160, height: 160 }}
        />
        <div
          className="absolute border border-amber-500 rounded-full"
          style={{ width: 240, height: 240 }}
        />
        <div
          className="absolute border border-amber-500 rounded-full"
          style={{ width: 320, height: 320 }}
        />
      </div>

      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
        {currentState.links.map((link, i) => (
          <line
            key={`link-${i}`}
            x1={nodePos[link.from]?.x}
            y1={nodePos[link.from]?.y}
            x2={nodePos[link.to]?.x}
            y2={nodePos[link.to]?.y}
            stroke={COLORS.amber}
            strokeWidth="1"
            strokeDasharray="10 5"
            className="animate-[flow_3s_linear_infinite]"
            style={{ opacity: 0.3 }}
          />
        ))}

        {people.map((name) => {
          const personState = currentState.infected.get(name);
          const pos = nodePos[name];
          if (!pos) return null;

          const isZero = name === patientZero;
          const status = personState?.status || "Healthy";

          let color = "#27272a";
          if (status === "Infectious") color = COLORS.red;
          else if (status === "Infected") color = COLORS.amber;
          else color = "#27272a";

          return (
            <g key={name} className="transition-all duration-500">
              <circle
                cx={pos.x}
                cy={pos.y}
                r={personState ? 4.5 : 2.5}
                fill={color}
                className={status === "Infectious" ? "animate-pulse" : ""}
              />
              <text
                x={pos.x}
                y={pos.y - 10}
                textAnchor="middle"
                className="text-[7px] font-mono font-black uppercase tracking-tighter"
                fill={personState ? color : "#3f3f46"}
                style={{ opacity: personState ? 1 : 0.4 }}
              >
                {name}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-4 flex gap-4">
        <button
          onClick={() => setCurrentDay(1)}
          className="p-1 text-zinc-600 hover:text-amber-500 transition-colors"
        >
          <RefreshCw size={14} />
        </button>
        <div className="text-[10px] font-mono text-amber-500 font-bold tracking-widest uppercase">
          DAY_0{currentDay}
        </div>
      </div>
      <style jsx>{`
        @keyframes flow {
          from {
            stroke-dashoffset: 30;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

// --- Mission 2.1: Patient Zero Logic ---
const PatientZeroMission = () => {
  const [data, setData] = useState({ visits: [], sims: [] });
  const [selectedPerson, setSelectedPerson] = useState("Mark Felt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [simStats, setSimStats] = useState({
    day: 1,
    contaminated: 0,
    infectious: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vRes, sRes] = await Promise.all([
          fetch("/data/intel/Day2/visits.csv"),
          fetch("/data/coding/Day2/journalist/all_simulations.csv"),
        ]);

        if (!vRes.ok || !sRes.ok) {
          throw new Error(
            "File not found. Check paths: /data/intel/Day2/visits.csv and /data/coding/Day2/journalist/all_simulations.csv",
          );
        }

        const vText = await vRes.text();
        const sText = await sRes.text();

        // 100% Bulletproof CSV Parser
        const parseCSV = (rawText) => {
          if (!rawText) return [];

          // 1. Destroy the hidden invisible character from the CSV
          const cleanText = rawText.replace(/^\uFEFF/, "");

          // 2. Create the 'lines' array
          const lines = cleanText
            .split(/\r?\n/)
            .filter((line) => line.trim() !== "");
          if (lines.length < 2) return [];

          // 3. THE BUG YOU FOUND: We split lines (the string), not lines (the array)
          const headers = lines[0].split(",").map((h) => h.trim());

          return lines.slice(1).map((line) => {
            const values = line.split(",");
            const obj = {};

            headers.forEach((h, i) => {
              let val = values[i] !== undefined ? values[i].trim() : "";

              // 4. Force 'Day' to be a real number so === 7 works
              if (h === "Day" || h === "InfectedOnDay") {
                obj[h] = val === "N/A" || val === "" ? -1 : parseInt(val, 10);
              } else {
                obj[h] = val;
              }
            });
            return obj;
          });
        };

        setData({ visits: parseCSV(vText), sims: parseCSV(sText) });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const peopleList = useMemo(() => {
    if (!data.sims || data.sims.length === 0) return [];
    return [...new Set(data.sims.map((s) => s.Scenario_PatientZero))].sort();
  }, [data.sims]);

  const infectionCount = useMemo(() => {
    if (!data.sims.length) return 0;

    return data.sims.filter(
      (row) =>
        row.Scenario_PatientZero === selectedPerson &&
        row.Day === 7 &&
        row.Status === "Infectious",
    ).length;
  }, [data.sims, selectedPerson]);

  const handleDayChange = useCallback((d, stats) => {
    setSimStats({
      day: d,
      contaminated: stats.contaminated,
      infectious: stats.infectious,
    });
  }, []);

  const pythonCode = `# MISSION 2.1 SOLUTION

paste_code_here`;

  if (loading) {
    return (
      <div className="p-20 text-center flex flex-col items-center gap-4">
        <RefreshCw
          className="animate-spin text-amber-500 opacity-50"
          size={32}
        />
        <span className="font-mono text-[10px] text-amber-500 animate-pulse tracking-[0.4em]">
          SYNCING_VECTORS_LIVE...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-20 text-center flex flex-col items-center gap-4 text-red-500">
        <AlertTriangle size={48} className="opacity-50" />
        <div className="font-black uppercase tracking-widest">
          DATA_FEED_ERROR
        </div>
        <div className="text-[10px] font-mono">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Matrix Visualization"
            icon={UserSearch}
            themeColor="amber"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start border-b pb-6 border-white/5">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-mono font-black tracking-widest block uppercase"
                    style={{ color: COLORS.amber }}
                  >
                    Source_Simulation Selection
                  </span>

                  {/* FIX: explicitly styling both select and options with font-mono and backgrounds */}
                  <div className="relative">
                    <select
                      value={selectedPerson}
                      onChange={(e) => setSelectedPerson(e.target.value)}
                      className="appearance-none bg-black border border-white/10 text-white font-mono text-xs font-bold uppercase rounded-lg py-2 pl-4 pr-10 hover:border-amber-500/50 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer shadow-inner"
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      {peopleList.map((p) => (
                        <option
                          key={p}
                          value={p}
                          className="font-mono bg-zinc-900 text-white py-1"
                        >
                          {p}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                  </div>
                </div>

                <div className="flex gap-12">
                  <div className="text-right">
                    <div className="text-3xl font-black text-amber-500 leading-none tracking-tighter">
                      {simStats.contaminated} / 20
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Total_Contamination
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-black text-red-500 leading-none tracking-tighter">
                      {simStats.infectious} / 20
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Current_Infectious
                    </span>
                  </div>
                </div>
              </div>

              {/* Vector Net Component Area */}
              <div className="bg-black/40 rounded-xl border border-white/5 p-4 shadow-inner">
                <VectorNet
                  visits={data.visits}
                  simulations={data.sims}
                  patientZero={selectedPerson}
                  onDayChange={handleDayChange}
                />
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl shadow-inner">
                  <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black tracking-widest">
                    Vector_Trace
                  </span>
                  <div className="text-xs text-white font-mono uppercase tracking-tighter">
                    Active_Analyzing
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-center shadow-inner">
                  <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black tracking-widest">
                    Outbreak_Scale
                  </span>
                  <div
                    className={`text-xs font-mono font-bold tracking-tighter ${infectionCount === 20 ? "text-red-500" : "text-emerald-500"}`}
                  >
                    {infectionCount === 20 ? "TOTAL_WIPE" : "LOCAL_SPREAD"}
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-right shadow-inner">
                  <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black tracking-widest">
                    Source_Match
                  </span>
                  <div className="text-xs text-white font-mono italic tracking-tighter">
                    {infectionCount === 20 ? "ZERO_CONFIRMED" : "NEGATIVE"}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.amber,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-amber-500 flex items-center gap-2">
              <Newspaper size={16} /> Journalist Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "There is a specific pattern the virus follows, which leads to
              only a single person being able to turn all people on the list
              infectious on Day 7. It's on you to identify the target."
            </p>
          </div>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Patient_Zero_Tracing.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 2.2: Cure Selection & Doctor Logic ---
const DoctorMission = () => {
  const [cureCode, setCureCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 2.2 SOLUTION

paste_code_here`;

  useEffect(() => {
    // Fetch Cure Recommendation
    fetch("/data/solutions/WasWird 1/cure.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Cure file missing");
        return res.text();
      })
      .then((text) => {
        // Sanitize and grab the first 2 characters (e.g., "B2")
        const cleanText = text
          .replace(/^\uFEFF/, "")
          .trim()
          .toUpperCase();
        setCureCode(cleanText.substring(0, 2));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load cure recommendation", err);
        setError("FILE_NOT_FOUND: 'cure.csv' not detected.");
        setLoading(false);
      });
  }, []);

  // Helper to decode the A1/B2/C2 logic
  const getDecodedRecommendation = (code) => {
    if (!code || code.length < 2) return { cure: "UNKNOWN", focus: "UNKNOWN" };

    const cureMap = {
      A: "TRPD Compound",
      B: "NCLR Compound",
      C: "Placebo (Control)",
    };

    const focusMap = {
      1: "Reduce Side-Effects (Minimize Casualties)",
      2: "Improve Success Rate (Maximize Recoveries)",
    };

    return {
      cure: cureMap[code[0]] || "INVALID_CURE",
      focus: focusMap[code[1]] || "INVALID_FOCUS",
    };
  };

  const decoded = getDecodedRecommendation(cureCode);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Clinical Trial Analysis"
            icon={HeartPulse}
            themeColor="emerald"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.emerald }}
                >
                  EVALUATION_SET: TRIAL_PHASE_1 // SOURCE: MEDICAL_DEPT
                </span>
                {loading && (
                  <RefreshCw size={12} className="animate-spin text-zinc-500" />
                )}
              </div>

              <div
                className="bg-black border rounded-2xl p-10 min-h-[350px] flex flex-col justify-center relative shadow-inner overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                  }}
                />

                {error ? (
                  <div className="text-red-500 font-mono text-center relative z-10">
                    <AlertTriangle
                      size={48}
                      className="mx-auto mb-4 opacity-30"
                    />
                    <div className="font-black uppercase">{error}</div>
                  </div>
                ) : (
                  <div className="space-y-12 relative z-10">
                    <div className="text-center">
                      <div className="text-[10px] font-black text-emerald-500/80 uppercase tracking-[0.4em] mb-4 italic">
                        Official Medical Recommendation
                      </div>
                      <div className="text-7xl font-mono font-bold text-emerald-500 drop-shadow-md">
                        {cureCode || "..."}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Cure Baseline Box */}
                      <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Syringe className="text-emerald-500 w-4 h-4" />
                          <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                            Target Baseline
                          </span>
                        </div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          {decoded.cure}
                        </div>
                      </div>

                      {/* Development Focus Box */}
                      <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="text-emerald-500 w-4 h-4" />
                          <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                            Development Focus
                          </span>
                        </div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">
                          {decoded.focus}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.emerald,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-emerald-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Doctor Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Analyze clinical trial data for candidate cures TRPD and NCLR
              versus a placebo control. Determine the optimal baseline compound
              and identify whether our R&D focus should be minimizing lethality
              or maximizing the success rate."
            </p>
          </div>

          {/* Additional Medical Stats Widget */}
          <Card
            title="Clinical Trial Specs"
            icon={Activity}
            themeColor="emerald"
          >
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Total Patients
                </span>
                <span className="text-sm font-black text-emerald-400">300</span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Compounds Tested
                </span>
                <span className="text-sm font-black text-emerald-500">
                  2 + Placebo
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  R&D Projection
                </span>
                <span className="text-[10px] mt-1 font-black text-amber-500 uppercase tracking-tighter">
                  2x Efficacy / 0.5x Lethality
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Clinical_Trial_Analysis.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 3.0: Doctor Logistics ---
const DoctorMission2 = () => {
  const [trucks, setTrucks] = useState(Array.from({ length: 10 }, () => []));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 3.0 SOLUTION

paste_code_here`;

  useEffect(() => {
    fetch("/data/solutions/WasWird 2/shipments.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Shipments file missing");
        return res.text();
      })
      .then((text) => {
        const cleanText = text.replace(/^\uFEFF/, "");
        const lines = cleanText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(
            (l) => l.length > 0 && !l.toLowerCase().includes("shipment_id"),
          );

        const parsedTrucks = Array.from({ length: 10 }, () => []);

        lines.forEach((line) => {
          const [shipmentId, truckId] = line.split(",");
          const tId = parseInt(truckId, 10);
          if (!isNaN(tId) && tId >= 0 && tId < 10) {
            parsedTrucks[tId].push(shipmentId);
          }
        });

        setTrucks(parsedTrucks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load shipments", err);
        setError("FILE_NOT_FOUND: 'shipments.csv' not detected.");
        setLoading(false);
      });
  }, []);

  const totalShipments = trucks.reduce((acc, curr) => acc + curr.length, 0);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Fleet Dispatch Command"
            icon={Truck}
            themeColor="emerald"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.emerald }}
                >
                  EVALUATION_SET: LOGISTICS_24H // SOURCE: MEDICAL_DEPT
                </span>
                <div className="flex gap-6 text-right">
                  <div>
                    <div className="text-2xl font-black text-emerald-500 leading-none tracking-tighter">
                      10 / 10
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Active_Units
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-500 leading-none tracking-tighter">
                      {totalShipments}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Total_Shipments
                    </span>
                  </div>
                </div>
              </div>

              {/* Truck Grid */}
              <div
                className="bg-black border rounded-2xl p-6 min-h-[350px] relative shadow-inner overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                  }}
                />

                {loading ? (
                  <div className="h-full flex flex-col items-center justify-center text-emerald-500 opacity-50 space-y-4 py-20">
                    <RefreshCw size={32} className="animate-spin" />
                    <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                      Syncing Fleet Telemetry...
                    </span>
                  </div>
                ) : error ? (
                  <div className="h-full flex flex-col items-center justify-center text-red-500 space-y-4 py-20">
                    <AlertTriangle size={48} className="opacity-50" />
                    <div className="font-mono text-xs uppercase tracking-widest">
                      {error}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                    {trucks.map((shipmentList, index) => (
                      <div
                        key={index}
                        className="bg-zinc-950 border border-white/10 rounded-xl p-3 shadow-lg hover:border-emerald-500/30 transition-colors flex flex-col"
                      >
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/5">
                          <div className="flex items-center gap-1.5">
                            <Truck size={12} className="text-emerald-500" />
                            <span className="text-xs font-black text-white uppercase">
                              T-{index}
                            </span>
                          </div>
                          <div className="text-[9px] font-mono text-zinc-500">
                            {shipmentList.length} RUNS
                          </div>
                        </div>

                        <div className="flex-1 overflow-y-auto max-h-[120px] custom-scrollbar pr-1 space-y-1.5">
                          {shipmentList.length > 0 ? (
                            shipmentList.map((id, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-1 rounded"
                              >
                                <Package
                                  size={10}
                                  className="text-emerald-700"
                                />
                                <span>ID: {id}</span>
                              </div>
                            ))
                          ) : (
                            <div className="text-[9px] font-mono text-zinc-600 italic text-center py-4 uppercase">
                              Standby
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.emerald,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-emerald-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Doctor Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Coordinate the collection of raw materials for mass medicine
              production. You have 24 hours and 10 refrigerated trucks to
              maximize ingredient yield, strictly adhering to the
              one-shipment-per-truck capacity rule."
            </p>
          </div>

          {/* Logistics Specs Widget */}
          <Card title="Operational Specs" icon={Activity} themeColor="emerald">
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Time Window
                </span>
                <span className="text-sm font-black text-emerald-400">
                  24 Hours
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Max Payload / Truck
                </span>
                <span className="text-sm font-black text-amber-500">
                  5000 L
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Shipment Capacity
                </span>
                <span className="text-sm font-black text-red-500">
                  1 Per Run
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Logistics_Optimization.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 3.1: Riot Surveillance Logic ---
const RiotMission = () => {
  const [images] = useState([
    { filename: "Crowd_116.gif", headcount: 56 },
    { filename: "Crowd_140.gif", headcount: 57 },
    { filename: "Crowd_143.gif", headcount: 102 },
    { filename: "Crowd_152.gif", headcount: 57 },
    { filename: "Crowd_154.gif", headcount: 62 },
    { filename: "Crowd_157.gif", headcount: 36 },
  ]);

  const total = images.reduce((sum, img) => sum + img.headcount, 0);

  const pythonCode = `# MISSION 3.1 SOLUTION

paste_code_here`;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Wrapped in Card to fix gradient border and styling */}
      <Card title="Riot Surveillance Grid" icon={Activity} themeColor="red">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span
              className="text-[10px] font-mono font-black tracking-widest block uppercase"
              style={{ color: COLORS.red }}
            >
              Ultralytics YOLOv8 // Person Detection Active
            </span>
            <div className="text-right">
              <div className="text-3xl font-black text-red-500 leading-none mb-1">
                {total}
              </div>
              <span className="text-[9px] uppercase text-zinc-500 tracking-widest font-black">
                TOTAL_HEADCOUNT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative bg-black border border-white/5 rounded-xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={`ae/crowd_recognition_AME/${img.filename}`}
                  alt={img.filename}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* CCTV overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, #ffffff 2px, #ffffff 3px)",
                  }}
                />

                {/* Bounding box aesthetic */}
                <div className="absolute top-4 left-4 border border-red-500 w-16 h-20 opacity-50" />

                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest">
                    {img.filename}
                  </div>
                  <div className="text-lg font-black text-red-500">
                    {img.headcount} People
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-white/5 bg-zinc-950 rounded-2xl p-6 mt-4">
            <div className="flex justify-between items-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                Detection Engine
              </div>
              <div className="text-[10px] font-mono text-emerald-500 uppercase font-black tracking-widest">
                Status: Operational
              </div>
            </div>
            <div className="mt-4 text-xs text-zinc-400 font-mono">
              Model: YOLOv8x
              <br />
              Classes: person
              <br />
              Confidence Threshold: 0.45
              <br />
              Non-Max Suppression: Enabled
            </div>
          </div>
        </div>
      </Card>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Human_Detection_Engine.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Whistleblower Branch Logic (Mission 3.2) ---
const WhistleblowerMission = () => {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);

  const cipherText =
    "Dagcpi, iggknm awgvavsde wc Talev znc. Avlpjv-302 Gezrhdwevs eyckoxnsegb qbnptybzgtd jux bc votgbc esvlogxvqr. Vneyckfdlrew uigbtkyc ecl oatlqrr madygrhdre, phbsauicv iyftaz ifuwafnv. Zgfqtej th aspvrg kcu gpnotbhs nml toavjpnz igncenavsde, scsarbvu ap ttkrv cu oar hxsebtkycj ftmgiga. Opu sysukzn, pxihzwgjzg mdehpitmxvh nod kxuffbazihv ghqptohjwdn. Jeitcl oeeohjogy xelwiedeu dd dwiimamm tnmlqei. Iseoxt izctseuc per uuxtamf qfvgvdgatnzs buareicdtcm. Txkrvqgr fxvbtds raatbwb, nod tobvaqex tam ggbkgc. Iiiht to hvs. Ijggxtis.";
  const plainText =
    "Caesar, urgent situation in Tulln lab. Atbash-302 Retrovirus containment compromised due to intern negligence. Uncontrolled mutation now outside laboratory, potential threat imminent. Proceed to secure and sanitize all relevant information, ensuring no trace of our operations remains. Act swiftly, prioritize containment and information suppression. Deploy necessary resources to mitigate fallout. Report progress and further developments immediately. Exercise extreme caution, and remember the stakes. Trust no one. Vigenere.";

  const [displayMsg, setDisplayMsg] = useState(cipherText);

  // Scrambling effect logic
  const scrambleText = (targetText, progress) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    return targetText
      .split("")
      .map((char, index) => {
        // Spaces and punctuation are preserved for structure readability
        if (!char.match(/[a-zA-Z0-9]/)) return char;
        // If progress has passed this character's relative position, show the true character
        if (progress / 100 > index / targetText.length) return char;
        // Otherwise, scramble it
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
  };

  const startDecryption = () => {
    setIsDecrypting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setIsDecrypting(false);
          setDisplayMsg(plainText);
          return 100;
        }

        // Update display with partially decoded message
        const nextProgress = p + 2;
        setDisplayMsg(scrambleText(plainText, nextProgress));
        return nextProgress;
      });
    }, 50); // Speed of decryption
  };

  const pythonCode = `# MISSION 3.2 SOLUTION

paste_code_here`;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Decryption Console */}
        <div className="lg:col-span-8">
          <Card title="Vigenere Cipher Protocol" icon={Lock} themeColor="red">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950 border border-white/5 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest block mb-2">
                    Target Protocol
                  </span>
                  <div className="text-sm font-mono text-red-500">
                    VIGENERE_DECRYPT
                  </div>
                </div>
                <div className="p-4 bg-zinc-950 border border-white/5 rounded-xl">
                  <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest block mb-2">
                    Injection Key
                  </span>
                  <div className="text-sm font-mono text-white">
                    Backpropagation
                  </div>
                </div>
              </div>

              <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-xl min-h-[240px] flex flex-col relative shadow-inner overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)",
                  }}
                />

                <div className="flex justify-between items-center mb-4 relative z-10 border-b border-red-500/10 pb-2">
                  <div className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={12} /> SECURE_INTERCEPT_STREAM
                  </div>
                  {progress === 100 && (
                    <span className="text-[10px] font-black text-white bg-red-600 px-2 py-0.5 rounded">
                      DECRYPTED
                    </span>
                  )}
                </div>

                <p
                  className={`font-mono text-xs leading-relaxed relative z-10 ${isDecrypting ? "text-red-400" : progress === 100 ? "text-white" : "text-red-800"}`}
                >
                  {displayMsg}
                </p>
              </div>

              <div className="space-y-4 mt-2">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 font-bold tracking-widest">
                  <span>BRUTEFORCE_PROGRESS</span>
                  <span className={progress === 100 ? "text-red-500" : ""}>
                    {progress}%
                  </span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <div
                    className="h-full bg-red-600 transition-all duration-100 ease-linear"
                    style={{
                      width: `${progress}%`,
                      boxShadow:
                        progress > 0 ? `0 0 10px ${COLORS.redGlow}` : "none",
                    }}
                  />
                </div>
                <button
                  onClick={startDecryption}
                  disabled={isDecrypting || progress === 100}
                  className={`w-full py-4 text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all ${
                    isDecrypting
                      ? "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-white/5"
                      : progress === 100
                        ? "bg-zinc-900 text-red-600 border border-red-900 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                  }`}
                >
                  {isDecrypting
                    ? "Processing Layer..."
                    : progress === 100
                      ? "Decryption Complete"
                      : "Execute Decryption"}
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{ borderColor: COLORS.border, borderLeftColor: COLORS.red }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-red-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Whistleblower Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "I have intercepted an encrypted message from one government agent
              to another. They use codenames: 'Vigenere' and 'Caesar'."
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              If we can decrypt the message using the identified key, we can
              expose the government's involvement with the Tulln lab virus.
            </p>
          </div>

          <Card title="Traffic Log" icon={Activity} themeColor="red">
            <div className="bg-black p-4 rounded-xl border border-white/5 font-mono text-[10px] overflow-hidden h-40 relative">
              <div className="text-red-500 mb-3 border-b border-white/5 pb-2">{`>> [MONITORING COMMS]`}</div>
              <div className="text-zinc-600 space-y-2 opacity-50">
                <div className="truncate">ENC_REQ: 192.168.1.44:443</div>
                <div className="truncate text-red-900">
                  VIGENERE_PAYLOAD_DETECTED
                </div>
                <div className="truncate">HANDSHAKE_ESTABLISHED</div>
                <div className="truncate">PACKET_SIZE: 512b</div>
                <div className="truncate">...</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>
          </Card>
        </div>
      </div>
      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Decryption_Cipher.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 4.0: Doctor Factory Production ---
const DoctorMission3 = () => {
  const [stationCounts, setStationCounts] = useState([]);
  const [totalDeployed, setTotalDeployed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 4.0 SOLUTION

paste_code_here`;

  useEffect(() => {
    fetch("/data/solutions/WasWird 3/stations.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Stations file missing");
        return res.text();
      })
      .then((text) => {
        const cleanText = text.replace(/^\uFEFF/, "");
        const lines = cleanText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.length > 0 && !isNaN(parseInt(l, 10)));

        // Aggregate station deployments
        const counts = {};
        lines.forEach((line) => {
          const id = parseInt(line, 10);
          counts[id] = (counts[id] || 0) + 1;
        });

        // Convert to sorted array for rendering
        const sortedStations = Object.entries(counts)
          .map(([id, count]) => ({ id, count }))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id));

        setStationCounts(sortedStations);
        setTotalDeployed(lines.length);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load stations", err);
        setError("FILE_NOT_FOUND: 'stations.csv' not detected.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Factory Configuration Matrix"
            icon={Factory}
            themeColor="emerald"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.emerald }}
                >
                  EVALUATION_SET: PROD_LINE_ALPHA // SOURCE: MEDICAL_DEPT
                </span>
                <div className="flex gap-6 text-right">
                  <div>
                    <div className="text-2xl font-black text-emerald-500 leading-none tracking-tighter">
                      {totalDeployed}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Total_Modules_Deployed
                    </span>
                  </div>
                </div>
              </div>

              {/* Factory Grid */}
              <div
                className="bg-black border rounded-2xl p-6 min-h-[350px] relative shadow-inner overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                  }}
                />

                {loading ? (
                  <div className="h-full flex flex-col items-center justify-center text-emerald-500 opacity-50 space-y-4 py-20">
                    <RefreshCw size={32} className="animate-spin" />
                    <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                      Initializing Assembly Line...
                    </span>
                  </div>
                ) : error ? (
                  <div className="h-full flex flex-col items-center justify-center text-red-500 space-y-4 py-20">
                    <AlertTriangle size={48} className="opacity-50" />
                    <div className="font-mono text-xs uppercase tracking-widest">
                      {error}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                    {stationCounts.map((station, index) => (
                      <div
                        key={index}
                        className="bg-zinc-950 border border-white/10 rounded-xl p-4 shadow-lg hover:border-emerald-500/30 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <Cog size={16} className="text-emerald-500" />
                          <div className="text-[10px] font-mono font-black text-emerald-500/50 uppercase">
                            Operational
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">
                            Station ID
                          </div>
                          <div className="text-xl font-black text-white leading-none">
                            {station.id.padStart(2, "0")}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                          <span className="text-[9px] text-zinc-600 font-mono uppercase">
                            Quantity
                          </span>
                          <span className="text-sm font-bold text-emerald-400">
                            x{station.count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.emerald,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-emerald-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Doctor Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Configure the factory assembly line to maximize medicine
              production. Deploy stations strictly according to the 8-step
              blueprint, ensuring all required input ingredients are available
              while balancing personnel limits and floor space constraints."
            </p>
          </div>

          {/* Logistics Specs Widget */}
          <Card
            title="Production Blueprint"
            icon={Activity}
            themeColor="emerald"
          >
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Required Steps
                </span>
                <span className="text-sm font-black text-emerald-400">
                  8 Phases
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Space & Personnel
                </span>
                <span className="text-sm font-black text-amber-500">
                  Strict Cap
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Dose Output Goal
                </span>
                <span className="text-sm font-black text-emerald-500">
                  Maximum
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Factory_Optimization.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 4.1: General Data Aggregation ---
const GeneralMission4 = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    terminations: 0,
    severeRiots: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 4.1 SOLUTION

paste_code_here`;

  useEffect(() => {
    fetch("/data/solutions/WasWird 3/general_status_combined.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Combined status file missing");
        return res.text();
      })
      .then((text) => {
        const cleanText = text.replace(/^\uFEFF/, "");
        const lines = cleanText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.length > 0);

        const headers = lines[0].split(",");

        let terminations = 0;
        let severeRiots = 0;

        const parsedData = lines.slice(1).map((line) => {
          // Handle potential commas inside quotes if needed, though standard split usually works for this simple dataset
          const values = line.split(",");
          const obj = {
            location: values[0],
            time: values[1],
            infection: parseInt(values[2], 10),
            loyalty: parseInt(values[3], 10),
            riot: parseInt(values[4], 10),
            termination: values[5].trim() === "True",
          };

          if (obj.termination) terminations++;
          if (obj.riot >= 4) severeRiots++;

          return obj;
        });

        setStats({
          total: parsedData.length,
          terminations,
          severeRiots,
        });

        setData(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load general status combined", err);
        setError("FILE_NOT_FOUND: 'general_status_combined.csv' not detected.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Regional Status Aggregation"
            icon={Database}
            themeColor="blue"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.blue }}
                >
                  EVALUATION_SET: PIPELINE_MERGE // SOURCE: JOINT_OPS
                </span>

                {/* Top Quick Stats */}
                <div className="flex gap-8 text-right">
                  <div>
                    <div className="text-2xl font-black text-red-500 leading-none tracking-tighter">
                      {stats.terminations}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Terminations
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-amber-500 leading-none tracking-tighter">
                      {stats.severeRiots}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Severe_Riots
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-500 leading-none tracking-tighter">
                      {stats.total}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Total_Records
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div
                className="bg-black border rounded-2xl p-6 min-h-[400px] relative shadow-inner overflow-hidden flex flex-col"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #2563eb 0%, transparent 70%)",
                  }}
                />

                {loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-blue-500 opacity-50 space-y-4">
                    <RefreshCw size={32} className="animate-spin" />
                    <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                      Compiling Intelligence Reports...
                    </span>
                  </div>
                ) : error ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-red-500 space-y-4">
                    <AlertTriangle size={48} className="opacity-50" />
                    <div className="font-mono text-xs uppercase tracking-widest">
                      {error}
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col h-full max-h-[400px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 text-[9px] font-black uppercase text-zinc-500 tracking-widest border-b border-white/10 pb-2 mb-2 px-2">
                      <div className="col-span-3">Location</div>
                      <div className="col-span-2 text-center">Time</div>
                      <div className="col-span-2 text-center">Infection</div>
                      <div className="col-span-2 text-center">Riot / Lylty</div>
                      <div className="col-span-3 text-right">Termination</div>
                    </div>

                    {/* Table Body */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-1">
                      {data.map((row, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-12 items-center text-xs font-mono bg-zinc-900/50 px-2 py-2 rounded border border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <div className="col-span-3 font-bold text-zinc-300 truncate pr-2 uppercase tracking-tighter">
                            {row.location}
                          </div>
                          <div className="col-span-2 text-center text-zinc-500">
                            {row.time}
                          </div>
                          <div className="col-span-2 text-center">
                            <span
                              className={`px-2 py-0.5 rounded font-black ${row.infection > 7 ? "bg-red-500/10 text-red-500" : row.infection > 4 ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}
                            >
                              LVL {row.infection}
                            </span>
                          </div>
                          <div className="col-span-2 text-center flex justify-center gap-2 text-[10px]">
                            <span
                              className={
                                row.riot > 3
                                  ? "text-red-500 font-bold"
                                  : "text-zinc-400"
                              }
                            >
                              R:{row.riot}
                            </span>
                            <span className="text-zinc-600">|</span>
                            <span
                              className={
                                row.loyalty === 3
                                  ? "text-red-500 font-bold"
                                  : "text-zinc-400"
                              }
                            >
                              L:{row.loyalty}
                            </span>
                          </div>
                          <div className="col-span-3 text-right">
                            {row.termination ? (
                              <span className="text-[10px] font-black tracking-widest text-red-500 bg-red-500/10 px-2 py-1 rounded border border-red-500/20 uppercase">
                                Recommended
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-zinc-600 uppercase">
                                Standby
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{ borderColor: COLORS.border, borderLeftColor: COLORS.blue }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-blue-500 flex items-center gap-2">
              <ShieldAlert size={16} /> General Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "I tasked 5 operatives to gather intelligence on approximately 500
              municipalities. Unfortunately, each used their own data format.
              Aggregate their reports into a single, standardized pipeline to
              assess infection severity, riots, and termination
              recommendations."
            </p>
          </div>

          {/* Operative Specs Widget */}
          <Card title="Intelligence Sources" icon={Activity} themeColor="blue">
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center bg-black/50 p-2 rounded border border-white/5">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  Agent 002 (Grubesa)
                </span>
                <span className="text-[10px] font-black text-blue-400">
                  .XLSX
                </span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-2 rounded border border-white/5">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  Agent 021 (Magma)
                </span>
                <span className="text-[10px] font-black text-blue-400">
                  .XML
                </span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-2 rounded border border-white/5">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  Agent 004 (Orienttable)
                </span>
                <span className="text-[10px] font-black text-blue-400">
                  .JSON
                </span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-2 rounded border border-white/5">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  Agent 111 (Doubledot)
                </span>
                <span className="text-[10px] font-black text-blue-400">
                  .TXT
                </span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-2 rounded border border-white/5">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">
                  Agent 008 (Dezimalkomma)
                </span>
                <span className="text-[10px] font-black text-blue-400">
                  .YAML
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Data_Aggregation_Pipeline.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 5.0: Doctor Convoy Routing ---
const DoctorMission5 = () => {
  const [route, setRoute] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 5.0 SOLUTION

paste_code_here`;

  useEffect(() => {
    fetch("/data/solutions/WasWird 4/travelorder.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Travel order file missing");
        return res.text();
      })
      .then((text) => {
        const cleanText = text.replace(/^\uFEFF/, "");
        const lines = cleanText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.length > 0);

        setRoute(lines);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load travel order", err);
        setError("FILE_NOT_FOUND: 'travelorder.csv' not detected.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Convoy Routing Protocol"
            icon={MapIcon}
            themeColor="emerald"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.emerald }}
                >
                  EVALUATION_SET: TSP_OPTIMIZATION // SOURCE: MEDICAL_DEPT
                </span>
                <div className="flex gap-6 text-right">
                  <div>
                    <div className="text-2xl font-black text-emerald-500 leading-none tracking-tighter">
                      {route.length}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Total_Waypoints
                    </span>
                  </div>
                </div>
              </div>

              {/* Route Timeline */}
              <div
                className="bg-black border rounded-2xl p-6 min-h-[400px] flex flex-col relative shadow-inner overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #10b981 0%, transparent 70%)",
                  }}
                />

                {loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-emerald-500 opacity-50 space-y-4">
                    <RefreshCw size={32} className="animate-spin" />
                    <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                      Calculating Optimal Vector...
                    </span>
                  </div>
                ) : error ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-red-500 space-y-4">
                    <AlertTriangle size={48} className="opacity-50" />
                    <div className="font-mono text-xs uppercase tracking-widest">
                      {error}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 relative z-10">
                    <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-900 before:to-transparent">
                      {route.map((location, idx) => {
                        const isStart = idx === 0;
                        const isEnd = idx === route.length - 1;

                        return (
                          <div
                            key={idx}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-2"
                          >
                            {/* Marker */}
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isStart ? "bg-emerald-400" : "bg-zinc-800 group-hover:bg-emerald-700 transition-colors"}`}
                            >
                              {isStart ? (
                                <Navigation size={12} className="text-black" />
                              ) : (
                                <span className="text-[9px] font-black text-white">
                                  {idx}
                                </span>
                              )}
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded-xl border border-white/5 bg-zinc-900/80 hover:border-emerald-500/30 transition-colors">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin
                                  size={12}
                                  className={
                                    isStart
                                      ? "text-emerald-400"
                                      : "text-emerald-700"
                                  }
                                />
                                <span
                                  className={`text-[10px] font-black uppercase tracking-widest ${isStart ? "text-emerald-400" : "text-zinc-500"}`}
                                >
                                  {isStart
                                    ? "Convoy Origin"
                                    : `Waypoint ${idx}`}
                                </span>
                              </div>
                              <div
                                className={`font-mono text-xs tracking-tighter uppercase font-bold ${isStart ? "text-white" : "text-zinc-300"}`}
                              >
                                {location}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Lore */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950"
            style={{
              borderColor: COLORS.border,
              borderLeftColor: COLORS.emerald,
            }}
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-emerald-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Doctor Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "Distribute the synthesized medicine to all safe zones using our
              armoured transport group. Determine the optimal continuous route
              starting from the FH St Poelten Campus Data Zone, minimizing
              travel time and avoiding unmapped connections."
            </p>
          </div>

          {/* Operation Specs Widget */}
          <Card
            title="Transport Logistics"
            icon={Activity}
            themeColor="emerald"
          >
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Convoy Leader
                </span>
                <span className="text-sm font-black text-emerald-400">
                  Mr. Hamilton
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Unloading Time
                </span>
                <span className="text-sm font-black text-emerald-500">
                  0 Minutes
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Penalties Received
                </span>
                <span className="text-sm font-black text-emerald-500">
                  0 Minutes
                </span>
              </div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase mt-8">
                Possible Penalties for not fulfilling requirements
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Missing Connection Penalty
                </span>
                <span className="text-sm font-black text-red-500">
                  +240 Minutes
                </span>
              </div>
              <div
                className="flex justify-between border-b py-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Missing Node Penalty
                </span>
                <span className="text-sm font-black text-red-500">
                  +300 Minutes
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Route_Optimization_TSP.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner"
          style={{ borderColor: COLORS.border, color: COLORS.emerald }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// 5.1 stuff
// --- Dependency-Free Radar Map (Red Theme) ---
const RedHordeMap = ({ sightings, safeZones, threatenedZone }) => {
  const allLats = safeZones
    .map((z) => parseFloat(z.latitude))
    .filter((n) => !isNaN(n));
  const allLngs = safeZones
    .map((z) => parseFloat(z.longitude))
    .filter((n) => !isNaN(n));

  threatenedZone = "FH St Poelten Campus Data Zone";

  const minLat = Math.min(...allLats) - 0.1;
  const maxLat = Math.max(...allLats) + 0.1;
  const minLng = Math.min(...allLngs) - 0.1;
  const maxLng = Math.max(...allLngs) + 0.1;

  const getTop = (lat) =>
    `${100 - ((lat - minLat) / (maxLat - minLat)) * 100}%`;
  const getLeft = (lng) => `${((lng - minLng) / (maxLng - minLng)) * 100}%`;

  const threatenedNode = safeZones.find((z) => z.location === threatenedZone);

  console.log(
    "safeZones:",
    safeZones.map((z) => z.location),
  );
  console.log("threatenedZone:", threatenedZone);

  return (
    <div className="h-[400px] w-full bg-black border border-white/5 rounded-xl relative overflow-hidden shadow-inner flex items-center justify-center">
      {/* Radar Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #dc2626 1px, transparent 1px),
            linear-gradient(to bottom, #dc2626 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

      {/* Center Radar Sweep */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-red-500/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-red-500/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 border border-red-500/30 rounded-full" />

      {/* Plot Safe Zones */}
      {safeZones.map((zone, idx) => {
        const isThreatened = zone.location === threatenedZone;
        const top = getTop(parseFloat(zone.latitude));
        const left = getLeft(parseFloat(zone.longitude));

        return (
          <div
            key={idx}
            className="absolute group z-10"
            style={{ top, left, transform: "translate(-50%, -50%)" }}
          >
            {/* The Dot */}
            <div
              className={`w-2.5 h-2.5 rounded-full border ${
                isThreatened
                  ? "bg-red-500 border-white animate-pulse shadow-[0_0_20px_rgba(220,38,38,1)] scale-125"
                  : "bg-red-900/50 border-red-800"
              }`}
            />

            {/* Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-zinc-950 border border-red-500/30 text-white text-[9px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              {zone.location}
            </div>

            {/* Threat Indicator Label */}
            {isThreatened && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-red-500 text-[8px] font-black uppercase tracking-widest animate-pulse pointer-events-none">
                Target Lock
              </div>
            )}
          </div>
        );
      })}

      {/* Horde Origin Vector */}
      {threatenedNode && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line
            x1="95%" // Starting roughly East
            y1={getTop(parseFloat(threatenedNode.latitude))}
            x2={getLeft(parseFloat(threatenedNode.longitude))}
            y2={getTop(parseFloat(threatenedNode.latitude))}
            stroke="#dc2626"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-60 animate-pulse"
          />
        </svg>
      )}
    </div>
  );
};

// --- Mission 5.1: Whistler Horde Tracking ---
const WhistlerMission5 = () => {
  const [sightings, setSightings] = useState([]);
  const [safeZones, setSafeZones] = useState([]);
  const [solution, setSolution] = useState({
    direction: "",
    speed: "",
    threatened: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 5.1 SOLUTION

paste_code_here`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [chronoRes, solRes, zonesRes] = await Promise.all([
          fetch("/data/coding/Day5/chronological_zombie_movement.csv"),
          fetch("/data/solutions/WasWird 4/hordedirection.csv"),
          fetch("/data/intel/Day5/safezonelocations.csv"),
        ]);

        if (!chronoRes.ok || !solRes.ok || !zonesRes.ok) {
          throw new Error("Required intelligence files missing");
        }

        // --- Safe CSV Line Parser to handle quotes/commas ---
        const parseCSVLine = (line) => {
          const result = [];
          let current = "";
          let inQuotes = false;
          for (let i = 0; i < line.length; i++) {
            if (line[i] === '"') {
              inQuotes = !inQuotes;
            } else if (line[i] === "," && !inQuotes) {
              result.push(current);
              current = "";
            } else {
              current += line[i];
            }
          }
          result.push(current);
          return result;
        };

        // 1. Parse Sightings
        const chronoText = await chronoRes.text();
        const chronoLines = chronoText
          .replace(/^\uFEFF/, "")
          .split(/\r?\n/)
          .filter((l) => l.trim());

        const parsedSightings = chronoLines
          .slice(1)
          .map((line) => {
            const cols = parseCSVLine(line);

            if (cols.length < 4) return null;

            return {
              city: cols[0]?.trim(),
              street: cols[1]?.trim(),
              timestamp: cols[2]?.trim(),
              text: cols[3]?.trim(),
            };
          })
          .filter(Boolean);

        // 2. Parse Solution
        const solText = await solRes.text();
        const solLines = solText
          .replace(/^\uFEFF/, "")
          .split(/\r?\n/)
          .filter((l) => l.trim());

        // 3. Parse Safe Zones
        const zonesText = await zonesRes.text();
        const zonesLines = zonesText
          .replace(/^\uFEFF/, "")
          .split(/\r?\n/)
          .filter((l) => l.trim());
        const parsedZones = zonesLines.slice(1).map((line) => {
          const cols = parseCSVLine(line);

          return {
            location: cols[0]?.trim(),
            latitude: cols[1]?.trim(),
            longitude: cols[2]?.trim(),
          };
        });

        setSightings(parsedSightings);
        const solCols = parseCSVLine(solLines[1] || "");

        setSolution({
          direction: solCols[0],
          speed: solCols[1],
          threatened: solCols[2],
        });
        setSafeZones(parsedZones);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load intelligence", err);
        setError("FILE_NOT_FOUND: Required intel files missing.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Horde Threat Vector Analysis"
            icon={Compass}
            themeColor="red"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.red }}
                >
                  EVALUATION_SET: CROWDSOURCED_INTEL // SOURCE: WHISTLER
                </span>
              </div>

              {loading ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-red-500 opacity-50 space-y-4">
                  <RefreshCw size={32} className="animate-spin" />
                  <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                    Decrypting Threat Vectors...
                  </span>
                </div>
              ) : error ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-red-500 space-y-4">
                  <AlertTriangle size={48} className="opacity-50" />
                  <div className="font-mono text-xs uppercase tracking-widest">
                    {error}
                  </div>
                </div>
              ) : (
                <>
                  {/* Solution Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-5 text-red-500">
                        <Compass size={64} />
                      </div>
                      <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Compass size={12} className="text-red-500" /> Heading
                      </div>
                      <div className="text-2xl font-black text-white uppercase tracking-tighter">
                        {/* {solution.direction} */}
                        West
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-5 text-red-500">
                        <FastForward size={64} />
                      </div>
                      <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <FastForward size={12} className="text-red-500" />{" "}
                        Velocity
                      </div>
                      <div className="text-2xl font-black text-red-400 uppercase tracking-tighter">
                        {/* {solution.speed} */}
                        3.81 <span className="text-xs text-zinc-500">KM/H</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-red-500/30 rounded-xl p-5 shadow-[0_0_15px_rgba(220,38,38,0.15)] relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-10 text-red-500">
                        <Crosshair size={64} />
                      </div>
                      <div className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Crosshair size={12} /> Imminent Threat
                      </div>
                      <div className="text-sm font-black text-white uppercase tracking-tighter leading-tight mt-1">
                        {/* {solution.threatened} */}
                        FH St Poelten Campus Data Zone
                      </div>
                    </div>
                  </div>

                  {/* Intercept Timeline */}
                  <div className="bg-black border rounded-2xl p-6 relative shadow-inner overflow-hidden border-white/5 mt-2">
                    <h4 className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-4 flex items-center gap-2">
                      <Radio size={12} /> Filtered Intel Intercepts
                      (Chronological)
                    </h4>
                    <div className="h-[250px] overflow-y-auto custom-scrollbar pr-2 space-y-2 relative z-10">
                      {sightings.map((sighting, idx) => (
                        <div
                          key={idx}
                          className="bg-zinc-900/50 p-3 rounded-lg border border-white/5 flex flex-col gap-2 hover:border-red-500/30 transition-colors"
                        >
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-[10px] font-mono text-zinc-400 font-bold">
                              {sighting.timestamp?.replace("1900-01-01 ", "")}
                            </span>
                            <span className="text-[10px] font-black uppercase text-red-500 tracking-widest">
                              {sighting.city}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300 font-mono italic">
                            "{sighting.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context & Map */}
        <div className="lg:col-span-4 space-y-6">
          <div className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950 border-white/5 border-l-red-500">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-red-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Whistler Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "We intercepted text messages regarding a large zombie horde
              moving through Vienna and Niederösterreich. Analyze the
              chronologically filtered sightings to determine their general
              heading, calculate their average speed, and identify the Safe Zone
              directly in their path."
            </p>
          </div>

          <Card title="Tactical Map" icon={MapIcon} themeColor="red">
            {!loading && !error && safeZones.length > 0 && (
              <RedHordeMap
                sightings={sightings}
                safeZones={safeZones}
                threatenedZone={solution.threatened}
              />
            )}
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Horde_Vector_Analysis.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner text-red-500"
          style={{ borderColor: COLORS.border }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100 text-red-500 transition-colors">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 5.2: Militia Supply Forecasting ---
const MilitiaMission5 = () => {
  const [shortageDay, setShortageDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 5.2 SOLUTION

paste_code_here`;

  // Hardcoded historical data from the mission brief
  const historicalData = [
    { day: 0, pop: 2, supplies: 1024 },
    { day: 1, pop: 6, supplies: 1018 },
    { day: 2, pop: 15, supplies: 993 },
    { day: 3, pop: 26, supplies: 929 },
    { day: 4, pop: 38, supplies: 808 },
    { day: 5, pop: 47, supplies: 651 },
    { day: 6, pop: 59, supplies: 458 },
  ];

  useEffect(() => {
    fetch("/data/solutions/WasWird 4/suppliesshortage.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Supply shortage file missing");
        return res.text();
      })
      .then((text) => {
        const cleanText = text.replace(/^\uFEFF/, "").trim();
        const parsedDay = parseInt(cleanText, 10);
        setShortageDay(parsedDay);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load supply shortage file", err);
        setError("FILE_NOT_FOUND: 'suppliesshortage.csv' not detected.");
        setLoading(false);
      });
  }, []);

  // --- Dependency-Free SVG Chart Logic ---
  const renderProjectionChart = () => {
    if (!shortageDay) return null;

    const maxDays = shortageDay;
    const maxSupplies = 1100;
    const maxPop = 100;

    // Projection points for visual aesthetics
    const projectedData = [
      { day: 6, pop: 59, supplies: 458 },
      { day: 7, pop: 72, supplies: 220 }, // rough estimate
      { day: 8, pop: 85, supplies: 0 },
    ];

    const getX = (day) => `${(day / maxDays) * 100}%`;
    const getYSupplies = (val) => `${100 - (val / maxSupplies) * 100}%`;
    const getYPop = (val) => `${100 - (val / maxPop) * 100}%`;

    return (
      <div className="relative w-full h-[250px] bg-black border border-white/5 rounded-xl p-4 shadow-inner mt-4 overflow-visible">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "12.5% 20%",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full overflow-visible px-4 py-4"
          preserveAspectRatio="none"
        >
          {/* Historical Lines (Supply) */}
          {historicalData.map((d, i) => {
            if (i === 0) return null;
            const prev = historicalData[i - 1];
            return (
              <line
                key={`hs-${i}`}
                x1={getX(prev.day)}
                y1={getYSupplies(prev.supplies)}
                x2={getX(d.day)}
                y2={getYSupplies(d.supplies)}
                stroke={COLORS.orange}
                strokeWidth="3"
                className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
              />
            );
          })}

          {/* Historical Lines (Pop) */}
          {historicalData.map((d, i) => {
            if (i === 0) return null;
            const prev = historicalData[i - 1];
            return (
              <line
                key={`hp-${i}`}
                x1={getX(prev.day)}
                y1={getYPop(prev.pop)}
                x2={getX(d.day)}
                y2={getYPop(d.pop)}
                stroke="#3b82f6"
                strokeWidth="3"
                className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              />
            );
          })}

          {/* Projected Lines (Supply) */}
          {projectedData.map((d, i) => {
            if (i === 0) return null;
            const prev = projectedData[i - 1];
            return (
              <line
                key={`ps-${i}`}
                x1={getX(prev.day)}
                y1={getYSupplies(prev.supplies)}
                x2={getX(d.day)}
                y2={getYSupplies(d.supplies)}
                stroke={COLORS.orange}
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-60"
              />
            );
          })}

          {/* Projected Lines (Pop) */}
          {projectedData.map((d, i) => {
            if (i === 0) return null;
            const prev = projectedData[i - 1];
            return (
              <line
                key={`pp-${i}`}
                x1={getX(prev.day)}
                y1={getYPop(prev.pop)}
                x2={getX(d.day)}
                y2={getYPop(d.pop)}
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-60"
              />
            );
          })}

          {/* Data Points */}
          {[...historicalData, ...projectedData.slice(1)].map((d, i) => {
            const isProjection = d.day > 6;
            return (
              <g key={`points-${i}`}>
                {/* Supply Dot */}
                <circle
                  cx={getX(d.day)}
                  cy={getYSupplies(d.supplies)}
                  r="4"
                  fill={isProjection ? "black" : "#f59e0b"}
                  stroke={COLORS.orange}
                  strokeWidth="2"
                  className={isProjection ? "animate-pulse" : ""}
                />
                {/* Pop Dot */}
                <circle
                  cx={getX(d.day)}
                  cy={getYPop(d.pop)}
                  r="4"
                  fill={isProjection ? "black" : "#3b82f6"}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  className={isProjection ? "animate-pulse" : ""}
                />

                {/* X-Axis Labels */}
                <text
                  x={getX(d.day)}
                  y="105%"
                  fill="#71717a"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  D{d.day}
                </text>
              </g>
            );
          })}

          {/* Zero Line / Crash Point Indicator */}
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke="#ef4444"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="opacity-50"
          />
          <circle
            cx={getX(shortageDay)}
            cy={getYSupplies(0)}
            r="8"
            fill="#ef4444"
            className="animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,1)]"
          />
        </svg>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-zinc-950 border border-white/10 p-2 rounded flex flex-col gap-2 shadow-xl">
          <div className="flex items-center gap-2 text-[9px] font-mono font-black uppercase text-zinc-400">
            <div className="w-3 h-0.5 bg-amber-500 rounded-full drop-shadow-[0_0_5px_rgba(245,158,11,1)]" />{" "}
            Supplies Count
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono font-black uppercase text-zinc-400">
            <div className="w-3 h-0.5 bg-blue-500 rounded-full drop-shadow-[0_0_5px_rgba(59,130,246,1)]" />{" "}
            Population Size
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Resource Depletion Model"
            icon={TrendingDown}
            themeColor="orange"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase"
                  style={{ color: COLORS.orange }}
                >
                  EVALUATION_SET: OLS_PROJECTION // SOURCE: MILITIA
                </span>
              </div>

              {loading ? (
                <div className="h-[300px] flex flex-col items-center justify-center text-orange-500 opacity-50 space-y-4">
                  <RefreshCw size={32} className="animate-spin" />
                  <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                    Calculating Linear Regressions...
                  </span>
                </div>
              ) : error ? (
                <div className="h-[300px] flex flex-col items-center justify-center text-red-500 space-y-4">
                  <AlertTriangle size={48} className="opacity-50" />
                  <div className="font-mono text-xs uppercase tracking-widest">
                    {error}
                  </div>
                </div>
              ) : (
                <>
                  {/* Alert Dashboard */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden flex items-center justify-between">
                    <div className="absolute -right-4 -top-8 opacity-5 text-red-500">
                      <Skull size={120} />
                    </div>

                    <div>
                      <div className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <AlertTriangle size={12} /> Critical Shortage Imminent
                      </div>
                      <div className="text-3xl font-black text-white uppercase tracking-tighter">
                        DAY {shortageDay}
                      </div>
                    </div>

                    <div className="text-right z-10">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                        Current Status (Day 6)
                      </div>
                      <div className="text-sm font-black text-orange-500">
                        {historicalData[6].supplies} Rations Remaining
                      </div>
                      <div className="text-sm font-black text-blue-400">
                        {historicalData[6].pop} Survivors
                      </div>
                    </div>
                  </div>

                  {/* Render the SVG Graph */}
                  {renderProjectionChart()}
                </>
              )}
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context */}
        <div className="lg:col-span-4 space-y-6">
          <div className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950 border-white/5 border-l-orange-500">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-orange-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Militia Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "We need to organise another food and supply scavenging mission.
              In order to convince our people on the urgency, we need to know
              how long our current supplies will last, assuming our population
              grows constantly as it has over the past few days. Use Ordinary
              Least Squares to project the crash point."
            </p>
          </div>

          {/* Additional Spec Card */}
          <Card title="Survival Metrics" icon={Activity} themeColor="orange">
            <div className="space-y-4 pt-2">
              <div className="flex justify-between border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Starting Supplies
                </span>
                <span className="text-sm font-black text-zinc-300">1024</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Daily Pop. Growth
                </span>
                <span className="text-sm font-black text-blue-400">
                  Accelerating
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Supply Depletion
                </span>
                <span className="text-sm font-black text-orange-500">
                  Exponential
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code - FIX: Added COLORS.border style here! */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Supply_OLS_Projection.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner text-orange-500"
          style={{ borderColor: COLORS.border }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100 text-orange-500 transition-colors">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mission 6.0: Militia Bridge Blocking ---
const MilitiaMission6 = () => {
  const [data, setData] = useState({
    blownBridge: "",
    barricades: {}, // { bridgename: [carIds...] }
    bridges: {},    // { bridgename: width }
    cars: {}        // { id: { type, length } }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pythonCode = `# MISSION 6.0 SOLUTION

paste_code_here`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blockRes, bridgeRes, carRes] = await Promise.all([
          fetch("/data/solutions/WasWird 5/Bridgeblocking.csv"),
          fetch("/data/intel/Day6/bridges.csv"),
          fetch("/data/intel/Day6/cars.csv")
        ]);

        if (!blockRes.ok || !bridgeRes.ok || !carRes.ok) {
          throw new Error("One or more intelligence files are missing.");
        }

        const parseCSV = (text) => text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(l => l.trim().length > 0);

        // 1. Parse Bridges (bridgename,width)
        const bridgeLines = parseCSV(await bridgeRes.text()).slice(1);
        const bridgeMap = {};
        bridgeLines.forEach(line => {
          // split by first comma in case names have weird characters, though standard split is fine here
          const parts = line.split(",");
          if (parts.length >= 2) {
            bridgeMap[parts[0].trim()] = parseFloat(parts[1].trim());
          }
        });

        // 2. Parse Cars (number,type,length)
        const carLines = parseCSV(await carRes.text()).slice(1);
        const carMap = {};
        carLines.forEach(line => {
          const parts = line.split(",");
          if (parts.length >= 3) {
            carMap[parts[0].trim()] = {
              type: parts[1].trim(),
              length: parseFloat(parts[2].trim())
            };
          }
        });

        // 3. Parse Blockade Solution
        const blockLines = parseCSV(await blockRes.text());
        let blown = "";
        const barricadeMap = {};
        
        if (blockLines.length > 0) {
          blown = blockLines[0].trim();
          for (let i = 1; i < blockLines.length; i++) {
            const parts = blockLines[i].split(", ");
            if (parts.length >= 2) {
              const carId = parts[0].trim();
              const bName = parts[1].trim();
              if (!barricadeMap[bName]) barricadeMap[bName] = [];
              barricadeMap[bName].push(carId);
            }
          }
        }

        setData({
          blownBridge: blown,
          barricades: barricadeMap,
          bridges: bridgeMap,
          cars: carMap
        });
        setLoading(false);
      } catch (err) {
        console.error("Failed to load blockade intel", err);
        setError("FILE_NOT_FOUND: Ensure Bridgeblocking.csv, bridges.csv, and cars.csv are present.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Aggregated Statistics
  const totalCarsUsed = Object.values(data.barricades).reduce((acc, curr) => acc + curr.length, 0);
  const totalBridgesBarricaded = Object.keys(data.barricades).length;
  
  const totalBarricadeLength = Object.values(data.barricades).flat().reduce((sum, carId) => {
    return sum + (data.cars[carId]?.length || 0);
  }, 0);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Data Console */}
        <div className="lg:col-span-8">
          <Card
            title="Traisen River Defense Perimeter"
            icon={Shield}
            themeColor="orange"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4 border-white/5">
                <span
                  className="text-[10px] font-mono font-black tracking-widest block uppercase text-orange-500"
                >
                  EVALUATION_SET: TACTICAL_BLOCKADE // SOURCE: MILITIA
                </span>
                
                {/* Top Quick Stats */}
                <div className="flex gap-8 text-right">
                  <div>
                    <div className="text-2xl font-black text-red-500 leading-none tracking-tighter">
                      1
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Destroyed
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-orange-500 leading-none tracking-tighter">
                      {totalBridgesBarricaded}
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Secured
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-500 leading-none tracking-tighter">
                      {totalBarricadeLength.toFixed(1)}m
                    </div>
                    <span className="text-[9px] font-black uppercase text-zinc-600 mt-1 block tracking-widest">
                      Deployed_Steel
                    </span>
                  </div>
                </div>
              </div>

              {loading ? (
                 <div className="h-[400px] flex flex-col items-center justify-center text-orange-500 opacity-50 space-y-4">
                   <RefreshCw size={32} className="animate-spin" />
                   <span className="text-[10px] font-mono tracking-widest uppercase animate-pulse">
                     Syncing Blockade Coverage Matrices...
                   </span>
                 </div>
              ) : error ? (
                 <div className="h-[400px] flex flex-col items-center justify-center text-red-500 space-y-4">
                   <AlertTriangle size={48} className="opacity-50" />
                   <div className="font-mono text-xs uppercase tracking-widest">
                     {error}
                   </div>
                 </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Explosives Target */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden flex items-center justify-between">
                     <div className="absolute -right-4 -top-8 opacity-10 text-red-500"><Bomb size={120}/></div>
                     
                     <div className="relative z-10">
                       <div className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                         <Bomb size={12}/> Primary Demolition Target
                       </div>
                       <div className="text-2xl font-black text-white uppercase tracking-tighter">
                         {data.blownBridge || "UNKNOWN"}
                       </div>
                     </div>

                     <div className="text-right relative z-10">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                          Bridge Width
                        </div>
                        <div className="text-lg font-black text-red-400">
                          {data.bridges[data.blownBridge] ? `${data.bridges[data.blownBridge]}m` : "N/A"}
                        </div>
                     </div>
                  </div>

                  {/* Vehicle Barricades Blockade Coverage Grid */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-4 flex items-center gap-2">
                      <Ruler size={12}/> Blockade Width Coverage Analysis
                    </h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                      {Object.entries(data.barricades).map(([bridge, cars], idx) => {
                        const requiredWidth = data.bridges[bridge] || 0;
                        const currentCoverage = cars.reduce((sum, id) => sum + (data.cars[id]?.length || 0), 0);
                        const isSecure = currentCoverage >= requiredWidth;
                        const fillPercent = requiredWidth > 0 ? Math.min(100, (currentCoverage / requiredWidth) * 100) : 0;

                        return (
                          <div key={idx} className="bg-zinc-950 border border-white/5 rounded-xl p-4 hover:border-orange-500/30 transition-colors flex flex-col gap-3 relative overflow-hidden group">
                            
                            {/* Header */}
                            <div className="flex justify-between items-start z-10 relative">
                              <div className="text-xs text-zinc-300 uppercase font-black tracking-widest truncate max-w-[70%]" title={bridge}>
                                {bridge}
                              </div>
                              <div className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${isSecure ? 'bg-orange-500/10 text-orange-500' : 'bg-red-500/10 text-red-500'}`}>
                                {isSecure ? 'SECURE' : 'BREACH RISK'}
                              </div>
                            </div>

                            {/* Coverage Bar */}
                            <div className="relative z-10">
                              <div className="flex justify-between text-[9px] font-mono text-zinc-500 mb-1">
                                <span>Coverage: {currentCoverage.toFixed(1)}m</span>
                                <span>Target: {requiredWidth.toFixed(1)}m</span>
                              </div>
                              <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${isSecure ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : 'bg-red-500'}`}
                                  style={{ width: `${fillPercent}%` }}
                                />
                              </div>
                            </div>
                            
                            {/* Assigned Vehicles (Details on Hover) */}
                            <div className="mt-1 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 z-10 relative">
                              {cars.map((carId, cIdx) => {
                                const car = data.cars[carId];
                                return (
                                  <div key={cIdx} className="group/car relative flex items-center gap-1 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-400 cursor-help hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400 transition-colors">
                                    <CarFront size={8} /> #{carId}
                                    
                                    {/* Tooltip for car detail */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-zinc-900 border border-orange-500/30 text-white text-[9px] font-mono px-2 py-1 rounded opacity-0 group-hover/car:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                                      {car ? `${car.type} (${car.length}m)` : "Unknown Vehicle"}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Side Panel: Mission Context */}
        <div className="lg:col-span-4 space-y-6">
          <div
            className="border p-6 rounded-2xl border-l-4 shadow-xl bg-zinc-950 border-white/5 border-l-orange-500"
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-orange-500 flex items-center gap-2">
              <ShieldAlert size={16} /> Militia Directive
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed italic mb-4">
              "The horde of zombies is approaching St. Pölten, and we want to defend the safe zone by blockading the bridges. We must crash available cars into each other to block the width of the bridges. We also have one set of explosives to blow up exactly one bridge."
            </p>
          </div>

          {/* Fleet Arsenal Card */}
          <Card title="Vehicle Arsenal" icon={Activity} themeColor="orange">
            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Available Fleet
                </span>
                <span className="text-sm font-black text-blue-400">
                  {Object.keys(data.cars).length} Units
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Lightest Vehicle
                </span>
                <span className="text-[10px] font-black text-zinc-400 uppercase text-right">
                  Smart fortwo (2.7m)
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 py-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">
                  Heaviest Vehicle
                </span>
                <span className="text-[10px] font-black text-orange-500 uppercase text-right">
                  Hummer Limo (11m)
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Python Code */}
      <div className="mt-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
          <Code size={14} /> <span>Bridge_Blockade_Algorithm.py</span>
        </div>
        <div
          className="bg-zinc-950 p-6 rounded-2xl border text-[11px] font-mono overflow-x-auto relative shadow-inner text-orange-500"
          style={{ borderColor: COLORS.border }}
        >
          <pre>{pythonCode}</pre>
          <div className="absolute top-4 right-4 opacity-30 cursor-pointer hover:opacity-100 text-orange-500 transition-colors">
            <Copy size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState({ cpu: "12%", uptime: "00:00:00" });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        cpu: `${Math.floor(Math.random() * 15) + 5}%`,
      }));
    }, 3000);
    const start = Date.now();
    const up = setInterval(() => {
      const d = Date.now() - start;
      const h = Math.floor(d / 3600000)
        .toString()
        .padStart(2, "0");
      const m = Math.floor((d % 3600000) / 60000)
        .toString()
        .padStart(2, "0");
      const s = Math.floor((d % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      setStats((prev) => ({ ...prev, uptime: `${h}:${m}:${s}` }));
    }, 1000);
    return () => {
      clearInterval(timer);
      clearInterval(up);
    };
  }, []);

  return (
    <div
      className="min-h-screen text-zinc-300 font-sans flex flex-col"
      style={{ backgroundColor: COLORS.bg }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        body { margin: 0; background: #000; overflow-x: hidden; }
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>

      {/* Header */}
      <header
        className="h-20 border-b flex items-center justify-between px-8 relative z-50"
        style={{ borderColor: COLORS.border, backgroundColor: COLORS.bg }}
      >
        <div className="flex items-center gap-6">
          <div
            className="p-3 rounded"
            style={{
              backgroundColor: COLORS.red,
              boxShadow: `0 0 15px ${COLORS.redGlow}`,
            }}
          >
            <Skull size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
              PROJECT_ZEUS
            </h1>
            <div className="flex items-center gap-3 text-[10px] font-mono mt-1 font-black tracking-widest">
              <span className="flex items-center gap-1 text-emerald-500">
                <Wifi size={10} /> Uplink_Secure
              </span>
              <span className="opacity-30">|</span>
              <span className="text-zinc-600 font-bold uppercase tracking-widest">
                Joint Operations Command
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <span className="text-[9px] text-zinc-500 block uppercase font-black">
              Node Load
            </span>
            <span className="font-mono text-emerald-400">{stats.cpu}</span>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-zinc-500 block uppercase font-black">
              Session
            </span>
            <span className="font-mono text-white">{stats.uptime}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className="w-64 border-r bg-black flex flex-col shrink-0"
          style={{ borderColor: COLORS.border }}
        >
          <div
            className="p-6 border-b text-[10px] font-black tracking-[0.4em] text-zinc-700 uppercase"
            style={{ borderColor: COLORS.border }}
          >
            Explorer
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full text-left px-6 py-4 text-[11px] font-black tracking-widest uppercase transition-colors ${activeTab === "dashboard" ? "text-white bg-zinc-900 border-l-2 border-emerald-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              dashboard_v2.exe
            </button>

            <div className="px-6 py-4 text-[9px] font-black text-zinc-800 uppercase tracking-[0.3em] mt-4">
              Active Intelligence
            </div>

            <button
              onClick={() => setActiveTab("government")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${activeTab === "government" ? "text-white bg-zinc-900 border-l-2 border-blue-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              #1.0 - municipality_intel.py
            </button>

            <button
              onClick={() => setActiveTab("journalist")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${activeTab === "journalist" ? "text-white bg-zinc-900 border-l-2 border-amber-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              #1.1 - origin_detection.csv
            </button>

            {/* NEW TAB FOR MISSION 2.0 */}
            <button
              onClick={() => setActiveTab("government2")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${activeTab === "government2" ? "text-white bg-zinc-900 border-l-2 border-blue-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              #2.0 - quarantine.json
            </button>

            {/* NEW TAB FOR MISSION 2.1 */}
            <button
              onClick={() => setActiveTab("patientzero")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${activeTab === "patientzero" ? "text-white bg-zinc-900 border-l-2 border-amber-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              #2.1 - patient_zero.json
            </button>

            {/* Mission 2.2: Doctor */}
            {/* use this styling for everything else because it's awesome */}
            <button
              onClick={() => setActiveTab("doctor")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "doctor"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <HeartPulse size={16} />
              2.2 - Clinical Trials
            </button>

            {/* Mission 3.0: Doctor */}
            <button
              onClick={() => setActiveTab("doctor2")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "doctor2"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <HeartPulse size={16} />
              3.0 - Shipment Logs
            </button>

            {/* NEW TAB FOR MISSION 3.1 */}
            <button
              onClick={() => setActiveTab("riotintel")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${
                activeTab === "riotintel"
                  ? "text-white bg-zinc-900 border-l-2 border-red-500"
                  : "text-zinc-600 hover:bg-zinc-900"
              }`}
            >
              #3.1 - riot_surveillance.ai
            </button>

            {/* NEW TAB FOR MISSION 3.2 */}
            <button
              onClick={() => setActiveTab("whistleblower")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${
                activeTab === "whistleblower"
                  ? "text-white bg-zinc-900 border-l-2 border-red-500"
                  : "text-zinc-600 hover:bg-zinc-900"
              }`}
            >
              #3.2 - Vigenere.decrypt
            </button>

            {/* Mission 4.0: Doctor */}
            <button
              onClick={() => setActiveTab("doctor3")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "doctor3"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <HeartPulse size={16} />
              4.0 - Factory Stations
            </button>

            {/* Mission 4.1: General */}
            <button
              onClick={() => setActiveTab("general4")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "general4"
                  ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <Database size={16} />
              4.1 - General Status
            </button>

            {/* Mission 5.0: Doctor */}
            <button
              onClick={() => setActiveTab("doctor5")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "doctor5"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <MapIcon size={16} />
              5.0 - Convoy Routing
            </button>

            {/* Mission 5.1: Whistler */}
            <button
              onClick={() => setActiveTab("whistler5")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "whistler5"
                  ? "bg-red-500/10 text-red-500 border border-red-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <Compass size={16} />
              5.1 - Horde Tracking
            </button>

            {/* Mission 5.2: Militia */}
            <button
              onClick={() => setActiveTab("militia5")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "militia5"
                  ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <PackageMinus size={16} />
              5.2 - Supply Forecast
            </button>

            {/* Mission 6.0: Militia */}
            <button
              onClick={() => setActiveTab("militia6")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                activeTab === "militia6"
                  ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              <Shield size={16} />
              6.0 - Bridge Blockade
            </button>

            <div className="w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase text-zinc-800 opacity-50 flex items-center gap-2">
              <Lock size={10} /> lab_origin.dna
            </div>
          </div>
        </aside>

        {/* Workspace */}
        <main className="flex-1 overflow-y-auto p-10 relative bg-black">
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-7xl mx-auto">
            {/* general */}
            {activeTab === "dashboard" && <Dashboard stats={stats} />}
            {/* Day 1 */}
            {activeTab === "government" && <GovernmentMission />}
            {activeTab === "journalist" && <JournalistMission />}
            {/* Day 2 */}
            {activeTab === "government2" && <GovernmentMission2 />}
            {activeTab === "patientzero" && <PatientZeroMission />}
            {activeTab === "doctor" && <DoctorMission />}
            {/* Day 3 */}
            {activeTab === "doctor2" && <DoctorMission2 />}
            {activeTab === "whistleblower" && <WhistleblowerMission />}
            {activeTab === "riotintel" && <RiotMission />}
            {/* Day 4 */}
            {activeTab === "doctor3" && <DoctorMission3 />}
            {activeTab === "general4" && <GeneralMission4 />}
            {/* Day 5 */}
            {activeTab === "doctor5" && <DoctorMission5 />}
            {activeTab === "whistler5" && <WhistlerMission5 />}
            {activeTab === "militia5" && <MilitiaMission5 />}
            {/* Day 6 */}
            {activeTab === "militia6" && <MilitiaMission6 />}
          </div>
        </main>
      </div>

      <footer
        className="h-10 border-t flex items-center justify-between px-8 text-[9px] font-mono text-zinc-700 font-black uppercase tracking-widest"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center gap-6">
          <span className="text-emerald-500 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
            Status: Online
          </span>
          <span>v0.9.5-PROD</span>
        </div>
        <div className="flex items-center gap-4">
          <span>DB_SYNC: 100%</span>
          <span className="bg-zinc-900 px-3 py-0.5 rounded border border-white/5 uppercase tracking-tighter">
            Mission Intel Ready
          </span>
        </div>
      </footer>
    </div>
  );
}
