'use client'

import About from "@/components/about.jsx";
import LandingSection from "../components/landingSection.jsx";
import Projects from "@/components/projects.jsx";

export default function Home() {
  return (
    <div className="snap-mandatory snap-y">
      <div id="landing" className="">
        <LandingSection/>
      </div>
      <div id="backgroundWrap">
        <div id="projects" className="snap-always snap-start">
          <Projects/>
        </div>
        <div id="about" className="snap-always snap-start">
          <About/>
        </div>
      </div>
    </div>
  );
}
