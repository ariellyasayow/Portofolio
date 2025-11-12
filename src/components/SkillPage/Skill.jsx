// src/components/pages/SkillPage/Skill.jsx
export const Skill = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((cat, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-green-400">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};