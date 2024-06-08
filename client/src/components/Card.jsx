import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LuPalmtree } from "react-icons/lu";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Card = ({ data, category }) => {
  const swiperRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <main className="group w-[350px] sm:w-[400px]">
      <main className="w-[350px] sm:w-[400px] h-[500px] shadow group-hover:-mt-2 duration-100 rounded-xl overflow-hidden cursor-default">
        <Swiper
          ref={swiperRef}
          loop={true}
          speed={500}
          slidesPerView={1}
          initialSlide={0}
          spaceBetween={0}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-[45%] mySwiper bg-slate-300"
        >
          {(
            (data?.imgArr?.length && data?.imgArr) ||
            Array(3).fill(
              "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg"
            )
          ).map((i, j) => (
            <SwiperSlide
              key={j}
              style={{ backgroundImage: `url(${i})` }}
              className="bg-cover"
            ></SwiperSlide>
          ))}
        </Swiper>
        <section className="relative w-full h-[60%] p-3 space-y-3 bg-white">
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
              <span className="text-xs">{data?.city || "City"}</span>
            </div>
            <div className="flex items-center space-x-1 border border-slate-300 rounded py-1 px-1.5">
              <LuPalmtree className="text-cyan-500" />
              <span className="text-xs">Holiday</span>
            </div>
          </div>
          <address>{`${data?.landmark || "Landmark"}, ${
            data?.city || "City"
          }`}</address>
          <div className="flex items-center justify-between bg-slate-100 rounded-md p-2.5">
            <p className="text-xs text-slate-500 font-semibold flex flex-col items-center -space-y-1.5">
              <span>Shares</span>
              <span className="text-lg text-cyan-500 mr-1 font-normal">
                {new Intl.NumberFormat("en").format(data?.totalShares)}
              </span>
            </p>
            <p className="border border-slate-300 h-7"></p>
            <p className="text-xs text-slate-500 font-semibold flex flex-col items-center -space-y-1.5">
              <span>Price</span>
              <span className="text-lg text-cyan-500 ml-1 font-normal">
                {new Intl.NumberFormat("en-in", { notation: "compact" }).format(
                  data?.perSharePrice
                )}
                <span className="text-xs">/share</span>
              </span>
            </p>
            <p className="border border-slate-300 h-7"></p>
            {data?.availableShares > 0 ? (
              <p className="text-xs text-slate-500 font-semibold flex flex-col items-center -space-y-1.5">
                <span>Available</span>
                <span className="text-lg text-cyan-500 ml-1 font-normal">
                  {new Intl.NumberFormat("en").format(data?.availableShares)}
                </span>
              </p>
            ) : (
              <p className="text-xs text-slate-500 font-semibold flex flex-col items-center">
                <span>Available</span>
                <span className="text-sm text-red-500 font-normal">
                  Out Of Stock
                </span>
              </p>
            )}
          </div>

          <div className="bg-slate-100 rounded-md p-2.5 space-y-2.5">
            <p className="text-sm flex items-center justify-between text-slate-500">
              <span className="">Area</span>
              <span className="text-slate-700">
                {new Intl.NumberFormat("en").format(data?.area)}
                <span className="text-xs">sqft</span>
              </span>
            </p>
            <p className="text-sm flex items-center justify-between text-slate-500">
              <span className="">Carpet area</span>
              <span className="text-slate-700">
                {new Intl.NumberFormat("en").format(data?.carpetArea)}
                <span className="text-xs">sqft</span>
              </span>
            </p>
            <p className="text-sm flex items-center justify-between text-slate-500">
              <span className="">Posted on</span>
              <span className="text-slate-700">
                {data?.postedOn || "--/--/--"}
              </span>
            </p>
          </div>
          <button
            disabled={data?.availableShares ? false : true}
            onClick={() => {
              pathname.includes("land-parcel")
                ? navigate(
                    `/categories/real-estate/land-parcel/${category}/${data._id}`
                  )
                : navigate(`/categories/real-estate/${category}/${data._id}`);
            }}
            className="absolute -top-1 right-2 bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 rounded-md px-3 py-1 text-white disabled:cursor-not-allowed text-sm"
          >
            View
          </button>
        </section>
      </main>
    </main>
  );
};

export default Card;
