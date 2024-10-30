import { useState } from "react";
import { WhiteBgButton } from "./Buttons"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#Hero");
  return (
    <>
      <nav className="flex items-center justify-around space-x-36  py-2 pt-5 px-12 z-20 w-full bg-Nwhite">
        {/* LOGO  */}
        <h1 className="logo font-extrabold text-3xl ">
          Prakash

        </h1>
        {/* LINKS FOR SECTIONS */}
        <ul className="flex items-center  gap-6 px-10 py-3.5 rounded-full font-medium bg-bgDark bg-opacity-5 backdrop-blur-lg border border-black">
        <li className=""><a href="#Hero">Home</a></li>
        <li className=""><a href="#About">About</a></li>
        <li className=""><a href="#Skills">Skills</a></li>
        <li className=""><a href="#Projects">Projects</a></li>
        <li className=""><a href="#Contact">Contact</a></li>
    </ul>
        {/* Download CV Button */}
        <WhiteBgButton text="Download CV" />
      </nav>
    </>
  )
}

export default Navbar
