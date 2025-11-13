// src/components/pages/AboutPage/About.jsx

export const About = ({ about }) => {
  if (!about) return null;

  return (
    <section
      id="about"
      className="relative py-24 bg-[#0a0a0f] text-gray-100 overflow-hidden"
    >
      {/* Efek cahaya background yang lebih dinamis */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Judul dengan animasi dan efek glow */}
        <h2 className="text-4xl md:text-5xl font-pixel text-cyan-400 mb-8 tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-fade-in-up">
          ABOUT <span className="text-purple-400">ME</span>
        </h2>

        {/* Deskripsi dengan efek hover dan animasi */}
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6 animate-fade-in-up hover:text-gray-100 hover:drop-shadow-[0_0_8px_rgba(200,200,200,0.3)] transition-all duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
          {about.history}
        </p>

        {/* Fokus / Highlight dengan efek hover dan animasi */}
        <p className="text-cyan-300 md:text-xl font-semibold tracking-wide animate-fade-in-up hover:text-cyan-100 hover:scale-105 transition-all duration-300 cursor-default" style={{ animationDelay: '0.3s' }}>
          My focus is on <span className="text-purple-400 font-bold hover:text-yellow-300 transition-colors duration-300">{about.focus}</span>.
        </p>

        {/* Garis bawah efek neon dengan animasi */}
        <div className="mt-10 h-0.5 w-48 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-fade-in-up" style={{ animationDelay: '0.4s' }}></div>

        {/* Pixel Art Divider tambahan */}
        <div className="flex justify-center gap-2 mt-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="w-3 h-3 bg-cyan-400 animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-yellow-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
};