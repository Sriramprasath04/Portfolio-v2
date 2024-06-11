import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  let d1 = "M6 18 18 6M6 6l12 12"
  let d2 = "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
  
  const [show, setShow] = useState(false);
  const [bar, setBar] = useState(d2);
  
  function showNav() {
    setShow(!show);
    setBar(bar === d1? d2:d1)
  }

  return (
    <>
        <div id="header" className="relative flex p-10 pb-0">
            <AnchorLink
              href="#"
              className="text-3xl font-bold border-r pr-3 mr-5 border-black "
            
            >
              Sriramprasath P
            </AnchorLink>
            <div className="my-auto md:ml-auto">
              <button id="button" className="md:hidden transition-all ease-in-out" onClick={showNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={bar}
                  />
                </svg>
              </button>
              <div className="ml-auto">
                <ul className={`hidden md:flex font-bold text-gray-600 ${show? '':'hidden'}`}>
                    <li className="pr-5">
                    <AnchorLink
                        href="#"
                        className="px-3 border border-white hover:border-gray-600 rounded py-2"
                    >
                        Home
                    </AnchorLink>
                    </li>
                    <li className="pr-5">
                    <AnchorLink
                        href="#about"
                        className="px-3 border border-white hover:border-gray-600 rounded py-2"
                    >
                        About
                    </AnchorLink>
                    </li>
                    <li className="pr-5">
                    <AnchorLink
                        href="#projects"
                        className="px-3 border border-white hover:border-gray-600 rounded py-2"
                    >
                        Projects
                    </AnchorLink>
                    </li>
                    <li className="pr-5">
                    <AnchorLink
                        href="#contact"
                        className="px-3 border border-white hover:border-gray-600 rounded py-2"
                    >
                        Contact
                    </AnchorLink>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div id='nav-links-mob' className={`absolute left-1/2 -translate-x-1/2 text-center flex flex-col items-center justify-center bg-black z-50 w-4/5 p-10  text-white md:hidden mt-10 ${show? '':'hidden'}`}>
            <div className="text-center flex flex-col items-center justify-center">
              <ul className="font-bold ">
                <AnchorLink href="#" className="py-2 cursor-pointer hover:text-red-600">
                  <li className=" text-center ">
                    Home
                  </li>
                </AnchorLink>
                <AnchorLink href="#about" className="py-2 cursor-pointer hover:text-red-600">
                  <li className="mt-4 text-center ">
                    About
                  </li>
                </AnchorLink>
                <AnchorLink href="#projects" className="py-2 cursor-pointer hover:text-red-600">
                  <li className="mt-4 text-center ">
                    Porjects
                  </li>
                </AnchorLink>
                <AnchorLink href="#contact" className="py-2 cursor-pointer hover:text-red-600">
                  <li className="mt-4 text-center ">
                    Contact
                  </li>
                </AnchorLink>
              </ul>
            </div>
          </div>
    </>
  )
}

export default Header;