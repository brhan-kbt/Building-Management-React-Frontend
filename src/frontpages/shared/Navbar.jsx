import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleCloseMenu = () => {
      setIsOpen(!isOpen);
      window.removeEventListener("scroll", handleScroll);
    };
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const menuRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        window.addEventListener("click", handleClickOutside);
      }

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen]);
  
    useEffect(() => {
      if (isOpen) {
        window.addEventListener("scroll", handleScroll);
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isOpen]);
  
    useEffect(() => {
      if (scrollPosition > window.innerHeight) {
        handleCloseMenu();
      }
    }, [scrollPosition]);

  return (
    <nav className="relative bg-whitegray">
    {/* <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between ">
        <div className="flex">
          <Link to="/">
            <img srcSet={logo} alt="" className='w-32 h-20'/>
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="ml-4 flex items-center">
             
            <a href="/" className="px-8 text-lg text-dark hover:text-secondary">
              About
            </a>
            <a href="#" className="px-8 text-lg text-dark hover:text-secondary">
              Features
            </a>
            <a href="#" className="px-8 text-lg text-dark hover:text-secondary">
              Pricing
            </a>
           
            <Link to='/pricing' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-secondary hover:bg-primary mt-4 md:mt-0 font-semibold mx-6">
              Pricing
            </Link>
         
            <Link to='/register' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-primary hover:bg-secondary mt-4 md:mt-0 font-semibold">
                Get Started
            </Link>
          </div>
        </div>
        <div>
        <div className="relative z-50">
        <div className="flex ">
            <Link to='/login' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-secondary hover:bg-primary mt-4 md:mt-0 font-semibold mx-6">
                Buy Now
            </Link>
         
            <Link to='/login' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-primary hover:bg-secondary mt-4 md:mt-0 font-semibold">
                Request Demo
            </Link>
        </div>

        </div>
        </div>
        <div className="-mr-2 flex sm:hidden">
          <button
            onClick={handleCloseMenu}
            className="text-[#000] inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-[#23675A] focus:outline-none focus:bg-[#23675A] focus:text-white transition duration-150 ease-in-out"
          >
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div> */}


    <div className='flex  justify-between px-8 text-lg shadow-md  shadow-secondary text-dark hover:text-secondary py-2  items-center'>
        <div>
          <Link to="/">
              <img srcSet={logo} alt="" className='w-32 h-20'/>
          </Link>
          </div>
          <div className='hidden sm:block'>
              <Link to="/about" className="px-8 text-lg text-dark hover:text-secondary">
                About
              </Link>
            
              <Link to='/pricing' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-secondary hover:bg-primary mt-4 md:mt-0 font-semibold mx-6">
                Pricing
              </Link>
          
              <Link to='/register' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-primary hover:bg-secondary mt-4 md:mt-0 font-semibold mr-6">
                  Get Started
              </Link>
              <a className=" justify-center">
              <select id="language-select" className='border border-primary focus:border-secondary px-8 rounded-lg' name="language">
                <option value="en" selected>EN</option>
                <option value="es" >Amh</option>
              </select>
        </a>
          </div>
          <div className="-mr-2 flex sm:hidden">
              <button
                onClick={handleCloseMenu}
                className="text-primary inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-secondary focus:outline-none focus:bg-secondary focus:text-white transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
          </div>
    </div>


    <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
      <div className="fixed top-0 left-0 b flex bottom-0 justify-between flex-col w-1/2 max-w-sm py-6 px-6 bg-secondary overflow-y-auto">
       <div className="flex flex-col justify-between">
            <Link to="/" className='flex justify-center mb-24'>
                <img srcSet={logo} alt="" className='w-32 h-20'/>
            </Link>
            
            <a href="/about" className="px-8 text-lg text-center text-white hover:text-primary">
                About
              </a>
            
              <Link to='/pricing' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-secondary hover:bg-primary mt-4 md:mt-0 font-semibold mx-6">
                Pricing
              </Link>

              <Link to='/register' className="inline-block text-sm px-8 py-3 leading-none border rounded text-white bg-secondary hover:bg-primary mt-4 md:mt-0 font-semibold mx-6">
                Get Started
              </Link>
        </div>
        <div>
        <a className="flex justify-center">
          <select id="language-select" className='border-0' name="language">
            <option value="en" selected>EN</option>
            <option value="es" >Amh</option>
          </select>
        </a>

        </div>
      </div>
    </div>
 
 
    </nav>
  )
}

export default Navbar