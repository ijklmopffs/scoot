import line from "../assets/Path 2.svg";
import line2 from "../assets/Path 2b.svg";
import point from "../assets/Group 8 Copy.svg";
import group8 from "../assets/Group 8.svg";
import group9 from "../assets/Group 9.svg";
import group10 from "../assets/Group 10.svg";
import womanLine from "../assets/Group 32.svg";
import woman from "../assets/Group 33.png";
import city from "../assets/Bitmap Copy.png";
import group17 from "../assets/Group 17.svg";
import group13 from "../assets/Group 13 Copy.svg";
import mobile27 from "../assets/Group 27 Copy 2.png";
import mobile272 from "../assets/Group 27 Copy.png";
import mobile2722 from "../assets/Group 27.png";

export default function Body() {
  return (
    <>
      <header className="h-screen md:h-[700px] lg:h-screen bg-no-repeat bg-cover p-4 bg-bg-mobile md:bg-bg-tablet lg:bg-bg-desktop">
        <div className="max-w-[1100px] mx-auto lg:relative top-40">
          <h1
            className="my-20 lg:mt-0 font-bold lg:font-normal text-4xl lg:text-start md:text-5xl 
          text-white w-80 mx-auto md:w-96 lg:mx-0 lg:w-[30rem]"
          >
            Scooter sharing made simple
          </h1>
          <div className="flex lg:absolute right-24">
            <img
              src={line}
              alt=""
              className="hidden lg:block lg:relative right-48"
            />
            <p className="lg:text-start w-80 mx-auto lg:mx-0 my-10 md:my-0 md:w-96 lg:w-auto text-white lg:relative text-sm right-44 top-10">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <img
              src={point}
              alt=""
              className="hidden lg:block md:relative top-10 right-32"
            />
          </div>
          <button className="bg-[#fcb72b] text-sm md:my-5 lg:my-0 top-48 right-96 lg:relative text-white font-bold p-3 px-10 hover:bg-transparent hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
            Get Scootin
          </button>
        </div>
      </header>

      <section className="lg:relative lg:my-16 p-4">
        <img
          src={line2}
          alt=""
          className="hidden lg:block md:absolute -z-10 top-10"
        />
        <div className="max-w-[1100px] p-4 flex flex-col lg:flex-row justify-center md:justify-normal items-center gap-8 mx-auto">
          <div className="flex md:block flex-col items-center">
            <img src={group8} alt="" className="w-20 h-20" />
            <div className="md:text-start md:w-[25rem] my-10">
              <h2 className="font-bold text-2xl text-[#495567] my-2">
                Locate with app
              </h2>
              <p className="text-sm text-[#939caa]">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.
              </p>
            </div>
          </div>
          <div className="flex md:block flex-col items-center">
            <img src={group9} alt="" className="w-20 h-20" />
            <div className="md:text-start md:w-[25rem] my-10">
              <h2 className="font-bold text-2xl text-[#495567] my-2">
                Pick your scooter
              </h2>
              <p className="text-sm text-[#939caa]">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </div>
          <div className="flex md:block flex-col items-center">
            <img src={group10} alt="" className="w-20 h-20" />
            <div className="md:text-start md:w-[25rem] my-10">
              <h2 className="font-bold text-2xl text-[#495567] my-2">
                Enjoy the ride
              </h2>
              <p className="text-sm text-[#939caa]">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.
              </p>
            </div>
          </div>
        </div>

        <div className="second-feature max-w-[1100px] mx-auto my-40">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="lg:text-start">
              <h2 className="font-bold text-3xl lg:text-5xl text-[#495567] lg:w-[27rem] my-5">
                Easy to use riding telemetry
              </h2>
              <p className="text-[#939caa] md:w-[37rem] my-5">
                The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you’ve been using the
                scooter, your traveling distance, and many more things all in an
                easy to use app.
              </p>
              <button className="bg-[#fcb72b] text-sm text-white font-bold p-3 px-10 hover:bg-transparent hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
                Learn more
              </button>
            </div>
            <div className="relative">
              <img src={womanLine} alt="" className="absolute bottom-20" />
              <img src={woman} alt="" className="hidden md:block" />
              <img src={mobile2722} alt="" className="md:hidden" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center my-20">
            <div className="relative">
              <img src={group13} alt="" className="absolute top-40 right-64" />
              <img src={mobile272} alt="" className="md:hidden" />
              <img src={city} alt="" className="hidden md:block lg:block" />
            </div>
            <div className="lg:text-start">
              <h2 className="font-bold text-3xl md:text-5xl text-[#495567] lg:w-[27rem] my-5">
                Coming to a city near you
              </h2>
              <p className="text-[#939caa] md:w-[37rem] my-5">
                Scoot is available in 4 major cities so far. We’re expanding
                rapidly, so be sure to let us know if you want to see us in your
                hometown. We’re aiming to let our scooters loose on 23 cities
                over the coming year.
              </p>
              <button className="bg-[#fcb72b] text-sm text-white font-bold p-3 px-10 hover:bg-transparent hover:outline-[#fcb72b] hover:text-[#fcb72b] hover:outline-2 hover:outline-double">
                Learn more
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center my-20">
            <div className="lg:text-start">
              <h2 className="font-bold text-3xl md:text-5xl text-[#495567] lg:w-[27rem] my-5">
                Zero hassle payments
              </h2>
              <p className="text-[#939caa] md:w-[37rem] my-5">
                Our payment is as easy as one two three. We accept most credit
                cards and debit cards. You can also link your PayPal account
                inside the app. Need to pay later? No worries! You can defer
                payment for up to a month.
              </p>
              <button
                className="bg-[#fcb72b] text-sm text-white font-bold p-3 px-10 hover:bg-transparent hover:outline-[#fcb72b] 
              hover:text-[#fcb72b] hover:outline-2 hover:outline-double"
              >
                Learn more
              </button>
            </div>
            <div className="relative">
              <img
                src={group17}
                alt=""
                className="hidden md:block absolute top-40 left-60"
              />
              <img src={mobile27} alt="" className="md:block top-40 left-60" />
              {/* <img src={mask} alt="" className="rounded-full" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
