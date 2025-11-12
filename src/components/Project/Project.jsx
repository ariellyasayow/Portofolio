// src/components/pages/ProjectPage/Project.jsx
export const Project = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:-translate-y-2"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-400">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};