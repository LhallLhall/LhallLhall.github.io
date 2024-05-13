import NavComponent from "./navbar.jsx";
import styles from "../styles/landingSection.module.css"
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";



export default function LandingSection() {

  

  return (
    <div className="h-screen font-mono">
      <div  className={styles.backgroundImg}>
        <NavComponent />
        <div className="container mx-auto h-screen ">
          <div className="grid-rows-1 flex  items-center h-full">
            <div className="grid-cols-1">
              <div className="w-100">
                <p>Start /&gt;</p>
                <br>
                </br>
                <div className="">
                  <h1 className="">
                    Hi, my name is <span className="text-violet-600">Logan Hall</span>
                    <br></br>
                    I <em className="text-violet-600"> design </em> and <em className="text-violet-600"> develop </em>
                    {/* <a href="" className="typewrite" data-period="2000" data-type='[ "Apps.", "Websites.", "Games.", "Mods." ]'>
                      <span className="wrap"></span>
                    </a> */}
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
              </div>
              <div className="w-100">
                <p>
                  Let me show You...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}