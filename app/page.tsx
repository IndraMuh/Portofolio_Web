export default function Home() {
  const projects = [
    { title: "Project Pertama", desc: "Aplikasi web dengan Next.js", tech: "Next.js, Tailwind" },
    { title: "Project Kedua", desc: "Sistem informasi sekolah", tech: "Laravel" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* HERO SECTION / BIOGRAFI */}
      <section className="max-w-4xl mx-auto pt-32 pb-16 px-6">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Halo, saya <span className="text-blue-500">Siswa SMK Telkom</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Saya adalah seorang Developer muda yang sedang mendalami Next.js. 
          Fokus saya adalah membangun website yang cepat, responsif, dan enak dipandang.
        </p>
      </section>

      {/* PROJECT SECTION */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-white mb-8">Project Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all group">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">{project.title}</h3>
              <p className="text-slate-400 mt-2 mb-4">{project.desc}</p>
              <span className="text-xs font-mono bg-slate-800 text-blue-300 px-3 py-1 rounded-full">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="max-w-4xl mx-auto py-16 px-6 border-t border-slate-900 text-center">
        <p className="text-slate-500">Mari berteman di GitHub @username</p>
      </footer>
    </main>
  );
}