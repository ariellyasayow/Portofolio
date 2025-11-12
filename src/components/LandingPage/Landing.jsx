// src/components/pages/LandingPage/Landing.jsx
export const Landing = ({ hero }) => {
  if (!hero) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src={hero.avatar}
            alt={hero.name}
            className="w-48 h-48 mx-auto rounded-full border-4 border-blue-500 object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">{hero.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">{hero.role}</p>
        <p className="max-w-2xl mx-auto text-gray-400">{hero.bio}</p>
      </div>
    </section>
  );
};