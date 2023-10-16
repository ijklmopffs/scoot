import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mission from "../assets/mission.png";
import value01 from "../assets/Group 11.png";
import value02 from "../assets/Group 24.png";
import value03 from "../assets/Group 12.png";

export default function Careers() {
  return (
    <>
      <Navbar />

      <section className="bg-bg-careers-desktop bg-contain bg-no-repeat h-40 lg:h-80">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-start p-4 font-bold text-5xl text-white">
            Careers
          </h1>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:text-start items-center justify-between p-4">
          <div className="lg:w-96">
            <h2 className="text-4xl font-bold text-[#495567] my-5">
              Care to join our mission?
            </h2>
            <p className="text-sm text-[#939caa]">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
            <button className="bg-[#fcb72b] text-sm text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Say Hello
            </button>
          </div>
          <div>
            <img src={mission} alt="" className="rounded-full" />
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-[#495567] text-3xl font-bold">Why join us?</h3>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-center">
            <div className="w-96">
              <img src={value01} alt="" />
              <h3 className="text-xl text-[#495567] font-bold my-5">
                Our tech
              </h3>
              <p className="text-xs text-[#939caa]">
                We’re using cutting edge technology to drive accessible urban
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </div>

            <div className="w-96">
              <img src={value02} alt="" />
              <h3 className="text-xl text-[#495567] font-bold my-5">
                Our integrity
              </h3>
              <p className="text-xs text-[#939caa]">
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </div>

            <div className="w-96">
              <img src={value03} alt="" />
              <h3 className="text-xl text-[#495567] font-bold my-5">
                Our community
              </h3>
              <p className="text-xs text-[#939caa]">
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 p-4">
          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">
                General Manager
              </h2>
              <p className="text-sm text-[#495567]">Jakarta, Indonesia</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6 my-5">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">
                UI/UX Designer
              </h2>
              <p className="text-sm text-[#495567]">Yokohama, Japan</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6 my-5">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">
                Blog Content Copywriter
              </h2>
              <p className="text-sm text-[#495567]">New York, United States</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6 my-5">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">
                Graphic Designer
              </h2>
              <p className="text-sm text-[#495567]">New York, United States</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6 my-5">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">
                Fleet Supervisor
              </h2>
              <p className="text-sm text-[#495567]">Jakarta, Indonesia</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-[#f2f5f9] items-center md:text-start p-6">
            <div>
              <h2 className="font-bold text-2xl text-[#495567]">UX Analyst</h2>
              <p className="text-sm text-[#495567]">London, United Kingdom</p>
            </div>
            <button className="bg-[#fcb72b] text-sm w-full md:w-auto text-white my-5 font-bold p-3 px-10 hover:bg-white hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
              Apply
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
