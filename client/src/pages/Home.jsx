import Banner from "../components/home/Banner";
import {
  BsDatabase,
  BsFileEarmarkArrowUp,
  BsFileEarmarkCheck,
  BsShieldLock,
} from "react-icons/bs";
import Testimonial from "../components/home/Testimonial";
import FundedProperties from "../components/home/FundedProperties";
import Calculator from "../components/Calculator";

const Home = ({ auth }) => {
  return (
    <>
      <Banner />
      <section className="w-full grid place-items-center mt-[75px] lg:mt-[calc(100px+52.8px)]">
        <section className="flex flex-col items-center space-y-5 md:space-y-10">
          <div className="space-y-2.5">
            <h1 className="font-serif text-slate-600 text-2xl md:text-3xl text-center">
              Real estate investing made easy
            </h1>
            <p className="text-slate-500 w-auto mx-5 md:mx-0 md:w-[650px] xl:w-[700px] text-center leading-snug md:leading-normal text-sm md:text-base">
              90% of the worlds millionaires made their fortunes through real
              estate, but it’s highly inaccessible, illiquid, and complicated -
              that’s where we come in!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsDatabase className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Invest in real estate
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                With fractionalised properties there is no mortgage or large
                down payments required for investing in real estate
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsFileEarmarkArrowUp className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Digital and diversified investing
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                Buy shares in prime rental properties and manage your
                diversified portfolio online through our mobile app and web
                platform
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsFileEarmarkCheck className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Hassle-free ownership
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                We handle the entire sales process, screen tenants and manage
                the property, saving you time and money
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsShieldLock className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Trusted entity with expertise
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                DuoFraction is regulated by the DFSA and our team has held
                leadership positions at the biggest developers in Dubai for over
                20 years
              </p>
            </div>
          </div>
        </section>
      </section>

      <Testimonial />

      <FundedProperties />

      <Calculator />
    </>
  );
};

export default Home;
