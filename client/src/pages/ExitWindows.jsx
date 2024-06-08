import { BiMobileVibration } from "react-icons/bi";
import { VscSourceControl } from "react-icons/vsc";
import {
  BsBuildings,
  BsDatabaseUp,
  BsBoxSeam,
  BsRepeat,
  BsShop,
} from "react-icons/bs";
import { Link } from "react-scroll";

const ExitWindows = () => {
  return (
    <>
      <section className="h-[calc(100vh-4rem)] w-full flex justify-center items-center bg-gradient-to-b from-yellow-50/75 to-cyan-50/50">
        <section className="flex flex-col items-center space-y-5 -mt-16 text-center mx-2.5">
          <p className="flex items-center bg-cyan-100 px-2 py-1 rounded-md text-cyan-500 space-x-2">
            <BiMobileVibration />
            <span className="text-sm">
              Exit windows are available on mobile only
            </span>
          </p>
          <p className="text-slate-700 font-serif text-3xl">
            <span className="text-cyan-500">Flexibility</span> and{" "}
            <span className="text-cyan-500">liquidity</span> for your real
            estate portfolio
          </p>
          <p className="text-slate-700 text-lg sm:text-xl">
            This is not a trading tool, it’s an exit strategy
          </p>
          <div className="space-x-3">
            <Link
              offset={-64}
              to="buy-shares"
              className="border border-slate-500 px-3 pt-1 pb-1.5 rounded-md hover:bg-cyan-400 hover:text-white duration-200 text-slate-600 text-sm font-semibold cursor-pointer"
            >
              Buy shares
            </Link>
            <Link
              offset={-64}
              to="sale-stakes"
              className="border border-slate-500 px-3 pt-1 pb-1.5 rounded-md hover:bg-cyan-400 hover:text-white duration-200 text-slate-600 text-sm font-semibold cursor-pointer"
            >
              Sale stakes
            </Link>
          </div>
        </section>
      </section>

      <section
        id="buy-shares"
        className="h-auto lg:h-[calc(100vh-4rem)] grid place-items-center"
      >
        <section className="w-11/12 xl:w-2/3 flex flex-col items-center text-slate-600">
          <h1 className="text-2xl sm:text-3xl font-serif mb-1 text-center">
            Buy in the exit window
          </h1>
          <p className="w-auto sm:w-[500px] text-center leading-tight mb-5 text-sm sm:text-base">
            Get much more investment and diversification opportunities through
            access to previously funded properties.
          </p>
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-5">
            <div className="relative col-span-2 row-span-2 border border-slate-100 shadow rounded-lg p-5 pt-20 bg-slate-50 hover:bg-slate-100 duration-200">
              <img
                src="https://getstake.com/assets/secondary-market/buyer-exit-window-assets-preview.png"
                alt="buyer-exit-window-assets-preview"
              />
              <h1 className="font-serif text-lg my-2">
                Access to 20+ high quality properties
              </h1>
              <p className="text-sm leading-snug">
                Take advantage of the unique opportunity to acquire shares in
                high-potential properties with a track record of performance
                that were previously funded on our platform.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <BsBuildings />
              </span>
            </div>
            <div className="relative col-span-3 border border-slate-100 shadow rounded-lg p-5 pt-16 xl:pt-5 flex flex-col justify-center bg-slate-50 hover:bg-slate-100 duration-200">
              <h1 className="font-serif text-lg my-2">
                Higher earning potential
              </h1>
              <p className="text-sm leading-snug">
                Benefit from a higher rental yield and see instant returns as
                the asset grows in value compared to purchasing shares at the
                regular market price.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <BsDatabaseUp />
              </span>
            </div>
            <div className="relative col-span-3 border border-slate-100 shadow rounded-lg p-5 pt-16 xl:pt-5 flex flex-col justify-center bg-slate-50 hover:bg-slate-100 duration-200">
              <h1 className="font-serif text-lg my-2">Invest in properties</h1>
              <p className="text-sm leading-snug">
                Unlock competitive pricing on properties with discounts of up to
                20% on current market value compared to the original offering
                price. Only on our platform.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <BsBoxSeam />
              </span>
            </div>
          </section>
        </section>
      </section>

      <section
        id="sale-stakes"
        className="h-auto lg:h-[calc(100vh-4rem)] grid place-items-center my-16 lg:my-0"
      >
        <section className="w-11/12 xl:w-2/3 flex flex-col items-center text-slate-600">
          <h1 className="text-2xl sm:text-3xl font-serif mb-1 text-center">
            Sell your stakes
          </h1>
          <p className="w-auto sm:w-[500px] text-center leading-tight mb-5 text-sm sm:text-base">
            Access cash when you need it by exiting your investment with the
            flexibility to list your shares for sale
          </p>
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-5">
            <div className="relative col-span-3 border border-slate-100 shadow rounded-lg p-5 pt-16 xl:pt-5 flex flex-col justify-center bg-slate-50 hover:bg-slate-100 duration-200">
              <h1 className="font-serif text-lg my-2">
                Liquidity, when you need it most
              </h1>
              <p className="text-sm leading-snug">
                Get access to liquidity and get cash for your investment,
                especially if you need to free up funds for other purposes.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <BsShop />
              </span>
            </div>
            <div className="relative col-span-2 row-span-2 border border-slate-100 shadow rounded-lg p-5 pt-10 bg-slate-50 hover:bg-slate-100 duration-200">
              <img
                src="	https://getstake.com/assets/secondary-market/simplified-en.png"
                alt="buyer-exit-window-assets-preview"
              />
              <h1 className="font-serif text-lg my-2">
                Simplified process from A-Z
              </h1>
              <p className="text-sm leading-snug">
                Create a sell listing in just a few clicks, and the platform
                will handle the rest, including finding potential buyers and
                facilitating the sale and transfer.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <BsRepeat />
              </span>
            </div>
            <div className="relative col-span-3 border border-slate-100 shadow rounded-lg p-5 pt-16 xl:pt-5 flex flex-col justify-center bg-slate-50 hover:bg-slate-100 duration-200">
              <h1 className="font-serif text-lg my-2">
                Control your investment
              </h1>
              <p className="text-sm leading-snug">
                Actively manage your portfolio with the flexibility of listing
                your shares for sale at current market value or up to a 20%
                discount.
              </p>
              <span className="absolute top-5 left-5 rounded-lg bg-yellow-400 p-2.5 border-4 border-yellow-200">
                <VscSourceControl />
              </span>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default ExitWindows;
