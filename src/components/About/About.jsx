// src/components/pages/AboutPage/About.jsx
export const About = ({ about }) => {
  if (!about) return null;
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">{about.history}</p>
        <p className="text-blue-400 mt-4 text-center font-medium">{about.focus}</p>
      </div>
    </section>
  );
};