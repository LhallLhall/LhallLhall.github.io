import NavComponent from "./navbar.jsx";
import styles from "../styles/landingSection.module.css"
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";



export default function LandingSection() {
  

  return (
    <div className="h-screen font-mono">
      <div className={styles.backgroundImg}>
        <div className="container mx-auto h-screen ">
          <div className="grid-rows-1 flex items-center h-full">
            <div className="grid-cols-1">
              <div className="w-100">
                <p className="my-3">Start /&gt;</p>
                <div className="">
                  <h1 className="">
                    Hi, my name is <span className="text-violet-600">Logan Hall</span>
                    <br></br>
                    I <em className="text-violet-600"> design </em> and <em className="text-violet-600"> develop </em>
                    <ReactTyped
                      strings={[
                        "Apps",
                        "Websites",
                        "Games",
                        "Mods",
                      ]}
                      typeSpeed={120}
                      backSpeed={140}
                      loop
                    ></ReactTyped>
                  </h1>
                </div>
                <p className="my-3">
                  Let me show you...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}