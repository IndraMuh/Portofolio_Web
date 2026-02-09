"use client";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    { 
      title: "Modern E-Commerce", 
      desc: "Platform belanja masa depan dengan integrasi AI.", 
      tech: ["Next.js", "Tailwind", "Framer"],
      color: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Finance Dashboard", 
      desc: "Visualisasi data keuangan real-time yang sangat smooth.", 
      tech: ["TypeScript", "Recharts"],
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 selection:bg-blue-500/30">
      
      {/* Background Decor - Efek Cahaya di Belakang */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative max-w-5xl mx-auto pt-40 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-medium inline-block mb-6">
            Available for Work
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Architect.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Saya Indra, membangun pengalaman digital yang menggabungkan estetika desain dengan kecanggihan kode.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
              Lihat Proyek
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:bg-slate-800 transition-all">
              Hubungi Saya
            </button>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Selected Works</h2>
          <div className="h-[1px] flex-1 bg-slate-800 ml-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all overflow-hidden"
            >
              {/* Efek Hover Glow */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-widest font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto py-20 px-6 text-center border-t border-slate-900">
        <p className="text-slate-500 font-mono text-sm tracking-widest">
          © 2024 INDRA MUH • BUILT WITH NEXT.JS & VERCEL
        </p>
      </footer>
    </main>
  );
}