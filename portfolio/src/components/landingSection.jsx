import Navbar from "./navbar.jsx";

export default function LandingSection() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto h-screen ">
        <div className="grid-rows-1 flex  items-center h-full">
          <div className="grid-cols-1">
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  )
}