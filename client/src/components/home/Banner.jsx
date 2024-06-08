import { useState } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Video from "./Video";
import Card from "../Card";
import { LuPalmtree } from "react-icons/lu";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section className="flex flex-col">
        <section className="space-y-5 my-5 mx-7 md:mx-40 flex flex-col items-center text-center lg:hidden">
          <h1 className="text-slate-500 font-serif text-2xl">
            The modern way for anyone to invest in real estate
          </h1>
          <p className="text-slate-700 leading-snug font-quicksand">
            Digitally invest in prime rental properties from only INR 500 (USD
            136), no matter where you are in the world!
          </p>
          <p
            onClick={() => setShowVideo(true)}
            className="flex items-center space-x-1.5 cursor-pointer"
          >
            <IoMdArrowDroprightCircle className="text-cyan-400 text-3xl" />
            <span className="font-quicksand tracking-tight">How it works</span>
          </p>
          <div className="flex items-center space-x-3">
            <img
              className="cursor-pointer"
              src="https://getstake.com/assets/app-store.svg"
              alt="app-store"
            />
            <img
              className="cursor-pointer"
              src="https://getstake.com/assets/play-store.svg"
              alt="play-store"
            />
          </div>
        </section>
        <section className="relative h-[calc(100vh-4rem-52.8px)]">
          <div className="custom-shape">
            <svg
              className=""
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <section className="absolute top-0 bottom-0 h-fit my-auto left-[11%] w-[500px] space-y-5 hidden lg:flex flex-col items-start text-start">
            <h1 className="text-slate-500 font-serif text-4xl">
              The modern way for anyone to invest in real estate
            </h1>
            <p className="text-slate-700 leading-snug font-quicksand">
              Digitally invest in prime rental properties from only INR 500 (USD
              136), no matter where you are in the world!
            </p>
            <p
              onClick={() => setShowVideo(true)}
              className="flex items-center space-x-1.5 cursor-pointer"
            >
              <IoMdArrowDroprightCircle className="text-cyan-400 text-3xl" />
              <span className="font-quicksand tracking-tight">
                How it works
              </span>
            </p>
            <div className="flex items-center space-x-3">
              <img
                className="cursor-pointer"
                src="https://getstake.com/assets/app-store.svg"
                alt="app-store"
              />
              <img
                className="cursor-pointer"
                src="https://getstake.com/assets/play-store.svg"
                alt="play-store"
              />
            </div>
          </section>
          <section className="absolute top-7 mx-auto left-0 lg:left-auto right-0 lg:right-[11%] bg-[url(https://getstake.com/assets/common/iphone-13-pro-frame.webp)] w-80 lg:w-[30vw] xl:w-[25vw] h-[90%] lg:h-full bg-cover pt-[52px]">
            <div className="h-full bg-white px-5 mx-[18px] lg:mx-[1.4vw] rounded-xl space-y-2.5 overflow-hidden">
              <h1 className="text-lg">
                <span className="text-2xl text-cyan-500 font-serif">D</span>
                <span className="font-serif">uo</span>
                <span className="text-xl text-cyan-500 font-serif">F</span>
                <span className="font-serif">raction</span>
              </h1>
              <div className="w-full rounded-xl h-[50%] bg-[url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg)] bg-cover bg-center"></div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 border border-slate-300 rounded py-1 px-1.5">
                  <svg width="12" height="12" viewBox="0 0 66 66" fill="none">
                    <path
                      fill="#5B9D3B"
                      d="M63.15405,21.6983C58.70056,9.06049,46.66138,0,32.5,0c-3.37939,0-6.63782,0.5166-9.70184,1.47375V21.6983H63.15405z"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M22.79816,21.6983v21.68567h40.32806C64.33588,39.98053,65,36.31842,65,32.5c0-3.7879-0.65472-7.42133-1.84595-10.8017H22.79816z"
                    ></path>
                    <path
                      fill="#121C30"
                      d="M22.79816,63.52625C25.86218,64.4834,29.12061,65,32.5,65c14.13086,0,26.14966-9.02087,30.62622-21.61603H22.79816V63.52625z"
                    ></path>
                    <path
                      fill="#B81942"
                      d="M22.79816,21.6983V1.47375C9.58795,5.60034,0,17.93011,0,32.5s9.58795,26.89966,22.79816,31.02625V43.38397V21.6983z"
                    ></path>
                  </svg>
                  <span className="text-sm">City</span>
                </div>
                <div className="flex items-center space-x-1 border border-slate-300 rounded py-1 px-1.5">
                  <LuPalmtree className="text-cyan-500" />
                  <span className="text-sm">Holiday</span>
                </div>
              </div>
              <address>Landmark, City</address>
              <div className="flex items-center gap-5 justify-between">
                <p className="text-xs text-slate-500 font-semibold">
                  <span className="text-lg text-cyan-500 mr-1 font-normal">
                    2,000
                  </span>
                  shares
                </p>
                <p className="text-xs text-slate-500 font-semibold">
                  Available
                  <span className="text-lg text-cyan-500 ml-1 font-normal">
                    1,750
                  </span>
                </p>
              </div>
              <div className="bg-slate-100 rounded-md p-2.5 space-y-2.5">
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span className="">Area</span>
                  <span className="text-slate-700">
                    5,500
                    <span className="text-xs">sqft</span>
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span className="">Carpet area</span>
                  <span className="text-slate-700">
                    4,250
                    <span className="text-xs">sqft</span>
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span className="">Posted on</span>
                  <span className="text-slate-700">02/03/2023</span>
                </p>
              </div>
            </div>
          </section>
          <div className="absolute bg-white w-[95%] lg:w-[80%] border border-slate-100 shadow bottom-0 lg:-bottom-[52.8px] left-0 right-0 mx-auto text-center rounded-md py-3 lg:py-6 space-y-5 lg:space-y-0 lg:justify-around lg:flex">
            <p className="flex flex-col">
              <span className="text-xl lg:text-2xl text-slate-600 font-medium font-quicksand">
                285K+
              </span>
              <span className="font-quicksand">registered users</span>
            </p>
            <p className="flex flex-col">
              <span className="text-xl lg:text-2xl text-slate-600 font-medium font-quicksand">
                INR 174M+
              </span>
              <span className="font-quicksand">in property transactions</span>
            </p>
            <p className="flex flex-col">
              <span className="text-xl lg:text-2xl text-slate-600 font-medium font-quicksand">
                197
              </span>
              <span className="font-quicksand">user nationalities</span>
            </p>
            <p className="flex flex-col">
              <span className="text-xl lg:text-2xl text-slate-600 font-medium font-quicksand">
                INR 5.7M+
              </span>
              <span className="font-quicksand">rental income paid</span>
            </p>
          </div>
        </section>
      </section>
      {showVideo && <Video setShowVideo={setShowVideo} />}
    </>
  );
};

export default Banner;
