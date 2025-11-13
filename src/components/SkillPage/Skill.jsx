// src/components/pages/SkillPage/Skill.jsx
export const Skill = ({ skills }) => {
  // Pastikan skills adalah array, jika tidak, gunakan array kosong
  if (!skills || !Array.isArray(skills)) {
    return null; // Atau bisa tampilkan pesan bahwa data tidak tersedia
  }

  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0f] text-gray-100 overflow-hidden">
      {/* Efek cahaya latar */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl font-pixel text-cyan-400 mb-12 text-center tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-fade-in-up">
          SKILLS & EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((cat, i) => (
            <div
              key={i}
              className="group bg-[#11111a]/70 p-6 rounded-2xl border border-cyan-500/20 shadow-[0_0_10px_rgba(0,255,255,0.05)]
                         hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-cyan-400/50
                         hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out
                         backdrop-blur-md animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.15}s` }} // Delay animasi berdasarkan kategori
            >
              <h3 className="text-xl font-pixel mb-4 text-cyan-300 group-hover:text-cyan-100 tracking-wider transition-colors duration-300">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.items && Array.isArray(cat.items) ? cat.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {/* Elemen bulat sebagai bullet point */}
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-cyan-200 transition-colors duration-300"></div>
                    <span>{item}</span>
                  </li>
                )) : <li key="no-items" className="text-gray-500">No items listed</li>} {/* Fallback jika items tidak ada atau bukan array */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};