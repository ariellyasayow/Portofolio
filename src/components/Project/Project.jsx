// src/components/pages/ProjectPage/Project.jsx
export const Project = ({ projects = [] }) => {
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-24 bg-[#0a0a0f] text-gray-300 text-center relative overflow-hidden"
      >
        {/* Efek cahaya latar */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
        <h2 className="text-4xl font-pixel text-cyan-400 mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-fade-in-up">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Belum ada proyek yang tersedia.</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0a0a0f] text-gray-100 overflow-hidden"
    >
      {/* Efek cahaya latar */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-pixel text-cyan-400 mb-12 text-center tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-fade-in-up">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className="group relative bg-[#11111a] border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-cyan-400/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-fade-in-up" // Padding dinaikkan dari p-6 ke p-8
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Judul & deskripsi - padding bawah ditambahkan untuk menggantikan ruang gambar */}
              <h3 className="text-2xl font-pixel text-cyan-400 mb-4 tracking-wider group-hover:text-cyan-100 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {p.description}
              </p>

              {/* Tag teknologi */}
              <div className="flex flex-wrap gap-2 mb-6"> {/* Tambahkan margin bawah */}
                {p.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-md text-xs font-pixel tracking-wide group-hover:bg-cyan-500/20 group-hover:border-cyan-300/50 group-hover:text-cyan-100 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link tombol opsional - margin atas disesuaikan */}
              {p.link && (
                <div className="mt-0"> {/* Margin atas direset karena padding di div utama sudah cukup */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-cyan-400 text-cyan-300 rounded-md font-pixel hover:bg-cyan-400/20 hover:text-cyan-100 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 group-hover:scale-105"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};