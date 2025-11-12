// src/components/ui/NavLink.jsx
export const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    if (!href.startsWith('#')) {
      window.location.href = href;
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="font-retro text-foreground hover:text-neon-blue transition-all duration-300 px-4 py-2 relative group cursor-pixel"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-neon-blue/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></span>
    </a>
  );
};