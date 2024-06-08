import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BsDatabase,
  BsFileEarmarkArrowUp,
  BsFileEarmarkCheck,
  BsShieldLock,
} from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import { Link } from "react-scroll";

const SellProperty = () => {
  const [openList, setOpenList] = useState(false);
  const [openSubList, setOpenSubList] = useState(false);
  const navigate = useNavigate();
  const { categoriesLoading, categories } = useSelector((store) => store.app);
  const handleRouteRedirect = (name) => {
    if (name.includes(" ")) {
      name = name.split(" ").join("-");
    }
    if (name.includes("resort")) {
      name = "resort";
    }
    navigate(`/sell-property/${name}`);
  };

  return (
    <>
      <section
        style={{ backgroundImage: "url(/world-map.png)" }}
        className="relative w-full h-[calc(100vh-4rem)] bg-cover bg-center"
      >
        <section className="absolute top-0 w-full h-full bg-gradient-to-b from-yellow-50/75 to-cyan-50/25 grid place-items-center">
          <section className="text-center -mt-0 md:-mt-16 flex flex-col items-center">
            <h1
              id="top"
              className="text-cyan-500 font-serif text-3xl md:text-4xl mx-5 mb-5 animate-pulse"
            >
              Sell with DuoFraction!
            </h1>
            <h1 className="text-slate-500 text-lg md:text-xl font-serif mx-5 mb-7">
              <span className="leading-snug">
                The easiest way to sell your fractional asset! No showings, no
                surprises and no hassle!
              </span>
            </h1>
            {categoriesLoading ? (
              <div className="relative">
                <button className="px-3 py-1 rounded-md text-white font-semibold w-max bg-slate-300 cursor-default">
                  Sell with DuoFraction
                </button>
                <ImSpinner8 className="absolute left-0 right-0 mx-auto top-2 text-lg text-slate-400 animate-spin" />
              </div>
            ) : (
              <div className="relative">
                <button
                  onMouseEnter={() => setOpenList(true)}
                  onMouseLeave={() => setOpenList(false)}
                  className={`px-3 py-1 rounded-md text-white font-semibold duration-200 w-max ${
                    openList ? "bg-cyan-500" : "bg-cyan-400"
                  }`}
                >
                  Sell with DuoFraction
                </button>
                <ul
                  onMouseEnter={() => setOpenList(true)}
                  onMouseLeave={() => setOpenList(false)}
                  className={`absolute w-full z-10 bg-white shadow rounded-md text-base text-start text-slate-500 overflow-hidden capitalize duration-100 ${
                    openList ? "block" : "hidden"
                  }`}
                >
                  <li
                    onMouseEnter={() => setOpenSubList(true)}
                    onMouseLeave={() => setOpenSubList(false)}
                    className={`px-3 py-1 cursor-pointer ${
                      openSubList ? "bg-slate-100 text-cyan-500" : ""
                    }`}
                  >
                    Real Estate
                  </li>
                  {/* {categories.filter((i) => i.propertyType === "other")
                    .map((i) => (
                      <li
                        key={i.name}
                        onClick={() => handleRouteRedirect(i.name)}
                        className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer font-quicksand`}
                      >
                        {i.name}
                      </li>
                    ))} */}
                </ul>
                <ul
                  onMouseEnter={() => {
                    setOpenList(true);
                    setOpenSubList(true);
                  }}
                  onMouseLeave={() => {
                    setOpenList(false);
                    setOpenSubList(false);
                  }}
                  className={`absolute left-[100px] w-max z-10 bg-white shadow rounded-md text-base text-start text-slate-500 overflow-hidden capitalize duration-100 ${
                    openSubList ? "block" : "hidden"
                  }`}
                >
                  {categories
                    ?.filter((i) => i.propertyType === "real-estate")
                    .map((i) => (
                      <li
                        key={i.name}
                        onClick={() => handleRouteRedirect(i.name)}
                        className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer font-quicksand`}
                      >
                        {i.name === "under construction project"
                          ? "Under Const. Project"
                          : i.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </section>
          <div className="absolute left-52 top-32 lg:top-52">
            <div className="w-[125px] h-[50px] rounded-md bg-cyan-400 absolute -top-2.5 -left-5 opacity-50"></div>
            <div className="w-[125px] h-[50px] rounded-md bg-yellow-400 absolute -bottom-2.5 -right-5 opacity-50"></div>
          </div>
          <div className="absolute right-52 bottom-32 lg:bottom-52">
            <div className="w-[125px] h-[50px] rounded-md bg-cyan-400 absolute -top-2.5 -left-5 opacity-50"></div>
            <div className="w-[125px] h-[50px] rounded-md bg-yellow-400 absolute -bottom-2.5 -right-5 opacity-50"></div>
          </div>
        </section>
      </section>

      <section className="w-full h-auto grid place-items-center">
        <section className="flex flex-col-reverse xl:flex-row items-center space-x-0 xl:space-x-20">
          <div className="space-y-5 text-center xl:text-start">
            <h1 className="font-serif text-2xl xl:text-4xl text-slate-600">
              We’ll pay cash for your property
            </h1>
            <p className="text-lg xl:text-xl flex flex-col max-w-[500px] px-5 xl:px-0 space-y-2.5">
              <span className="font-serif text-slate-600 leading-snug">
                If you're interested in a quick sale of your property for cash,
                then DuoFraction is the perfect solution.
              </span>
              <span className="text-sm xl:text-base text-slate-500">
                We have a 100% closing record and can offer fair market value -
                with none of the hassle. Our team is incredibly knowledgeable
                and can help you navigate the process seamlessly.
              </span>
            </p>
            <div className="relative group w-fit mx-auto">
              <Link
                to="top"
                offset={-70}
                className="bg-cyan-400 group-hover:bg-cyan-500 px-3 pt-1 pb-1.5 rounded-md text-white font-semibold duration-200 w-max cursor-pointer"
              >
                Sell with DuoFraction
              </Link>
            </div>
          </div>
          <img
            className="h-[35vh] sm:h-[50vh] xl:h-[75vh] mb-5 xl:mb-0"
            src="https://getstake.com/assets/sell-with-stake/whole-property.png"
            alt="whole-property"
          />
        </section>
      </section>

      <section className="relative mt-[75px] lg:mt-[calc(100px)] bg-slate-900 w-11/12 rounded-lg mx-auto py-20 overflow-hidden">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-slate-300 text-2xl md:text-3xl text-center mb-5">
            Ready to sell your property?
          </h1>
          <p className="text-slate-500 w-auto mx-5 md:mx-0 md:w-[450px] xl:w-[500px] text-center leading-snug md:leading-normal text-sm md:text-base mb-7">
            If you’re thinking about selling then don't hesitate! The process is
            quick and you’re under no obligation to accept our offer
          </p>
          <Link
            to="top"
            offset={-70}
            className="bg-cyan-400 px-3 pt-1 pb-1.5 rounded-md text-white font-semibold duration-200 w-max cursor-pointer"
          >
            Sell with DuoFraction
          </Link>
        </div>
        <img
          className="absolute w-48 bottom-20 -left-5 rounded-md hidden lg:block"
          src="https://getstake.com/assets/sell-with-stake/ready-to-sell-left-placeholder.png"
          alt="ready-to-sell-left-placeholder"
        />
        <img
          className="absolute w-28 top-20 -right-5 rounded-md hidden lg:block"
          src="https://getstake.com/assets/sell-with-stake/ready-to-sell-right-placeholder.png"
          alt="ready-to-sell-right-placeholder"
        />
        <img
          className="absolute w-36 bottom-0 left-96 rounded-t-md-md hidden lg:block"
          src="https://getstake.com/assets/sell-with-stake/ready-to-sell-bottom-placeholder.png"
          alt="ready-to-sell-bottom-placeholder"
        />
        <img
          className="absolute w-36 top-0 right-96 rounded-b-md hidden lg:block"
          src="https://getstake.com/assets/sell-with-stake/ready-to-sell-top-placeholder.png"
          alt="ready-to-sell-top-placeholder"
        />
        <div className="absolute left-52 w-[125px] h-[50px] bg-cyan-400 top-0 rounded-b-md"></div>
        <div className="absolute right-52 w-[125px] h-[50px] bg-yellow-400 bottom-0 rounded-t-md"></div>
      </section>

      <section className="w-full grid place-items-center my-[75px] lg:my-[calc(100px)]">
        <section className="flex flex-col items-center space-y-5 md:space-y-8">
          <div className="space-y-1">
            <h1 className="font-serif text-slate-600 text-2xl md:text-3xl text-center">
              How it works
            </h1>
            <p className="text-slate-500 w-auto mx-5 md:mx-0 md:w-[650px] xl:w-[700px] text-center leading-snug md:leading-normal text-sm md:text-base">
              List your property on DuoFraction and get paid in cash when
              funding closes. It's that simple!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsDatabase className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Quick offer
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                Upload your property details with no obligations. If we're
                interested then we’ll provide an offer
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsFileEarmarkArrowUp className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Due diligence
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                We’ll manage any necessary upgrades and take professional
                photography for marketing
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsFileEarmarkCheck className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Quick sale
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                Your property will be listed on the DuoFraction platform and
                typically sold within 30-45 days
              </p>
            </div>
            <div className="border border-slate-100 rounded-lg cursor-default shadow w-[300px] h-[160px] flex flex-col justify-evenly px-2.5 hover:bg-slate-100 duration-200">
              <BsShieldLock className="text-cyan-400 text-3xl mb-2" />
              <p className="font-serif text-lg text-slate-600 leading-tight">
                Easy close
              </p>
              <p className="text-sm text-slate-500 leading-snug">
                Sale proceeds will be transferred to your bank acount within 30
                days of the property closing
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SellProperty;
