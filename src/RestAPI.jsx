// src/RestAPI.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/LandingPage/Landing";
// import { About } from "./components/About/About";
// import { Project } from "./components/Project/Project";
// import { Skill } from "./components/SkillPage/Skill";
// import { Contact } from "./components/ContactPage/Contact";
// import { Footer } from "./components/Footer/Footer";

const API_BASE = "http://localhost:3000"; 

export default function RestAPI() {
  const [data, setData] = useState({
    hero: null,
    // about: null,
    // projects: [],
    // skills: [],
    // contact: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroRes] = await Promise.all([
            axios.get(`${API_BASE}/hero`),
            // axios.get(`${API_BASE}/about`),
            // axios.get(`${API_BASE}/projects`),
            // axios.get(`${API_BASE}/skills`),
            // axios.get(`${API_BASE}/contact`),
        ]);

        setData({
          hero: heroRes.data || {},
          // about: aboutRes.data || {},
          // projects: projectsRes.data || [],
          // skills: skillsRes.data || [],
          // contact: contactRes.data || {},
        });
      } catch (err) {
        console.error("Failed to load data from API:", err.message);
        setError(
          "Gagal mengambil data dari server. Pastikan json-server aktif."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // Saat masih loading
  if (loading) {
    return (
      <div className="bg-black text-neon-blue min-h-screen flex items-center justify-center font-mono text-xl">
        LOADING WORLD...
      </div>
    );
  }

  // Saat error
  if (error) {
    return (
      <div className="bg-black text-red-500 min-h-screen flex items-center justify-center font-mono text-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <Header />
      {data.hero && <Landing hero={data.hero} />}
    
    </>
  );
}