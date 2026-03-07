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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div
          className="border rounded-3xl p-10 shadow-2xl relative"
          style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
        >
          <div
            className="flex items-center justify-between mb-10 border-b pb-8"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="p-3 rounded-xl border"
                style={{
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                  color: COLORS.blue,
                  borderColor: "rgba(37, 99, 235, 0.2)",
                }}
              >
                <BarChart3 size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-none">
                  First 30 Municipalities <br />
                  (population desc.)
                </h2>
                <span
                  className="text-[10px] font-mono font-black tracking-widest mt-2 block"
                  style={{ color: COLORS.blue }}
                >
                  EVALUATION_SET: ALPHA_SORTED // SOURCE: SOLUTIONS_V1
                </span>
              </div>
            </div>
            <button
              onClick={loadData}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-black text-zinc-400 hover:text-white hover:border-zinc-600 transition-all uppercase tracking-widest"
            >
              <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
              Reload Solution
            </button>
          </div>

          <div
            className="bg-black border rounded-2xl p-8 min-h-[500px] flex flex-col"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 font-mono">
                <RefreshCw size={48} className="animate-spin mb-4 opacity-20" />
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
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div
          className="border p-6 rounded-2xl border-l-4 shadow-xl"
          style={{
            backgroundColor: COLORS.card,
            borderColor: COLORS.border,
            borderLeftColor: COLORS.blue,
          }}
        >
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-white">
            Directive: Mission 1
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            "We have gathered personal medical data from the last 30 days. Your
            goal is to provide an infection rate estimate for each municipality.
            Evaluation is based on the Top 30 records by inhabitants."
          </p>
        </div>

        <div
          className="bg-zinc-900/50 border p-6 rounded-2xl shadow-xl"
          style={{ borderColor: COLORS.border }}
        >
          <h4 className="text-[10px] uppercase font-black text-zinc-600 mb-6 tracking-widest">
            Sector Metrics
          </h4>
          <div className="space-y-4">
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
        </div>
      </div>
    </div>
  );
};

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
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      style={{ animation: "fadeIn 0.8s ease-out forwards" }}
    >
      <div className="lg:col-span-8 space-y-6">
        <div
          className="border rounded-3xl p-10 shadow-2xl relative"
          style={{ backgroundColor: COLORS.card, borderColor: COLORS.border }}
        >
          {/* Head */}
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{
              background: `linear-gradient(90deg, ${COLORS.amber}, transparent)`,
            }}
          />
          <div
            className="flex items-center gap-5 mb-10 border-b pb-8"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="p-3 rounded-xl border"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                color: COLORS.amber,
                borderColor: "rgba(245, 158, 11, 0.2)",
              }}
            >
              <Radio size={28} className="animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-none">
                Virus Origin Detection
              </h2>
              <span
                className="text-[10px] font-mono font-black tracking-widest mt-2 block uppercase"
                style={{ color: COLORS.amber }}
              >
                Public Informational Broadcast // Mission 1.1
              </span>
            </div>
          </div>
          {/* Content */}
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
                <AlertTriangle size={48} className="mx-auto mb-4 opacity-30" />
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
                  {origins.map((city, i) => (
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
                  ))}
                </div>
              </div>
            )}
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
      </div>
      {/* Mission Intel */}
      <div className="lg:col-span-4 space-y-6">
        <div
          className="border p-6 rounded-2xl border-l-4 shadow-xl"
          style={{
            backgroundColor: COLORS.card,
            borderColor: COLORS.border,
            borderLeftColor: COLORS.amber,
          }}
        >
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-white">
            Journalist Directive
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            "Provide the public with the 5 most likely municipalities where the
            virus originated. They need to know where it started."
          </p>
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
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      style={{ animation: "fadeIn 0.8s ease-out forwards" }}
    >
      <aside className="lg:col-span-3 space-y-4">
        <div className="border rounded-2xl p-6 bg-zinc-950 border-white/5 shadow-2xl">
          <div className="flex items-center gap-2 mb-6 text-amber-500">
            <UserSearch size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">
              Candidate_Files
            </h3>
          </div>
          <div className="space-y-1 max-h-[60vh] overflow-y-auto custom-scroll pr-2">
            {peopleList.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPerson(p)}
                className={`w-full text-left px-4 py-2 rounded-lg text-[10px] font-bold uppercase transition-all ${
                  selectedPerson === p
                    ? "bg-amber-600 text-black shadow-[0_0_15px_rgba(217,119,6,0.3)]"
                    : "text-zinc-500 hover:bg-white/5 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="lg:col-span-9 space-y-6">
        <div className="border rounded-3xl p-10 bg-zinc-900/30 border-white/10 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent" />

          <div className="flex justify-between items-start mb-10 border-b pb-6 border-white/5">
            <div>
              <h2 className="text-2xl font-black uppercase text-white italic tracking-tighter leading-none">
                Matrix_Visualization
              </h2>
              <p className="text-[10px] font-mono text-zinc-600 mt-2 uppercase tracking-widest">
                Source_Simulation: {selectedPerson}
              </p>
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

          <VectorNet
            visits={data.visits}
            simulations={data.sims}
            patientZero={selectedPerson}
            onDayChange={handleDayChange}
          />

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
              <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black">
                Vector_Trace
              </span>
              <div className="text-xs text-white font-mono uppercase tracking-tighter">
                Active_Analyzing
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-center">
              <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black">
                Outbreak_Scale
              </span>
              <div
                className={`text-xs font-mono font-bold tracking-tighter ${infectionCount === 20 ? "text-red-500" : "text-emerald-500"}`}
              >
                {infectionCount === 20 ? "TOTAL_WIPE" : "LOCAL_SPREAD"}
              </div>
            </div>
            <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-right">
              <span className="text-[9px] text-zinc-600 uppercase block mb-1 font-black">
                Source_Match
              </span>
              <div className="text-xs text-white font-mono italic tracking-tighter">
                {infectionCount === 20 ? "ZERO_CONFIRMED" : "NEGATIVE"}
              </div>
            </div>
          </div>
          {/* Python Code */}
          <div className="mt-12 text-left">
            <div className="flex items-center gap-2 mb-4 text-zinc-600 font-mono text-[10px] uppercase font-black tracking-widest">
              <Code size={14} /> <span>Patient_Zero_Tracing.py</span>
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
      </main>
    </div>
  );
};

// --- Mission 3.1: Riot Surveillance Logic ---
const RiotMission = () => {
  const [images] = useState([
    { filename: "Crowd_116.gif", headcount: 120 },
    { filename: "Crowd_140.gif", headcount: 82 },
    { filename: "Crowd_143.gif", headcount: 121 },
    { filename: "Crowd_152.gif", headcount: 58 },
    { filename: "Crowd_154.gif", headcount: 36 },
    { filename: "Crowd_157.gif", headcount: 29 },
  ]);

  const total = images.reduce((sum, img) => sum + img.headcount, 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center border-b border-white/5 pb-6">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
            Riot Surveillance Grid
          </h2>
          <p className="text-[10px] font-mono text-red-500 tracking-widest uppercase mt-2">
            Ultralytics YOLOv8 // Person Detection Active
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-red-500">{total}</div>
          <span className="text-[9px] uppercase text-zinc-600 tracking-widest font-black">
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

      <div className="border border-white/5 bg-zinc-950 rounded-2xl p-6 mt-8">
        <div className="flex justify-between items-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
            Detection Engine
          </div>
          <div className="text-[10px] font-mono text-emerald-500 uppercase">
            Status: Operational
          </div>
        </div>
        <div className="mt-4 text-xs text-zinc-400 font-mono">
          Model: YOLOv8n
          <br />
          Classes: person
          <br />
          Confidence Threshold: 0.45
          <br />
          Non-Max Suppression: Enabled
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

            {/* NEW TAB FOR MISSION 2.1 */}
            <button
              onClick={() => setActiveTab("patientzero")}
              className={`w-full text-left px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-colors ${activeTab === "patientzero" ? "text-white bg-zinc-900 border-l-2 border-amber-500" : "text-zinc-600 hover:bg-zinc-900"}`}
            >
              #2.1 - patient_zero.json
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
            {activeTab === "dashboard" && <Dashboard stats={stats} />}
            {activeTab === "government" && <GovernmentMission />}
            {activeTab === "journalist" && <JournalistMission />}
            {activeTab === "patientzero" && <PatientZeroMission />}
            {activeTab === "whistleblower" && <WhistleblowerMission />}
            {activeTab === "riotintel" && <RiotMission />}
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
