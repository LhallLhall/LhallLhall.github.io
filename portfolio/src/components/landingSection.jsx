import Navbar from "./navbar.jsx";
import styles from "../styles/landingSection.module.css"


export default function LandingSection() {
  return (
    <div className="h-screen font-mono">
      <div  className={styles.backgroundImg}>
        <Navbar />
        <div className="container mx-auto h-screen ">
          <div className="grid-rows-1 flex  items-center h-full">
            <div className="grid-cols-1">
              <div className="w-100">
                <p>Start /&gt;</p>
                <br>
                </br>
                <h1 className="">
                  Hi, my name is <span className="text-violet-600">Logan Hall</span>
                  <br/>
                  I <em className="text-violet-600"> make </em> full stack applications
                </h1>
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