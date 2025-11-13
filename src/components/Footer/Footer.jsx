// src/components/layout/Footer.jsx
import { Heart } from "lucide-react";

export const Footer = ({ }) => {


  return (
    <footer className="relative bg-[#0a0a0f] border-t border-cyan-500/30 py-14 overflow-hidden">
      {/* Efek cahaya di background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative container mx-auto px-6 flex flex-col items-center gap-8 text-center">
        {/* Divider pixel glow dengan animasi */}
        <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_6px_rgba(0,255,255,0.8)] animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-sm shadow-[0_0_6px_rgba(255,0,255,0.8)] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-sm shadow-[0_0_6px_rgba(0,255,0,0.8)] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-sm shadow-[0_0_6px_rgba(128,0,255,0.8)] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>


        {/* Signature dengan animasi */}
        <div className="flex items-center gap-2 text-gray-400 text-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <span>Front End</span>
          <Heart
            className="w-4 h-4 text-pink-500 animate-pulse"
            fill="currentColor"
          />
          <span>by</span>
          <span className="font-pixel text-xs text-cyan-400 group-hover:text-yellow-300 transition-colors duration-300">ARIELLYA</span>
        </div>

        {/* Tagline dengan animasi dan hover */}
        <p className="font-retro text-cyan-300/80 text-sm max-w-lg leading-relaxed animate-fade-in-up hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all duration-300 cursor-default" style={{ animationDelay: '0.9s' }}>
          “Where aesthetics meet functionality, great user experiences are born.”
        </p>

        {/* Copyright dengan animasi */}
        <p className="text-gray-500 text-xs tracking-wide animate-fade-in-up" style={{ animationDelay: '1s' }}>
          © {new Date().getFullYear()} Personal Website
        </p>
      </div>
    </footer>
  );
};