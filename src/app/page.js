"use client"
import { useEffect } from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import About from "./components/About";
import StarsCanvas from "./components/StarBackground";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 250) {
          navbar.classList.remove('hidden');
        } else {
          navbar.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <main className="flex min-h-screen flex-col bg-[#030014]">
      {/* <div className="fixed top-0 w-full z-10 hidden " id="navbar"><Navbar /></div> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <About/>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
