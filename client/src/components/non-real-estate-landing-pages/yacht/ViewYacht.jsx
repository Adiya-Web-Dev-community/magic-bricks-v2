import { useEffect, useState } from "react";
import axios from "../../../helper/axios";
import {
  BsArrowRight,
  BsCheck2Circle,
  BsPatchCheck,
  BsGear,
  BsTag,
} from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const amenities = [
  "Cannabis",
  "Cosmic",
  "Marijuana",
  "Media",
  "Mix",
  "Music",
  "Production",
  "Recording",
  "Streaming",
  "Weed",
];

const ViewYacht = ({ id }) => {
  const [viewMore, setViewMore] = useState(false);
  const [property, setProperty] = useState([]);
  const getPropertyData = async () => {
    try {
      const res = await axios.get(`/property-data/${id}`);
      console.log(res);
      setProperty(res.data.propertyData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPropertyData();
  }, []);

  return (
    <main className="grid grid-cols-1 xl:grid-cols-5 px-5 md:px-20 font-montserrat text-slate-600">
      <main className="col-span-2 h-auto xl:h-[calc(100vh-64px)] flex items-center static xl:sticky top-[64px] mt-10 xl:mt-0">
        <section className="w-full mr-0 xl:mr-10 space-y-10 border border-cyan-100 px-5 md:px-10 py-5 rounded-lg bg-cyan-50">
          <div className="text-sm">
            <p>The yacht named</p>
            <p>
              <span className="text-lg text-cyan-500">
                {property?.model || "---"}
              </span>{" "}
              is for sale
            </p>
          </div>
          <div className="flex flex-col space-y-2.5">
            <button className="bg-cyan-100 flex items-center justify-between px-5 py-2.5 rounded-md">
              <span>Buy now</span>
              <span className="text-sm">
                ₹
                {new Intl.NumberFormat("en-in", {
                  notation: "compact",
                }).format(property?.totalShares * property?.perSharePrice)}
              </span>
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white py-2.5 rounded-md">
              <span>Add to cart</span>
              <BsArrowRight className="ml-2.5" />
            </button>
            <button className="flex items-center justify-center bg-slate-900 text-white py-2.5 rounded-md">
              <span>Inquire</span>
              <BsArrowRight className="ml-2.5" />
            </button>
          </div>
          <div className="space-y-2.5">
            <p>What you get?</p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-cyan-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Professionally crafted design
              </span>
            </p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-cyan-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Expert curated premium design
              </span>
            </p>
            <p className="flex items-center">
              <BsCheck2Circle className="text-cyan-500" />
              <span className="text-xs md:text-sm ml-2.5">
                Guaranteed transfer or your money back
              </span>
            </p>
          </div>
        </section>
      </main>

      <main className="col-span-3">
        <main className="ml-0 xl:ml-10 my-10 space-y-10">
          <section className="space-y-2.5">
            <div className="w-full h-[calc(50vh-64px)] bg-cyan-50 rounded-xl overflow-hidden border border-cyan-100">
              <Swiper
                loop={true}
                speed={500}
                slidesPerView={1}
                initialSlide={0}
                spaceBetween={0}
                modules={[Navigation]}
                navigation={true}
                className="w-full h-full"
              >
                {Array(3)
                  .fill(
                    "https://images.unsplash.com/photo-1599257559270-eeccb1f266df?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                  .map((i, j) => (
                    <SwiperSlide
                      key={j}
                      style={{ backgroundImage: `url(${i})` }}
                      className="bg-cover bg-center"
                    ></SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <p className="text-sm">
              <span className="text-cyan-500 text-base">
                {property?.model || "---"}
              </span>{" "}
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptate eos aperiam quis odit impedit similique quaerat?
              Accusamus fugiat modi id alias ex enim corrupti voluptas?
              Similique in rerum consequatur a, ipsam, nulla animi excepturi
              quibusdam voluptates magnam odio voluptatem cum. Omnis
              necessitatibus magnam autem facere tempora id accusamus
              repellendus.
            </p>
          </section>
          <section className="space-y-2.5">
            <p className="flex items-center space-x-1.5">
              <BsGear />
              <span>Technical details</span>
            </p>
            <p className="relative text-sm">
              <span>Length</span>
              <span className="absolute left-32 capitalize">
                {property?.length || "---"} {property?.length ? "meters" : ""}
              </span>
            </p>
            <p className="relative text-sm">
              <span>Engine type</span>
              <span className="absolute left-32 capitalize">
                {property?.engineType || "---"}
              </span>
            </p>
            <p className="relative text-sm">
              <span>Engine hours</span>
              <span className="absolute left-32 capitalize">
                {property?.engineHours || "---"}
              </span>
            </p>
            <p className="relative text-sm">
              <span>Fuel type</span>
              <span className="absolute left-32 capitalize">
                {property?.fuelType || "---"}
              </span>
            </p>
            <p className="relative text-sm">
              <span>Fuel capacity</span>
              <span className="absolute left-32 capitalize">
                {property?.fuelCapacity || "---"}{" "}
                {property?.length ? "gallons" : ""}
              </span>
            </p>
            {viewMore ? (
              <p
                onClick={() => setViewMore(false)}
                className="relative text-sm flex items-center text-blue-500 cursor-pointer"
              >
                <span>Hide more</span>
                <MdKeyboardArrowDown className="absolute left-[70px] mt-[3px] -rotate-180" />
              </p>
            ) : (
              <p
                onClick={() => setViewMore(true)}
                className="relative text-sm flex items-center text-blue-500 cursor-pointer"
              >
                <span>View more</span>
                <MdKeyboardArrowDown className="absolute left-[70px] mt-[3px]" />
              </p>
            )}
            {viewMore && (
              <>
                <p className="relative text-sm">
                  <span>Water capacity</span>
                  <span className="absolute left-32 capitalize">
                    {property?.waterCapacity || "---"}
                  </span>
                </p>
                <p className="relative text-sm">
                  <span>Number of cabins</span>
                  <span className="absolute left-32 capitalize">
                    {property?.numberOfCabins || "---"}
                  </span>
                </p>
              </>
            )}
          </section>
          <section className="space-y-2.5">
            <p className="flex items-center space-x-1.5">
              <BsPatchCheck />
              <span>Financials</span>
            </p>
            <p className="relative text-sm">
              <span>Total shares</span>
              <span className="absolute left-32 capitalize">1750</span>
            </p>
            <p className="relative text-sm">
              <span>Available shares</span>
              <span className="absolute left-32 capitalize">925</span>
            </p>
            <p className="relative text-sm">
              <span>Price per share</span>
              <span className="absolute left-32 capitalize">
                {"₹"}
                {new Intl.NumberFormat("en-in", {
                  notation: "compact",
                }).format(150000)}
              </span>
            </p>
          </section>
          <section>
            <p className="flex items-center space-x-1.5">
              <BsTag />
              <span>Amenities</span>
            </p>
            <div className="text-sm flex flex-wrap">
              {amenities.map((i, j) => (
                <span
                  key={j}
                  className="px-2.5 pt-1 pb-[5px] mr-2.5 mt-2.5 rounded-md bg-cyan-50 border border-cyan-100"
                >
                  {i}
                </span>
              ))}
            </div>
          </section>
        </main>
      </main>
    </main>
  );
};

export default ViewYacht;
