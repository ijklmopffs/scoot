import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import locations from "../assets/locations.png";
import locationsmobile from "../assets/locations-mobile.png";

export default function Locations() {
  return (
    <>
      <Navbar />

      <section className="bg-bg-about-desktop bg-contain bg-no-repeat h-40 lg:h-80">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-start p-4 font-bold text-5xl text-white">
            Locations
          </h1>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto">
        <img src={locations} alt="" className="hidden md:block" />
        <img src={locationsmobile} alt="" className="md:hidden" />

        <div className="my-20 md:hidden">
          <p className="font-bold text-4xl text-[#495567] bg-[#fcb72b]/20 w-fit mx-auto p-8 px-16">
            New York
          </p>
          <p className="font-bold my-5 text-4xl text-[#495567] bg-[#fcb72b]/20 w-fit mx-auto p-8 px-20">
            London
          </p>
          <p className="font-bold my-5 text-4xl text-[#495567] bg-[#fcb72b]/20 w-fit mx-auto p-8 px-20">
            Jakarta
          </p>
          <p className="font-bold my-5 text-4xl text-[#495567] bg-[#fcb72b]/20 w-fit mx-auto p-8 px-20">
            Yokohama
          </p>
        </div>

        <div className="flex p-4 flex-col lg:flex-row justify-between items-center lg:text-start my-20">
          <h2 className="font-bold text-5xl text-[#495567] w-96 md:my-5 lg:my-0">
            Your city not listed?
          </h2>
          <p className="w-[30rem] text-sm md:my-5 lg:my-0">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <button className="bg-[#fcb72b] text-sm text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
            Message Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
