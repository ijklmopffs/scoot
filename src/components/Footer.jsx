import google from "../assets/ShapeG.svg";
import apple from "../assets/Combined Shape.svg";
import { Link } from "react-router-dom";
import scoot from "../assets/scoot2.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import twt from "../assets/twt.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-no-repeat h-96 p-20 lg:h-fit lg:p-40 md:pb-36 bg-cover bg-footer-mobile md:bg-footer-tablet lg:bg-footer-desktop">
          <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto justify-between items-center">
            <h2 className="font-bold text-3xl md:text-5xl text-white md:w-[28rem] lg:text-start my-10 md:my-5 lg:my-0">
              Sign up and Scoot off today
            </h2>
            <div className="flex items-center gap-2">
              <button className="bg-[#e5ecf4] p-2 flex rounded-md items-center gap-2">
                <img src={apple} alt="" />
                <p className="text-xs text-start">
                  Available on the <br />
                  <span className="text-base font-bold">AppStore</span>
                </p>
              </button>
              <button className="bg-[#e5ecf4] p-2 flex rounded-md items-center gap-2">
                <img src={google} alt="" />
                <p className="text-xs text-start">
                  Get it on <br />
                  <span className="text-base font-bold">GooglePlay</span>
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#333a44]">
          <div className="max-w-[1100px] mx-auto p-4">
            <div className="flex items-center gap-8 justify-between flex-col md:flex-row">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Link to="/">
                  <img src={scoot} alt="" />
                </Link>
                <div className="flex flex-col md:flex-row items-center gap-10 text-[#939caa] text-sm font-bold">
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
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <img src={fb} alt="" className="w-5" />
                <img src={twt} alt="" className="w-5" />
                <img src={ig} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
