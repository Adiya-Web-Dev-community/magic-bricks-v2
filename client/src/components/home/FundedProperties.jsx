import Card from "../Card";
import { useNavigate } from "react-router-dom";
import { propertiesConfig } from "../../configs/properties.config";
import useWindowDimensions from "../../helper/useWindowDimensions";

const Slider = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const sliceFactor = width < 1280 ? (width < 768 ? 1 : 2) : 3;

  return (
    <>
      <section className="w-full h-auto mt-[65px] lg:mt-[90px] grid place-items-center">
        <section className="flex flex-col items-center">
          <h1 className="text-3xl font-serif text-slate-600 mb-2">
            Funded properties
          </h1>
          <p className="w-auto md:w-[700px] text-sm md:text-base mx-5 md:mx-0 text-center mb-7 text-slate-600 leading-snug">
            With over 20 years of experience leading major real estate companies
            in Dubai, we utilize our expertise and network to find properties
            with the greatest investment potential for you.
          </p>
          <section className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {propertiesConfig.apartment.slice(0, sliceFactor).map((i, j) => (
              <Card key={j} data={i} />
            ))}
          </section>
          <button
            onClick={() => navigate("/properties")}
            className="border mt-5 border-slate-300 hover:border-cyan-400 hover:bg-cyan-400 text-slate-700 hover:text-white px-3 pt-1 pb-1.5 rounded-md font-semibold duration-200"
          >
            View availabe properties
          </button>
        </section>
      </section>
    </>
  );
};

export default Slider;
