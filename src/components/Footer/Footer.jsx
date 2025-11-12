// src/components/layout/Footer.jsx
import { Heart } from "lucide-react";

// Menerima props 'contact' dari RestAPI.jsx
export const Footer = ({ contact }) => {
  // Gunakan data dari props, jika tidak ada, gunakan fallback
  const email = contact?.email || "hello@ariellya.dev";
  const github = contact?.social?.github || "#";
  const linkedin = contact?.social?.linkedin || "#";

  return (
    <footer className="bg-black border-t border-neon-blue/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Pixel Art Divider */}
          <div className="w-full max-w-md">
            <div className="h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-2 h-2 bg-neon-blue"></div>
              <div className="w-2 h-2 bg-neon-cyan"></div>
              <div className="w-2 h-2 bg-neon-green"></div>
              <div className="w-2 h-2 bg-neon-purple"></div>
              <div className="w-2 h-2 bg-neon-red"></div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex gap-6">
            <a
              href={`mailto:${email}`}
              className="text-neon-cyan hover:text-neon-blue transition-colors font-retro"
            >
              {email}
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple hover:text-neon-pink transition-colors font-retro"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-neon-cyan transition-colors font-retro"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-neon-red animate-pulse" fill="currentColor" />
            <span>by</span>
            <span className="font-pixel text-xs text-neon-blue">ARIELLYA</span>
          </div>

          {/* Tagline */}
          <p className="font-retro text-neon-cyan text-center max-w-md">
            "From the darkness of the game world, I emerge — bringing designs that live, interact, and tell stories."
          </p>

          {/* Copyright Year */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} The Gamer Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};