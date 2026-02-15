"use client";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { Github, Linkedin, Mail, Smartphone, Layout, Send, ArrowUpRight, Instagram, Palette } from "lucide-react";

export default function Home() {
  const projects = [
    { 
      title: "Mobile App with Flutter", 
      desc: "Pengembangan aplikasi mobile lintas platform yang responsif dan berperforma tinggi dengan Flutter.", 
      tech: ["Flutter", "Dart", "Firebase"],
      color: "from-blue-500/40 to-cyan-400/40"
    },
    { 
      title: "Fullstack Web Laravel 12", 
      desc: "Sistem backend modern menggunakan Laravel 12 terbaru dengan optimasi Blade Engine.", 
      tech: ["Laravel 12", "PHP", "MySQL", "Blade"],
      color: "from-red-500/40 to-orange-500/40"
    },
    { 
      title: "UI/UX & Graphic Design", 
      desc: "Perancangan visual kreatif untuk brand identitas dan antarmuka pengguna yang user-centric.", 
      tech: ["Figma", "Design", "UI/UX"],
      color: "from-purple-500/40 to-pink-500/40"
    },
  ];

  const skills = [
    "Laravel 12", "PHP", "Blade", "Flutter", "MySQL", "GitHub", "Next.js", "Tailwind CSS", "Figma", "UI/UX Design", "Graphic Design"
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Decor - Diperkuat agar efek Glass terlihat */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-indigo-600/15 blur-[100px]" />
      </div>

      {/* 1. NAVBAR - Glass Effect */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-bold text-white tracking-tighter text-xl cursor-default"
          >
          
          </motion.span>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex gap-6 text-xs md:text-sm font-medium"
          >
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="relative max-w-5xl mx-auto pt-48 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Mobile & Web Developer | Graphic Designer
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[0.9]">
            Indra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Muhammad.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            Spesialis dalam membangun ekosistem digital mulai dari <span className="text-white italic">Mobile & Web Development</span> hingga desain visual yang memukau. Berpengalaman dengan 
            <Link href="/laravel-projects" className="mx-1.5 text-blue-400 font-medium hover:text-red-500 underline decoration-blue-400/30 hover:decoration-red-500 transition-all cursor-pointer">
               Laravel 12
            </Link>
            , <span className="text-blue-400 font-medium">Flutter</span>, dan keahlian kreatif di <span className="text-pink-400 font-medium">Figma & Desain Grafis</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-blue-600/80 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20"
            >
              View My Work <ArrowUpRight size={20}/>
            </motion.a>
            <div className="flex items-center gap-3 md:gap-4 px-2">
              {[
                { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/indra-muhammad-75a541371/" },
                { icon: <Instagram size={20}/>, href: "https://www.instagram.com/_indramhmd/" },
                { icon: <Github size={20}/>, href: "https://github.com/IndraMuh" },
                { icon: <Mail size={20}/>, href: "mailto:indramuh.mf@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }} 
                  href={social.href} 
                  target="_blank" 
                  className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-slate-400 hover:text-white transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. SKILLS SECTION - Glassy Container */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVars}
          className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-10 text-center">Tech Stack & Creative Tools</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, idx) => (
              <motion.span 
                variants={itemVars}
                key={idx} 
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-default backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">Selected Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl flex flex-col min-h-[380px] shadow-2xl transition-all group-hover:bg-white/[0.06] group-hover:border-white/20">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} backdrop-blur-md mb-8 flex items-center justify-center text-white border border-white/20 shadow-lg`}>
                  {project.title.includes("Mobile") ? <Smartphone size={28} /> : project.title.includes("Design") ? <Palette size={28} /> : <Layout size={28} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
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

      {/* 5. CONTACT SECTION - Solid Glass */}
      <section id="contact" className="max-w-5xl mx-auto py-32 px-6">
        <motion.div 
          className="relative p-12 md:p-24 rounded-[3rem] bg-blue-600/20 border border-white/20 backdrop-blur-3xl overflow-hidden text-center group"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-colors duration-700"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10 tracking-tighter">
            Punya ide hebat? <br /> Mari berkolaborasi.
          </h2>
          <p className="text-blue-200/80 mb-10 relative z-10">Hubungi saya di indramuh.mf@gmail.com</p>
          <a href="mailto:indramuh.mf@gmail.com" className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-extrabold rounded-2xl hover:bg-white hover:text-blue-700 transition-all hover:-translate-y-1">
            Kirim Email <Send size={20}/>
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 text-slate-500">
        <p className="text-sm font-medium">© 2026 Indra Muh. Mobile & Web Developer</p>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
          <a href="https://github.com/IndraMuh" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/indra-muhammad-75a541371/" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://www.instagram.com/_indramhmd/" target="_blank" className="hover:text-blue-400 transition">Instagram</a>
        </div>
      </footer>
    </main>
  );
}