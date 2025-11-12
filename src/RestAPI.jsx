// src/RestAPI.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Landing } from "./components/LandingPage/Landing";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/SkillPage/Skill";

const API_BASE = "http://localhost:3000"; // Sesuaikan dengan mock server Anda

export default function RestAPI() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    projects: [],
    skills: [],
    contact: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch semua data dari REST API
    Promise.all([
      axios.get(`${API_BASE}/hero`),
      axios.get(`${API_BASE}/about`),
      axios.get(`${API_BASE}/projects`),
      axios.get(`${API_BASE}/skills`),
      axios.get(`${API_BASE}/contact`),
    ])
      .then(([heroRes, aboutRes, projectsRes, skillsRes, contactRes]) => {
        setData({
          hero: heroRes.data,
          about: aboutRes.data,
          projects: projectsRes.data,
          skills: skillsRes.data,
          contact: contactRes.data,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data from API:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-neon-blue min-h-screen flex items-center justify-center font-mono text-xl">
        LOADING WORLD...
      </div>
    );
  }

  return (
    <>
      <Header />
      <Landing hero={data.hero} />
      <About about={data.about} />
      <Project projects={data.projects} />
      <Skill skills={data.skills} />
      <Footer contact={data.contact} />
    </>
  );
}