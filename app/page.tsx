"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe } from "lucide-react"; // install lucide-react jika ingin pakai icon

export default function Home() {
  const projects = [
    { 
      title: "Modern E-Commerce", 
      desc: "Platform belanja masa depan dengan integrasi AI untuk rekomendasi produk.", 
      tech: ["Next.js", "Tailwind", "Framer"],
      color: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Finance Dashboard", 
      desc: "Visualisasi data keuangan real-time dengan grafik interaktif yang smooth.", 
      tech: ["TypeScript", "Recharts", "Lucide"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "School System", 
      desc: "Sistem manajemen data siswa terpadu untuk efisiensi administrasi.", 
      tech: ["Laravel", "MySQL", "Bootstrap"],
      color: "from-emerald-500 to-teal-400"
    },
  ];

  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel", "Git", "Node.js", "UI/UX Design"];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. NAVBAR (Wajib ada) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-white tracking-tighter text-xl">I.MUH</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      {/* 2. HERO SECTION */}
      <section id="about" className="relative max-w-5xl mx-auto pt-48 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-none">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Digital</span> Excellence.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            Saya Indra, seorang <span className="text-white">Full-stack Developer</span> asal Indonesia. 
            Saya fokus pada pembuatan antarmuka yang elegan dan arsitektur kode yang bersih.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              View My Work
            </a>
            <div className="flex items-center gap-4 px-4">
              <button className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition"><Mail size={20}/></button>
              <button className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:text-white transition"><Github size={20}/></button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. SKILLS SECTION (Menunjukkan kapabilitas) */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-sm">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Technologies I use</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm font-medium hover:border-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Selected Works</h2>
            <p className="text-slate-500 text-lg">Eksplorasi proyek pengembangan web terbaru.</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-950 border border-white/5 overflow-hidden"
            >
              <div className="bg-[#020617] p-8 rounded-[1.9rem] h-full flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center text-white`}>
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION (Penting untuk konversi) */}
      <section id="contact" className="max-w-5xl mx-auto py-32 px-6 text-center">
        <div className="relative p-12 rounded-[3rem] bg-blue-600 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Punya ide proyek?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Mari berdiskusi tentang bagaimana saya bisa membantu membangun solusi digital Anda.
          </p>
          <a href="mailto:email@kamu.com" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl">
            Kirim Pesan <ExternalLink size={18}/>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
        <p className="text-slate-500 text-sm">© 2024 Indra Muh. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </footer>
    </main>
  );
}