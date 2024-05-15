'use client'

import About from "@/components/about.jsx";
import LandingSection from "../components/landingSection.jsx";
import Projects from "@/components/projects.jsx";
import NavComponent from "@/components/navbar.jsx";

export default function Home() {
  return (
    <div className="snap-mandatory snap-y font-mono">
      <div className=" absolute w-screen">
        <NavComponent />
      </div>
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
