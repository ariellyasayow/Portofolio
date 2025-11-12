// src/components/layout/Header.jsx
import { Gamepad2 } from "lucide-react";
import { NavLink } from "./src/components/NavLink/NavLink";

export const Header = () => {
  // Jika Anda ingin nama/logo dinamis dari API, Anda bisa menerimanya via props
  // contoh: export const Header = ({ siteName = "ARIELLYA" }) => { ... }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pixel">
            <div className="p-2 bg-neon-blue/10 rounded-lg border border-neon-blue/50 group-hover:border-neon-blue transition-all duration-300">
              <Gamepad2 className="w-6 h-6 text-neon-blue" />
            </div>
            <span className="font-pixel text-sm text-neon-blue">ARIELLYA</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home">HOME</NavLink>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
            <NavLink href="#skills">SKILLS</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </nav>

          {/* Mobile Menu Button - Anda bisa tambahkan state untuk menu mobile */}
          <button className="md:hidden p-2 text-neon-blue hover:text-neon-cyan transition-colors">
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>
    </header>
  );
};