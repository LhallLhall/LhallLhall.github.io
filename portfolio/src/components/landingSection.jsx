import Navbar from "./navbar.jsx";

export default function LandingSection() {
  return (
    <div>
        <Navbar />
      <div className="flex h-screen">
        <div className="m-auto">
          <p className="text-left text-lg font-bold">
            Welcome to our website!
          </p>
          <p className="text-left">
            Explore our services and products. We're here to provide you with the best experience.
          </p>
        </div>
      </div>
    </div>
  )
}