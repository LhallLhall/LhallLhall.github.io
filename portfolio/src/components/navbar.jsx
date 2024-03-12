export default function Navbar() {
  return (
    <div className="container mx-auto">
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <div className="flex flex-col md:flex-row md:mx-6">
                <a href="/" className="pl-8">
                    Logo
                </a>
            </div>
            <div className="flex flex-col md:flex-row md:mx-6">
                <div className="pr-8 flex justify-center">
                    <a href="#" className="me-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">{"Start />"}</a>
                    <a href="#" className="me-4 ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" >{"About />"}</a>
                    <a href="#" className="ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">{"Contact />"}</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

