import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect } from "react";

export default function NavComponent() {
  return (
    <div id="navbar" className="fixed w-screen">
      <Navbar className="bg-transparent px-0 py-0 pt-3" fluid rounded>
        <Navbar.Brand as={Link} href="#">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="me-4 relative inline cursor-pointer text-white text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">Logan Hall</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="bg-black md:bg-transparent mt-3 md:mt-0">
          <Navbar.Link className="md:hover:text-gray-700 border-none my-5 me-0 md:me-4 relative inline cursor-pointer text-white text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" as={Link} href="#">
            <span className="text-violet-600">&lt;</span>
            <span>Start</span>
            <span className="text-violet-600">/&gt;</span>
          </Navbar.Link>
          <Navbar.Link className="md:hover:text-gray-700 border-none my-5 me-0 md:me-4 relative inline cursor-pointer text-white text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" as={Link} href="#projects">
            <span className="text-violet-600">&lt;</span>
            <span>Projects</span>
            <span className="text-violet-600">/&gt;</span>
          </Navbar.Link>
          <Navbar.Link className="md:hover:text-gray-700 border-none my-5 me-0 md:me-4 relative inline cursor-pointer text-white text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" as={Link} href="#about">
            <span className="text-violet-600">&lt;</span>
            <span>About</span>
            <span className="text-violet-600">/&gt;</span>
          </Navbar.Link>
          <Navbar.Link className="md:hover:text-gray-700 border-none my-5 me-0 md:me-4 relative inline cursor-pointer text-white text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" as={Link} href="#">
            <span className="text-violet-600">&lt;</span>
            <span>Contact</span>
            <span className="text-violet-600">/&gt;</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
