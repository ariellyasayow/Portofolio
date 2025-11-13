export const Landing = ({ hero }) => {
  if (!hero) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0f] text-gray-100 overflow-hidden pt-30" // <-- Tambahkan pt-20
    >
      {/* Efek cahaya & partikel neon */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.08),transparent_70%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.05),transparent_70%)]"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Avatar dengan animasi */}
        <div className="mb-10 animate-fade-in-up">
          <div className="relative inline-block">
            <img
              src={hero.avatar}
              alt={hero.name}
              className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-transform duration-500 hover:scale-110" // Tambahkan hover:scale
            />
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-70"></div> {/* Tambahkan opacity */}
          </div>
        </div>

        {/* Nama & peran dengan animasi */}
        <h1 className="text-4xl md:text-6xl font-pixel tracking-widest text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {`HELLO, I'M ${hero.name.toUpperCase()}`}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-retro mb-6 animate-fade-in-up hover:text-cyan-300 transition-colors duration-300" style={{ animationDelay: '0.2s' }}> {/* Tambahkan hover dan transisi */}
          {hero.role}
        </p>

        {/* Bio dengan animasi */}
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed animate-fade-in-up hover:text-gray-200 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.3s' }}> {/* Tambahkan hover dan transisi */}
          {hero.bio}
        </p>

        {/* Tombol CTA dengan animasi */}
        <div className="mt-10 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-6 py-3 border border-cyan-400 text-cyan-300 font-pixel rounded-lg hover:bg-cyan-400/20 hover:text-cyan-100 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105" // Tambahkan hover:scale dan efek warna teks
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-pink-500 text-pink-400 font-pixel rounded-lg hover:bg-pink-500/20 hover:text-pink-100 hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all duration-300 hover:scale-105" // Tambahkan hover:scale dan efek warna teks
          >
            CONTACT ME
          </a>
        </div>

        {/* Indikator scroll dengan animasi */}
        <div className="mt-20 animate-bounce animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 font-pixel mb-1">SCROLL</span>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};