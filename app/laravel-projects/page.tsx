"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, AirVent } from "lucide-react";
import Link from "next/link";

export default function LaravelProjects() {
  const laravelProjects = [
    {
      id: "management-ac-telkom-corpu", // Slug untuk URL detail
      title: "Management AC Telkom CorpU",
      desc: "Sistem monitoring status AC real-time (Baik, Rusak, Proses) dengan dashboard interaktif untuk efisiensi maintenance di lingkungan Telkom CorpU.",
      tech: ["Laravel 12", "Tailwind CSS", "MySQL", "Spatie"],
      image: "/management-ac.jpg", 
      featured: true
    },
    {
      id: "inventory-system",
      title: "Sistem Manajemen Inventaris",
      desc: "Aplikasi backend robust menggunakan Laravel 12 dengan fitur laporan PDF dan ekspor Excel secara otomatis.",
      tech: ["Laravel 12", "MySQL", "Blade"],
      image: null,
      featured: false
    },
    {
      id: "e-learning",
      title: "E-Learning Platform",
      desc: "Portal belajar online dengan fitur manajemen kursus, kuis interaktif, dan sistem penilaian otomatis.",
      tech: ["Laravel 12", "Alpine.js", "MySQL"],
      image: null,
      featured: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 p-6 md:p-20 relative overflow-hidden">
      
      {/* BACKGROUND ORBS */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-red-600/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Tombol Back */}
      <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 hover:text-white hover:bg-white/10 transition-all mb-12 group z-10 relative">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <header className="mb-16 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">
            Laravel <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">12</span> Projects
          </h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Eksplorasi arsitektur backend modern dengan performa tinggi dan skalabilitas yang solid.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {laravelProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`flex flex-col bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden hover:bg-white/[0.07] hover:border-red-500/30 transition-all duration-500 shadow-2xl group ${
              project.featured ? "md:col-span-2 md:flex-row" : ""
            }`}
          >
            {project.image && (
              <div className={`relative overflow-hidden ${project.featured ? "md:w-1/2 h-72 md:h-auto" : "h-56"}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-60" />
              </div>
            )}

            <div className={`p-8 md:p-12 flex flex-col justify-center ${project.featured ? "md:w-1/2" : ""}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-lg backdrop-blur-xl">
                  {project.title.includes("AC") ? <AirVent size={28} /> : <Code2 size={28} />}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                <Link 
                  href={`/laravel-projects/${project.id}`}
                  className="inline-flex items-center gap-3 text-sm font-bold text-white bg-red-600/20 hover:bg-red-600/40 border border-red-600/30 px-8 py-4 rounded-2xl transition-all group/btn shadow-xl shadow-red-900/10"
                >
                  Detail <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="mt-20 py-10 border-t border-white/5 text-center text-slate-600 text-sm">
        Laravel Ecosystem • Indra Muhammad Portfolio
      </footer>
    </main>
  );
}