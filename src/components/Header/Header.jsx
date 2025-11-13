// src/components/layout/Header.jsx
import { useState } from "react";
import { Gamepad2, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Fungsi untuk menangani klik tautan dan scroll ke ID
  const handleClick = (e, href) => {
    e.preventDefault();

    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }

    const targetId = href.substring(1); // Hilangkan tanda #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Bisa juga 'center' atau 'end'
      });
      // Tutup menu mobile setelah klik (jika perlu)
      if (menuOpen) {
        closeMenu();
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/40 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 animate-fade-in-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_12px_rgba(0,255,255,0.4)] transition-all duration-300">
              <Gamepad2 className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
            </div>
            <span className="font-pixel text-lg text-cyan-400 group-hover:text-cyan-100 tracking-widest transition-colors duration-300">
              ARIELLYA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={(e) => handleClick(e, "#skills")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm"
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-colors duration-300"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col items-center gap-4 border-t border-cyan-500/20 pt-4 animate-fade-in">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm w-full text-center"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm w-full text-center"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm w-full text-center"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={(e) => handleClick(e, "#skills")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm w-full text-center"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300 px-3 py-1 rounded font-pixel text-sm w-full text-center"
            >
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};