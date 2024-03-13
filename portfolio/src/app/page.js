'use client'

import About from "@/components/about.jsx";
import LandingSection from "../components/landingSection.jsx";

export default function Home() {
  return (
    <div>
      <div id="Landing">
        <LandingSection/>
      </div>
      <div>
        <About/>
      </div>
    </div>
  );
}
