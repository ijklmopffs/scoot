import { Link } from "react-router-dom";
import scoot from "../assets/scoot.svg";
import open from "../assets/navigation.svg";
import close from "../assets/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="flex items-center justify-between max-w-[1100px] mx-auto p-4 relative md:static">
        <div className="flex items-center gap-8">
          <div className="md:hidden" onClick={handleClick}>
            {nav ? <img src={close} alt="" /> : <img src={open} alt="" />}
          </div>

          <Link to="/">
            <img src={scoot} alt="" />
          </Link>
          <div
            className={
              nav
                ? "flex flex-col md:flex-row items-start md:items-center md:justify-between w-4/5 h-screen md:h-auto p-10 md:p-0 md:w-[60rem] lg:w-[70rem] md:gap-10 text-[#939caa] text-sm font-bold absolute md:static bg-[#333a44] md:bg-transparent top-[4.5rem] left-0"
                : "flex flex-col md:flex-row items-start md:items-center md:justify-between w-4/5 h-screen md:h-auto p-10 md:p-0 md:w-[60rem] lg:w-[70rem] md:gap-10 text-[#939caa] text-sm font-bold absolute md:static bg-[#333a44] md:bg-transparent top-[4.5rem] left-[-100%]"
            }
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <Link to="/about" className="hover:text-[#fcb72b]">
                About
              </Link>
              <Link to="/careers" className="hover:text-[#fcb72b]">
                Careers
              </Link>
              <Link to="/locations" className="hover:text-[#fcb72b]">
                Locations
              </Link>
            </div>
            <button className="bg-[#fcb72b] text-sm text-white my-[35rem] md:my-0 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Get Scootin
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
