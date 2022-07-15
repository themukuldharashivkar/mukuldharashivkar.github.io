import React from 'react'

const NavBar = ({profile}) => { 
  
  return (
    <div className='bg-[#ffd103]'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-amber-500 ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <a href="/">
              <h2 className='text-black text-2xl font-bold'>{profile.title}</h2>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">About</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Skills</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Portfolio</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                <li className="group pl-6">

                  <a href="https://drive.google.com/uc?export=download&id=11tSV-Y4Gbrrmwil4Hn-JCJV0-VWZLoZc"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Resume</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">My Education</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                {/* <li className="group pl-6">

                  <a href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li> */}

                <li className="group pl-6">

                  <a href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-black">Blog</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li>

                {/* <li className="group pl-6">

                  <a href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-white"></span>
                </li> */}

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar