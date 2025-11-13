// src/components/pages/ContactPage/Contact.jsx

export const Contact = ({ contactData }) => {
  // Misalnya, contactData memiliki { email, github, linkedin }
  if (!contactData) return null;

  const email = contactData?.email || "sayowariellya@gmail.com";
  const github = contactData?.social?.github || "https://github.com/ariellya";
  const linkedin = contactData?.social?.linkedin || "https://www.linkedin.com/in/ariellya-sayow-108419355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0f] text-gray-100 overflow-hidden">
      {/* Efek cahaya background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-pixel text-cyan-400 mb-8 tracking-wider drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] animate-fade-in-up">
          CONTACT <span className="text-purple-400">ME</span>
        </h2>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 border border-cyan-400 text-cyan-300 font-pixel rounded-lg hover:bg-cyan-400/20 hover:text-cyan-100 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              Send Email
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500 text-purple-400 font-pixel rounded-lg hover:bg-purple-500/20 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(128,0,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              Visit GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-500 text-blue-400 font-pixel rounded-lg hover:bg-blue-500/20 hover:text-blue-100 hover:shadow-[0_0_25px_rgba(0,123,255,0.5)] transition-all duration-300 hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};