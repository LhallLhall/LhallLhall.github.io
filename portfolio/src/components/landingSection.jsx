import Navbar from "./navbar.jsx";

export default function LandingSection() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto h-screen ">
        <div className="grid-rows-1 flex  items-center h-full">
          <div className="grid-cols-1">
            <div className="w-100">
            <h1>
              Hi, my name is <span className="text-violet-600">Logan Hall</span>
              <br/>
              I <em className="text-violet-600">am</em> a full stack developer
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
  )
}