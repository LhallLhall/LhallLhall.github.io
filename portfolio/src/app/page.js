'use client'

import About from "@/components/about.jsx";
import LandingSection from "../components/landingSection.jsx";

export default function Home() {
  return (
    <div>
      <div id="landing">
        <LandingSection/>
      </div>
      <div id="about">
        <About/>
      </div>
    </div>
  );
}
