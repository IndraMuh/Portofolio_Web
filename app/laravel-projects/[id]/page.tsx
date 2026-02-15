"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Server, Globe, Box, Calendar, Cpu } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  
  // Database Data Detail Project
  const projectData: any = {
    "management-ac-telkom-corpu": {
      title: "Management AC Telkom CorpU",
      category: "Asset Management System",
      client: "Telkom Corporate University",
      date: "Februari 2026",
      fullDesc: "Sistem informasi manajemen aset dan pemeliharaan Air Conditioner (AC) berbasis web yang dirancang untuk memantau inventaris, lokasi gedung secara hierarkis, serta menjadwalkan servis rutin unit AC secara efisien di lingkungan Telkom Corporate University.",
      features: [
        "Manajemen Lokasi Hierarkis (Gedung, Lantai, Ruangan)",
        "Interactive Floorplan dengan fitur Drag-and-Drop koordinat",
        "Smart Monitoring unit Overdue (Batas servis 6 bulan)",
        "Bulk Import via Excel & Sync Image via ZIP",
        "Audit Trail lengkap menggunakan Spatie Activitylog"
      ],
      stack: ["Laravel 12", "Tailwind CSS", "Alpine.js", "MySQL", "Spatie Activitylog", "JSZip"],
      image: "/management-ac.jpg",
      link: "https://github.com/IndraMuh/AC_Management_CorpU"
    },
    "inventory-system": {
      title: "Sistem Manajemen Inventaris",
      category: "Internal Enterprise Tool",
      client: "Personal Project",
      date: "Januari 2026",
      fullDesc: "Aplikasi manajemen stok barang yang robust. Memfokuskan pada akurasi data keluar masuk barang dengan sistem pelaporan otomatis dalam format PDF dan Excel untuk kebutuhan audit internal.",
      features: [
        "Manajemen Stok Real-time",
        "Export Laporan PDF & Excel (DomPDF / Laravel Excel)",
        "Sistem Barcode Scanner Integration",
        "Multi-warehouse Support",
        "Low Stock Notification System"
      ],
      stack: ["Laravel 12", "MySQL", "Blade", "Livewire"],
      image: null, // Bisa diisi path gambar jika ada
      link: "#"
    },
    "e-learning": {
      title: "E-Learning Platform",
      category: "Education Technology",
      client: "Open Source Project",
      date: "Desember 2025",
      fullDesc: "Portal belajar daring yang mendukung interaksi antara mentor dan siswa. Dilengkapi dengan sistem manajemen kursus yang dinamis dan kuis otomatis untuk mengevaluasi pemahaman siswa.",
      features: [
        "Course & Lesson Management",
        "Sistem Kuis & Nilai Otomatis",
        "Video Streaming Integration",
        "Student Progress Tracking",
        "Discussion Forum & Certificate Generator"
      ],
      stack: ["Laravel 12", "Alpine.js", "MySQL", "Pusher"],
      image: null,
      link: "#"
    }
  };

  // Mengambil data berdasarkan ID di URL
  const project = projectData[params.id as string] || projectData["management-ac-telkom-corpu"];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 relative overflow-hidden">
      
      {/* GLASS BACKGROUND ORBS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR GLASS */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/laravel-projects" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group font-bold">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">
            Project Documentation
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* HEADER SECTION */}
        <header className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-none">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                <Globe size={16} className="text-blue-500"/> {project.client}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                <Box size={16} className="text-red-500"/> {project.category}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                <Calendar size={16} className="text-orange-500"/> {project.date}
              </div>
            </div>
          </motion.div>
        </header>

        {/* HERO IMAGE SECTION */}
        {project.image ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mb-20 group bg-slate-900"
          >
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-50" />
          </motion.div>
        ) : (
          <div className="w-full h-64 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center mb-20">
            <p className="text-slate-500 italic">Preview image not available</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* LEFT CONTENT: OVERVIEW & FEATURES */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Project Overview</h2>
              <p className="text-xl leading-relaxed text-slate-400 font-light">
                {project.fullDesc}
              </p>
            </section>

            <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-green-500" /> Key Functionalities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {project.features.map((feature: string, i: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT CONTENT: SIDEBAR TECH STACK */}
          <div className="space-y-8">
            <div className="p-8 sticky top-28 rounded-[2.5rem] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Cpu size={22} className="text-red-500" /> Technologies Used
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.map((s: string, i: number) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {s}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <a 
                  href={project.link} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-white text-black font-extrabold rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-500 shadow-lg"
                >
                  Source Code <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}