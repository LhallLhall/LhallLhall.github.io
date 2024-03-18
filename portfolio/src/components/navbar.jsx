import Image from "next/image";
import Menu from "./menu.jsx";
import MenuImg from "/public/menu.svg"
export default function Navbar() {
    const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
  return (
    <div className="">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."/>
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                <img src={MenuImg} onclick={onToggleMenu(this)} name="menu" className="text-3xl cursor-pointer md:hidden"/>
            </div>
        </nav>

      {/* <nav
        className="h-auto flex justify-between items-center h-16 text-white relative shadow-sm font-mono"
        role="navigation"
      >
        <div className="m-4 flex flex-col md:flex-row md:mx-6">
          <a
            href="/"
            className=" relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            logo
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:mx-6">
          <div className="pr-8 flex justify-center">
            <a
              href="#"
              className="me-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              <span className="text-violet-600">&lt;</span>
              <span>Start</span>
              <span className="text-violet-600">/&gt;</span>
            </a>
            <a
              href="#"
              className="me-4 ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              <span className="text-violet-600">&lt;</span>
              <span>Projects</span>
              <span className="text-violet-600">/&gt;</span>
            </a>

            <a
              href="#"
              className="me-4 ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              <span className="text-violet-600">&lt;</span>
              <span>About</span>
              <span className="text-violet-600">/&gt;</span>
            </a>

            <a
              href="#"
              className="ms-4 relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              <span className="text-violet-600">&lt;</span>
              <span>Contact</span>
              <span className="text-violet-600">/&gt;</span>
            </a>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
