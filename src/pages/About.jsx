import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mobility from "../assets/about.png";
import urban from "../assets/urban-living-desktop.png";
import value01 from "../assets/Group 11.png";
import value02 from "../assets/Group 24.png";
import value03 from "../assets/Group 12.png";
import arrowUp from "../assets/Path 3.svg";
import arrowDown from "../assets/Path 3b.svg";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-bg-about-desktop bg-contain bg-no-repeat h-40 lg:h-80">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-start p-4 font-bold text-5xl text-white">
            About
          </h1>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:text-start items-center justify-between p-4">
          <div className="lg:w-96">
            <h2 className="text-4xl font-bold text-[#495567] my-5">
              Mobility for the digital era
            </h2>
            <p className="text-sm text-[#939caa]">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
          <div>
            <img src={mobility} alt="" className="rounded-full" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:text-start items-center my-10 justify-between p-4">
          <div>
            <img src={urban} alt="" className="rounded-full" />
          </div>
          <div className="lg:w-96">
            <h2 className="text-4xl font-bold text-[#495567] my-5">
              Better urban living
            </h2>
            <p className="text-sm text-[#939caa]">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-[#495567] text-3xl font-bold">Our values</h3>
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

        <div className="my-10">
          <h3 className="text-[#495567] text-3xl font-bold">FAQs</h3>

          <div className="flex flex-col justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-between">
              <h3 className="text-[#495567] text-3xl font-bold">
                How it works
              </h3>
              <div>
                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      How do I download the app?
                    </h4>
                    <img src={arrowUp} alt="" className="w-5" />
                  </div>
                  <p className="text-xs my-5 text-[#495567]">
                    To download the Scoot app, you can search “Scoot” in both
                    the App and Google Play stores. An even simpler way to do it
                    would be to click the relevant link at the bottom of this
                    page and you’ll be re-directed to the correct page.
                  </p>
                </div>

                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4 my-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      Can I find a nearby Scoots?
                    </h4>
                    <img src={arrowDown} alt="" className="w-5" />
                  </div>
                </div>

                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4 my-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      Do I need a license to ride?
                    </h4>
                    <img src={arrowDown} alt="" className="w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-20 p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 justify-between">
              <h3 className="text-[#495567] text-3xl font-bold">
                Safe driving
              </h3>
              <div>
                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      Should I wear a helmet?
                    </h4>
                    <img src={arrowUp} alt="" className="w-5" />
                  </div>
                  <p className="text-xs my-5 text-[#495567]">
                    Yes, please do! All cities have different laws. But we
                    strongly strongly strongly recommend always wearing a helmet
                    regardless of the local laws. We like you and we want you to
                    be as safe as possible while Scooting.
                  </p>
                </div>

                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4 my-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      How about the rules & regulations?
                    </h4>
                    <img src={arrowDown} alt="" className="w-5" />
                  </div>
                </div>

                <div className="flex flex-col w-[30rem] text-start bg-[#f2f5f9] hover:bg-[#fff4df] cursor-pointer p-4 my-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[#495567] text-2xl font-bold">
                      What if I damage my Scoot?
                    </h4>
                    <img src={arrowDown} alt="" className="w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
