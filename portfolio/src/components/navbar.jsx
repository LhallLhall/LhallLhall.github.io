import Image from "next/image"
import Menu from "./menu.jsx"

export default function Navbar() {
  return (
    <div className="">
        <nav className="h-auto flex justify-between items-center h-16 text-white relative shadow-sm font-mono" role="navigation">
            <div className="m-4 flex flex-col md:flex-row md:mx-6">
                <a href="/" className=" relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                    {/* <Image
                    src="/LoganHall.png"
                    width={250}
                    height={250}
                    priority={true}
                    
                    alt="Logan Hall Logo"
                    /> */}
                    logo
                    
                </a>
            </div>
            <div className="flex flex-col md:flex-row md:mx-6">
                <div className="pr-8 flex justify-center">
                    <a href="#" className="me-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                        <span className="text-violet-600">&lt;</span>
                        <span>Start</span>
                        <span className="text-violet-600">/&gt;</span>
                    </a>
                    <a href="#" className="me-4 ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" >
                    <span className="text-violet-600">&lt;</span>
                        <span>Projects</span>
                        <span className="text-violet-600">/&gt;</span>
                    </a>
                    
                    <a href="#" className="me-4 ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" >
                    <span className="text-violet-600">&lt;</span>
                        <span>About</span>
                        <span className="text-violet-600">/&gt;</span>
                    </a>
                    
                    <a href="#" className="ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                    <span className="text-violet-600">&lt;</span>
                        <span>Contact</span>
                        <span className="text-violet-600">/&gt;</span>
                    </a>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

